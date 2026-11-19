# Hotels and Currency Implementation Plan

> For agentic workers: implement task by task using the executing-plans workflow in the existing local checkout. Research is delegated; website edits remain with the main implementer.

**Goal:** Add two official hotel links and clear local currency information to every country guide, with an on-demand currency converter.

**Architecture:** Static HTML retains the new content. A shared currency script requests one USD-based reference table on demand, converts between selected and local currencies, and caches until the provider's next update. Property research is retained as JSON. Antarctica uses expedition links with operator-quoted currencies.

**Tech stack:** Existing HTML, CSS, vanilla JavaScript, JSON and ExchangeRate-API open endpoint.

**Spec:** `docs/hotels-currency-proposal.md`, including the user's approved official-link approach.

## Constraints

- Work in the existing project with four-space indentation and useful comments.
- Every country must have two verified official property links; no aggregator links or made-up room prices.
- Keep hotel cards readable without JavaScript. Do not present destination scenery as hotel photography.
- Display currency name and three-letter code; a converter result must carry its source date.
- Handle unavailable, malformed, expired and blocked-storage rate data accurately.
- Keep booking/payment completion on the external hotel's site.
- No new framework, publishing, GitHub push or unrelated redesign.

## Review focus

- Numeric input: reject negative, zero, non-finite and excessive amounts without showing a stale result.
- Network failure: clear the pending state and show a retryable message; retain local currency facts.
- Old rates: label saved data with its date and refresh status; never call an expired quote current.
- New tabs: use explicit new-tab text, `noopener noreferrer`, HTTPS and the verified property destination.
- Repeated conversion: avoid parallel requests and result races when visitors edit fields mid-request.

## Task 1: Hotel research and static guide content

- [x] Merge the three research JSON files into `assets/data/hotels.json`; validate 31 country keys and two HTTPS property records each.
- [x] Add Hotels and Currency anchors, hotel sections and currency forms to all 31 country guides; add expedition accommodation to Antarctica.
- [x] Add shared styles to `assets/css/pages.css` for the cards, currency panel and forms.
- [x] Audit country coverage, label associations, duplicate IDs, local assets and fragments.

## Task 2: Currency behaviour

- [x] Write focused behaviour checks for cross-currency calculation, invalid/unsupported rates, blocked cache, API failure and expired cache fallback; observe failure before implementation.
- [x] Create `assets/js/currency.js` to validate/cache reference responses and handle the converter's form states.
- [x] Run the behaviour checks and JavaScript syntax checks.
- [x] In the browser, verify a successful conversion, date/source feedback, validation and responsive layout.

## Task 3: Review and documentation

- [x] Request a read-only whole-change review and resolve important findings.
- [x] Update README, learning guide, verification notes and source-PDF references/AI prompt log.
- [x] Regenerate the PDF draft and render representative changed pages for visual inspection.
- [x] Keep a local preview and a screenshot of the finished hotel/currency feature for the handoff.

## Execution notes

Ruling: preserve the existing non-Git checkout and local-only scope. No worktree or commit is needed for this task because there is no repository metadata and the user is editing this exact project.

Ruling: keep automated checks focused on converter behaviour and data/path integrity. Static hotel text does not need implementation-mirroring tests.

Completed: 62 hotel links in 31 country guides, two Antarctic expedition links, 31 currency panels/converters, nine passing behaviour tests, a clean read-only review, successful browser conversions and a 73-page updated sources PDF draft. No deployment or reservation was performed.
