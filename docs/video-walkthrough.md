# Atlas & Away — Video walkthrough scripts

Your supplied brief limits the submission video to **five minutes maximum**. The seven-minute script below is a rehearsal/study version. Use the second script for the submitted recording, aiming for 4:55. These timings are targets; record a practice run and allow time for clicks and loading.

Use your own words and describe your contribution accurately. Only claim you reviewed, wrote or tested something if you actually did. The scripts describe the existing project and openly acknowledge documented AI assistance.

## Before recording

1. Open the live website at https://atlas-and-away.vercel.app, or start the local preview in VS Code: `python -m http.server 8000 --bind 127.0.0.1`.
2. Prepare tabs for Home, Explore, Mauritius, About, Contact and the sources PDF. Keep VS Code open with the Explorer tree visible.
3. Keep the browser at normal zoom. Hide unrelated tabs and notifications, and check your microphone.
4. Prepare demo form details: **Demo Visitor**, **demo@example.com**, **Mauritius**, and **I would like to explore the culture and attractions of Mauritius.** Do not use real visitor information.
5. Check the currency converter before recording. If fresh rates are unavailable, show its accurate status and explain the feature without inventing a result.
6. Clear only your test filters or saved selections as needed. Do not spend recording time visiting every country; demonstrate one guide thoroughly.
7. Your travel-project repository is https://github.com/kofiannan06/atlas-and-away and is included in the sources document. Keep the repository open for the recording; add the final video URL before submission.

# Seven-minute rehearsal version

## 0:00–0:30 | Introduce the project

**On screen:** Start at the top of the homepage, with the name, navigation and world map visible.

**Say:**

> Hello, my name is Ebenezer Kofi Annan, and this is Atlas & Away, my travel and tourism website. Its purpose is to help visitors discover attractions, local culture, food and activities, and prepare for a journey. The project includes 31 country guides across six inhabited continents, plus an Antarctica guide with five expedition stops. Antarctica is presented as a continent, rather than as a group of countries.

## 0:30–1:15 | Home and navigation

**On screen:** Point to the navigation and map. Scroll through the introduction, Mauritius spotlight and country slideshow. Briefly use Next and Pause.

**Say:**

> The homepage introduces the website and gives visitors clear starting points. The navigation connects Home, Explore, About and Contact, and the map links to all seven continent pages. Mauritius is the featured destination, with three reasons to visit: its coastline, inland nature and local food. Below that, this slideshow brings together all 31 countries. It advances automatically, and visitors can pause it, use the arrows or swipe. On desktop, sections slide over the previous section, inspired by my portfolio. The footer repeats useful links and identifies the creator.

## 1:15–1:55 | Explore and saved places

**On screen:** Open Explore. Select Africa, search for Mauritius, save its card, briefly select Saved destinations only, then open the guide.

**Say:**

> Explore helps visitors narrow down their options. They can search by country or attraction, filter by continent and interest, and sort the results alphabetically. Here I am finding Mauritius and saving it. Saved destinations use local storage, so the list belongs to this browser and does not require an account. The search and filter choices are also reflected in the URL. Each country card has a photograph, a short introduction and a link to its complete guide.

## 1:55–2:50 | Attractions, culture and experiences

**On screen:** In Mauritius, show three attraction cards, culture, food and activities. Open one gallery photograph, close it, then point to the country map and a tourism reference.

**Say:**

> This is the Mauritius guide. It goes beyond the required three attractions by including places such as Aapravasi Ghat, Seven Coloured Earths and Black River Gorges National Park, each with an image and description. The culture section introduces places and traditions such as the Central Market and Sega music. The food section includes dholl puri and other local dishes. Visitors can also discover activities at Blue Bay Marine Park, Le Pouce and Île aux Aigrettes. Photographs open in a gallery with navigation controls. The country map provides an overview, and external tourism references help visitors continue their research. The other country guides follow the same structure.

## 2:50–3:35 | Hotels, currency and planning extras

**On screen:** Show the two hotel cards and briefly open one official property link. Return, convert 100 USD into MUR, then open the itinerary and tick one checklist item.

**Say:**

> For trip planning, every country guide includes two official hotel links. These open the properties’ own websites, where visitors check current prices and availability. Atlas & Away does not process reservations or payments. The local-currency panel identifies the currency, and this converter requests dated reference rates. Here I can estimate what 100 US dollars represents in Mauritian rupees; the result is a reference, rather than a guaranteed bank quote. The expandable itinerary, useful phrases and saved travel checklist provide additional preparation tools.

## 3:35–4:00 | About the creator

