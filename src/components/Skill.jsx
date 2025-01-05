import SkillCard from "./SkillCard";

const skillItem = [
  // Programming Languages
  {
    imgSrc: "/typescript.svg",
    label: "TypeScript",
    desc: "JavaScript Superset",
  },
  {
    imgSrc: "/javascript.svg",
    label: "JavaScript",
    desc: "Programming Language",
  },
  {
    imgSrc: "/python.svg",
    label: "Python",
    desc: "Programming Language",
  },
  {
    imgSrc: "/cpp.svg",
    label: "C++",
    desc: "Programming Language",
  },

  // UI and Styling
  {
    imgSrc: "/css3.svg",
    label: "CSS",
    desc: "Styling Web Pages",
  },
  {
    imgSrc: "/sass.svg",
    label: "Sass",
    desc: "CSS Preprocessor",
  },
  {
    imgSrc: "/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "Utility-first CSS",
  },
  {
    imgSrc: "/shadcn-ui.png",
    label: "Shadcn UI",
    desc: "UI Components",
  },
  {
    imgSrc: "/motion.svg",
    label: "Motion",
    desc: "Animation Library",
  },
  {
    imgSrc: "/gsap.svg",
    label: "GSAP",
    desc: "Animation Library",
  },

  // Frontend Frameworks and Libraries
  {
    imgSrc: "/react.svg",
    label: "React",
    desc: "Frontend Library",
  },
  {
    imgSrc: "/nextjs.svg",
    label: "NextJS",
    desc: "React Framework",
  },

  // Backend Frameworks and Tools
  {
    imgSrc: "/nodejs.svg",
    label: "NodeJS",
    desc: "JavaScript Runtime",
  },
  {
    imgSrc: "/expressjs.svg",
    label: "ExpressJS",
    desc: "Web Framework",
  },

  // Databases and ORM
  {
    imgSrc: "/mongodb.svg",
    label: "MongoDB",
    desc: "NoSQL Database",
  },
  {
    imgSrc: "/postgresql.svg",
    label: "PostgreSQL",
    desc: "SQL Database",
  },
  {
    imgSrc: "/prisma.svg",
    label: "Prisma",
    desc: "Database ORM",
  },

  // State Management
  {
    imgSrc: "/zustand.png",
    label: "Zustand",
    desc: "State Management",
  },
  {
    imgSrc: "/redux.png",
    label: "Redux",
    desc: "State Management",
  },
  {
    imgSrc: "/react-query.png",
    label: "Tanstack Query",
    desc: "Data Fetching",
  },

  // Real-time Communication
  {
    imgSrc: "/socket-io.svg",
    label: "Socket.io",
    desc: "Real-time Communication",
  },

  // Version Control and Deployment
  {
    imgSrc: "/git.svg",
    label: "Git",
    desc: "Version Control",
  },
  {
    imgSrc: "/github.svg",
    label: "GitHub",
    desc: "Code Hosting",
  },
  {
    imgSrc: "/vercel.svg",
    label: "Vercel",
    desc: "Deployment",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))]   sm:grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, index) => (
            <SkillCard
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              key={index}
              classes={"reveal-up"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
