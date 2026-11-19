# First development stage — The homepage

The first reference implementation is the Atlas & Away homepage. Use its comments and this guide to understand and adapt the code for your own assignment.

## Files to study

- `index.html` contains the semantic page structure, map links, introduction, search form, Mauritius feature, country cards, and footer.
- `assets/css/style.css` contains the shared typography, page widths, layouts, link states, responsive rules, and reduced-motion styles.
- `assets/js/home.js` controls the mobile menu and the optional scroll-reveal effect.
- `assets/js/home-motion.js` controls the country slideshow and the homepage sections that slide over one another.
- `assets/images/world/world-map.svg` contains the locally stored map geometry.
- `assets/data/image-credits.json` includes the new world-map source record alongside the photograph and country-map credits.

## Preview in VS Code

Open the `formative-two` folder. From its terminal, run the following command.

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/index.html` in your browser. Press `Ctrl+C` in the terminal when you finish previewing.

## Understand the HTML

The `header` introduces the site and contains its main `nav`. The `main` element identifies the page's primary content. Each `section` groups related content and has an accessible name. The page's `h1` introduces the travel guide, and lower-level headings organize its sections.

The world map is an external SVG image with seven ordinary HTML links positioned above it on large screens. Each link leads to the corresponding continent file. On a phone, the links appear beneath the map in the normal page layout.

The Mauritius image uses `figure` and `figcaption` because the photograph has a visible location caption. The three reasons to visit use a list because they are related items.

The search form uses a visible `label`, a `type="search"` input, and the GET method. GET places the search text in a URL such as `explore.html?q=Cameroon`. The Explore directory now reads that query and filters its country cards.

Each country card uses a single link around its image and text. This gives a keyboard user one focus stop per card.

## Understand the CSS

Variables in `:root` hold shared colors and fonts. Change one value to update the corresponding styles throughout the page.

Flexbox aligns the header navigation and search controls. Grid creates the two-column welcome and Mauritius sections and the country-card rows.

Media queries change those layouts at tablet and phone widths. The homepage country strip shows four cards on a wide screen, two on a tablet, and one card with a glimpse of the next on a phone. CSS Grid's `grid-auto-flow: column` and `grid-auto-columns` create the horizontal strip; `overflow-x: auto` and scroll snapping preserve native swipes. The separate Explore directory uses three columns on desktop, two on tablet, and one on a phone.

Image frames use `object-fit: cover` to keep a consistent shape. The country covers now use visually selected landmarks, coastlines and landscapes. Their selection is recorded by `mainBanner` in the destination data. The old off-centre Cameroon crop was removed after its cover changed to Lobé Falls. Source image files remain uncropped.

The `:focus-visible` rule draws a visible outline for keyboard navigation. The skip link becomes visible when focused. Reduced-motion styles remove smooth scrolling and shorten transitions when a visitor requests less movement.

## Understand the JavaScript

`setMenuOpen()` updates both the menu's visible state and its `aria-expanded` attribute. The click handler calls this function to open or close the menu. Escape closes an open phone menu and returns focus to its button. Changing the screen width resets the menu state.

The scroll-reveal function checks for reduced motion and `IntersectionObserver` support. It observes elements below the first viewport, reveals each once, and stops observing it. Initial content remains visible. The HTML navigation is also visible when the script is disabled.

The destination slideshow contains all 31 existing country links and reuses their credited cover photographs. It advances one card every 4.5 seconds while visible. Pause/Play, Previous and Next buttons provide manual control; the focused strip also accepts Left, Right, Home and End keys. Hover and keyboard focus temporarily stop autoplay. Manual arrows, swipes and horizontal wheel browsing leave it paused until Play is pressed. A hidden browser tab also stops its timer. Without JavaScript the strip remains scrollable and every link works.

On screens wider than 680px, the Mauritius feature, country slideshow and continent directory use `position: sticky`, increasing stacking order and opaque backgrounds to slide over the preceding section. A `ResizeObserver` updates each section's top offset, allowing a tall section to scroll fully before the next one covers it. Keyboard focus restores ordinary document flow so links stay accessible. Phones and reduced-motion preferences use ordinary page scrolling; reduced motion also switches off autoplay and smooth slide transitions.

## Development status

The homepage is now connected to the Explore directory, all seven continent pages, all 31 country guides, About, and Contact. The new visitor features are explained in `docs/project-guide.md`.

The current featured destination is Mauritius, following the proposed default in the project prompt. The creator name is Ebenezer Kofi Annan and the contact email is profannan712@gmail.com. About includes the supplied portrait, verified portfolio and professional-profile links, and a bio adapted from the supplied portfolio and CV.

## Sources and AI assistance

- The local photograph paths are recorded in `assets/data/image-credits.json` with individual sources, creators, and licenses.
- The world map uses public-domain Natural Earth land outlines distributed as `world-atlas@2.0.2`. Its source record includes the dataset URL and the Natural Earth terms-of-use page.
- Fonts are Inter and Instrument Serif, loaded through Google Fonts with local system fallbacks.
- ChatGPT in Codex prepared this commented reference homepage, stylesheet, script, map projection, and explanatory guide.
- The initiating request was `start building it`, following the expanded specification saved in `docs/website-prompt.md`.
- The 19 November motion update follows the request to add more countries, make the section slide automatically, and make scrolling slide over like the creator's portfolio. The portfolio was inspected as a visual reference; no source code or new media was copied from it.
- Include this AI assistance and the specification prompt in the assignment's sources document. Develop your own final code and be ready to explain the elements and styles you use.
