export interface ExperienceTech {
  name: string;
  icon?: string;
  invertInDark?: boolean;
}

export interface ExperienceItemData {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  timeline: string;
  bullets: string[];
  techs: ExperienceTech[];
}

export const ALL_EXPERIENCES: ExperienceItemData[] = [
  {
    id: "valnee-solutions",
    role: "Full Stack Developer Intern",
    company: "Valnee Solutions",
    companyUrl: "https://valnee.com",
    location: "Pune, India",
    timeline: "Dec 2025 – Mar 2026",
    bullets: [
      "Built Atlas analytics engine for SignalMint integrating Meta Ads API, computing ROAS, CTR, CPC metrics with Celery-based async scheduling for 90-minute data refresh cycles.",
      "Designed multi-engine AEO pipeline for ReachSaga querying OpenAI, Gemini and Perplexity simultaneously to compute brand visibility scores across AI answer engines.",
      "Implemented RBAC system with structured permission conventions, API middleware enforcement and frontend route protection across multi-tenant SaaS platform.",
    ],
    techs: [
      { name: "Python", icon: "/techs/python.svg" },
      { name: "Next.js", icon: "/techs/nextjs.svg", invertInDark: true },
      { name: "TypeScript", icon: "/techs/typescript.svg" },
      { name: "PostgreSQL", icon: "/techs/postgresql.svg" },
      { name: "Node.js", icon: "/techs/nodejs.svg" },
      { name: "Tailwind CSS", icon: "/techs/tailwindcss.svg" },
    ],
  },
  {
    id: "froncort-inc",
    role: "Frontend Developer Intern",
    company: "Froncort Inc.",
    companyUrl: "https://froncort.ai",
    location: "Remote",
    timeline: "Jun 2025 – Sep 2025",
    bullets: [
      "Designed and developed the new Prompt-to-Decision (P2D) workflow UI, streamlining a 6-step process for improved usability.",
      "Built a completely new landing page UI from scratch based on a fresh Figma design, ensuring pixel-perfect, responsive layouts.",
      "Engineered modular component architecture and responsive design patterns, optimizing client-side performance and accessibility across devices.",
    ],
    techs: [
      { name: "React", icon: "/techs/react.svg" },
      { name: "TypeScript", icon: "/techs/typescript.svg" },
      { name: "Next.js", icon: "/techs/nextjs.svg", invertInDark: true },
      { name: "Tailwind CSS", icon: "/techs/tailwindcss.svg" },
      { name: "Figma", icon: "/techs/figma.svg" },
    ],
  },
  {
    id: "kapybara",
    role: "Next.js Developer Intern",
    company: "Kapybara",
    companyUrl: "http://kapybara.org",

    location: "Remote",
    timeline: "Mar 2025 – May 2025",
    bullets: [
      "Contributed to ZeroSetup SaaS boilerplate, engineering dynamic pricing and team management features for production SaaS deployments using BetterAuth, Stripe, and Dodo Payments.",
      "Enhanced scalability and maintainability of the platform for enterprise-grade boilerplate architecture.",
    ],
    techs: [
      { name: "Next.js", icon: "/techs/nextjs.svg", invertInDark: true },
      { name: "TypeScript", icon: "/techs/typescript.svg" },
      { name: "BetterAuth" },
      { name: "Stripe" },
      { name: "Tailwind CSS", icon: "/techs/tailwindcss.svg" },
    ],
  },
  {
    id: "pict-edc",
    role: "Technical Head",
    company: "PICT Entrepreneurship Development Cell (EDC)",
    companyUrl: "https://edc.pict.edu",

    location: "Pune, India",
    timeline: "May 2025 – Mar 2026",
    bullets: [
      "Led a development team to build and deploy the registration platform for the flagship event Magnate, ensuring smooth handling of 200+ registrations and reliable production deployment.",
      "Developed admin and user-facing features including registration management, automated confirmation emails, and a QR-based startup voting system used during the event.",
    ],
    techs: [
      { name: "React.js", icon: "/techs/react.svg" },
      { name: "Node.js", icon: "/techs/nodejs.svg" },
      { name: "PostgreSQL", icon: "/techs/postgresql.svg" },
      { name: "Tailwind CSS", icon: "/techs/tailwindcss.svg" },
    ],
  },
  {
    id: "pict-mun",
    role: "USG Tech",
    company: "PICT Model United Nations (MUN)",
    companyUrl: "https://pictmun.in",
    location: "Pune, India",
    timeline: "Mar 2025 – Apr 2026",
    bullets: [
      "Co-led development of the official PICT MUN platform and built the digital chit system, making it the first MUN in the Pune circuit to adopt real-time chit exchange.",
      "Supported a live chit system with 200+ concurrent users over 2 days, ensuring stability, low-latency communication, and smooth delegate–EB interactions.",
    ],
    techs: [
      { name: "React.js", icon: "/techs/react.svg" },
      { name: "Node.js", icon: "/techs/nodejs.svg" },
      { name: "Socket.io", icon: "/techs/socket-io.svg" },
      { name: "PostgreSQL", icon: "/techs/postgresql.svg" },
      { name: "Prisma", icon: "/techs/prisma.svg", invertInDark: true },
    ],
  },
];

export const EXPERIENCES: ExperienceItemData[] = ALL_EXPERIENCES.slice(0, 2);

