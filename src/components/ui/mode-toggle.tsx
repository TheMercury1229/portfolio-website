"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ModeToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function ModeToggle({ className, ...props }: ModeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={mounted ? (isDark ? "Switch to light mode" : "Switch to dark mode") : "Toggle theme"}
      className={cn(
        "relative inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring cursor-pointer",
        className
      )}
      {...props}
    >
      {mounted ? (
        isDark ? (
          <Moon className="h-4 w-4 transition-transform duration-200 rotate-0 scale-100" />
        ) : (
          <Sun className="h-4 w-4 transition-transform duration-200 rotate-0 scale-100" />
        )
      ) : (
        <span className="h-4 w-4 block opacity-0" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

export default ModeToggle;