**On screen:** Open About and point to the circular photo, bio, technical skills, community experience and professional links.

**Say:**

> The About page introduces me as a software engineering student and full-stack developer. It includes my education, technical skills, collaboration and community experience, and selected projects. My profile photograph uses a circular frame. Visitors can contact me by email or follow the links to my portfolio, LinkedIn and GitHub profiles. This gives the website a clear creator identity.

## 4:00–4:40 | Contact form and submission feedback

**On screen:** Open Contact. Submit it empty once. Then enter Demo Visitor, demo@example.com, Mauritius and a message of at least ten characters. Submit and show the result. Optional: point to the date and number inputs.

**Say:**

> The Contact page demonstrates an enquiry form. Name, email, destination and message are required, and the browser highlights missing or invalid entries. The form also includes optional travel details and different input types. Labels are connected to their controls, which improves usability and accessibility. After valid details are entered, JavaScript prevents a normal submission and displays feedback on the page. The message clearly explains that the entries were checked, but no enquiry was sent. An email link is provided for visitors who want to contact me directly.

## 4:40–6:20 | Explain HTML, CSS, JavaScript and file organisation

**On screen:** Switch to VS Code. Show the folder tree, index.html, contact.html, style.css, pages.css and the relevant JavaScript files. Use Find to jump to the named selectors and functions.

**Say:**

> The project uses HTML5 for structure, CSS for presentation and vanilla JavaScript for interaction. HTML pages are kept at the root or inside the continent and country folders. Stylesheets, scripts, data and images are organised separately inside assets, while documentation is stored in docs. Relative links help the pages work together when the project is hosted in a subfolder.

> For markup, header, nav, main and footer identify the major parts of each page. Sections group related content under headings. Figure and figcaption connect photographs with captions, while descriptive alt text explains meaningful images. Links navigate to pages; buttons perform actions. Details and summary create expandable content, and form labels use matching for and id attributes.

> In CSS, custom properties keep colours and fonts consistent. Grid creates the destination and photograph layouts, while Flexbox aligns navigation and controls. Object-fit maintains consistent image frames. Media queries adapt the columns and menu for smaller screens. Border-radius creates the round profile frame, and visible focus outlines support keyboard users.

> JavaScript handles filtering, saved places, slideshow controls, gallery interactions, currency requests and form feedback. For example, addEventListener connects a control to an action, and preventDefault lets the contact form display its demo result without navigating away.

## 6:20–7:00 | Responsive design, sources and close

**On screen:** Return to the browser and show a narrow window and mobile menu. Open the sources PDF. Show your own project repository if it has been created.

**Say:**

> On a smaller screen, the layouts adapt and the navigation becomes a menu. The website also respects reduced-motion preferences by switching off autoplay and overlapping sections. My source document records research references, photograph creators and licences, and AI assistance, including the tool and prompts used. I used ChatGPT through Codex during development, including for code, content and documentation. The submission will include my own repository link and this recording’s link. Atlas & Away brings destination discovery and practical planning together in a consistent travel website. Thank you.

# Five-minute submission version (target 4:55)

## 0:00–0:25 | Introduction

**On screen:** Show the homepage name, navigation and map.

**Say:**

> Hello, I’m Ebenezer Kofi Annan, and this is Atlas & Away, my travel and tourism website. It helps visitors discover attractions, culture, food and activities. There are 31 country guides across six inhabited continents and an Antarctica guide with five expedition stops, covering all seven continents.

## 0:25–0:55 | Homepage

**On screen:** Point to the map, three Mauritius reasons, slideshow and footer. Use Pause once.

**Say:**

> The homepage includes a welcome message, a linked world map and a Mauritius spotlight with three reasons to visit: the coast, nature and local food. The navigation connects all main pages. This country slideshow includes automatic movement, manual arrows and a pause control. Desktop sections slide over each other, and the footer provides useful links and creator information.

## 0:55–1:25 | Explore

**On screen:** Filter to Africa, search Mauritius, save its card and open it.

**Say:**

> Explore supports search, continent and interest filters, alphabetical sorting and saved destinations. Here I’m finding Mauritius and saving it. Local storage remembers saved places in this browser without an account. Each card links to a complete guide, and filter choices can be retained in the URL.

## 1:25–2:10 | Country guide

**On screen:** Show three attractions, culture, food, two activities, map and tourism link. Open and close one gallery photo.

**Say:**

> The Mauritius guide includes attractions such as Aapravasi Ghat, Seven Coloured Earths and Black River Gorges, with photographs and descriptions. Culture and cuisine sections introduce Sega music, market life and dishes such as dholl puri. Activities include exploring Blue Bay Marine Park and walking Le Pouce. A gallery enlarges photographs, while the map and external tourism references support further exploration. The same structure is used across the other country guides.

