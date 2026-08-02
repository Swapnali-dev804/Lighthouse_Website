# Lighthouse Learning Hub — Static Learning Portal

A responsive, production-ready static website for a multi-course tech academy.
Videos live on YouTube; this site provides **courses, roadmaps, resources
and trust-building info**. No build step, no framework — deploy the folder anywhere
(GitHub Pages, Netlify, Vercel, S3, any static host).

## Pages

| Page | File | What it shows |
|---|---|---|
| Home | `index.html` | Hero, featured courses, latest free resources, "Why Learn With Us", newsletter |
| Courses | `courses.html` | All courses with search + category/level/status filters |
| Course Details | `course.html?id=<course-id>` | Overview, YouTube playlist + "Watch on App" buttons, modules (roadmap), downloads, FAQs |
| Resources | `resources.html` | All downloads grouped by course, filterable by type; deep-link with `resources.html#<course-id>` |
| Roadmap | `roadmap.html` | Public timeline of live and upcoming courses |
| About | `about.html` | Who we are, freelancing, the upcoming app, direct contact info |

## Folder structure

```
testing_app/
├── index.html … roadmap.html      # 6 pages
├── assets/
│   ├── css/styles.css             # theme, glassmorphism, animations, responsive rules
│   ├── js/
│   │   ├── data.js                # ★ ALL site content lives here — edit this
│   │   └── app.js                 # components (navbar/footer/cards) + page rendering
│   ├── img/
│   │   ├── logo.svg, hero.svg     # brand artwork
│   │   └── covers/*.svg           # one cover per course
│   └── downloads/                 # put real PDFs/ZIPs here
└── README.md
```

## How to edit content (no coding needed)

Everything is data-driven from [`assets/js/data.js`](assets/js/data.js):

- **Add a course** — copy an object in `window.COURSES`, change `id`, `title`, `playlist`,
  `modules`, `resources`, etc. It automatically appears on Home (if `featured: true`),
  Courses, Resources and its own detail page at `course.html?id=<your-id>`.
- **Update the roadmap** — edit `window.ROADMAP`.
- **Site name / contact info / social links / stats** — edit `window.SITE_CONFIG`
  (`contact.email` and `contact.phone` are shown in the footer and on the About page).

Course `status` values: `live`, `in-progress`, `coming-soon`.
Resource `type` values: `pdf`, `cheatsheet`, `code`, `prompts`, `assignment`, `practice`.

## Add a downloadable resource

Resource files are **part of the website** — they live inside the project and get
deployed with it. There is one folder per course:

```
assets/downloads/flutter/   assets/downloads/ai/   assets/downloads/sql/
```

1. Copy your file (PDF, ZIP, cheat sheet…) into the right course folder,
   e.g. `assets/downloads/flutter/setup-guide.pdf`.
2. In `assets/js/data.js`, find that course's `resources: [ ... ]` array and add one entry:
   ```js
   { id: "flutter-setup", title: "Flutter Setup Guide (PDF)", type: "pdf", size: "1.0 MB", downloads: 0, url: "assets/downloads/flutter/setup-guide.pdf" },
   ```
3. Save — the download button appears automatically on the course page, the Resources
   page and the home page.

Good to know:

- `size` and `downloads` are display text only — type whatever you want shown.
- `type` picks the icon (`pdf`, `cheatsheet`, `code`, `prompts`, `assignment`, `practice`).
- When a visitor clicks **Download**, the browser fetches the file from your website and
  saves it to the **visitor's own Downloads folder** — nothing is ever written into your
  project. It only looks like it comes "from the project folder" when you test locally,
  because locally your project folder *is* the web server.
- **Big files** (videos, large ZIPs): upload them to Google Drive or Dropbox instead and
  paste the share link as `url` — the button will open that link in a new tab.

## Before going live — replace the placeholders

1. **Playlist links** — the channel URL is already set to `@lighthouse-learning-hub`; search
   `data.js` for `REPLACE_PLAYLIST` and paste each course's real YouTube playlist URL.
2. **Contact info** — `SITE_CONFIG.contact.email` and `SITE_CONFIG.contact.phone` in `data.js`
   are placeholders; put your real email and phone/WhatsApp number there.
3. **Download files** — drop real files into `assets/downloads/` and point each resource's
   `url` at them (currently they use `placeholder.pdf` / `source-code.zip`).
4. **Newsletter form** — see "Collect newsletter subscribers" below; until you paste your
   Formspree endpoint into `data.js`, subscriptions are NOT collected (demo mode).
5. **Meta tags** — adjust titles/descriptions per page if you rebrand.

## Collect newsletter subscribers (Formspree)

The newsletter form sends each subscriber's email to you through [Formspree](https://formspree.io)
(free plan: ~50 submissions/month, stored in a dashboard + forwarded to your inbox).
One-time setup:

1. Go to **formspree.io** → sign up free with `lighthousecoachinginstitute@gmail.com`.
2. Click **New form** (name it e.g. "Newsletter") and copy the form's **endpoint URL** —
   it looks like `https://formspree.io/f/abcd1234`.
3. Open `assets/js/data.js` and paste it into `SITE_CONFIG.newsletter.endpoint`
   (replacing the `REPLACE_FORM_ID` placeholder).
4. Submit the form once yourself — Formspree sends a one-time confirmation email; approve it.

After that, every subscription arrives in your Gmail inbox and is listed (and exportable)
in the Formspree dashboard. Until step 3 is done, the form runs in demo mode: visitors see
a success message but nothing is collected.

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
# any static server works, e.g.:
python -m http.server 8000
# or
npx serve .
```

## Tech notes

- Plain HTML/CSS/JS (ES5-compatible), zero dependencies apart from Google Fonts.
- Navbar/footer are rendered by `app.js` so they're defined once for all pages.
- Course detail pages render from the `?id=` query param — unknown ids show a friendly 404 state.
- Accessible: skip link, focus states, aria labels, `prefers-reduced-motion` support.
- SEO: semantic HTML, per-page meta descriptions, Open Graph tags on the home page,
  lazy-loaded images, system-font fallbacks.
