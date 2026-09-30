# Abhishek Thakur — Developer Portfolio Website

A personal developer portfolio website engineered with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**, built according to the comprehensive PRD and TRD specifications.

---

## 🚀 Live Positioning
**Software Developer | Web Development | Automation | AI/LLM Applications**
- **Email:** abhishek43900@gmail.com
- **Phone:** +91 9329701582
- **GitHub:** [github.com/LEARNERabhi21](https://github.com/LEARNERabhi21)
- **Location:** Raipur, Chhattisgarh, India

---

## 🛠️ Tech Stack & Architecture
- **Framework:** React 18 with TypeScript
- **Bundler:** Vite 5 (Ultra-fast HMR and optimized production bundles)
- **Styling:** Tailwind CSS 3 with custom dark developer theme tokens
- **Animations:** Framer Motion 11 + Canvas 2D ambient particle constellation
- **Icons:** Lucide React
- **Performance:** Strict bundle budget (~117 KB gzipped JS, ~6 KB gzipped CSS)

---

## 📂 Project Structure
```text
abhishek-portfolio/
├── docs/
│   ├── PRD.md                   # Complete Product Requirements Document
│   └── TRD.md                   # Complete Technical Requirements Document
├── public/
├── src/
│   ├── animations/              # Framer motion variants & easing curves
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx       # Sticky navigation with scroll spy
│   │   │   └── Footer.tsx       # Global footer with coordinates & links
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Staggered hero with live terminal visual
│   │   │   ├── About.tsx        # Career narrative & core competencies
│   │   │   ├── Skills.tsx       # Categorized skills (Zero fake percentages)
│   │   │   ├── Projects.tsx     # Filterable project grid
│   │   │   ├── ProjectModal.tsx # Full case study overlay (Problem/Arch/Result)
│   │   │   ├── Experience.tsx   # Enterprise timeline (Ratusaria Industries)
│   │   │   ├── Certifications.tsx # BCA Degree (PRSU) & production credentials
│   │   │   ├── LearningJourney.tsx# Active AI/LangChain & Python deep dives
│   │   │   ├── GithubActivity.tsx # Public repositories from @LEARNERabhi21
│   │   │   └── Contact.tsx      # Secure contact form with honeypot trap
│   │   └── ui/
│   │       ├── BackgroundCanvas.tsx # Canvas 2D ambient constellation engine
│   │       ├── TerminalVisual.tsx   # Interactive multi-tab developer terminal
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       └── Card.tsx         # Card with radial gradient spotlight hover
│   ├── content/
│   │   └── portfolioData.ts     # Factual, resume-derived data models
│   ├── hooks/
│   │   └── useScrollSpy.ts      # Active section viewport detection
│   ├── styles/
│   │   └── globals.css          # Glassmorphic utilities & custom scrollbar
│   ├── types/
│   │   └── index.ts             # TypeScript domain interfaces
│   ├── utils/
│   │   └── cn.ts                # Classname merge utility
│   ├── App.tsx                  # Root application component
│   └── main.tsx                 # DOM entry point
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 💻 Local Development

1. Navigate to the project directory:
   ```bash
   cd F:\abhishek-portfolio
   ```

2. Start the local Vite development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 🚢 Deployment to Vercel / Netlify

### Vercel (Recommended):
1. Push this repository to GitHub under your account (`github.com/LEARNERabhi21/portfolio`).
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository. Vercel will automatically detect Vite.
4. Click **Deploy**. Your portfolio will be live with Edge CDN caching!
