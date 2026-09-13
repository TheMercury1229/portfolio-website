import Image from "next/image";
import { cn } from "@/lib/utils";

export interface SkillBadgeProps {
  name: string;
  icon?: string;
  invertInDark?: boolean;
  size?: "sm" | "md";
  className?: string;
}

export function SkillBadge({
  name,
  icon,
  invertInDark = false,
  size = "sm",
  className,
}: SkillBadgeProps) {
  const isMd = size === "md";

  return (
    <span
      className={cn(
        "inline-flex items-center select-none transition-all duration-150",
        "bg-background/90 dark:bg-background/50 text-foreground/85 border border-border/70 dark:border-border/50",
        "tag-inner-shadow",
        isMd
          ? "gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm hover:border-foreground/25 hover:bg-muted/20 hover:scale-[1.02]"
          : "gap-1.5 px-2 py-0.5 rounded-md text-xs",
        className
      )}
    >
      {icon && (
        <Image
          src={icon}
          alt={name}
          width={isMd ? 18 : 13}
          height={isMd ? 18 : 13}
          className={cn(
            "object-contain shrink-0",
            isMd ? "w-4 h-4 sm:w-[18px] sm:h-[18px]" : "w-3.5 h-3.5",
            invertInDark && "dark:invert"
          )}
        />
      )}
      <span
        className={cn(
          "font-medium leading-none",
          isMd ? "text-xs sm:text-sm text-foreground/90" : "text-[11px] sm:text-xs"
        )}
      >
        {name}
      </span>
    </span>
  );
}

export default SkillBadge;
