import { ButtonPrimary } from "./Button";
import ProjectCard from "./ProjectCard";

const works = [
  {
    id: 1,
    imgSrc: "/project-1.png",
    title: "Memeverse - A  meme creation and sharing webapp",
    tags: ["NextJs", "TypeScript", "TailwindCSS", "ImageKit.io", "DrizzleORM"],
    projectLink: "https://memeverse-three-phi.vercel.app/",
    githubLink: "https://github.com/TheMercury1229/memeverse",
  },
  {
    id: 2,
    imgSrc: "/project-2.png",
    title: "Hgestate - Real estate website made with MERN",
    tags: ["MERN", "Javascript", "TailwindCSS", "Firebase"],
    projectLink: "https://hgestate.onrender.com",
    githubLink: "https://github.com/TheMercury1229/Real-Estate",
  },
  {
    id: 3,
    imgSrc: "/project-3.png",
    title: "X-Clone - A twitter clone made using the MERN stack",
    tags: ["MERN", "TailwindCSS", "DaisyUI", "Cloudinary"],
    projectLink: "https://x-clone-hg.onrender.com",
    githubLink: "https://github.com/TheMercury1229/twitter",
  },
  {
    id: 4,
    imgSrc: "/project-4.png",
    title: "SlotSync - A powerfull meeting scheduling web app",
    tags: ["NextJs", "Auth.js", "TypeScript", "TailwindCSS", "Prisma"],
    projectLink: "https://slot-sync.vercel.app",
    githubLink: "https://github.com/TheMercury1229/SlotSync",
  },
  {
    id: 5,
    imgSrc: "/project-5.png",
    title: "MUN Chit App - A chit app developed for the PICT MUN",
    tags: ["PERN", "Javascript", "TailwindCSS", "Socket.io", "ShadcnUI"],
    projectLink: "https://mun-chits.onrender.com",
    githubLink: "https://github.com/TheMercury1229/MUN_chits",
  },
  {
    id: 6,
    imgSrc: "/project-6.png",
    title: "AI -SEO Frontend Website",
    tags: ["Web-design", "Development", "NextJs", "TypeScript", "TailwindCSS"],
    projectLink: "https://github.com/TheMercury1229/ai-seo-frontend",
    githubLink: "https://ai-seo-frontend.vercel.app/",
  },
];

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8">My portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map((work, index) => (
            <ProjectCard
              classes={"reveal-up"}
              key={index}
              imgSrc={work.imgSrc}
              id={work.id}
              title={work.title}
              tags={work.tags}
              projectLink={work.projectLink}
              githubLink={work.githubLink}
            />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <ButtonPrimary
            href={"/projects"}
            label={"View all projects"}
            icon="arrow_right_alt"
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
