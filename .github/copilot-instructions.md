# Copilot Instructions for DOCWOW-NEW (React + Vite)

## Project Overview
- **Framework:** React 19 + Vite 5
- **Purpose:** Modern, responsive restaurant website for DOC. WOW (Werl, Germany)
- **Key Features:**
  - Animated header with logo and navigation
  - Scroll-to-top button (see `ScrollToTopButton.jsx`)
  - Legal compliance sections (Impressum, Datenschutz)
  - Responsive design for mobile/desktop
  - German content and navigation

## Architecture & Patterns
- **Entry Point:** `src/main.jsx` renders `App.jsx` into `#root` (see `index.html`)
- **Main Layout:**
  - `Header.jsx` (logo, animated welcome, navigation)
  - `Footer.jsx` (address, navigation, legal info)
  - Main content in `App.jsx` (sections: Kontakt, Speisekarte, Impressum, Datenschutz)
- **Component Styles:** Each component has its own `.css` file (e.g., `Header.css`)
- **Navigation:** Uses anchor links (`#section`) and scroll detection for active state
- **Scroll-to-Top:** `ScrollToTopButton.jsx` (appears on scroll, smooth scroll to top)

## Developer Workflows
- **Start Dev Server:** `npm run dev` (Vite hot reload)
- **Build for Production:** `npm run build`
- **Deploy to GitHub Pages:** `npm run deploy` (uses `gh-pages` to publish `dist/`)
- **Linting:** `npm run lint` (ESLint, see `eslint.config.js`)
- **Preview Build:** `npm run preview`

## Project-Specific Conventions
- **CSS:**
  - Responsive breakpoints at 768px and 480px for navigation and header
  - Use of flexbox for all major layouts
  - Header background image and text animation (see `Header.css`)
  - Navigation links shrink and wrap on small screens
- **Section IDs:** All navigation targets (`#kontakt`, `#speisekarte`, `#impressum`, `#datenschutz`) must match section IDs in `App.jsx`
- **Legal Compliance:** Footer and navigation must always include Impressum and Datenschutz
- **No TypeScript:** Project is pure JS/JSX

## Integration Points
- **External:**
  - Google Maps links in Kontakt section
  - GitHub Pages for deployment (see `vite.config.js` for `base`)
- **No API/backend:** Static site only

## Examples
- **Add a new section:**
  1. Add a `<section id="newsection">` in `App.jsx`
  2. Add a nav link in `Header.jsx` and `Footer.jsx`
  3. Add responsive styles in the relevant CSS file
- **Update navigation:**
  - Edit `Header.jsx` and `Header.css` for structure and style

## Key Files
- `src/App.jsx` – Main app structure and sections
- `src/components/Header.jsx` + `Header.css` – Header, logo, nav, animation
- `src/components/Footer.jsx` + `Footer.css` – Footer, legal info
- `src/components/ScrollToTopButton.jsx` + `ScrollToTopButton.css` – Scroll-to-top button
- `vite.config.js` – Vite config, GitHub Pages base path
- `package.json` – Scripts, dependencies

---

If you add new navigation sections or change IDs, update all relevant files for consistency. For any cross-component UI, follow the flexbox and responsive patterns already in use.
