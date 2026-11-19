# Travel and Tourism Website — Expanded Project Prompt

## Project purpose and assignment

Help me design and develop my travel and tourism website so visitors can discover attractions, explore local culture, and find activities across the world.

Read the assignment requirements and inspect my existing project before proposing changes. Identify its technology, page structure, destination data, local image collection, and existing functionality. The project currently has HTML, CSS, and JavaScript starter files, destination data, and local photographs. Check their current contents before editing.

Use the existing website name if one has been implemented. Otherwise, use **Atlas & Away**, the working name from our design. Use HTML5, CSS3, vanilla JavaScript, the existing JSON data, and local images. Keep the work understandable for a basic website assignment and compatible with static hosting.

The current scope is **31 countries across six continents, plus one Antarctica expedition guide with five stops**. Include all seven continents in the navigation and world map.

| Continent | Destinations |
| --- | --- |
| Africa | Cameroon, Mauritius, Tanzania, Ghana, Kenya, South Africa |
| Asia | Japan, Thailand, Vietnam, India, Indonesia |
| Europe | France, Italy, Spain, Portugal, Greece |
| North America | United States, Canada, Mexico, Costa Rica, Jamaica |
| South America | Brazil, Peru, Argentina, Chile, Colombia |
| Oceania | Australia, New Zealand, Fiji, Samoa, Vanuatu |
| Antarctica | Neko Harbour, Cuverville Island, Half Moon Island, Goudier Island, Whalers Bay |

Feature a chosen destination on the homepage with a brief introduction and at least three specific reasons to visit. Preserve an existing featured destination. If one is needed, propose Mauritius and identify that choice in the handoff. Flag the multi-country interpretation for lecturer confirmation if approval is not documented in the project.

## Guided development and code quality

My assignment requires me to write and understand the code myself. AI-generated code may be used as guidance or reference. Help me develop the site in small stages through focused examples, explanations, and reviews of the code I write. Keep a record of AI assistance, including the tool and prompt, for the sources document.

Make every example neat, readable, and consistently formatted line by line.

- Use four spaces for indentation, descriptive names, and blank lines between logical sections.
- Put each HTML element and its nested content on clearly indented lines. Break long attribute lists across lines where that improves readability.
- Write each CSS declaration on its own line. Group styles by shared foundations, navigation, page sections, components, and responsive adjustments.
- Write JavaScript as small, named functions with one clear purpose. Use readable event handlers and explicit state updates.
- Add short comments before meaningful HTML sections, CSS groups, and JavaScript functions or logic that needs explanation. Explain purpose, accessibility choices, data flow, and surprising behavior.
- Comment non-obvious lines individually where helpful. Keep comments focused so they remain useful when the code changes.
- Use reusable CSS classes and existing project logic when suitable.
- Keep page structure in HTML, styling in CSS, and behavior in JavaScript. Connect the files using relative paths that also work when hosted under a GitHub Pages project URL.
- Use shared styling for repeated elements such as headers, buttons, cards, forms, and footers.
- Give a short explanation after each example describing the tags, selectors, and JavaScript concepts used, and how I can test the result.

## Existing folder structure

Follow the existing organization and add files only when needed by an agreed feature.

```text
formative-two/
├── index.html
├── explore.html
├── about.html
├── contact.html
├── continents/
│   ├── africa.html
│   ├── antarctica.html
│   ├── asia.html
│   ├── europe.html
│   ├── north-america.html
│   ├── oceania.html
│   └── south-america.html
├── countries/
│   └── one HTML guide for each of the 31 countries
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── contact.js and scripts required by agreed features
│   ├── data/
│   │   ├── destinations.json
│   │   └── image-credits.json
│   └── images/
│       └── existing continent, country, and category folders
└── docs/
    └── this prompt and submission documentation
```

Use the local image files already collected. Check the actual file paths and source records before selecting photographs. Report missing assets or information accurately.

## Visual design

- Use white `#FFFFFF` backgrounds, near-black `#111111` text, light gray `#F5F5F5` sections, and subtle gray borders. Keep destination photos in full color.
- Use Inter for navigation and body text and large Instrument Serif headings, with suitable fallback fonts. Keep body text at least 16px.
- Use generous whitespace, restrained corner radii, and consistent image proportions.
- Use solid black primary buttons with white text and outlined secondary buttons.
- Make country discovery and guide navigation easy on mobile and desktop.
- Choose wide, visually clear hero images and check that their subjects remain visible on mobile crops.
- Include text only when it helps visitors understand, navigate, or act.

## Home — index.html

Use this page order.

1. Header and navigation.
2. Interactive world map directly below the navbar.
3. Welcoming introduction and destination search.
4. Featured destination with a large photograph and three specific reasons to visit.
5. Continent discovery and a curated selection of country cards.
6. A clear link to Explore all destinations and a relevant footer.

