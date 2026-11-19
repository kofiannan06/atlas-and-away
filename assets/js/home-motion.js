"use strict";

// These enhancements use the existing HTML links and never require a library.
(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopLayout = window.matchMedia("(min-width: 681px)");

    function initializeDestinationCarousel() {
        const carousel = document.querySelector("[data-destination-carousel]");

        if (!carousel) {
            return;
        }

        const track = carousel.querySelector(".destination-track");
        const cards = Array.from(track.querySelectorAll(".destination-card"));
        const controls = carousel.querySelector(".carousel-controls");
        const previous = carousel.querySelector("[data-carousel-previous]");
        const next = carousel.querySelector("[data-carousel-next]");
        const playback = carousel.querySelector("[data-carousel-playback]");
        const counter = carousel.querySelector("[data-carousel-counter]");
        let timer = null;
        let isVisible = false;
        let isHovered = false;
        let isFocused = false;
        let isPaused = reducedMotion.matches;

        // Report the visible range without announcing every automatic movement.
        function updateCounter() {
            const left = track.scrollLeft;
            const right = left + track.clientWidth;
            const first = cards.findIndex((card) => card.offsetLeft + card.offsetWidth > left + 8);
            let last = first;

            cards.forEach((card, index) => {
                if (card.offsetLeft < right - 8) {
                    last = index;
                }
            });

            const format = (value) => String(value).padStart(2, "0");
            counter.textContent = `${format(first + 1)} — ${format(last + 1)} / ${cards.length}`;
        }

        function updatePlaybackButton() {
            playback.disabled = reducedMotion.matches;
            playback.textContent = reducedMotion.matches ? "Autoplay off" : isPaused ? "Play" : "Pause";
            playback.setAttribute("aria-label", reducedMotion.matches
                ? "Automatic sliding is off because you prefer reduced motion"
                : isPaused ? "Play automatic destination slideshow" : "Pause automatic destination slideshow");
        }

        // A single timer runs only while the section is visible and undisturbed.
        function scheduleSlide() {
            window.clearTimeout(timer);
            timer = null;

            if (isPaused || reducedMotion.matches || !isVisible || isHovered || isFocused || document.hidden) {
                return;
            }

            timer = window.setTimeout(() => {
                moveSlide(1);
                scheduleSlide();
            }, 4500);
        }

        function pauseSlideshow() {
            isPaused = true;
            updatePlaybackButton();
            scheduleSlide();
        }

        // Native scrolling preserves touch swipes, trackpads and keyboard access.
        function moveSlide(direction) {
            const maximum = track.scrollWidth - track.clientWidth;
            const atEnd = track.scrollLeft >= maximum - 2;
            const atStart = track.scrollLeft <= 2;
            const wraps = direction > 0 ? atEnd : atStart;
            let target;

            if (wraps) {
                target = direction > 0 ? 0 : maximum;
            } else if (direction > 0) {
                target = cards.find((card) => card.offsetLeft > track.scrollLeft + 8).offsetLeft;
            } else {
                target = cards.filter((card) => card.offsetLeft < track.scrollLeft - 8).pop().offsetLeft;
            }

            track.scrollTo({
                left: Math.min(maximum, target),
                behavior: reducedMotion.matches || wraps ? "auto" : "smooth"
            });
        }

        previous.addEventListener("click", () => {
            pauseSlideshow();
            moveSlide(-1);
        });

        next.addEventListener("click", () => {
            pauseSlideshow();
            moveSlide(1);
        });

        playback.addEventListener("click", () => {
            isPaused = !isPaused;
            updatePlaybackButton();
            scheduleSlide();
        });

        carousel.addEventListener("mouseenter", () => {
            isHovered = true;
            scheduleSlide();
        });

        carousel.addEventListener("mouseleave", () => {
            isHovered = false;
            scheduleSlide();
        });

        track.addEventListener("focusin", () => {
            isFocused = true;
            scheduleSlide();
        });

        track.addEventListener("focusout", (event) => {
            isFocused = track.contains(event.relatedTarget);
            scheduleSlide();
        });

        // Deliberate browsing stays paused until the visitor presses Play again.
        track.addEventListener("pointerdown", pauseSlideshow);
        track.addEventListener("wheel", (event) => {
            if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
                pauseSlideshow();
            }
        }, { passive: true });

        track.addEventListener("keydown", (event) => {
            if (event.target !== track || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
                return;
            }

            event.preventDefault();
            pauseSlideshow();

            if (event.key === "Home" || event.key === "End") {
                track.scrollTo({
                    left: event.key === "Home" ? 0 : track.scrollWidth,
                    behavior: reducedMotion.matches ? "auto" : "smooth"
                });
            } else {
                moveSlide(event.key === "ArrowRight" ? 1 : -1);
            }
        });

        track.addEventListener("scroll", updateCounter, { passive: true });
        window.addEventListener("resize", updateCounter);
        document.addEventListener("visibilitychange", scheduleSlide);
        reducedMotion.addEventListener("change", () => {
            if (reducedMotion.matches) {
                isPaused = true;
            }

            updatePlaybackButton();
            scheduleSlide();
        });

        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver((entries) => {
                isVisible = entries[0].isIntersecting;
                scheduleSlide();
            }, { threshold: 0.15 });

            observer.observe(track);
        }

        controls.hidden = false;
        updateCounter();
        updatePlaybackButton();
    }

    function initializeStackedSections() {
        const panels = Array.from(document.querySelectorAll(".home-panel"));
        const header = document.querySelector(".site-header");

        // Taller panels scroll fully before the following section covers them.
        function updatePanels() {
            const enabled = desktopLayout.matches && !reducedMotion.matches;
            document.documentElement.classList.toggle("home-panels-enabled", enabled);

            if (!enabled) {
                return;
            }

            panels.forEach((panel, index) => {
                panel.style.setProperty("--panel-order", index + 1);
                panel.style.setProperty("--panel-top", `${Math.min(header.offsetHeight, window.innerHeight - panel.offsetHeight)}px`);
            });
        }

        if ("ResizeObserver" in window) {
            const observer = new ResizeObserver(updatePanels);
            panels.forEach((panel) => observer.observe(panel));
            observer.observe(header);
        }

        window.addEventListener("resize", updatePanels);
        desktopLayout.addEventListener("change", updatePanels);
        reducedMotion.addEventListener("change", updatePanels);
        updatePanels();
    }

    initializeDestinationCarousel();
    initializeStackedSections();
})();
