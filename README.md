# Manuj Haritwal — Senior Frontend / Full-Stack Engineer Portfolio

A modern, high-performance developer portfolio built with **React 19**, **Vite**, **Framer Motion**, and custom **SCSS**. Featuring an interactive contact portal, dynamic theme system, multi-language internationalization, an integrated AI assistant, and architecture-focused case studies.

🌐 **Live Demo**: [https://manujharitwal.vercel.app/](https://manujharitwal.vercel.app/)

---

## ⚡ Core Features

- **💼 Available for Opportunities**: Real-time status indicator in the sidebar with an instant "Copy Email" clipboard utility.
- **📬 Interactive Contact Hub**: Dedicated `/contact` route featuring quick contact cards (Email, Location, Social Profiles, Availability) and an interactive contact form with validation, character counting, and a direct `mailto:` fallback.
- **🎨 3-Tier Theme Engine**: Seamless switching between **Dark**, **Light**, and **Neo-brutal** aesthetic themes with CSS variables and local storage persistence.
- **🌍 Internationalization (i18n)**: Full multilingual support across **English (EN)**, **Spanish (ES)**, and **French (FR)** powered by `i18next`.
- **🤖 Built-in AI Assistant**: Interactive assistant with contextual awareness of Manuj's resume, tech philosophy, and project highlights.
- **📱 Responsive & Accessible**: Mobile-first architecture with keyboard focus rings, semantic HTML5 tags, ARIA attributes, and accessible touch targets.
- **✨ Fluid Micro-interactions**: Custom cursor blend modes (disabled gracefully on touch devices) and Framer Motion page/element transitions.

---

## 🛠️ Tech Stack

| Domain | Technologies |
|---|---|
| **Core** | React 19, JavaScript (ES6+), React Router 7 |
| **Build & Tooling** | Vite 8, Sass (SCSS with BEM architecture) |
| **Animation** | Framer Motion 12 |
| **Internationalization** | i18next, react-i18next |
| **Icons & Markdown** | React Icons, React Markdown, Remark GFM |
| **Serverless Backend** | Vercel Serverless Functions (`/api/chat`, `/api/contact`) |
 
---

## 📂 Project Structure

```
portfolio/
├── api/                   # Serverless API routes (Chat, Contact)
├── src/
│   ├── assets/            # Static assets & profile media
│   ├── components/        # Modular React components
│   │   ├── About.jsx      # Bio, metrics & architecture trade-offs
│   │   ├── Resume.jsx     # Experience timeline & skills
│   │   ├── Portfolio.jsx  # Interactive case studies
│   │   ├── Contact.jsx    # Interactive contact form & quick cards
│   │   ├── Sidebar.jsx    # Sticky profile, status badge & contact actions
│   │   ├── Navbar.jsx     # Navigation, i18n & theme switcher
│   │   ├── ChatBot.jsx    # AI assistant modal
│   │   └── ...
│   ├── configs/           # Application configs & external links
│   ├── locales/           # Translation dictionaries (EN, ES, FR)
│   ├── styles/            # SCSS variables, mixins & global tokens
│   ├── App.jsx            # Main app shell & layout transitions
│   └── main.jsx           # Router configuration & entry point
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/manujharit/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. (Optional) Run with Vercel serverless functions locally:
   ```bash
   npm run vercel-dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```