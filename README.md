<div align="center">

# ✦ Hardik Gujrathi — Portfolio v2

<p align="center">
  <strong>A modern, minimalist, and high-performance personal portfolio built for engineering excellence.</strong>
</p>

<p align="center">
  <a href="https://hardik-gujarathidev.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Website-black?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.3.4-black?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2.8-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Motion-13.2.0-FF4154?style=flat-square&logo=framer&logoColor=white" alt="Motion" />
  <img src="https://img.shields.io/badge/Lenis-Smooth_Scroll-000000?style=flat-square" alt="Lenis" />
  <img src="https://img.shields.io/badge/Biome-2.4.2-60A5FA?style=flat-square&logo=biome&logoColor=white" alt="Biome" />
</p>

---

</div>

## 🌐 Overview

This repository houses the second iteration of my personal portfolio—crafted from the ground up to showcase full-stack web applications, generative AI workflows, distributed architectures, and technical leadership experiences.

Designed with clean typography, bespoke diagonal framing accents, buttery-smooth inertial scrolling, and fluid dark/light transitions.

👉 **Live Deployment**: [hardik-gujarathidev.vercel.app](https://hardik-gujarathidev.vercel.app)

---

## ✨ Features

- **⚡ Next.js 16 & React 19**: Leverages modern App Router, React Server Components (RSC), and Turbopack for ultra-fast builds and minimal client bundles.
- **🎨 Framed Minimalist Aesthetic**: Custom layout framing featuring diagonal scale accents, sleek theme-reactive borders, and custom typography (`IBM Plex Sans` & `IBM Plex Mono`).
- **🌊 Lenis Inertial Smooth Scrolling**: Global smooth scrolling with hardware-accelerated wheel and touch interpolation.
- **🌓 Adaptive Theme Engine**: Flawless dark and light modes powered by `next-themes` with zero hydration flickers.
- **📂 Interactive Projects Archive (`/projects`)**:
  - Filterable by tech stack domain (`All`, `Fullstack`, `AI`, `Backend`, `Frontend`).
  - High-resolution preview cards with aspect-ratio preservation and mobile-optimized touch buttons.
- **🔍 Deep Project Detail Pages (`/projects/[id]`)**:
  - Full-resolution uncropped viewport previews.
  - Comprehensive architectural breakdowns, technology tags, live demo links, and source code links.
  - Cycle navigation cards with previous/next project shortcuts and breadcrumbs.
- **💼 Work Experience Showcase (`/experience`)**:
  - Interactive accordions detailing engineering roles (Valnee Solutions, Froncort Inc., Kapybara) and collegiate tech leadership (PICT EDC, PICT MUN).
  - Direct resume download CTA.
- **🚀 Dynamic SEO & Social Share**:
  - Automated `sitemap.xml` and `robots.txt` generation across all dynamic project routes.
  - Complete OpenGraph and Twitter card previews with metadata templates.
- **🎯 404 Brand Page**: Custom animated not-found page with clear contextual recovery paths.
- **⚡ Lazy-Loaded Micro-Animations**: Client-rendered interactive components (GitHub activity heatmap, canvas elements) dynamically streamed with fallback skeletons.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Framework & Core** | Next.js 16 (App Router), React 19, TypeScript |
| **Styling & Design System** | Tailwind CSS v4, `@tailwindcss/typography`, `tw-animate-css` |
| **Motion & Scroll** | Motion (`motion/react`), Lenis (`lenis/react`) |
| **Icons & Assets** | Lucide React, Custom SVGs |
| **Theming** | `next-themes` (Dark/Light mode support) |
| **Linter & Formatter** | Biome (`@biomejs/biome`) |
| **Deployment** | Vercel |

---

## 📂 Project Structure

```bash
portfoliov2/
├── public/                     # Static assets, project showcase screenshots & resume.pdf
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Global framing, Scales borders, Header & Footer
│   │   ├── page.tsx            # Homepage (Hero, About, Featured Projects, Experience, Contact)
│   │   ├── projects/
│   │   │   ├── page.tsx        # Filterable project catalog
│   │   │   └── [id]/page.tsx   # Dynamic project deep dive & architecture
│   │   ├── experience/
│   │   │   └── page.tsx        # Comprehensive career & leadership timeline
│   │   ├── not-found.tsx       # Custom branded 404 page
│   │   ├── sitemap.ts          # Dynamic XML sitemap generator
│   │   └── robots.ts           # Crawling directives
│   ├── components/
│   │   ├── experience/         # Experience list & accordion components
│   │   ├── projects/           # Category filter & project cards
│   │   ├── providers/          # Lenis smooth scroll & Theme providers
│   │   ├── sections/           # Header, Hero, About, Projects, Experience, Contact, Footer
│   │   ├── shared/             # Reusable ProjectCard, SocialLinks, Headings, GitHub Activity
│   │   └── ui/                 # Atomic UI primitives (Buttons, Accordion, Badge, Scales, etc.)
│   ├── data/
│   │   ├── projects.ts         # Project metadata, tags, and architectural writeups
│   │   └── experiences.ts      # Roles, responsibilities, and key achievements
│   └── lib/                    # Utility helpers (cn, tailwind merge)
├── biome.json                  # Biome code style configuration
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or newer recommended)
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TheMercury1229/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```

4. **Open the browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts the Next.js development server with Turbopack |
| `pnpm build` | Compiles the production-ready optimized application bundle |
| `pnpm start` | Runs the compiled production build locally |
| `pnpm lint` | Runs Biome code analysis and checks |
| `pnpm format` | Formats all source files using Biome |

---

## 📬 Contact & Socials

- **Website**: [hardik-gujarathidev.vercel.app](https://hardik-gujarathidev.vercel.app)
- **GitHub**: [@TheMercury1229](https://github.com/TheMercury1229)
- **LinkedIn**: [Hardik Gujrathi](https://www.linkedin.com/in/hardik-gujrathi-b7ba49294)
- **Twitter / X**: [@TheMercury1229](https://x.com/TheMercury1229)
- **LeetCode**: [themercury1229](https://leetcode.com/u/themercury1229)
- **Email**: [gujarathihardik29@gmail.com](mailto:gujarathihardik29@gmail.com)

---

<div align="center">
  <sub>Designed & Developed with precision by <strong>Hardik Gujrathi</strong>. Built with Next.js & Tailwind CSS.</sub>
</div>
