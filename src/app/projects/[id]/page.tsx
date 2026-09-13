import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { ALL_PROJECTS } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { SkillBadge } from "@/components/ui/skill-badge";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return ALL_PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = ALL_PROJECTS.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Hardik Gujrathi`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1920,
          height: 1080,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Hardik Gujrathi`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const currentIndex = ALL_PROJECTS.findIndex((p) => p.id === id);

  if (currentIndex === -1) {
    notFound();
  }

  const project = ALL_PROJECTS[currentIndex];
  const prevProject =
    currentIndex > 0
      ? ALL_PROJECTS[currentIndex - 1]
      : ALL_PROJECTS[ALL_PROJECTS.length - 1];
  const nextProject =
    currentIndex < ALL_PROJECTS.length - 1
      ? ALL_PROJECTS[currentIndex + 1]
      : ALL_PROJECTS[0];

  return (
    <div className="w-full py-4 sm:py-6 flex flex-col gap-6 sm:gap-8">
      {/* 1. Breadcrumb / Back button */}
      <FadeIn yOffset={6}>
        <div className="flex items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to all projects</span>
          </Link>
          <span className="text-xs text-muted-foreground font-mono">
            {currentIndex + 1} of {ALL_PROJECTS.length}
          </span>
        </div>
      </FadeIn>

      {/* 2. Full-Width Showcase Project Image */}
      <FadeIn yOffset={10}>
        <div className="relative w-full rounded-2xl overflow-hidden border border-border/80 bg-muted/20 shadow-sm">
          <Image
            src={project.image}
            alt={project.title}
            width={1920}
            height={1080}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 900px"
            className="w-full h-auto block"
          />
        </div>
      </FadeIn>

      {/* 3. Below the Image: Details, Action buttons, Skill Badges & Description */}
      <FadeIn yOffset={12}>
        <div className="flex flex-col gap-6 sm:gap-8">
          {/* Header Row: Category Badge, Title, and Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 ">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              {project.title}
            </h1>

            {/* Action buttons (Live Demo & Repository) */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
              {project.liveUrl && (
                <Button
                  href={project.liveUrl}
                  target="_blank"
                  variant="default"
                  size="sm"
                  className="flex-1 sm:flex-initial justify-center"
                  leftIcon={<ExternalLink className="h-3.5 w-3.5" />}
                >
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  target="_blank"
                  variant="outline"
                  size="sm"
                  className="flex-1 sm:flex-initial justify-center"
                  leftIcon={
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  }
                >
                  Repository
                </Button>
              )}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <h2 className="text-sm sm:text-base font-bold  leading-relaxed uppercase  text-foreground">
              Tech Stack
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              {project.techs.map((tech) => (
                <SkillBadge
                  key={tech.name}
                  name={tech.name}
                  icon={tech.icon}
                  invertInDark={tech.invertInDark}
                  size="md"
                />
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-2 pt-5 border-t border-border/40">
            <h2 className="text-sm sm:text-base font-bold leading-relaxed text-foreground uppercase">
              Overview
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture & Implementation */}
          {project.detailedDescription && (
            <div className="space-y-3 pt-5 border-t border-border/40">
              <h2 className="text-sm sm:text-base font-bold leading-relaxed uppercase text-foreground">
                Architecture &amp; Implementation
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {project.detailedDescription
                  .split("\n\n")
                  .map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
              </div>
            </div>
          )}

          {/* Bottom Next / Previous Project Navigation */}
          <div className="pt-6 border-t border-border/40 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Link
              href={`/projects/${prevProject.id}`}
              className="group flex flex-col p-4 rounded-xl border border-border/60 hover:border-foreground/30 bg-muted/20 hover:bg-muted/40 transition-all text-left"
            >
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-medium mb-1">
                <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
                Previous Project
              </span>
              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                {prevProject.title}
              </span>
            </Link>

            <Link
              href={`/projects/${nextProject.id}`}
              className="group flex flex-col items-start sm:items-end text-left sm:text-right p-4 rounded-xl border border-border/60 hover:border-foreground/30 bg-muted/20 hover:bg-muted/40 transition-all"
            >
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-medium mb-1">
                Next Project
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                {nextProject.title}
              </span>
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
