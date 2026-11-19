"use strict";

(() => {
    const form = document.getElementById("directory-filters");
    const grid = document.getElementById("directory-grid");
    const cards = Array.from(grid.querySelectorAll("[data-destination]"));
    const query = form.elements.q;
    const continent = form.elements.continent;
    const interest = form.elements.interest;
    const sort = form.elements.sort;
    const savedOnly = form.elements.saved;
    const count = document.getElementById("result-count");
    const emptyState = document.getElementById("empty-results");

    function normalize(text) {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
    }

    function selectKnownOption(select, value) {
        const options = Array.from(select.options).map((option) => option.value);
        select.value = options.includes(value) ? value : "";
    }

    // Read only known filter values, including when a visitor opens a shared URL.
    function restoreFilters() {
        const parameters = new URLSearchParams(window.location.search);
        query.value = (parameters.get("q") || "").slice(0, 80);
        selectKnownOption(continent, parameters.get("continent") || "");
        selectKnownOption(interest, parameters.get("interest") || "");
        sort.value = parameters.get("sort") === "za" ? "za" : "az";
        savedOnly.checked = parameters.get("saved") === "true";
    }

    function filterParameters() {
        const parameters = new URLSearchParams();

        if (query.value.trim()) {
            parameters.set("q", query.value.trim());
        }

        if (continent.value) {
            parameters.set("continent", continent.value);
        }

        if (interest.value) {
            parameters.set("interest", interest.value);
        }

        if (sort.value === "za") {
            parameters.set("sort", "za");
        }

        if (savedOnly.checked) {
            parameters.set("saved", "true");
        }

        return parameters;
    }

    function renderDirectory(updateUrl = true) {
        const saved = new Set(window.TravelStorage.savedIds());
        const terms = normalize(query.value).split(/\s+/).filter(Boolean);
        const parameters = filterParameters();
        const focusedElement = document.activeElement;
        let visibleCount = 0;
        let focusedCardHidden = false;

        cards.sort((first, second) => {
            const comparison = first.dataset.name.localeCompare(second.dataset.name);
            return sort.value === "za" ? -comparison : comparison;
        });

        cards.forEach((card, index) => {
            const searchText = normalize(card.dataset.search);
            const matchesQuery = terms.every((term) => searchText.includes(term));
            const matchesContinent = !continent.value || card.dataset.continent === continent.value;
            const matchesInterest = !interest.value || card.dataset.interests.split(" ").includes(interest.value);
            const matchesSaved = !savedOnly.checked || saved.has(card.dataset.destination);
            card.hidden = !(matchesQuery && matchesContinent && matchesInterest && matchesSaved);

            if (card.hidden && card.contains(focusedElement)) {
                focusedCardHidden = true;
            }

            if (!card.hidden) {
                visibleCount += 1;
            }

            // Carry the filter values to a guide so its back link restores the directory.
            const link = card.querySelector(".destination-card-link");
            const target = new URL(link.dataset.guideUrl, window.location.href);
            target.search = parameters.toString();
            link.href = target.href;

            // Leave unchanged cards in place so keyboard focus survives a Save click.
            if (grid.children[index] !== card) {
                grid.insertBefore(card, grid.children[index] || null);
            }
        });

        count.textContent = visibleCount + (visibleCount === 1 ? " destination" : " destinations");
        emptyState.hidden = visibleCount > 0;

        if (focusedCardHidden) {
            count.focus();
        }

        if (updateUrl) {
            const url = new URL(window.location.href);
            url.search = parameters.toString();
            window.history.replaceState(null, "", url);
        }
    }

    function resetFilters() {
        query.value = "";
        continent.value = "";
        interest.value = "";
        sort.value = "az";
        savedOnly.checked = false;
        renderDirectory();
        query.focus();
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        renderDirectory();
    });

    form.addEventListener("input", () => renderDirectory());
    form.addEventListener("change", () => renderDirectory());
    document.querySelectorAll("[data-reset-filters]").forEach((button) => {
        button.addEventListener("click", resetFilters);
    });
    document.addEventListener("atlas:saved-change", () => renderDirectory(false));
    window.addEventListener("pageshow", () => {
        restoreFilters();
        renderDirectory(false);
    });
    window.addEventListener("popstate", () => {
        restoreFilters();
        renderDirectory(false);
    });

    restoreFilters();
    renderDirectory();
})();
