import { ArrowUpRight } from "lucide-react";
import { ALL_PROJECTS } from "@/data/projects";
import { ProjectsFilter } from "@/components/projects/projects-filter";
import { FadeIn } from "@/components/ui/fade-in";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects built by Hardik Gujrathi – Full-Stack & AI Engineer building intelligent platforms and developer tooling.",
  openGraph: {
    title: "Projects | Hardik Gujrathi",
    description:
      "Explore projects built by Hardik Gujrathi – Full-Stack & AI Engineer building intelligent platforms and developer tooling.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="w-full py-4 sm:py-6 flex flex-col gap-8 sm:gap-10">
      {/* Page Header & Intro Description */}
      <FadeIn yOffset={12}>
        <div className="space-y-4">
          <div className="space-y-1.5">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              My Projects
            </h1>
          </div>

          <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-3 pt-2">
            <p>
              I love building cool stuff and solving interesting problems with code. From
              containerized AI sandboxes and real-time communication platforms to autonomous
              developer CLIs and enterprise web systems, I focus on crafting software that is
              fast, resilient, and thoughtful under the hood.
            </p>
            <p>
              Below is a collection of projects I&apos;ve engineered and shipped. You can explore
              more experiments, active prototypes, and open-source contributions on my{" "}
              <a
                href="https://github.com/TheMercury1229"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors inline-flex items-center gap-0.5 group"
              >
                <span>GitHub profile</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              .
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Category Filter & Project Grid */}
      <FadeIn yOffset={14}>
        <ProjectsFilter projects={ALL_PROJECTS} />
      </FadeIn>
    </div>
  );
}