## 2:10–2:40 | Additional features

**On screen:** Show hotel links, one currency conversion, itinerary and checklist. Avoid opening several external tabs.

**Say:**

> Additional planning features include official hotel links, local-currency information, a reference-rate converter, useful phrases, an itinerary and a saved checklist. Bookings and payments happen on hotel websites. Conversion results show a reference date and are estimates rather than guaranteed exchange quotes. These features support the assignment’s additional-feature requirement.

## 2:40–3:00 | About

**On screen:** Show photo, bio, skills and portfolio link.

**Say:**

> About presents my biography, education, technical and soft skills, community experience and selected projects. It also includes my round profile photograph, email, portfolio, LinkedIn and GitHub links, so visitors can learn about and contact the creator.

## 3:00–3:30 | Contact

**On screen:** Submit empty once, then use prepared demo details and show the valid result.

**Say:**

> The Contact form uses required fields and several input types. Labels identify each control, and email validation checks the format. Submitting valid entries produces an immediate message. This is a demonstration form, so the feedback clearly states that no message was sent and provides my email for a real enquiry.

## 3:30–4:35 | Code and responsive design

**On screen:** Show the VS Code tree, semantic HTML, a form label, CSS Grid/Flexbox, a media query and a JavaScript event handler. Briefly show the narrow browser layout.

**Say:**

> The site uses HTML5, CSS and vanilla JavaScript. HTML pages, styles, scripts, images and documentation are organised into separate folders. Semantic tags such as header, nav, main, section and footer explain the page structure. Figure and figcaption describe photographs, and alt text supports accessibility. Form labels use matching for and id attributes.

> CSS variables keep colours and fonts consistent. Grid creates card layouts, Flexbox aligns navigation, and object-fit keeps image frames consistent. Media queries adapt the layout for phones, while border-radius creates the circular profile frame. Visible focus styles support keyboard navigation.

> JavaScript event listeners handle interactions such as filtering, saving and form feedback. Local storage retains browser-specific choices. Reduced-motion preferences disable automatic sliding and section overlap.

## 4:35–4:55 | Sources and close

**On screen:** Show the sources PDF and your own project repository if ready. Leave five seconds of recording buffer.

**Say:**

> The sources PDF acknowledges research, media creators and licences, plus ChatGPT through Codex assistance with code, content and documentation, including prompts. I will include my own GitHub repository and recording links in that document. This completes the Atlas & Away walkthrough. Thank you.

# Submission checks

- Submit a video of **5:00 or less**, with audible narration and readable screens.
- Add the video URL and your own travel-project repository URL to the sources PDF. Ensure the marker can open both links.
- Check the latest supplied deadline: **Sunday, 22 November, at 11:59pm**. Confirm the course platform's timezone and commit before the deadline.
- The supplied page says **50 points**, while the displayed rubric totals **25**. Keep all listed criteria covered and use the course platform/instructor to clarify the discrepancy if needed.
- Keep media attributions and honest AI disclosures, including assistance with the walkthrough script if you use it.
- Review and adapt the final code yourself: the assignment explicitly restricts AI-generated code to a guide/reference.

# Quick explanations to rehearse

| Code or concept | Explain it in your own words |
| --- | --- |
| `header`, `nav`, `main`, `footer` | Identify the page's major regions. |
| `section` and heading levels | Group and organise related content. |
| `a` versus `button` | A link navigates; a button performs an action. |
| `figure`, `figcaption`, `alt` | Associate a photograph with a caption and provide a text alternative. |
| `label`, `for`, `id`, `required` | Connect labels to controls and enforce basic form constraints. |
| `type="email"`, date and number inputs | Give the browser information about the expected data. |
| `details` and `summary` | Provide a native expandable section. |
| CSS Grid and Flexbox | Arrange two-dimensional card grids and aligned rows of controls. |
| Media queries | Change layouts for screen size or motion preferences. |
| `object-fit`, `border-radius` | Fit images into frames and make rounded shapes. |
| `position: sticky`, stacking order | Let a section remain visible while a later section slides over it. |
| Event listeners and `preventDefault()` | Respond to actions and replace a default browser action when appropriate. |
| Local storage | Remember small choices in the current browser. |
| Currency request | Fetch and validate dated reference rates only when requested. |

Prepared with ChatGPT through Codex from the project's current HTML, CSS, JavaScript and documentation. Prompt: “GIVE ME a 7mins detailed demo walkthorugh on what i did ...to do a video and submit”.
