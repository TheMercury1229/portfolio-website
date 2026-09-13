export interface ProjectTech {
  name: string;
  icon?: string;
  invertInDark?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  liveUrl?: string | null;
  githubUrl?: string | null;
  techs: ProjectTech[];
}

export const PROJECTS: ProjectItem[] = [

  {
    id: "viby",
    title: "Viby – AI Coding Platform",
    description:
      "An intelligent developer sandbox featuring containerized e2b runtime provisioning, AI code generation, and automated context pipelines.",
    bullets: [
      "Built an AI-driven coding sandbox with containerized environment provisioning via e2b and AI-powered code generation.",
      "Designed tRPC + Inngest AI workflow for context generation, sandbox provisioning, and collaborative editing.",
    ],
    image: "/projects/viby.png",
    liveUrl: "https://viby.vercel.app",
    githubUrl: "https://github.com/TheMercury1229/viby",
    techs: [
      { name: "Next.js", icon: "/techs/nextjs.svg", invertInDark: true },
      { name: "TypeScript", icon: "/techs/typescript.svg" },
      { name: "tRPC" },
      { name: "Inngest" },
      { name: "e2b" },
    ],
  },
  {
    id: "mercury-cli",
    title: "Mercury CLI",
    description:
      "AI-powered terminal assistant featuring conversational chat, web search, sandboxed code execution, real-time streaming, and autonomous full-app scaffolding.",
    bullets: [
      "Developed an AI-powered CLI with chat, web search, code execution, and an agentic mode that generates full applications.",
      "Implemented OAuth authentication, session storage, and real-time AI streaming with persistent conversation history.",
    ],
    image: "/projects/mercury-cli.png",
    liveUrl: null,
    githubUrl: "https://github.com/TheMercury1229/mercury-cli",
    techs: [
      { name: "Node.js", icon: "/techs/nodejs.svg" },
      { name: "PostgreSQL", icon: "/techs/postgresql.svg" },
      { name: "Prisma", icon: "/techs/prisma.svg", invertInDark: true },
      { name: "Gemini AI", icon: "/techs/gemini.svg" },
      { name: "Vercel AI SDK", icon: "/techs/vercel.svg", invertInDark: true },
    ],
  },
  {
    id: "pict-mun-chit-system",
    title: "PICT-MUN Chit System",
    description:
      "Online chit messaging system built for the Pune MUN circuit with real-time routing for 100+ users using Socket.io and full administrative automation.",
    bullets: [
      "Built the first online chit system in the Pune MUN circuit with real-time messaging for 100+ users using Socket.io.",
      "Added full admin suite: user creation/deletion, automated credential emails, and participant management.",
    ],
    image: "/projects/mun-chit.png",
    liveUrl: "https://chit.pictmun.in",
    githubUrl: "https://github.com/TheMercury1229/pict-mun-chit-system",
    techs: [
      { name: "React.js", icon: "/techs/react.svg" },
      { name: "Node.js", icon: "/techs/nodejs.svg" },
      { name: "PostgreSQL", icon: "/techs/postgresql.svg" },
      { name: "Socket.io", icon: "/techs/socket-io.svg" },
    ],
  },
];



export type ProjectCategory = "Fullstack" | "Backend" | "Frontend" | "AI";

export interface ProjectTechDetails {
  name: string;
  icon?: string;
  invertInDark?: boolean;
}

export interface ProjectItemDetails {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  category: ProjectCategory;
  image: string;
  liveUrl?: string | null;
  githubUrl?: string | null;
  techs: ProjectTechDetails[];
}

