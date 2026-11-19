# Destination guides and visitor features

The approved specification is `docs/website-prompt.md`. The request to build all the other countries authorizes this full implementation in the existing local project.

## Implementation

- [x] Extend the existing styles and navigation across the site.
- [x] Write the searchable Explore directory with shareable filters and sorting, plus six continent directories linking to filtered search.
- [x] Write all 31 country guides and the five-stop Antarctica guide using the existing local photographs, maps, phrases, and researched descriptions.
- [x] Add saved destinations, accessible photo viewing, copy links, printable itineraries, and per-destination checklists with graceful browser-storage handling.
- [x] Finish About and the demo contact form with the supplied email address; clearly identify the missing personal photo and social links.
- [x] Verify page links, image paths, directory state, storage behavior, lightbox keyboard handling, form feedback, mobile layouts, and the local preview.
- [x] Prepare a sources PDF draft and a learning guide with a walkthrough outline.

## File responsibilities

The HTML pages contain the readable page content. `style.css` supplies shared foundations and the homepage. `pages.css` supplies the new page layouts and print rules. `home.js` supplies the existing shared navigation and motion. `storage.js` handles browser storage and save buttons. `explore.js` filters existing directory cards. `guide.js` handles galleries, sharing, printing, and checklists. `contact.js` handles demo-form feedback.

Country facts, short descriptions, and research links are saved in `assets/data/guide-content.json`. Existing destination and image-credit data retain their current roles.

## Decisions

- Use the current HTML, CSS, and vanilla JavaScript stack and the existing country URLs.
- Render country content into HTML so guides remain readable without JavaScript.
- Use URL query parameters for directory filters and return links.
- Use a native dialog for the lightbox and native details elements for itineraries and FAQs.
- Use the supplied name and email. A personal photograph and social-profile URLs are pending.
- Document AI-assisted work and distinguish the demo form's behavior accurately.
- Use the local checkout. Publishing and repository changes are separate user actions.
