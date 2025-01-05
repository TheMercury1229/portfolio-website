import { Link, useParams } from "react-router-dom";
import { ButtonOutline, ButtonPrimary } from "../components/Button";
import FooterText from "../components/FooterText";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { works } from "../data";

gsap.registerPlugin(ScrollTrigger);

const ProjectPage = () => {
  const { id } = useParams();

  // Convert `id` to a number and find the matching project
  const project = works.find((work) => work.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);

    // GSAP Animation
    const elements = document.querySelectorAll(".reveal-up");
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-100 bottom",
          end: "bottom 100%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });

    // Cleanup ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  if (!project) {
    return (
      <section className="section">
        <div className="container">
          <h2 className="headline-2 text-center">Project not found</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="section pb-10">
      <div className="container relative">
        <Link
          to="/"
          className="absolute gap-2 top-[-50px] right-4 flex items-center text-lg text-zinc-500 hover:text-white group"
        >
          <span className="material-symbols-rounded">arrow_back</span>
          <span>Home</span>
        </Link>
        <figure className="img-box h-[350px] mb-8 sm:h-auto rounded-md reveal-up">
          <img
            src={project.imgSrc}
            className="img-cover h-[550px] w-[100%]"
            alt={project.title}
          />
        </figure>
        <h2 className="headline-2 mb-8 reveal-up">{project.title}</h2>

        <div className="flex flex-wrap reveal-up items-center gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-zinc-400 max-w-[95ch] text-lg mb-4 reveal-up">
          {project.about}
        </p>

        <div className="flex items-center gap-4 mt-8 reveal-up">
          {project.projectLink && (
            <ButtonPrimary
              label="Live Preview"
              href={project.projectLink}
              classes="font-semibold text-lg"
              icon="arrow_right_alt"
              target="_blank"
            />
          )}
          <ButtonOutline
            label="Github"
            href={project.githubLink}
            classes="font-semibold text-lg"
            icon="code"
            target="_blank"
          />
        </div>
        <FooterText />
      </div>
    </section>
  );
};

export default ProjectPage;