### Header and navigation

- Show the website name and links to Home, Explore, About, and Contact.
- Indicate the active page with `aria-current`.
- Provide a compact mobile menu with an accessible toggle, accurate expanded state, and keyboard support.
- Include a skip link so keyboard users can reach the main content quickly.

### Interactive world map

- Make the world map the first major visual below the navbar.
- Show Africa, Asia, Europe, North America, South America, Oceania, and Antarctica with accurate geographic outlines.
- Use a local SVG based on verified, reusable geographic data. Record its source, creator or data publisher, license, and any modifications.
- Label each continent clearly. Keep Antarctica visible and accessible.
- Make each continent a clickable link to its continent page. Give keyboard focus and pointer hover equally clear feedback.
- Show country counts from the current destination data. Africa has six countries, and the other five country groups have five each. Label Antarctica with its five expedition stops.
- Provide a visible list of continent links beside or below the map so the same destinations are easy to choose on a small screen.
- Include an accessible map title and description. Essential navigation should work with JavaScript disabled.
- On phones, resize the map and reflow its supporting links while keeping labels legible. Preserve ordinary page scrolling and pinch gestures.

### Welcome, search, and featured destinations

- Include a short welcoming headline and introduction explaining what visitors can discover.
- Provide a prominent, labeled destination search. Submitting a query opens Explore with matching results.
- Add continent filters and curated country cards. Each card includes a local photo, country name, continent, and a short descriptive line.
- Give each card one clear, keyboard-accessible guide link.
- Include relevant footer information, such as the creator name and links to About and Contact, using verified contact details.

## Explore and continent pages

- Provide a searchable directory of all 31 countries and one Antarctica expedition entry.
- Support continent and travel-interest filters. Suggested interests are nature, beaches, heritage, food, and city experiences. Assign tags based on the guide content.
- Combine the search and filters consistently. Show the result count and active selections.
- Offer alphabetical sorting by destination name.
- Show a clear empty state with a reset button when nothing matches.
- Store the search, continent, interest, and sort order in URL query parameters. Restore the view after a guide visit, page reload, or browser Back action.
- Use three card columns on desktop, two on tablet, and one on narrow phones.
- Give each continent page a short introduction, banner image, breadcrumb links, and links to the guides available in that region.
- Generate displayed destination counts from the data so adding a country keeps the directory accurate.

## Country guides

Use a consistent layout across the 31 country pages.

- Start with a wide local hero photo, country name, short introduction, breadcrumbs, and a link back to the directory.
- Show useful quick facts such as capital, currency, languages, and best-known experiences. Verify factual content and record its sources.
- Provide section links for Attractions, Culture, Food, Activities, Nightlife, Map, Itinerary, and Phrases. Keep them easy to reach while scrolling and offset anchor jumps for the sticky header.
- Include at least three distinct, named attractions, each with a photo and short description. Use five where the existing collection supports it.
- Explain local culture or traditions with specific, accurately identified examples.
- Include named local dishes or drinks with photographs and short explanations.
- Describe at least two activities visitors can enjoy and identify the relevant places.
- Show identifiable evening experiences, such as night markets, live music, cultural performances, or waterfronts, with accurate captions.
- Display the existing country map and identify at least three featured places. Keep a readable place list next to the map and offer a link to open the map at full size.
- Include a realistic one-day itinerary within a single city or region, using morning, afternoon, and evening stops with approximate times and existing image paths.
- Keep useful phrases selectable as text, identify the language, and show English meanings. Include pronunciation guidance when it is verified and helpful.
- Include at least one relevant external tourism resource for each guide.
- Add a short FAQ using native `<details>` and `<summary>` elements for practical questions supported by researched sources.

### Photo gallery

- Use consistent image frames and concise captions.
- Allow visitors to open gallery photos in an accessible lightbox.
- Provide previous and next controls, a visible close button, caption text, Escape to close, contained keyboard focus while open, and focus restoration to the triggering image.
- Keep full-size image links available as a fallback.

## Antarctica expedition guide

- Use the five existing stops and the existing map with verified site coordinates.
- Give each stop a lead photograph, a short description, and its own group of site photographs.
- Explain the sample expedition sequence as an overview. The operating itinerary depends on the expedition provider and local conditions.
- Link to the relevant Antarctic Treaty visitor site guidelines.
- Use the expedition overview and site information for its guide sections.

## Additional visitor features

Introduce these after the main navigation, guides, map, and contact form work.

### Saved destinations

