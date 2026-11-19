# Study and personalise the complete website

## What is implemented

The site has 42 HTML pages: Home, Explore, About, Contact, seven continent pages and 31 country guides. Africa has six countries because Cameroon was added. Each other country group has five. Antarctica is a continent with five expedition stops, rather than five countries.

Every country guide includes five attraction photographs and descriptions, cultural examples, four food photographs and descriptions, three activities, two evening photographs, a country map, a local one-day itinerary, a phrase table and tourism references. Each Antarctic stop has three photographs, its own visitor guideline and a place in a flexible expedition route.

Every country now also has two verified official hotel links, a prominent local-currency panel and a converter. Antarctica has expedition accommodation links and an explanation of operator-quoted currencies.

The world map stays immediately below the homepage navigation. Its ordinary links work without JavaScript.

## HTML concepts to understand

- `header`, `nav`, `main` and `footer` identify the main parts of each page. The skip link lets keyboard users reach the content directly.
- `article` groups a destination card or an Antarctic stop. `section` groups a named part of a guide.
- `figure` and `figcaption` connect photographs with their captions and attribution.
- `dl`, `dt` and `dd` organise country facts. Phrase tables use `caption`, `th` and `scope` to explain row and column relationships.
- `details` and `summary` provide an expandable itinerary and FAQ without requiring custom JavaScript.
- `dialog` provides modal focus containment for the photograph viewer. Escape closes it; the script restores focus to the image link that opened it.
- Form labels connect to controls using `for` and `id`. Required name, email, destination and message fields use native constraints. Optional date and number inputs demonstrate different input types.

## CSS concepts to understand

`style.css` provides the shared design variables, typography, navigation and homepage. `pages.css` adds the new page layouts. Each declaration is written on its own line.

Grid makes the directory, facts and photograph layouts. Flexbox aligns navigation and control rows. Media queries change the directory from three columns to two and then one. The site respects reduced-motion preferences and keeps visible keyboard focus.

`object-fit: cover` fills most photographic frames. The Samoa CC BY-ND photograph uses `object-fit: contain` to retain its full frame. The lightbox always shows the full image. Local source files have not been replaced or newly cropped by this implementation.

Print rules hide navigation and controls. The dedicated itinerary button prints the itinerary with the destination name, stops, approximate times, attribution and visitor-resource information.

## JavaScript concepts to understand

`home.js` controls the mobile menu and optional homepage scroll reveals. Every page uses the same navigation IDs.

`storage.js` reads and writes saved destination identifiers and per-country checklist values in local storage. It validates stored values and catches blocked-storage and quota errors. A memory fallback keeps changes available for the current page visit if persistence fails. No account is created.

`explore.js` filters the existing HTML cards. Search words must all match the country name, continent, tagline, tags or attraction names. Continent, interest and saved-only filters combine. Sorting uses destination names. `URLSearchParams` records the filter state; guide links carry it to their return link. Unchanged cards stay in place so Save does not lose keyboard focus.

`guide.js` connects photo links to a native dialog, provides previous/next controls, copies a clean guide URL, and shows a selectable URL if clipboard access fails. It saves checklist progress by destination. The print handlers open the itinerary and restore its previous open/closed state afterward.

`contact.js` enables the demo submit button, validates trimmed name/message values and displays an accurate result. Entries remain in the form. No form submission service exists; visitors can use the supplied email link to send an enquiry.

`currency.js` validates an ExchangeRate-API reference table and converts using `amount / fromRate * localRate`. The table uses USD as a common base. Rates load only when a visitor requests a conversion, then stay cached until the provider's next update. Every result shows its date. If refreshing fails, saved rates up to seven days old are clearly labelled; older data is rejected. Invalid data and unavailable storage do not break the guide. Editing a field clears the old result and prevents an in-flight response from displaying a quote for outdated entries.

Hotel and operator links use `target="_blank"` and `rel="noopener noreferrer"`, with text explaining that a new tab opens. The property website handles booking details and payments. Hotels are displayed as text cards; destination scenery is not presented as a hotel photograph.

## Editing the site

Edit a page’s HTML to change its visible text. Edit the shared CSS to change the design. The JSON files are research/media records; changing JSON alone does not regenerate the HTML. Update matching records when changing facts or images so documentation stays consistent.

Adding a country means adding its HTML guide, local images, records, an Explore card, its continent card and the displayed counts. Reuse an existing country page as a structure you understand and adapt it yourself. Keep relative links so the site can work below a GitHub Pages project URL.

To remove all saved data for this project, use your browser’s site-data controls for the preview origin. Storage is specific to an origin: localhost, 127.0.0.1 and a published domain have separate lists.

## Walkthrough outline: under five minutes

1. **0:00–0:45:** Introduce the website, world map and Mauritius spotlight. Explain `header`, `nav`, `main` and the linked SVG.
2. **0:45–1:30:** Search Explore, combine a continent and interest filter, save a destination, then open its guide and return. Explain query parameters and local storage.
3. **1:30–2:45:** Show attractions, food, culture, activities, a gallery dialog and the map. Explain `figure`, `figcaption`, `section`, Grid and image fitting.
4. **2:45–3:30:** Show a hotel link, the local currency and a conversion, then briefly expand the itinerary and checklist. Explain external links, the rate date, `details` and `summary`.
5. **3:30–4:15:** Show About and Contact, demonstrate a required-field error, then the truthful demo result. Explain labels, input types and validation.
6. **4:15–4:55:** Resize to a phone, show the menu and one-column cards, and open a source disclosure. Explain media queries, focus states, attribution and your own code changes.

