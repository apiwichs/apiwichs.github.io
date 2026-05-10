# Apiwich Sumeksri — Portfolio

Built with [Astro](https://astro.build) · Deployed to GitHub Pages

## Project Structure

```
src/
├── components/
│   ├── Nav.astro       ← shared navigation (active-page aware)
│   └── Footer.astro    ← shared footer
├── layouts/
│   └── Layout.astro    ← base HTML shell (head, fonts, global script)
├── pages/
│   ├── index.astro     ← Home / Hero
│   ├── projects.astro  ← All projects
│   ├── about.astro     ← Bio, Experience, Skills, Education
│   └── contact.astro   ← Contact links + resume download
├── data/
│   ├── projects.json   ← ✏️  Edit this to add/update projects
│   ├── experience.json ← ✏️  Edit this to add/update roles
│   └── skills.json     ← ✏️  Edit this to add/update skills
└── styles/
    └── global.css      ← shared CSS variables, reset, buttons, tags
public/
├── assets/
│   ├── ece295-pcb.png         ← !! ADD YOUR PCB IMAGE HERE !!
│   └── ApiwichSumeksriResume.pdf  ← !! ADD YOUR RESUME HERE !!
└── styles/
    └── global.css      ← Astro serves this statically
```

## Quick Start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # builds to dist/
npm run preview    # preview the build locally
```

## Updating Content

All content lives in `src/data/*.json` — you never need to touch page HTML:

| File                   | What it controls                        |
|------------------------|-----------------------------------------|
| `src/data/projects.json`  | Projects page cards + homepage teaser |
| `src/data/experience.json`| About page experience timeline        |
| `src/data/skills.json`    | About page skill blocks               |

### Adding a new project
```json
{
  "id": "my-new-project",
  "featured": false,
  "type": "Firmware · Embedded C",
  "title": "My New Project",
  "desc": "Short description...",
  "bullets": ["bullet 1", "bullet 2"],
  "tags": [
    { "label": "C",    "type": "sw" },
    { "label": "UART", "type": "prt" }
  ],
  "github": "https://github.com/apiwichs/repo",
  "image": "/assets/my-project.png"
}
```
Tag types: `sw` (green) · `hw` (amber) · `prt` (pink/protocol)

## Deployment (GitHub Pages)

The repo already has `.github/workflows/deploy.yml`.

1. Push this repo to `apiwichs.github.io` (or any repo)
2. In GitHub → Settings → Pages → set Source to **GitHub Actions**
3. Every push to `main` auto-deploys

If deploying to a non-root repo (e.g. `github.com/apiwichs/portfolio`),
uncomment `base: '/portfolio'` in `astro.config.mjs`.
