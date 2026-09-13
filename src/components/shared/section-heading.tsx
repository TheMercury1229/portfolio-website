import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
  titleClassName?: string;
  id?: string;
  as?: "h2" | "h3";
  rightElement?: React.ReactNode;
  children?: React.ReactNode;
}

export function SectionHeading({
  title,
  subtitle,
  badge,
  className,
  titleClassName,
  id,
  as: Component = "h2",
  rightElement,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-5",
        className
      )}
    >
      <div className="flex flex-col gap-1 min-w-0">
        {badge && (
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
            {badge}
          </span>
        )}
        <Component
          id={id}
          className={cn(
            "text-xl sm:text-2xl font-bold tracking-tight text-foreground",
            titleClassName
          )}
        >
          {title}
        </Component>
        {subtitle && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      {rightElement && (
        <div className="flex items-center shrink-0">{rightElement}</div>
      )}
      {children}
    </div>
  );
}

export default SectionHeading;