Your portrait, portfolio, LinkedIn and GitHub profile links are included on About.

## Submission details still required

- The walkthrough recording URL. The project repository is https://github.com/kofiannan06/atlas-and-away.
- Your own review and adaptation of this AI-assisted reference work, as required by the assignment.

The source PDF is a draft until the missing walkthrough link is supplied. The separate image catalogue and credits webpage previously removed have not been recreated. Licence metadata remains in JSON and relevant guide disclosures.

## AI assistance log

Tool: ChatGPT through Codex. Work includes project architecture, reference HTML/CSS/JavaScript, researched destination summaries, documentation and map preparation. The photographs are third-party media credited individually; they were not AI-generated in this build.

Actual follow-up prompts include:

> add more features to this prompt and add a map on the landpage ..make the code neat line by line with comment

> start building it

> build for all the other countries and added extra features to it

> can we add a hotels they can book as an extra fees and knwo their currencies

> I recommend official hotel links so visitors can check current prices and availability. IN each country

> use the top beautifyul places images in each countries to replace thses ones to be beautiful

> use this as my profile pic

> can you let my picture be round

> add my port folio and use the info on my preotfollio to fill the about me https://kofi-annan.vercel.app/

> add more countries on thiis section and it can slide automatically ... moreover when we are scrolling we want it to slide over like the one i did for my portfolio ..

> GIVE ME a 7mins detailed demo walkthorugh on what i did ...to do a video and submit

The expanded specification used as context is preserved in `docs/website-prompt.md`. Earlier image collection and map work is documented in the media metadata. Review the complete conversation for any additional prompts used in your final submission.

## Country cover refresh - 19 November 2026

All 31 country covers were refreshed with clear, colourful destination views. The same selections appear in Explore, continent cards and country-guide banners; the four homepage country cards were also updated. The original Mauritius Le Morne spotlight photograph is retained.

Twenty-four selections reuse licensed attraction/activity images already in the project. Seven additional Wikimedia Commons photographs cover Kenya, France, India, Canada, Peru, Colombia and Fiji. They were visually inspected, resized as needed and converted to WebP without cropping the stored files. Their exact creators, source pages, licences and modifications are in `assets/data/image-credits.json` and the source PDF.

`mainBanner` in `assets/data/destinations.json` records the active cover. It can point to an existing attraction/activity photo; files stay in their original category folders. Captions and alt text were updated with the image references. The old photos remain available in the local collection.

The About profile photograph was supplied by Ebenezer Kofi Annan on 19 November 2026. The original JPEG is stored at `assets/images/profile/ebenezer-kofi-annan.jpg` and is framed using CSS. The original photographer was not specified.

## Creator bio and portfolio sources

The About bio, selected skills and project summaries were adapted from the creator's public portfolio at https://kofi-annan.vercel.app/ and the supplied document `Kofi Annan Ebenezer CV (2).pdf`, consulted on 19 November 2026. The portfolio provides the exact LinkedIn URL and both GitHub profiles. The supplied CV supports the education dates and community-experience details. The public portfolio and the email already supplied for this project agree on profannan712@gmail.com.

The creator's LinkedIn is https://www.linkedin.com/in/ebenezer-kofi-annan-256365359/. GitHub profiles are https://github.com/kofiannan06 and https://github.com/Ebenezer-Kofi-Annan. The travel-project repository is https://github.com/kofiannan06/atlas-and-away; this repository URL is the link required for submission.

## Homepage slideshow and section motion

The homepage now features all 31 existing countries in a horizontal photo strip. Previous/Next arrows, Pause/Play, keyboard controls and native swipe/trackpad scrolling complement the automatic 4.5-second slide interval. Country images and summaries reuse the Explore directory's retained material, so no additional media sources were introduced.

The creator's portfolio at https://kofi-annan.vercel.app/ was inspected as a visual reference for sections sliding over one another. The local implementation uses commented vanilla JavaScript, native horizontal scrolling, CSS scroll snapping and sticky sections. No portfolio code was copied. Autoplay pauses on hover/focus and when offscreen or in a hidden tab. Manual browsing pauses it until Play is selected. Reduced motion disables autoplay and section overlap; phone layouts also use ordinary vertical scrolling. See `docs/homepage-guide.md` for the tags, CSS and event handlers to understand and adapt.

## Walkthrough narration reference

ChatGPT through Codex prepared `docs/video-walkthrough.md` using the current project files. It includes a seven-minute rehearsal script and a complete shorter script targeting 4:55 because the supplied assignment limits the submitted recording to five minutes. The scripts identify what to show, explain actual HTML/CSS choices and acknowledge AI assistance. The student must adapt the narration to accurately reflect their contribution and understanding. No video was recorded, uploaded or linked by this preparation.
