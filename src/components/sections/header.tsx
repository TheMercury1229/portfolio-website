"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Navbar } from "@/components/sections/navbar";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky z-50 -mx-4 px-4 sm:-mx-6 sm:px-6",
        isScrolled
          ? "top-2 mt-2 sm:top-3 sm:mt-3 py-3 bg-background/80 backdrop-blur-md border border-border/40 rounded-xl shadow-sm"
          : "top-0 py-6 bg-transparent"
      )}
    >
      <div className="relative flex items-center justify-between w-full">
        <Link
          href="/"
          className="inline-flex items-center hover:opacity-80 transition-opacity"
          aria-label="Hardik"
        >
          <Logo className="h-7 sm:h-8 w-auto text-foreground" />
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
