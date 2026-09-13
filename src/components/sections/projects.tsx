import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/shared/project-card";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/fade-in";

export default function Projects() {
  // Primary featured projects: PICT-MUN Chit System & Mercury CLI
  const featuredProjects = PROJECTS.slice(0, 2);

  return (
    <section id="projects" className="w-full py-8 sm:py-12">
      <FadeIn yOffset={10}>
        <SectionHeading
          title="Featured Projects"
        // subtitle="Selected work in full-stack platforms, developer tooling, and AI workflows."
        />
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
        {featuredProjects.map((project) => (
          <FadeInStaggerItem key={project.id} yOffset={12} className="h-full">
            <ProjectCard project={project} />
          </FadeInStaggerItem>
        ))}
      </FadeInStagger>

      {/* See all projects link at bottom */}
      <FadeIn yOffset={8} delay={0.1} className="mt-6 flex items-center justify-start">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:underline"
        >
          <span>See all projects</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </FadeIn>
    </section>
  );
}
