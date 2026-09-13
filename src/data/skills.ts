export interface SkillItem {
  id: string;
  name: string;
  icon: string;
  invertInDark?: boolean;
}

export const SKILLS: SkillItem[] = [
  // AI & Core Languages
  {
    id: "python",
    name: "Python",
    icon: "/techs/python.svg",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "/techs/typescript.svg",
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "/techs/javascript.svg",
  },
  {
    id: "java",
    name: "Java",
    icon: "/techs/java.svg",
  },
  {
    id: "cpp",
    name: "C++",
    icon: "/techs/cpp.svg",
  },
  {
    id: "sql",
    name: "SQL",
    icon: "/techs/sql.svg",
  },

  // AI & Agentic Frameworks
  {
    id: "gemini",
    name: "Gemini API",
    icon: "/techs/gemini.svg",
  },
  {
    id: "langchain",
    name: "LangChain",
    icon: "/techs/langchain.svg",
    invertInDark: true,
  },
  {
    id: "langgraph",
    name: "LangGraph",
    icon: "/techs/langchain.svg",
    invertInDark: true,
  },
  {
    id: "langsmith",
    name: "LangSmith",
    icon: "/techs/langchain.svg",
    invertInDark: true,
  },

  // Frontend & UI
  {
    id: "nextjs",
    name: "Next.js",
    icon: "/techs/nextjs.svg",
    invertInDark: true,
  },
  {
    id: "react",
    name: "React.js",
    icon: "/techs/react.svg",
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    icon: "/techs/tailwindcss.svg",
  },
  {
    id: "motion",
    name: "Motion",
    icon: "/techs/motion.svg",
  },
  {
    id: "gsap",
    name: "GSAP",
    icon: "/techs/gsap.svg",
  },
  {
    id: "react-query",
    name: "React Query",
    icon: "/techs/react-query.png",
  },
  {
    id: "zustand",
    name: "Zustand",
    icon: "/techs/zustand.png",
  },
  {
    id: "redux",
    name: "Redux",
    icon: "/techs/redux.png",
  },
  {
    id: "figma",
    name: "Figma",
    icon: "/techs/figma.svg",
  },

  // Backend & Frameworks
  {
    id: "fastapi",
    name: "FastAPI",
    icon: "/techs/fastapi.svg",
  },
  {
    id: "springboot",
    name: "Spring Boot",
    icon: "/techs/springboot.svg",
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: "/techs/nodejs.svg",
  },
  {
    id: "expressjs",
    name: "Express.js",
    icon: "/techs/expressjs.svg",
  },
  {
    id: "socketio",
    name: "Socket.io",
    icon: "/techs/socket-io.svg",
  },

  // Databases & ORMs
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: "/techs/postgresql.svg",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: "/techs/mongodb.svg",
  },
  {
    id: "prisma",
    name: "Prisma ORM",
    icon: "/techs/prisma.svg",
    invertInDark: true,
  },
  {
    id: "drizzle",
    name: "Drizzle ORM",
    icon: "/techs/drizzle.svg",
    invertInDark: true,
  },

  // Deployment & DevOps
  {
    id: "docker",
    name: "Docker",
    icon: "/techs/docker.svg",
  },
  {
    id: "aws",
    name: "AWS",
    icon: "/techs/aws.svg",
  },
  {
    id: "github-actions",
    name: "GitHub Actions",
    icon: "/techs/github.svg",
    invertInDark: true,
  },
  {
    id: "git",
    name: "Git",
    icon: "/techs/git.svg",
  },
  {
    id: "github",
    name: "GitHub",
    icon: "/techs/github.svg",
    invertInDark: true,
  },
  {
    id: "vercel",
    name: "Vercel",
    icon: "/techs/vercel.svg",
    invertInDark: true,
  },
];
