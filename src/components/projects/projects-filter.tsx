"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { type ProjectCategory, type ProjectItemDetails } from "@/data/projects";
import { ProjectCard } from "@/components/shared/project-card";
import { cn } from "@/lib/utils";

const CATEGORIES: Array<"All" | ProjectCategory> = [
  "All",
  "Fullstack",
  "AI",
  "Backend",
  "Frontend",
];

export function ProjectsFilter({
  projects,
}: {
  projects: ProjectItemDetails[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<"All" | ProjectCategory>("All");

  // Calculate project counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projects.length };
    for (const project of projects) {
      counts[project.category] = (counts[project.category] || 0) + 1;
    }
    return counts;
  }, [projects]);

  // Filter projects according to category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projects;
    }
    return projects.filter((project) => project.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pt-2">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer select-none",
                isSelected
                  ? "bg-foreground text-background shadow-xs font-semibold"
                  : "bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/50"
              )}
            >
              <span>{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, delay: idx * 0.03, ease: "easeOut" }}
              className="h-full"
            >
              <ProjectCard project={project} priorityImage={idx < 2} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State fallback */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12 rounded-xl border border-dashed border-border/80 p-8 space-y-2">
          <p className="text-sm font-medium text-foreground">
            No projects found in this category.
          </p>
          <button
            type="button"
            onClick={() => setSelectedCategory("All")}
            className="text-xs text-primary underline underline-offset-4 hover:opacity-80 cursor-pointer"
          >
            Reset filter
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectsFilter;
