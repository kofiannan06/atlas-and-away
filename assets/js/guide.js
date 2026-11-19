"use strict";

(() => {
    const destinationId = document.body.dataset.destination;
    const status = document.getElementById("guide-status");
    const backLink = document.getElementById("directory-return");
    const parameters = new URLSearchParams(window.location.search);
    const returnParameters = new URLSearchParams();

    // Reconstruct a local return link from filter parameters, avoiding arbitrary return URLs.
    ["q", "continent", "interest", "sort", "saved"].forEach((name) => {
        if (parameters.has(name)) {
            returnParameters.set(name, parameters.get(name));
        }
    });

    if (backLink && returnParameters.size) {
        backLink.search = returnParameters.toString();
    }

    // A manual-copy field remains available when clipboard permissions are unavailable.
    document.getElementById("share-guide").addEventListener("click", async () => {
        const url = new URL(window.location.href);
        url.search = "";
        url.hash = "";

        try {
            await navigator.clipboard.writeText(url.href);
            status.textContent = "Guide link copied.";
            document.getElementById("share-fallback").hidden = true;
        } catch (error) {
            const fallback = document.getElementById("share-fallback");
            const field = document.getElementById("share-url");
            fallback.hidden = false;
            field.value = url.href;
            field.focus();
            field.select();
            status.textContent = "Select and copy the guide link below.";
        }
    });

    // Native dialog provides modal focus containment and Escape support.
    const dialog = document.getElementById("gallery-dialog");
    const galleryLinks = Array.from(document.querySelectorAll("[data-lightbox]"));
    const galleryImage = document.getElementById("lightbox-image");
    const galleryCaption = document.getElementById("lightbox-caption");
    const galleryCounter = document.getElementById("lightbox-count");
    const gallerySource = document.getElementById("lightbox-source");
    const galleryLicense = document.getElementById("lightbox-license");
    let currentPhoto = 0;
    let triggeringLink = null;

    function showPhoto(index) {
        currentPhoto = (index + galleryLinks.length) % galleryLinks.length;
        const link = galleryLinks[currentPhoto];
        galleryImage.src = link.href;
        galleryImage.alt = link.querySelector("img").alt;
        galleryCaption.textContent = link.dataset.caption;
        galleryCounter.textContent = (currentPhoto + 1) + " of " + galleryLinks.length;
        gallerySource.href = link.dataset.source;
        gallerySource.textContent = link.dataset.creator;
        galleryLicense.href = link.dataset.licenseUrl;
        galleryLicense.textContent = link.dataset.license;
    }

    galleryLinks.forEach((link, index) => {
        link.addEventListener("click", (event) => {
            // The ordinary image link is the fallback for browsers without modal dialogs.
            if (typeof dialog.showModal !== "function") {
                return;
            }

            event.preventDefault();
            triggeringLink = link;
            showPhoto(index);
            dialog.showModal();
            document.body.classList.add("dialog-open");
        });
    });

    document.getElementById("lightbox-close").addEventListener("click", () => dialog.close());
    document.getElementById("lightbox-previous").addEventListener("click", () => showPhoto(currentPhoto - 1));
    document.getElementById("lightbox-next").addEventListener("click", () => showPhoto(currentPhoto + 1));

    dialog.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
            event.preventDefault();
            showPhoto(currentPhoto + 1);
        }

        if (event.key === "ArrowLeft") {
            event.preventDefault();
            showPhoto(currentPhoto - 1);
        }
    });

    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });

    dialog.addEventListener("close", () => {
        document.body.classList.remove("dialog-open");

        if (triggeringLink) {
            triggeringLink.focus();
        }
    });

    // Checklists are stored per destination, separate from the saved-destination list.
    const checklistInputs = Array.from(document.querySelectorAll("[data-checklist-item]"));
    const checklistProgress = document.getElementById("checklist-progress");
    const completed = new Set(window.TravelStorage.checklist(destinationId));

    function updateChecklistProgress() {
        const selected = checklistInputs.filter((input) => input.checked);
        checklistProgress.textContent = selected.length + " of " + checklistInputs.length + " preparations complete";
        return selected.map((input) => input.value);
    }

    checklistInputs.forEach((input) => {
        input.checked = completed.has(input.value);
        input.addEventListener("change", () => {
            const saved = window.TravelStorage.saveChecklist(destinationId, updateChecklistProgress());

            if (!saved) {
                status.textContent = "Checklist updated for this visit. Browser storage is unavailable.";
            }
        });
    });
    updateChecklistProgress();

    // Open the itinerary for printing, then restore the reader's chosen details state.
    const itineraryDetails = document.getElementById("itinerary-details");
    let itineraryWasOpen = true;

    document.getElementById("print-itinerary").addEventListener("click", () => {
        document.body.classList.add("print-itinerary");
        window.print();
    });

    window.addEventListener("beforeprint", () => {
        itineraryWasOpen = itineraryDetails.open;
        itineraryDetails.open = true;
    });

    window.addEventListener("afterprint", () => {
        itineraryDetails.open = itineraryWasOpen;
        document.body.classList.remove("print-itinerary");
    });
})();