- Add a clearly labeled Save destination control on country cards and guides.
- Let visitors review and remove saved items from a Saved destinations view within Explore.
- Store the saved country identifiers in `localStorage` and restore them on later visits.
- If browser storage is unavailable or contains outdated values, keep the page usable and show accurate feedback.

### Share a destination

- Add a Copy guide link action that copies the current guide URL.
- Show a short confirmation after copying succeeds.
- If clipboard access fails, display a selectable URL that visitors can copy themselves.

### Printable itinerary

- Add a Print itinerary action and print styles that present the destination name, stops, approximate times, and relevant source information clearly.
- Let visitors choose an expandable itinerary using native `<details>` and `<summary>` elements. Use this as the assignment's additional feature.
- Provide a walkthrough talking point explaining why those elements were chosen.

### Simple trip checklist

- Include a small checklist linked to the itinerary, with items such as reading the tourism resource, checking opening hours, and saving the route.
- Use native labeled checkboxes and clear completed states.
- Save progress per destination in `localStorage` using the same graceful error handling as saved destinations.

## About

- Include a brief bio for Ebenezer Kofi Annan, using existing project copy or verified details.
- Highlight technical and soft skills that I can explain and demonstrate.
- Include a profile photo, email address, and relevant social links.
- Flag missing personal details or assets for me to supply.

## Contact

- Build a destination enquiry form with required name, email, and message fields.
- Add a destination selector populated from the current destination data and a short enquiry-type selector.
- Include an optional travel date to demonstrate another input type.
- Use visible labels, suitable length limits, appropriate input types, and accessible validation feedback.
- Show a clear status message immediately after a valid submission.
- If a working submission service exists, connect to it and confirm success after the service responds. If a service is absent, explain in the interface that the form is a demo and that the message was not sent.
- Retain entered values when validation or submission fails so visitors can correct the problem.

## Motion, accessibility, and performance

- On first entering the viewport, fade content in with 12–20px of upward movement over 400–600ms. Stagger cards slightly within each visible row. Keep content visible and usable if JavaScript fails.
- On card hover and keyboard focus, gently scale the image inside its frame and reveal a small directional arrow. Use 150–250ms feedback for buttons and navigation, and short transitions for the mobile menu and lightbox.
- Use transform and opacity for animations. Respect `prefers-reduced-motion` throughout, including immediate anchor scrolling for users who enable it.
- Use semantic HTML, a sensible heading hierarchy, visible focus indicators, descriptive alt text, accessible controls, and comfortable touch targets.
- Optimize local photos, lazy-load gallery images, and reserve image space to prevent layout shifts. Load the main hero image promptly.
- Keep image credit and license records associated with local files.
- Use readable empty, error, loading, and success states where applicable.
- Verify that every visible button, filter, search field, and link works.

## Submission documentation

- Prepare a separate sources and credits PDF for the assignment. The PDF is a submission deliverable in the documentation folder.
- Credit externally sourced text, photographs, maps, fonts, other media, and borrowed HTML or CSS snippets. Record sources, creators, licenses, and modifications where applicable.
- Clearly identify AI-assisted content and include the tool and the actual prompts used.
- Include my GitHub repository URL. Retrieve it from the project if available and flag it if missing.
- Include my walkthrough video URL if available. Otherwise, use a clearly marked placeholder and provide a recording outline of five minutes or less.
- The walkthrough should demonstrate the main features and explain the HTML elements, CSS layout choices, responsive behavior, map links, and JavaScript interactions actually used.
- Prepare repository changes for review. Publish or push when I authorize that action.
- The final assessed commit must be made before the assignment deadline. Use the deadline from my assignment brief.

## Verification and handoff

Check the site at 375px, 768px, and 1440px. Verify the following through the normal user journeys.

- Desktop and mobile navigation, active-page indicators, and skip links.
- All seven world-map continent links, visible labels, keyboard operation, and mobile fallback links.
- Correct country counts, including Cameroon in Africa and five Antarctic expedition stops.
- Search, combined filters, alphabetical sorting, empty-state recovery, restored directory state, and valid guide links.
- Image loading, descriptive captions, map marker lists, and gallery lightbox keyboard behavior.
- Saving and removing destinations, restored saved state, and behavior when storage is unavailable.
- Sharing confirmation and the manual-copy fallback.
- The one-day itinerary, printable output, and trip-checklist behavior.
- Required form fields, email validation, submission feedback, and retained values after errors.
- Reduced motion, visible keyboard focus, readable layouts, and appropriate image loading.

Run existing project checks or a build if available. Keep verification appropriate to the site's actual technology and features.

Finish each development stage with the exact local preview command, the files involved, the behavior I should see, and a short explanation of the HTML, CSS, or JavaScript I need to understand. Identify anything incomplete or unverified, including missing personal details, submission links, or source information.
