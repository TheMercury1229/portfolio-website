import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skill from "../components/Skill";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ReactLenis from "lenis/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.fromTo(
      ".section-2",
      { opacity: 0 },
      { opacity: 1, duration: 3, ease: "power2.out" }
    );
  }, []);
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");
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
  });
  return (
    <ReactLenis root>
      <Header />
      <main className="section-2">
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default HomePage;
