# Verification record - 18 November 2026

## Static checks

- 42 HTML pages, including 31 country guides and seven continent pages.
- 843 image element references checked across pages.
- No missing local image/script/style/page paths, unresolved page fragments, duplicate IDs or unbalanced element stacks in the HTML audit.
- Each page has one `main` and one `h1`.
- All five JavaScript files pass Node syntax checks.
- A separate read-only code review checked the source files and independently audited local paths and fragments.

## Browser checks

- Search and continent filtering combine and update the result count and query string.
- Country/interest filtering shows six African food destinations.
- A–Z and Z–A sorting work; empty results provide a working reset control.
- Guide navigation carries directory parameters and its return link restores the filtered view.
- Saving a country updates its control; the guide reads the same saved state. Saved-only view and removal work.
- Save retains keyboard focus when a card remains visible. Removing the focused saved card moves focus to the result count.
- Checklist state persists after a guide reload.
- The gallery opens, advances, responds to arrow keys, closes with Escape and restores focus.
- Sharing copies a guide URL without directory filters or section fragments.
- Contact preselects a destination from the guide URL, rejects missing fields and displays truthful valid-submission feedback. Entered values remain in the form and are not added to the URL.
- Mobile menu opens and closes with matching `aria-expanded` state; Escape closes it.
- At 375px, 768px and 1440px, Explore uses one, two and three columns respectively, without page overflow. Country, Antarctica, About and Contact mobile layouts were also checked.
- Antarctica has five individual stop groups, each with three photographs.
- Browser console inspection found no script errors in the final check.

## Behaviour checks outside the browser

- Storage handlers were exercised with corrupted JSON, malformed IDs, blocked reads/writes and quota failure while old stored values remained. Save/remove and checklist sanitisation passed.
- Contact handlers were exercised with whitespace-only values and valid values; validation and retained values passed.
- Sharing was exercised with unavailable clipboard access; the manual-copy field becomes visible, focused and selected.
- Print handlers were exercised with an initially open and initially closed itinerary. They open it for printing, then restore its prior state and remove the print-only class.

Print CSS and the itinerary resource/attribution content were inspected. An actual printer or browser print-to-PDF output was not exercised. External tourism links were researched, but future availability and access arrangements remain controlled by those sites.

## Documentation

The sources PDF draft now has 74 pages and 617 media records, including the hotel/currency and country-cover updates. Cover, AI-assistance, research, media-attribution, Indic creator text, specification and final-page samples were rendered and visually inspected. The repository URL is https://github.com/kofiannan06/atlas-and-away; the video URL is pending.

## Remaining user-supplied items

- Walkthrough video URL.
- Review and personal adaptation of the AI-assisted learning reference before assessment.

Website hosting and recording the walkthrough are separate from the source repository setup. Earlier entries below describe verification before the GitHub repository was created.

## Hotels and currency update

- 31 country guides each contain two verified official property links, for 62 hotels in total. Antarctica has two official expedition links.
- Each guide's local-currency code and selector options match the retained data; hotel and currency section anchors, labels and local asset paths pass static review.
- Nine focused Node tests pass for cross-currency calculations, invalid amounts/rates, fresh and expired cache, blocked storage, network failure and simultaneous requests.
- An independent read-only review also exercised UI handlers in a VM: edited entries during an in-flight request, network failure reset, same-currency conversion and unavailable storage. No actionable issues were found.
- Browser checks confirmed a live USD-to-MUR conversion with a visible reference date; invalid input clears the prior result, and identical currencies need no reference request.
- A representative hotel link opened the correct official Labourdonnais property page in a new tab; its own booking control was visible. No reservation was submitted.
- Hotel cards and the converter reflow at 375px and 1440px without page overflow.
- Hotel source records are dated 18 November 2026. Future hotel availability, room prices, payment currencies and terms remain on each property's site.
- All 62 hotel reference URLs and both expedition reference URLs were verified as links in the updated PDF. Changed AI-assistance, hotel-reference and final-page samples were rendered and visually inspected.

## Country cover refresh - 19 November 2026

- Replaced the active cover for every country: 24 selected existing photos and seven additional licensed Wikimedia Commons photographs.
- Updated Explore, continent cards, six continent banners, 31 guide banners and four homepage cards. Preserved the Mauritius spotlight and existing gallery/booking features.
- Updated descriptive alt text and visible banner captions. Added the seven new creator/licence/source records to the retained media metadata and PDF.
- Audited all 42 HTML pages: no broken local paths, missing fragment targets, duplicate IDs or unbalanced structure. Each country retains two hotel cards and its currency form.
- Browser checks confirmed all six Africa covers and all five Europe covers load. Save/remove controls remained functional and returned to their starting state.
- At 375px, the directory uses one column without page overflow. The France banner loads with the intended 10% vertical focal position.
- Rendered the updated PDF's AI-assistance and new Kenya, France and Fiji credit samples. All seven new photograph-source links are present in the PDF.

