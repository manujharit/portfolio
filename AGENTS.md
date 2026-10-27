# AGENTS.md — AI Agent Guidebook for Manuj Haritwal's Portfolio

Welcome, AI Agent! This document provides a complete technical blueprint, architectural overview, design conventions, and operational workflows for this repository. Use this guidebook to understand the codebase, adhere to established patterns, and work safely within the project.

---

## 1. Project Overview

- **Owner**: Manuj Haritwal (Senior Frontend / Full-Stack Engineer)
- **Application Type**: React 19 Single Page Application (SPA) with Vercel Serverless API Functions
- **Production URL**: [https://manujharit.github.io/portfolio/](https://manujharit.github.io/portfolio/)
- **Core Purpose**: Showcase professional experience, technical case studies, engineering trade-offs, architecture decisions, and an interactive AI assistant for recruiters and engineering managers.

---

## 2. Tech Stack & Key Libraries

| Layer | Technologies |
|---|---|
| **Core Frontend** | React 19 (`react`, `react-dom`), React Router 7 (`react-router`) |
| **Build & Tooling** | Vite 8, Rollup code splitting, Sass (`sass`) |
| **Animations** | Framer Motion 12 (`framer-motion`) with `MotionConfig reducedMotion="user"` |
| **Styling** | SCSS with BEM methodology, CSS Variables for 3 themes (Dark, Light, Neo-brutal) |
| **Internationalization** | `i18next`, `react-i18next` (English `en`, Spanish `es`, French `fr`) |
| **AI Integration** | Ollama client library (`ollama`), model: `gemma4:31b-cloud` |
| **Markdown Rendering**| `react-markdown`, `remark-gfm` |
| **Serverless Backend**| Vercel Serverless Functions (`/api/chat`, `/api/contact`, `/api/env`) |

---

## 3. Directory Structure

```
portfolio/
├── api/                             # Vercel Serverless Node.js endpoints
│   ├── chat.js                      # AI assistant endpoint using Ollama (gemma4:31b-cloud)
│   ├── contact.js                   # Contact form submission (Slack Webhook & email fallback)
│   └── env.js                       # Environment variable diagnostic helper
├── public/                          # Static assets served as-is (e.g., manifest.json)
├── src/
│   ├── assets/                      # Bundled image assets (e.g. ManujPhoto.png)
│   ├── components/                  # UI Components (each with co-located SCSS)
│   │   ├── About.jsx & .scss        # Bio, metrics, technical trade-offs section
│   │   ├── ChatBot.jsx & .scss      # Floating AI assistant modal with Markdown
│   │   ├── Contact.jsx & .scss      # Contact hub, quick cards & contact form
│   │   ├── LanguageSwitcher.jsx     # i18n language toggle (EN, ES, FR)
│   │   ├── Navbar.jsx & .scss       # Top navigation, theme toggle & language switcher
│   │   ├── Portfolio.jsx & .scss    # Case studies with problem/architecture/impact
│   │   ├── Resume.jsx & .scss       # Work history timeline and skills matrix
│   │   ├── Sidebar.jsx & .scss      # Sticky profile panel, availability badge, copy-email
│   │   └── ThemeToggle.jsx & .scss  # 3-tier theme selector (Dark, Light, Neo-brutal)
│   ├── configs/
│   │   └── configs.jsx              # Social links (LinkedIn, GitHub, Gmail) and CDN URLs
│   ├── locales/                     # i18n translation dictionaries
│   │   ├── en/translation.json      # English translations
│   │   ├── es/translation.json      # Spanish translations
│   │   └── fr/translation.json      # French translations
│   ├── styles/
│   │   └── _variables.scss          # Color tokens, breakpoints, theme rules, mixins
│   ├── App.jsx                      # App shell, router layout, page transitions
│   ├── App.scss                     # App layout, grid, main content, loader styles
│   ├── i18n.js                      # i18next configuration & initialization
│   ├── index.scss                   # Global resets, typography, root variables
│   └── main.jsx                     # Router initialization, React root render
├── .env.example                     # Sample environment variables
├── .env.local                       # Local environment variables (Ollama host/key, Slack webhook)
├── index.html                       # HTML entry point, SEO meta tags, Google JSON-LD schema
├── package.json                     # Project scripts and dependencies
├── vercel.json                      # Vercel routing and single-page app rewrite rules
└── vite.config.js                   # Vite configuration with vendor chunk code-splitting
```

---

## 4. Key Architectural Patterns & Features

### 4.1. AI ChatBot (`src/components/ChatBot.jsx` & `api/chat.js`)
- **Model**: Exclusively uses `gemma4:31b-cloud`.
- **Backend Flow**: `api/chat.js` loads Ollama credentials from `.env.local` or environment variables, prepends a strict system prompt containing Manuj's resume and technical philosophy, maps message history, and queries the Ollama chat API.
- **Frontend Flow**: Users interact with the floating modal. Responses render with `react-markdown` and `remark-gfm` with external links opening in new tabs (`target="_blank"`).
- **No Dropdown**: The model selection dropdown has been intentionally removed; do not re-introduce dynamic model selection unless explicitly requested.

### 4.2. Contact Form & Webhooks (`src/components/Contact.jsx` & `api/contact.js`)
- Accepts `name`, `email`, `subject`, and `message`.
- Validates inputs both on the client and server side.
- Posts structured Slack Block Kit notifications if `SLACK_WEBHOOK_URL` is set.
- Gracefully falls back to a direct `mailto:` link if the API call fails or runs without backend functions.

### 4.3. Theming Engine (`src/styles/_variables.scss` & `ThemeToggle.jsx`)
- Supports three themes: `dark` (default), `light`, and `neo-brutal`.
- Implemented using the `data-theme` attribute on `document.documentElement` and CSS variables:
  - `--bg-color`, `--surface-color`, `--border-color`, `--text-main`, `--accent-color`, etc.
- Persisted across visits via `localStorage.getItem('portfolio-theme')`.

### 4.4. Internationalization (`src/i18n.js` & `src/locales/`)
- Powered by `i18next` and `react-i18next`.
- Supported languages: `en` (English), `es` (Spanish), `fr` (French).
- All UI copy must be placed in `src/locales/{en,es,fr}/translation.json` and accessed via `const { t } = useTranslation()`.
- Language selection is saved to `localStorage.getItem('portfolio-language')`.

### 4.5. Routing & Code Splitting (`src/main.jsx` & `vite.config.js`)
- React Router 7 `createBrowserRouter` with lazy-loaded route components:
  - `/` -> `About.jsx`
  - `/resume` -> `Resume.jsx`
  - `/portfolio` -> `Portfolio.jsx`
  - `/contact` -> `Contact.jsx`
  - `*` -> Redirects to `/`
- Vite Rollup configuration separates vendor code into dedicated chunks:
  - `vendor-react` (`react`, `react-dom`, `react-router`)
  - `vendor-framer-motion` (`framer-motion`)
  - `vendor-react-icons` (`react-icons`)
  - `vendor-i18n` (`i18next`, `react-i18next`)
  - `vendor-markdown` (`react-markdown`, `remark-gfm`)

---

## 5. Environment Variables

Defined in `.env.local` (local) or Vercel Project Settings (production):

| Variable | Description | Example / Default |
|---|---|---|
| `OLLAMA_HOST` | Ollama Cloud or local Ollama URL | `https://ollama.com` or `http://localhost:11434` |
| `OLLAMA_API_KEY` | Ollama Cloud Bearer API Key | Required for Ollama Cloud |
| `SLACK_WEBHOOK_URL` | Incoming webhook URL for contact form alerts | Optional Slack webhook URL |

---

## 6. Development & Operational Commands

```bash
# Install dependencies
npm install

# Start local frontend dev server (Vite on port 5173 / $PORT)
# Note: Vite dev server alone does not serve /api/* serverless functions!
npm run dev

# Start local development server with Vercel serverless function support
# (Required when testing /api/chat or /api/contact locally)
npm run vercel-dev

# Production build
npm run build
```

---

## 7. Guidelines & Best Practices for AI Agents

1. **SCSS & Styling Rules**:
   - Always use SCSS with BEM methodology.
   - Do NOT use inline styles (`style={{ ... }}`).
   - Utilize existing theme variables (`var(--accent-color)`, `var(--surface-color)`, etc.) from `src/styles/_variables.scss`.
   - Respect Content Security Policy (CSP) and accessibility standards (e.g. include `@include focus-ring` for interactive elements).

2. **Internationalization Integrity**:
   - Never hardcode user-facing strings directly in components.
   - Always update all three translation files (`en`, `es`, `fr`) when adding new text.

3. **Serverless Functions**:
   - Serverless functions reside in the `api/` directory at the project root.
   - Any API function must read credentials from `process.env` with fallback to `.env.local` parsing in local development.

4. **Testing & Cleanliness**:
   - Before completing tasks, always run `npm run build` to verify there are no compilation errors or broken imports.
   - Clean up any temporary or test scripts created during development.
   - Ensure unneeded artifacts and build files remain in `.gitignore`.

5. **Version Control Safety**:
   - Do NOT run `git push` unless explicitly asked by the user.
