"use strict";

(() => {
    const form = document.getElementById("enquiry-form");
    const errors = document.getElementById("form-errors");
    const status = document.getElementById("form-status");
    const destination = form.elements.destination;
    const requested = new URLSearchParams(window.location.search).get("destination");

    // Enable submission only when the demo handler can keep entries on this page.
    document.getElementById("submit-enquiry").disabled = false;

    if (Array.from(destination.options).some((option) => option.value === requested)) {
        destination.value = requested;
    }

    // Native browser constraints handle required fields and email formatting.
    form.addEventListener("invalid", () => {
        errors.textContent = "Please check the highlighted fields and complete the required information.";
        status.textContent = "";
    }, true);

    form.addEventListener("input", (event) => {
        event.target.setCustomValidity("");
        errors.textContent = "";
        status.textContent = "";
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = form.elements.name;
        const message = form.elements.message;

        name.setCustomValidity(name.value.trim().length >= 2 ? "" : "Please enter your name using at least two characters.");
        message.setCustomValidity(message.value.trim().length >= 10 ? "" : "Please write a message using at least ten characters.");

        if (!form.reportValidity()) {
            return;
        }

        errors.textContent = "";
        status.textContent = "Thanks, " + name.value.trim() + ". Your entries have been checked. This is a demo form, so your message has not been sent. To make an enquiry, email profannan712@gmail.com.";
    });
})();
