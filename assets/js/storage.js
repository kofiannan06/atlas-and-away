"use strict";

// A small in-memory fallback keeps controls useful when browser storage is blocked.
(() => {
    const savedKey = "atlas-away:saved:v1";
    const memory = new Map();
    const unsavedKeys = new Set();
    let persistent = true;

    function readValue(key, fallback) {
        let rawValue;

        // A failed write must take precedence over an older value still on disk.
        if (unsavedKeys.has(key)) {
            return memory.get(key) ?? fallback;
        }

        try {
            rawValue = window.localStorage.getItem(key);
        } catch (error) {
            persistent = false;
            return memory.get(key) ?? fallback;
        }

        if (rawValue === null) {
            memory.delete(key);
            return fallback;
        }

        try {
            const value = JSON.parse(rawValue);
            memory.set(key, value);
            return value;
        } catch (error) {
            // An old or damaged value starts fresh and can be repaired on the next save.
            return fallback;
        }
    }

    function writeValue(key, value) {
        memory.set(key, value);

        try {
            window.localStorage.setItem(key, JSON.stringify(value));
            unsavedKeys.delete(key);
            persistent = true;
        } catch (error) {
            unsavedKeys.add(key);
            persistent = false;
        }

        return persistent;
    }

    function savedIds() {
        const value = readValue(savedKey, []);

        if (!Array.isArray(value)) {
            return [];
        }

        return [...new Set(value.filter((id) => typeof id === "string" && /^[a-z-]+$/.test(id)))];
    }

    function toggleSaved(id) {
        const saved = new Set(savedIds());
        const isSaved = !saved.has(id);

        if (isSaved) {
            saved.add(id);
        } else {
            saved.delete(id);
        }

        writeValue(savedKey, [...saved]);
        return { isSaved, persistent };
    }

    function checklist(id) {
        const value = readValue("atlas-away:checklist:" + id, []);
        const validItems = ["tourism", "hours", "map", "itinerary"];
        return Array.isArray(value) ? value.filter((item) => validItems.includes(item)) : [];
    }

    function saveChecklist(id, values) {
        return writeValue("atlas-away:checklist:" + id, values);
    }

    function updateSaveButtons() {
        const saved = new Set(savedIds());

        document.querySelectorAll("[data-save-destination]").forEach((button) => {
            const isSaved = saved.has(button.dataset.saveDestination);
            const name = button.dataset.destinationName;
            button.setAttribute("aria-pressed", String(isSaved));
            button.setAttribute("aria-label", (isSaved ? "Remove " : "Save ") + name + (isSaved ? " from saved destinations" : " to saved destinations"));
            button.querySelector(".save-label").textContent = isSaved ? "Saved" : "Save";
            button.querySelector(".save-icon").textContent = isSaved ? "♥" : "♡";
        });
    }

    function announceSave(message) {
        const status = document.getElementById("save-status");

        if (status) {
            status.textContent = message;
        }
    }

    document.addEventListener("click", (event) => {
        const button = event.target.closest("[data-save-destination]");

        if (!button) {
            return;
        }

        const result = toggleSaved(button.dataset.saveDestination);
        let message = button.dataset.destinationName + (result.isSaved ? " saved." : " removed from saved destinations.");

        if (!result.persistent) {
            message += " This change is available for this visit. Browser storage is unavailable.";
        }

        updateSaveButtons();
        announceSave(message);
        document.dispatchEvent(new CustomEvent("atlas:saved-change"));
    });

    // Other open tabs can change the same list. Re-read it before updating the page.
    window.addEventListener("storage", (event) => {
        if (event.key === savedKey || event.key === null) {
            updateSaveButtons();
            document.dispatchEvent(new CustomEvent("atlas:saved-change"));
        }
    });

    window.TravelStorage = { savedIds, checklist, saveChecklist };
    updateSaveButtons();
})();
