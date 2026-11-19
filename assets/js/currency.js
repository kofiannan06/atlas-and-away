"use strict";

// Rates share a USD base, so one reference table serves every country and currency.
(() => {
    const cacheKey = "atlas-away:exchange-rates:v1";
    const maximumAge = 7 * 24 * 60 * 60 * 1000;
    const endpoint = "https://open.er-api.com/v6/latest/USD";

    function validateResponse(response, now) {
        if (!response || response.result !== "success" || response.base_code !== "USD") {
            throw new Error("Invalid reference-rate response.");
        }

        const updatedAt = response.time_last_update_unix * 1000;
        const nextUpdate = response.time_next_update_unix * 1000;

        if (!Number.isSafeInteger(updatedAt) || !Number.isSafeInteger(nextUpdate) ||
            updatedAt <= 0 || updatedAt > now + 300000 || nextUpdate <= updatedAt ||
            nextUpdate - updatedAt > maximumAge) {
            throw new Error("Invalid reference-rate dates.");
        }

        if (!response.rates || typeof response.rates !== "object" || Array.isArray(response.rates)) {
            throw new Error("Reference rates are missing.");
        }

        const rates = Object.create(null);

        for (const [code, rate] of Object.entries(response.rates)) {
            if (!/^[A-Z]{3}$/.test(code) || typeof rate !== "number" || !Number.isFinite(rate) || rate <= 0) {
                throw new Error("Invalid currency in reference table.");
            }

            rates[code] = rate;
        }

        if (rates.USD !== 1) {
            throw new Error("Reference rates have an incorrect base.");
        }

        return { rates, updatedAt, nextUpdate };
    }

    function convertAmount(amount, from, to, table) {
        if (!Number.isFinite(amount) || amount < 0.01 || amount > 1000000000) {
            throw new Error("Enter an amount between 0.01 and 1,000,000,000.");
        }

        if (!table.rates[from] || !table.rates[to]) {
            throw new Error("This currency is unavailable in the reference data.");
        }

        const result = amount / table.rates[from] * table.rates[to];

        if (!Number.isFinite(result)) {
            throw new Error("This amount is too large to convert.");
        }

        return result;
    }

    function createRateStore({ fetchRates, storage, now = Date.now }) {
        let memory = null;
        let inFlight = null;

        function readCache() {
            let saved = null;

            try {
                saved = JSON.parse(storage ? storage.getItem(cacheKey) : null);
            } catch (error) {
                // Invalid JSON or blocked storage must not prevent a fresh request.
            }

            let latest = null;

            for (const payload of [memory, saved]) {
                try {
                    const table = validateResponse(payload, now());

                    if (!latest || table.updatedAt > latest.updatedAt) {
                        latest = table;
                    }
                } catch (error) {
                    // Ignore incomplete or damaged saved data.
                }
            }

            return latest;
        }

        async function refresh(cached) {
            try {
                const payload = await fetchRates();
                const table = validateResponse(payload, now());

                if (table.nextUpdate <= now()) {
                    throw new Error("The provider returned expired reference rates.");
                }

                memory = payload;

                try {
                    if (storage) {
                        storage.setItem(cacheKey, JSON.stringify(payload));
                    }
                } catch (error) {
                    // The in-memory copy still works when persistent writes fail.
                }

                return { table, stale: false };
            } catch (error) {
                if (cached && now() - cached.updatedAt <= maximumAge) {
                    return { table: cached, stale: true };
                }

                throw new Error("Exchange rates are unavailable. Please try again later.");
            }
        }

        function load() {
            const cached = readCache();

            if (cached && cached.nextUpdate > now()) {
                return Promise.resolve({ table: cached, stale: false });
            }

            if (!inFlight) {
                inFlight = refresh(cached).finally(() => {
                    inFlight = null;
                });
            }

            return inFlight;
        }

        return { load };
    }

    // Node's built-in test runner can check the calculation and data handling directly.
    if (typeof module !== "undefined" && module.exports) {
        module.exports = { validateResponse, convertAmount, createRateStore };
        return;
    }

    const form = document.getElementById("currency-form");

    if (!form) {
        return;
    }

    const result = document.getElementById("currency-result");
    const status = document.getElementById("currency-status");
    const rateNote = document.getElementById("currency-rate-note");
    const button = document.getElementById("convert-currency");
    const localCurrency = form.dataset.localCurrency;
    const locale = document.documentElement.lang || "en";
    let requestId = 0;
    let browserStorage = null;

    try {
        browserStorage = window.localStorage;
    } catch (error) {
        // The converter can operate without any persistent storage.
    }

    async function fetchRates() {
        const controller = new AbortController();
        const timeout = window.setTimeout(() => controller.abort(), 10000);

        try {
            const response = await fetch(endpoint, { signal: controller.signal });

            if (!response.ok) {
                throw new Error("Rate provider did not respond successfully.");
            }

            return await response.json();
        } finally {
            window.clearTimeout(timeout);
        }
    }

    const store = createRateStore({ fetchRates, storage: browserStorage });
    button.disabled = false;

    function money(amount, code) {
        return new Intl.NumberFormat(locale, {
            style: "currency",
            currency: code,
            currencyDisplay: "code"
        }).format(amount);
    }

    function clearResult() {
        requestId += 1;
        result.hidden = true;
        result.textContent = "";
        rateNote.textContent = "";
        status.textContent = "";
    }

    form.addEventListener("input", clearResult);
    form.addEventListener("invalid", () => {
        clearResult();
        status.textContent = "Enter an amount between 0.01 and 1,000,000,000.";
    }, true);

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        clearResult();
        const thisRequest = requestId;
        const amount = Number(form.elements.amount.value);
        const from = form.elements.from.value;
        button.disabled = true;
        button.textContent = "Loading rates…";
        form.setAttribute("aria-busy", "true");

        try {
            // No exchange-rate request is needed when both currencies are identical.
            if (from === localCurrency) {
                const table = { rates: { [from]: 1 } };
                convertAmount(amount, from, localCurrency, table);
                result.textContent = money(amount, from) + " = " + money(amount, localCurrency);
                result.hidden = false;
                rateNote.textContent = "Both amounts use the same currency. No exchange rate is needed.";
                return;
            }

            status.textContent = "Loading reference exchange rates…";
            const reference = await store.load();

            // A visitor may edit a field while a request is running. Discard that old result.
            if (thisRequest !== requestId) {
                status.textContent = "Details changed. Select Convert amount to use your new entries.";
                return;
            }

            const converted = convertAmount(amount, from, localCurrency, reference.table);
            const date = new Intl.DateTimeFormat(locale, {
                dateStyle: "medium",
                timeZone: "UTC"
            }).format(reference.table.updatedAt);

            result.textContent = money(amount, from) + " ≈ " + money(converted, localCurrency);
            result.hidden = false;
            rateNote.textContent = "Reference rates updated " + date + " (UTC).";
            status.textContent = reference.stale
                ? "Using saved rates because the refresh failed. This estimate may be out of date."
                : "Reference estimate. Your hotel or payment provider sets the final rate and any fees.";
        } catch (error) {
            if (thisRequest === requestId) {
                status.textContent = error.message;
            }
        } finally {
            button.disabled = false;
            button.textContent = "Convert amount";
            form.setAttribute("aria-busy", "false");
        }
    });
})();