export const ALL_PROJECTS: ProjectItemDetails[] = [
  {
    id: "viby",
    title: "Viby – AI Coding Platform",
    category: "AI",
    description:
      "AI-powered collaborative coding platform featuring instant containerized sandboxes, intelligent context generation, AI-assisted code generation, and automated workflows.",
    detailedDescription:
      "Viby is an AI-powered collaborative development environment designed to reduce the friction between an idea and a working prototype. The platform provisions live, containerized coding environments through e2b, allowing users to work inside isolated development sandboxes without manually setting up local environments. Its AI workflow uses Gemini to analyze project requirements, generate relevant context, and produce code based on that context. Inngest orchestrates the asynchronous AI workflow, coordinating context generation and subsequent AI tasks, while tRPC provides the application's backend API layer. The platform combines AI-assisted development with live sandbox environments so users can move from a project idea to an executable coding environment within the same application. Clerk handles authentication and application access, while the interface is built with Next.js and a minimal shadcn/ui-based experience.",
    image: "/projects/viby.png",
    liveUrl: "https://hardy-viby.vercel.app/",
    githubUrl: "https://github.com/TheMercury1229/viby",
    techs: [
      {
        name: "Next.js",
        icon: "/techs/nextjs.svg",
        invertInDark: true,
      },
      {
        name: "TypeScript",
        icon: "/techs/typescript.svg",
      },
      {
        name: "tRPC",
      },
      {
        name: "Inngest",
      },
      {
        name: "e2b",
      },
      {
        name: "Gemini AI",
        icon: "/techs/gemini.svg",
      },
      {
        name: "Clerk",
      },
    ],
  },

  {
    id: "urban-furniture",
    title: "Urban Furniture – Enterprise Accounting System",
    category: "Fullstack",
    description:
      "Enterprise-grade accounting and ERP platform with strict double-entry ledger enforcement, commercial workflows, financial reporting, RBAC, and self-service customer/vendor portals.",
    detailedDescription:
      "Urban Furniture is a full-stack enterprise accounting and ERP platform designed around the financial and operational requirements of a modern manufacturing and retail business. The system manages the complete lifecycle of core master data, including contacts, products, chart of accounts, journals, analytic accounts, and budgets. Its accounting layer is built around strict double-entry ledger invariants, ensuring that every automated or manual financial transaction remains mathematically balanced before being persisted. The platform supports complete purchase-to-pay workflows, from purchase orders and vendor bills through payment reconciliation, alongside order-to-cash workflows covering sales orders, customer invoices, and payment collection. It also provides financial and operational reporting, including Balance Sheets, Profit and Loss statements, budget-versus-actual analysis, and inventory stock valuation. Multi-role access control and a dedicated self-service portal allow customers and vendors to securely access their own financial documents and submit payments, with email-based onboarding integrated into the contact lifecycle.",
    image: "/projects/urban-furniture.png",
    liveUrl: null,
    githubUrl: "https://github.com/TheMercury1229/odoo-finale",
    techs: [
      {
        name: "Next.js",
        icon: "/techs/nextjs.svg",
        invertInDark: true,
      },
      {
        name: "TypeScript",
        icon: "/techs/typescript.svg",
      },
      {
        name: "Express.js",
        icon: "/techs/expressjs.svg",
      },
      {
        name: "PostgreSQL",
        icon: "/techs/postgresql.svg",
      },
      {
        name: "Drizzle ORM",
        icon: "/techs/drizzle.svg",
        invertInDark: true,
      },
      {
        name: "Better Auth",
      },
      {
        name: "Zod",
      },
    ],
  },

  {
    id: "mercury-cli",
    title: "Mercury CLI",
    category: "AI",
    description:
      "AI-powered terminal assistant featuring conversational chat, web search, sandboxed code execution, real-time streaming, and autonomous full-app scaffolding.",
    detailedDescription:
      "Mercury CLI is an intelligent terminal assistant built to bring conversational AI, automated tooling, and full-stack application scaffolding directly into the developer's command line. It features interactive streaming chat powered by Gemini AI and the Vercel AI SDK, live web search capabilities, and sandboxed code execution. Mercury CLI includes an agentic generation mode that can autonomously generate and scaffold full-stack applications based on natural language prompts. It supports OAuth authentication, session storage, and persistent chat history backed by PostgreSQL and Prisma.",
    image: "/projects/mercury-cli.png",
    liveUrl: null,
    githubUrl: "https://github.com/TheMercury1229/mercury-cli",
    techs: [
      {
        name: "Node.js",
        icon: "/techs/nodejs.svg",
      },
      {
        name: "PostgreSQL",
        icon: "/techs/postgresql.svg",
      },
      {
        name: "Prisma",
        icon: "/techs/prisma.svg",
        invertInDark: true,
      },
      {
        name: "Gemini AI",
        icon: "/techs/gemini.svg",
      },
      {
        name: "Vercel AI SDK",
        icon: "/techs/vercel.svg",
        invertInDark: true,
      },
    ],
  },

  {
    id: "ai-fairness-bias-mitigation-toolkit",
    title: "AI Fairness & Bias Mitigation Toolkit",
    category: "AI",
    description:
      "End-to-end framework for detecting, analyzing, explaining, and mitigating algorithmic bias in machine learning models for HR and recruitment datasets.",
    detailedDescription:
      "The AI Fairness & Bias Mitigation Toolkit is an end-to-end framework developed to identify and reduce algorithmic discrimination in machine learning systems, with a particular focus on HR and recruitment datasets involving protected attributes such as gender, ethnicity, and age. The toolkit detects and quantifies bias using fairness metrics including Disparate Impact Ratio, Demographic Parity Difference, and Equal Opportunity Difference, while also performing group-distribution analysis, selection-rate analysis, correlation checks for proxy bias, and root-cause diagnosis. Once bias is identified, the system supports mitigation at multiple stages of the machine learning lifecycle through AIF360 Reweighing as a pre-processing approach, Fairlearn Exponentiated Gradient for fairness-constrained in-processing, and Threshold Optimizer for post-processing. A strategy recommender and simulator help evaluate mitigation approaches by comparing fairness improvements against model accuracy retention. The toolkit supports Scikit-learn models including Logistic Regression and Random Forest, while SHAP is used to provide feature-level and group-wise explainability. The complete workflow can be executed through a CLI pipeline or an interactive Streamlit dashboard, allowing users to upload datasets, inspect bias, compare baseline and mitigated models, explore explainability results, and select mitigation strategies based on fairness-accuracy trade-offs.",
    image: "/projects/ai-fairness.png",
    liveUrl: null,
    githubUrl:
      "https://github.com/TheMercury1229/Bias-Detection-and-Mitigation-for-AI-based-hiring-processes",
    techs: [
      {
        name: "Python",
        icon: "/techs/python.svg",
      },
      {
        name: "Scikit-learn",
      },
      {
        name: "AIF360",
      },
      {
        name: "Fairlearn",
      },
      {
        name: "SHAP",
      },
      {
        name: "Streamlit",
      },
    ],
  },

  {
    id: "pict-mun-chit-system",
    title: "PICT-MUN Chit System",
    category: "Fullstack",
    description:
      "Real-time digital chit messaging system for PICT Model United Nations, replacing paper-based delegate communication with moderated message routing.",
    detailedDescription:
      "The PICT-MUN Chit System is a real-time digital messaging platform built for PICT Model United Nations conferences to replace the traditional paper chit workflow used by delegates. The system enables delegates to send messages through a structured moderation flow in which the Executive Board reviews and approves or rejects messages before they are delivered. Real-time communication is handled using Socket.IO, allowing users to receive chit updates and status changes without repeatedly refreshing the application. The platform also includes dedicated administrative workflows for managing participants and system access, including user creation and deletion, credential handling, role-based protection, and CSV-based participant management. Authentication is implemented using JWT stored in httpOnly cookies, while separate middleware protects general, administrator, and Executive Board routes. The application was designed around the operational needs of a live conference environment where reliable real-time communication and controlled message routing are essential.",
    image: "/projects/mun-chit.png",
    liveUrl: "https://mun-chits-hardik.vercel.app/",
    githubUrl: "https://github.com/TheMercury1229/mun-chit-system",
    techs: [
      {
        name: "React.js",
        icon: "/techs/react.svg",
      },
      {
        name: "Node.js",
        icon: "/techs/nodejs.svg",
      },
      {
        name: "PostgreSQL",
        icon: "/techs/postgresql.svg",
      },
      {
        name: "Prisma",
        icon: "/techs/prisma.svg",
        invertInDark: true,
      },
      {
        name: "Socket.io",
        icon: "/techs/socket-io.svg",
      },
      {
        name: "Upstash Redis",
      },
    ],
  },

  {
    id: "wealthify",
    title: "Wealthify – AI-Powered Personal Finance Manager",
    category: "Fullstack",
    description:
      "AI-powered personal finance platform for managing bank accounts, transactions, monthly budgets, recurring payments, and intelligent financial insights.",
    detailedDescription:
      "Wealthify is a full-stack personal finance management platform that brings bank account management, income and expense tracking, budgeting, recurring transactions, and financial insights into a single dashboard. Users can manage multiple savings and current accounts with real-time balance tracking, record categorized transactions with dates and optional receipt uploads, and configure transactions to repeat automatically on daily, weekly, monthly, or yearly schedules. The application uses Inngest for background processing to automatically create recurring transaction entries and monitor monthly spending against user-defined budgets. When spending approaches or exceeds a configured budget limit, automated notifications are delivered through Resend using React Email templates. The platform also integrates Google Gemini to generate AI-powered summaries and insights based on users' financial activity and spending habits. Interactive Recharts visualizations provide a clear overview of financial patterns, while Clerk authentication and Arcjet protection provide secure access with rate limiting and bot detection.",
    image: "/projects/wealthify.png",
    liveUrl: "https://wealthify-zeta.vercel.app",
    githubUrl: "https://github.com/TheMercury1229/ai-finance-app",
    techs: [
      {
        name: "Next.js",
        icon: "/techs/nextjs.svg",
        invertInDark: true,
      },
      {
        name: "TypeScript",
        icon: "/techs/typescript.svg",
      },
      {
        name: "PostgreSQL",
        icon: "/techs/postgresql.svg",
      },
      {
        name: "Prisma",
        icon: "/techs/prisma.svg",
        invertInDark: true,
      },
      {
        name: "Gemini AI",
        icon: "/techs/gemini.svg",
      },
      {
        name: "Inngest",
      },
      {
        name: "Clerk",
      },
      {
        name: "Arcjet",
      },
      {
        name: "Resend",
      },
    ],
  },

  {
    id: "transitops",
    title: "TransitOps – Fleet & Transit Operations Management",
    category: "Fullstack",
    description:
      "Full-stack fleet operations platform for managing vehicles, drivers, trips, fuel, maintenance, expenses, and analytics with granular role-based access control.",
    detailedDescription:
      "TransitOps is a comprehensive fleet and transit operations management platform designed for organizations responsible for managing vehicle fleets. The application supports the complete operational lifecycle, beginning with vehicle registration and driver onboarding and extending through trip dispatching and completion, fuel tracking, maintenance scheduling, and operational expense management. A central part of the system is its role-based access control architecture, which supports four distinct operational roles—Fleet Manager, Dispatcher, Safety Officer, and Financial Analyst. Permissions are enforced across both the frontend and backend so users can access only the resources and actions relevant to their responsibilities. The platform combines operational data with role-specific dashboards and workflows, enabling different stakeholders to manage fleet activities while maintaining controlled access to sensitive information and business operations.",
    image: "/projects/transitops.png",
    liveUrl: null,
    githubUrl: "https://github.com/TheMercury1229/odoo-hackathon-transitops",
    techs: [
      {
        name: "Next.js",
        icon: "/techs/nextjs.svg",
        invertInDark: true,
      },
      {
        name: "TypeScript",
        icon: "/techs/typescript.svg",
      },
      {
        name: "Node.js",
        icon: "/techs/nodejs.svg",
      },
      {
        name: "Express.js",
        icon: "/techs/expressjs.svg",
      },
      {
        name: "MongoDB",
        icon: "/techs/mongodb.svg",
      },
      {
        name: "JWT",
      },
    ],
  },

  {
    id: "match-updates-api",
    title: "Match Updates API & WebSocket Server",
    category: "Backend",
    description:
      "Real-time match commentary backend combining REST APIs and WebSockets for live commentary publishing and match-specific subscriptions.",
    detailedDescription:
      "Match Updates API & WebSocket Server is a real-time backend system built to manage matches and deliver live commentary updates to subscribed clients. The application exposes REST APIs for creating and listing matches, retrieving commentary for individual matches, and publishing new commentary entries. Alongside the HTTP API, a WebSocket server allows clients to subscribe and unsubscribe from specific matches, ensuring that new commentary is instantly broadcast only to users following the relevant match. PostgreSQL and Drizzle ORM provide the persistence and schema management layer, while Zod validates incoming data before it reaches application logic. Arcjet is integrated across both HTTP and WebSocket interactions to provide rate limiting, bot detection, and protection against common web attacks. The architecture separates request controllers, routes, database definitions, validation schemas, WebSocket logic, and security configuration, resulting in a focused backend implementation for event-driven real-time communication.",
    image: "/projects/match-updates-api.png",
    liveUrl: null,
    githubUrl: "https://github.com/TheMercury1229/sportz-api",
    techs: [
      {
        name: "Node.js",
        icon: "/techs/nodejs.svg",
      },
      {
        name: "Express.js",
        icon: "/techs/expressjs.svg",
      },
      {
        name: "WebSockets",
      },
      {
        name: "PostgreSQL",
        icon: "/techs/postgresql.svg",
      },
      {
        name: "Drizzle ORM",
        icon: "/techs/drizzle.svg",
        invertInDark: true,
      },
      {
        name: "Arcjet",
      },
      {
        name: "Zod",
      },
    ],
  },

  {
    id: "taskify",
    title: "Taskify – Task Management Platform",
    category: "Fullstack",
    description:
      "Full-featured task and project management application with task tracking, project organization, calendar views, priority management, and authentication.",
    detailedDescription:
      "Taskify is a full-stack task management application designed to help users organize tasks and projects in a structured workspace. Users can create, update, delete, and filter tasks while organizing them under dedicated projects for better tracking and management. Tasks can be categorized and assigned priority levels such as High, Medium, or Low, while an interactive calendar view allows users to visualize tasks according to their due dates. The application includes secure registration and login using JWT authentication and uses React Query to keep application data synchronized with seamless UI updates. Built with the Next.js App Router and TypeScript, Taskify uses Zustand for client-side state management and Next.js API routes for backend functionality. PostgreSQL and Drizzle ORM handle database persistence, while Tailwind CSS and shadcn/ui are used to create the interface. The project combines task CRUD operations, project organization, categorization, priority management, authentication, and calendar-based planning into a single productivity application.",
    image: "/projects/taskify.png",
    liveUrl: "https://taskify-xi-six.vercel.app/",
    githubUrl: "https://github.com/TheMercury1229/taskify",
    techs: [
      {
        name: "Next.js",
        icon: "/techs/nextjs.svg",
        invertInDark: true,
      },
      {
        name: "TypeScript",
        icon: "/techs/typescript.svg",
      },
      {
        name: "PostgreSQL",
        icon: "/techs/postgresql.svg",
      },
      {
        name: "Drizzle ORM",
        icon: "/techs/drizzle.svg",
        invertInDark: true,
      },
      {
        name: "Zustand",
        icon: "/techs/zustand.png",
      },
      {
        name: "React Query",
        icon: "/techs/react-query.png",
      },
      {
        name: "JWT",
      },
      {
        name: "Tailwind CSS",
        icon: "/techs/tailwindcss.svg",
      },
    ],
  },

  {
    id: "linkify",
    title: "Linkify – URL Shortener",
    category: "Fullstack",
    description:
      "Full-stack URL shortening platform with authenticated link management, instant redirects, click tracking, and time-based analytics.",
    detailedDescription:
      "Linkify is a focused full-stack URL shortening application built around simple link creation and analytics. Users can register and authenticate using JWT-based authentication, create short links from long URLs, manage the links associated with their account, and monitor engagement through a dashboard. Each generated short URL maps back to its original destination, and visits are handled through an HTTP redirect flow while click events are recorded for analytics. The application provides per-link click analytics over configurable date ranges as well as aggregated click data across a user's links. Users can also remove links they own, while theme support provides both light and dark interfaces. The frontend is built with Next.js and manages the user-facing dashboard and analytics experience, while a Spring Boot backend handles authentication, URL mapping, redirects, click-event persistence, and protected API operations.",
    image: "/projects/linkify.png",
    liveUrl: null,
    githubUrl: "https://github.com/TheMercury1229/url-shortner",
    techs: [
      {
        name: "Next.js",
        icon: "/techs/nextjs.svg",
        invertInDark: true,
      },
      {
        name: "TypeScript",
        icon: "/techs/typescript.svg",
      },
      {
        name: "Spring Boot",
        icon: "/techs/springboot.svg",
      },
      {
        name: "Java",
        icon: "/techs/java.svg",
      },
      {
        name: "MySQL",
      },
      {
        name: "JWT",
      },
    ],
  },

  {
    id: "notes-api",
    title: "Notes API",
    category: "Backend",
    description:
      "RESTful note-taking API with JWT authentication, user-isolated CRUD operations, validation, Swagger documentation, and automated testing.",
    detailedDescription:
      "Notes API is a RESTful backend application built with NestJS for securely managing personal notes. The API provides registration and login workflows using JWT authentication and bcrypt-hashed passwords, after which authenticated users can create, retrieve, update, and delete their own notes. User isolation is enforced throughout the application so notes belonging to one user cannot be accessed through another user's authenticated session. The project uses NestJS's modular architecture to separate authentication and note management into dedicated modules, with DTO-based request handling and global validation for incoming data. Prisma provides type-safe database access on top of SQLite, while Swagger generates interactive API documentation for exploring and testing the available endpoints. The project also includes unit, coverage, and end-to-end testing workflows using Jest and Supertest, making it a structured backend implementation that combines authentication, authorization, validation, persistence, documentation, and testing.",
    image: "/projects/notes-api.png",
    liveUrl: null,
    githubUrl: "https://github.com/TheMercury1229/NotesAPI",
    techs: [
      {
        name: "NestJS",
      },
      {
        name: "TypeScript",
        icon: "/techs/typescript.svg",
      },
      {
        name: "Prisma",
        icon: "/techs/prisma.svg",
        invertInDark: true,
      },
      {
        name: "SQLite",
      },
      {
        name: "JWT",
      },
      {
        name: "Swagger",
      },
      {
        name: "Jest",
      },
    ],
  },

  {
    id: "ai-invoice-generator",
    title: "AI Invoice Generator",
    category: "AI",
    description:
      "Full-stack invoice management application with authenticated invoice CRUD operations and optional Gemini-powered AI-assisted invoice features.",
    detailedDescription:
      "AI Invoice Generator is a full-stack application designed for authenticated users to create and manage invoices through a dedicated web interface. The platform provides registration and login workflows using JSON Web Tokens and exposes protected invoice operations that allow users to create, retrieve, update, and delete their invoices. The frontend is built with React and Vite, providing the interface for invoice management, while the backend uses Express and MongoDB through Mongoose to manage application data and API operations. Google GenAI is integrated as an optional AI layer for invoice extraction and AI-assisted functionality, allowing the application to extend traditional invoice management with intelligent capabilities. The project follows a separated client-server architecture, with the React client communicating with an Express API responsible for authentication, invoice operations, database persistence, and AI-assisted processing.",
    image: "/projects/ai-invoice-generator.png",
    liveUrl: "https://ai-invoice-frontend.vercel.app/",
    githubUrl:
      "https://github.com/TheMercury1229/ai-invoice-generator-js",
    techs: [
      {
        name: "React.js",
        icon: "/techs/react.svg",
      },
      {
        name: "JavaScript",
        icon: "/techs/javascript.svg",
      },
      {
        name: "Node.js",
        icon: "/techs/nodejs.svg",
      },
      {
        name: "Express.js",
        icon: "/techs/expressjs.svg",
      },
      {
        name: "MongoDB",
        icon: "/techs/mongodb.svg",
      },
      {
        name: "JWT",
      },
      {
        name: "Gemini AI",
        icon: "/techs/gemini.svg",
      },
    ],
  },

  {
    id: "x-clone",
    title: "X Clone – Social Media Platform",
    category: "Fullstack",
    description:
      "Full-stack social media platform inspired by X, featuring authentication, posts, user connections, and media uploads.",
    detailedDescription:
      "X Clone is a MERN-stack social media application inspired by the core experience of the X platform. The application provides a complete user authentication flow with signup, login, and logout functionality, allowing authenticated users to create and manage their own posts. Users can create, read, update, and delete posts, as well as follow and unfollow other users to establish social connections within the platform. The backend is built with Node.js and Express, using MongoDB and Mongoose for data persistence, while JWT handles authentication. Cloudinary is integrated for media and image uploads. The frontend is built with React and uses DaisyUI for responsive styling, along with React Router for client-side navigation and React Hot Toast for user feedback. The project follows a separated frontend-backend architecture and brings together authentication, social interactions, content management, and media handling into a complete social media application.",
    image: "/projects/x-clone.png",
    liveUrl: "https://x-clone-hg.onrender.com/",
    githubUrl: "https://github.com/TheMercury1229/twitter",
    techs: [
      {
        name: "React.js",
        icon: "/techs/react.svg",
      },
      {
        name: "Node.js",
        icon: "/techs/nodejs.svg",
      },
      {
        name: "Express.js",
        icon: "/techs/expressjs.svg",
      },
      {
        name: "MongoDB",
        icon: "/techs/mongodb.svg",
      },
      {
        name: "JWT",
      },
      {
        name: "Cloudinary",
      },
      {
        name: "DaisyUI",
      },
    ],
  },

  {
    id: "fizzi",
    title: "Fizzi – Interactive Soda Brand Landing Page",
    category: "Frontend",
    description:
      "Immersive animated landing page for an imaginary soda brand, combining 3D experiences with modern web technologies and CMS-driven content.",
    detailedDescription:
      "Fizzi is an interactive marketing landing page created for an imaginary soda brand. The project focuses on creating an engaging and visually rich product experience rather than building a traditional dashboard or application workflow. Three.js is used to introduce interactive 3D elements and animation into the website, creating a more immersive presentation for the brand and its products. The application is built with Next.js, while Prismic CMS is used to manage and deliver content dynamically. The project combines modern frontend development with 3D web experiences and headless CMS-driven content, resulting in a visually focused landing page designed around branding, storytelling, animation, and interactive presentation.",
    image: "/projects/fizzi.png",
    liveUrl: "https://fizzi-blue.vercel.app/",
    githubUrl: "https://github.com/TheMercury1229/fizzi",
    techs: [
      {
        name: "Next.js",
        icon: "/techs/nextjs.svg",
        invertInDark: true,
      },
      {
        name: "Three.js",
      },
      {
        name: "Prismic CMS",
      },
    ],
  },

  {
    id: "ai-seo-frontend",
    title: "AI SEO – SaaS Landing Page",
    category: "Frontend",
    description:
      "Modern frontend landing page for an AI-powered SEO platform, designed to showcase intelligent optimization tools and product capabilities.",
    detailedDescription:
      "AI SEO is a frontend SaaS landing page created for an AI-powered search engine optimization platform. The project focuses on presenting a polished product experience for a fictional AI SEO tool that helps businesses improve website visibility through intelligent and user-friendly optimization workflows. The landing page communicates core product concepts such as a user-friendly dashboard, one-click optimization, and a smart keyword generator, alongside sections for social proof, customer testimonials, product positioning, and waitlist conversion. The design is structured like a modern SaaS marketing website, with feature sections, trusted-company branding, testimonial content, and strong calls to action. This project is primarily a frontend implementation focused on translating a complete SaaS product concept into a responsive and visually structured marketing experience rather than implementing the underlying AI SEO functionality.",
    image: "/projects/ai-seo.png",
    liveUrl: "https://ai-seo-frontend.vercel.app/",
    githubUrl: null,
    techs: [
      {
        name: "Next.js",
        icon: "/techs/nextjs.svg",
        invertInDark: true,
      },
      {
        name: "TypeScript",
        icon: "/techs/typescript.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "/techs/tailwindcss.svg",
      },
    ],
  },
];