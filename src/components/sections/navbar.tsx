"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { cn } from "@/lib/utils";

export const NAV_LINKS = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={cn("flex items-center", className)} aria-label="Main Navigation">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <ul className="flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:underline"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="h-4 w-px bg-border/60" aria-hidden="true" />
        <ModeToggle />
      </div>

      {/* Mobile Navigation (Theme toggle on one side + Menu button) */}
      <div className="flex md:hidden items-center gap-1">
        <ModeToggle />
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring cursor-pointer"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 w-full mt-4 p-2.5 bg-background/95 backdrop-blur-lg border border-border/60 rounded-xl shadow-lg md:hidden z-50"
          >
            <ul className="flex flex-col gap-0.5">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-lg transition-colors hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
