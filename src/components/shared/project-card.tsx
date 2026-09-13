import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { SkillBadge } from "@/components/ui/skill-badge";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    liveUrl?: string | null;
    githubUrl?: string | null;
    category?: string;
    techs: Array<{
      name: string;
      icon?: string;
      invertInDark?: boolean;
    }>;
  };
  className?: string;
  priorityImage?: boolean;
}

export function ProjectCard({
  project,
  className,
  priorityImage = false,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col h-full rounded-2xl border border-border/70 dark:border-neutral-800/90 bg-card hover:bg-neutral-50/40 dark:hover:bg-neutral-900/40 hover:border-foreground/20 dark:hover:border-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-neutral-950/40 p-4 sm:p-5",
        className
      )}
    >
      {/* Full-card link navigating to /projects/[id] */}
      <Link
        href={`/projects/${project.id}`}
        className="absolute inset-0 z-10 rounded-2xl"
        aria-label={`View ${project.title} details`}
      />

      {/* Header: Title, Category badge (if present), and external action links */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 min-w-0">
          <h3 className="font-bold text-base sm:text-lg text-foreground tracking-tight group-hover:text-foreground/90 transition-colors truncate">
            {project.title}
          </h3>
        </div>

        {/* Desktop Action Links (hidden on mobile, visible on sm+) */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="hidden sm:flex relative z-20 items-center gap-1 shrink-0 text-muted-foreground">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
                aria-label={`Visit ${project.title} live`}
                className="p-1 rounded-md hover:text-foreground hover:bg-muted/80 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repository"
                aria-label={`View ${project.title} on GitHub`}
                className="p-1 rounded-md hover:text-foreground hover:bg-muted/80 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Preview Image */}
      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-border/60 bg-muted/30 shadow-xs mb-3.5">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={priorityImage}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        />
      </div>

      {/* Description (flexible to align tech footer across cards) */}
      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-1">
        {project.description}
      </p>

      {/* Tech Stack Badges (anchored to bottom) */}
      <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-border/40 mt-auto">
        {project.techs.map((tech) => (
          <SkillBadge
            key={tech.name}
            name={tech.name}
            icon={tech.icon}
            invertInDark={tech.invertInDark}
            size="sm"
          />
        ))}
      </div>

      {/* Mobile Action Buttons (Full width stacked buttons) */}
      {(project.liveUrl || project.githubUrl) && (
        <div className="flex sm:hidden relative z-20 flex-col gap-2 pt-3 mt-3 border-t border-border/40 w-full">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold bg-foreground text-background shadow-xs hover:opacity-90 active:scale-[0.99] transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Live Demo</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold bg-muted/60 text-foreground border border-border/60 hover:bg-muted active:scale-[0.99] transition-all"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 fill-current"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub Repository</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
