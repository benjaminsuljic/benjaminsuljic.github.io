# benjaminsuljic.github.io

Personal resume website, live at **[benjaminsuljic.github.io](https://benjaminsuljic.github.io)**.

## Contents

- **index.html** — Single-page resume (hero, about, experience, education, skills, contact).
- **css/style.css** — Layout and styling (dark theme, responsive).
- **js/main.js** — Footer year and any small interactions.

## Editing your resume

1. Open **index.html** and replace the placeholder text with your own:
   - **Hero**: Name, tagline, email, LinkedIn, GitHub.
   - **About**: Short professional summary.
   - **Experience** & **Education**: Job/degree titles, companies/schools, dates, descriptions.
   - **Skills**: Your skills and tools.
   - **Contact**: Email and any extra links.

2. To change colors or fonts, edit the variables at the top of **css/style.css** (`:root`).

## Running locally

Open `index.html` in a browser, or use a simple server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve
```

Then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Commit and push your changes to the `main` branch.
2. In the repo: **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Branch: **main**, folder: **/ (root)**.
5. Save. The site will be available at `https://benjaminsuljic.github.io` after a short build.

No build step is required — GitHub Pages serves the static files directly.
