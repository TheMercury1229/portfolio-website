import React, { useEffect, useState, useMemo } from "react";
import ProjectCard from "../components/ProjectCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FooterText from "../components/FooterText";
import { Link } from "react-router-dom";
import { works } from "../data";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");

  // Memoized unique categories
  const uniqueCategories = useMemo(() => {
    return ["All", ...new Set(works.map((work) => work.category))];
  }, [works]);

  // Memoized filtered categories
  const filteredCategories = useMemo(() => {
    if (activeCategory === "All") {
      return works;
    }
    return works.filter((work) => work.category === activeCategory);
  }, [activeCategory, works]);

  useEffect(() => {
    gsap.killTweensOf(".reveal-up");
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const elements = gsap.utils.toArray(".reveal-up");
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
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
        }
      );
    });
  }, [filteredCategories]); // Reinitialize animations when the filtered items change

  return (
    <div className="section pb-10">
      <div className="container relative">
        <Link
          to="/"
          className="absolute gap-2 top-[-50px] right-4 flex items-center text-lg text-zinc-500 hover:text-white group"
        >
          <span className="material-symbols-rounded">arrow_back</span>
          <span>Home</span>
        </Link>
        <h2 className="headline-1 mb-8">My projects</h2>

        <div className="flex items-center justify-start text-sm flex-wrap gap-3 mb-8">
          {uniqueCategories.map((category, index) => (
            <p
              key={index}
              className={`cursor-pointer py-2 px-3 rounded-lg text-lg transition-[background-color,color,border] duration-100 ${
                activeCategory === category
                  ? "text-zinc-800 bg-white border border-black"
                  : "text-zinc-300 bg-zinc-800 border border-zinc-800 hover:bg-zinc-700"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </p>
          ))}
        </div>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {filteredCategories.map((work, index) => (
            <ProjectCard
              key={index}
              classes={"reveal-up"}
              imgSrc={work.imgSrc}
              title={work.title}
              tags={work.tags}
              projectLink={work.projectLink}
              id={work.id}
              githubLink={work.githubLink}
            />
          ))}
        </div>
        <FooterText />
      </div>
    </div>
  );
};

export default Projects;
