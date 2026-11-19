"use strict";

// The header keeps its links visible until JavaScript enables the collapsible menu.
document.documentElement.classList.add("js-enabled");

const menuToggle = document.getElementById("menu-toggle");
const primaryNavigation = document.getElementById("primary-navigation");
const phoneLayout = window.matchMedia("(max-width: 680px)");

// Keep the visible menu and its screen-reader state synchronized.
function setMenuOpen(isOpen) {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    primaryNavigation.classList.toggle("is-open", isOpen);
    menuToggle.querySelector("span").textContent = isOpen ? "−" : "+";
}

function handleMenuToggle() {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
}

// Escape closes the menu and restores focus to its controlling button.
function handleMenuEscape(event) {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    if (event.key === "Escape" && isOpen && phoneLayout.matches) {
        setMenuOpen(false);
        menuToggle.focus();
    }
}

function handleNavigationClick(event) {
    if (event.target.closest("a") && phoneLayout.matches) {
        setMenuOpen(false);
    }
}

menuToggle.hidden = false;
menuToggle.addEventListener("click", handleMenuToggle);
primaryNavigation.addEventListener("click", handleNavigationClick);
document.addEventListener("keydown", handleMenuEscape);
phoneLayout.addEventListener("change", () => setMenuOpen(false));

// The page is readable without this enhancement or when reduced motion is enabled.
function initializeScrollReveal() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
        return;
    }

    const observer = new IntersectionObserver(revealEntries, {
        rootMargin: "0px 0px -24px 0px",
        threshold: 0.08
    });

    function revealEntries(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }

    document.querySelectorAll("[data-reveal]").forEach((element) => {
        // Leave the initial viewport visible so rendering never waits for an observer.
        if (element.getBoundingClientRect().top > window.innerHeight) {
            element.classList.add("will-reveal");
            observer.observe(element);
        }
    });

    reduceMotion.addEventListener("change", (event) => {
        if (event.matches) {
            observer.disconnect();
            document.querySelectorAll(".will-reveal").forEach((element) => {
                element.classList.add("is-visible");
            });
        }
    });
}

initializeScrollReveal();
