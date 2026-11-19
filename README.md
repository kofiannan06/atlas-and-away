# Atlas & Away

A static travel and tourism learning project: 31 country guides across six continents, plus a five-stop Antarctica expedition guide.

Project repository: [kofiannan06/atlas-and-away](https://github.com/kofiannan06/atlas-and-away).

Live website: [atlas-and-away.vercel.app](https://atlas-and-away.vercel.app).

Each country guide now includes two official hotel links and its local currency. An on-demand converter uses dated reference rates. Hotel websites handle prices, availability and reservations.

## Run locally

Open this folder in VS Code. In its terminal, run:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000/index.html>. Stop the server with Ctrl+C. No npm install or build step is required. VS Code Live Server also works.

## Project structure

```text
formative-two/
├── index.html                  Home and linked world map
├── explore.html                Searchable destination directory
├── about.html                  Creator bio and contact details
├── contact.html                Demonstration enquiry form
├── continents/                 Seven continent pages
├── countries/                  31 readable HTML guides
├── assets/
│   ├── css/
│   │   ├── style.css           Foundations and homepage
│   │   └── pages.css           Directories, guides and forms
│   ├── js/
│   │   ├── home.js             Shared mobile navigation and motion
│   │   ├── home-motion.js      Country slideshow and overlapping homepage sections
│   │   ├── storage.js          Saved places and checklist storage
│   │   ├── explore.js          Search, filters, sorting and URL state
│   │   ├── guide.js            Photo dialog, sharing and printing
│   │   ├── currency.js         Reference rates and currency conversion
│   │   └── contact.js          Demo form validation and feedback
│   ├── data/
│   │   ├── destinations.json   Destinations, images, maps and routes
│   │   ├── guide-content.json  Researched descriptions and references
│   │   ├── hotels.json         Official properties and expedition links
│   │   ├── currencies.json     Local currency codes and rate source
│   │   └── image-credits.json  Media creators, sources and licences
│   └── images/                 Local continent/country/category folders
├── docs/                       Specification, guides and submission sources
└── tests/                      Currency calculation and failure-handling checks
```

Study `docs/project-guide.md` for feature explanations and the five-minute walkthrough outline. Individual country pages contain their content directly; they do not require runtime JSON fetching.

`docs/video-walkthrough.md` includes a detailed seven-minute rehearsal script and a complete submission script targeting 4:55, with on-screen actions and code explanations. The assignment's recording limit is five minutes.

Your profile photo, portfolio, LinkedIn and both GitHub profiles are included on About.

## Personalisation still needed

- Add your walkthrough video URL to the sources document. The project repository link is included.
- Review and personalise the AI-assisted reference code and text so you can explain your own final submission.

The form demonstrates validation; it does not send an email. Saved destinations and checklists stay in the current browser. The live site is hosted on Vercel using a manual CLI deployment. GitHub pushes do not automatically deploy; follow `docs/deployment.md` to publish updates.

Currency calculations and cache/error handling can be checked with Node's built-in runner: `node --test tests/currency.test.cjs`. The converter requires an internet connection for fresh rates; the country facts and hotel links are static HTML.