## Profile photograph - 19 November 2026

- Added the user-supplied JPEG to `assets/images/profile/ebenezer-kofi-annan.jpg` and verified it is byte-for-byte identical to the supplied file (854 × 1281 pixels).
- Replaced the About initials placeholder with an actual image and descriptive alt text. CSS frames the face in a responsive circular container.
- Verified the image loads and the initials placeholder is absent. The original photograph remains unchanged.
- Updated the remaining personalisation notes: social links, repository URL and walkthrough URL are still pending.

## About biography and portfolio - 19 November 2026

- Read the public portfolio at https://kofi-annan.vercel.app/ and the user-supplied `Kofi Annan Ebenezer CV (2).pdf`.
- Adapted the biography, technical skills, education and community background from those sources. Added three selected projects with source-verified links.
- Added the portfolio to About and Contact, plus LinkedIn and both GitHub profile links to About. Kept the contact email already supplied for this project, which also matches the public portfolio.
- The travel project's own repository and walkthrough URLs are still pending; professional GitHub profile links do not replace the required repository link.
- About and Contact passed HTML structure, local-path, unique-ID and external-link attribute checks. The About page was checked in the browser at desktop width and 375px, with no horizontal overflow or console errors; its circular portrait remains 220 by 220 pixels.
- Regenerated the sources PDF (74 pages, 617 media records), verified the portfolio hyperlink, and visually inspected the cover and updated biography/AI-assistance pages.

## Homepage country slideshow and overlapping sections - 19 November 2026

- Expanded the homepage from four cards to all 31 existing countries, with links, descriptions, credited local images and descriptive alt text. The homepage passes structure, unique-ID, local-path and fragment checks.
- Browser checks confirmed automatic advancement, Pause/Play, Previous/Next, keyboard access to the last country, and looping back to the first. The first four cover photographs load, and the preview has no console errors.
- Desktop sections visibly slide over the previous section. Keyboard focus restores ordinary document flow. At 375px the layout has no horizontal page overflow, buttons remain at least 44px tall, and sections use ordinary vertical scrolling. The temporary viewport override was reset.
- A focused VM exercise of the actual motion script passed offscreen, hover, focus, hidden-tab, manual-pause, resume and initial/live reduced-motion scenarios. Reduced motion disables autoplay and the section overlap.
- JavaScript syntax checks and all nine existing currency tests pass. The fallback remains a native horizontally scrollable strip of ordinary guide links, with controls hidden until initialization.
- Updated the explanatory guides and recorded the exact prompt, AI tool and portfolio visual reference in the 74-page sources PDF. The changed PDF page was rendered and visually inspected; media records remain at 617 because existing images were reused.

## GitHub repository preparation - 19 November 2026

- Created the public repository https://github.com/kofiannan06/atlas-and-away under the requested account and configured the local `main` branch and remote.
- Added ignore rules for local secrets and temporary files, and text/binary attributes for consistent Git handling. The local upload review found no credential-pattern matches, secret-file names or files of 50 MiB or more.
- JavaScript syntax and all nine existing currency tests pass. The source PDF includes the actual repository hyperlink; its updated cover was rendered and visually inspected. The recording URL remains pending.

## Vercel production deployment - 19 November 2026

- Published https://atlas-and-away.vercel.app under the `atlas-and-away` project in `ebenezer-kofi-annans-projects`, using Vercel CLI 66.2.0. The production homepage opens publicly without sign-in.
- Browser verification covered Explore search/filtering (one Mauritius result), navigation to the Mauritius guide, a loaded country banner, two hotel cards, a live dated USD-to-MUR conversion, the loaded circular About portrait and portfolio link, and correct contact-demo feedback. Synthetic form entries were cleared after checking. No browser console errors were observed.
- The homepage world map loads, all 31 slideshow links are present, and the default desktop viewport has no horizontal overflow. A screenshot was retained for the handover.
- The CLI upload review confirmed that `.env.local`, `.vercel`, `.git` and test files are excluded. Local CLI settings and credentials are ignored by Git.
- This is a manual CLI deployment. GitHub pushes currently update the repository only; Vercel's Git connection belongs to the creator's other GitHub account. `docs/deployment.md` explains the update command.
- The updated 74-page source PDF includes working live-site and GitHub links. Its cover and hosting-credit page were rendered and visually inspected; the video URL remains pending.
