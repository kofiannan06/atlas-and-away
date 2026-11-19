const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const script = path.join(__dirname, "../assets/js/currency.js");
const currency = fs.existsSync(script) ? require(script) : {};
const now = Date.UTC(2026, 10, 18, 12);

// Deliberately artificial rates: these fixtures are calculation examples, not quotes.
function response(ageHours = 1) {
    const updated = Math.floor(now / 1000) - ageHours * 3600;
    return {
        result: "success",
        base_code: "USD",
        time_last_update_unix: updated,
        time_next_update_unix: updated + 86400,
        rates: { USD: 1, EUR: 0.8, MUR: 40, JPY: 100 }
    };
}

function storage(value) {
    return {
        getItem() { return value; },
        setItem(key, next) { value = next; }
    };
}

test("converts a cross-currency amount using the table's USD base", () => {
    assert.equal(typeof currency.convertAmount, "function", "Currency conversion is not implemented yet");
    const table = currency.validateResponse(response(), now);
    assert.equal(currency.convertAmount(10, "EUR", "MUR", table), 500);
    assert.equal(currency.convertAmount(40, "MUR", "USD", table), 1);
});

test("rejects invalid amounts and unavailable currencies", () => {
    const table = currency.validateResponse(response(), now);
    for (const amount of [-1, 0, NaN, Infinity, 1000000001]) {
        assert.throws(() => currency.convertAmount(amount, "USD", "MUR", table));
    }
    assert.throws(() => currency.convertAmount(10, "XYZ", "MUR", table), /currency/i);
});

test("rejects malformed rates, an incorrect base and future timestamps", () => {
    for (const changes of [
        { result: "error" },
        { base_code: "EUR" },
        { rates: { USD: 1, MUR: 0 } },
        { rates: { USD: 2, MUR: 40 } },
        { time_last_update_unix: now / 1000 + 86400 }
    ]) {
        assert.throws(() => currency.validateResponse({ ...response(), ...changes }, now));
    }
});

test("uses a fresh cached response without another network request", async () => {
    let requests = 0;
    const store = currency.createRateStore({
        storage: storage(JSON.stringify(response())),
        now: () => now,
        fetchRates: async () => { requests++; return response(); }
    });
    const result = await store.load();
    assert.equal(requests, 0);
    assert.equal(result.stale, false);
    assert.equal(currency.convertAmount(10, "USD", "MUR", result.table), 400);
});

test("still converts when browser storage reads and writes are blocked", async () => {
    let requests = 0;
    const blocked = {
        getItem() { throw new Error("blocked"); },
        setItem() { throw new Error("quota"); }
    };
    const store = currency.createRateStore({ storage: blocked, now: () => now, fetchRates: async () => { requests++; return response(); } });
    assert.equal((await store.load()).stale, false);
    assert.equal((await store.load()).stale, false);
    assert.equal(requests, 1);
});

test("labels expired saved rates when the refresh fails", async () => {
    const store = currency.createRateStore({
        storage: storage(JSON.stringify(response(48))),
        now: () => now,
        fetchRates: async () => { throw new Error("offline"); }
    });
    const result = await store.load();
    assert.equal(result.stale, true);
    assert.equal(result.table.updatedAt, now - 48 * 3600000);
});

test("does not fall back to saved rates older than seven days", async () => {
    const store = currency.createRateStore({
        storage: storage(JSON.stringify(response(192))),
        now: () => now,
        fetchRates: async () => { throw new Error("offline"); }
    });
    await assert.rejects(store.load(), /unavailable/i);
});

test("recovers from damaged cache and shares simultaneous requests", async () => {
    let requests = 0;
    let complete;
    const pending = new Promise((resolve) => { complete = resolve; });
    const store = currency.createRateStore({
        storage: storage("{broken"),
        now: () => now,
        fetchRates: () => { requests++; return pending; }
    });
    const first = store.load();
    const second = store.load();
    complete(response());
    assert.equal((await first).stale, false);
    assert.equal((await second).stale, false);
    assert.equal(requests, 1);
});

test("rejects expired data returned as a fresh network response", async () => {
    const store = currency.createRateStore({ storage: null, now: () => now, fetchRates: async () => response(48) });
    await assert.rejects(store.load(), /unavailable/i);
});
