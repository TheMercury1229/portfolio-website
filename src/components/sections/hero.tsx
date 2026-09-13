"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Copy, FileText, Mail } from "lucide-react";
import { motion } from "motion/react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/shared/social-links";

const GithubActivity = dynamic(
  () =>
    import("@/components/shared/github-activity").then(
      (mod) => mod.GithubActivity
    ),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-36 rounded-2xl border border-border/70 bg-card/60 animate-pulse mt-8 sm:mt-10" />
    ),
  }
);

const EMAIL = "gujarathihardik29@gmail.com";

const words = [
  { text: "Hi" },
  { text: "I" },
  { text: "am" },
  { text: "Hardik" },

  { text: "!" },

];

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for browsers with restricted clipboard permissions
      const textArea = document.createElement("textarea");
      textArea.value = EMAIL;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="hero" className="w-full pt-8 pb-10 sm:pt-12 sm:pb-14">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        {/* Avatar with green online dot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative shrink-0"
        >
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-pink-300 dark:bg-yellow-300 border border-border/80 shadow-xs">
            <Image
              src="/hardik.png"
              alt="Hardik"
              width={96}
              height={96}
              priority
              className="w-full h-full object-cover object-top select-none pointer-events-none"
            />
          </div>
          {/* Status indicator (green dot on bottom corner) */}
          <span
            className="absolute bottom-0.5 right-0.5 sm:bottom-1 sm:right-1 flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center"
            title="Available"
            aria-label="Status: Available"
          >
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 animate-ping duration-1000" />
            <span className="relative inline-flex h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full bg-emerald-500 ring-2 ring-background" />
          </span>
        </motion.div>

        {/* Content column: Title with typewriter effect & Engineer • email line */}
        <div className="flex flex-col justify-center min-w-0 flex-1">
          {/* Semantic heading for screen readers & SEO */}
          <h1 className="sr-only">Hi I am Hardik !</h1>

          {/* Typewriter heading animation */}
          <div aria-hidden="true">
            <TypewriterEffect
              words={words}
              className="text-left text-2xl sm:text-3xl md:text-3xl font-bold tracking-tight text-foreground"
              cursorClassName="bg-primary h-5 sm:h-6 md:h-7 lg:h-8 inline-block ml-1 align-middle"
            />
          </div>

          {/* Subtitle: Engineer • email with copy button */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-sm text-muted-foreground mt-2"
          >
            <span className="font-medium text-foreground/85">Engineer</span>
            <span className="select-none text-muted-foreground/60 text-xl">•</span>
            <span className="font-medium text-foreground/85">Technophile</span>
            <span className="select-none text-muted-foreground/60 text-xl">•</span>
            <div className="inline-flex items-center gap-1.5 min-w-0">
              <a
                href={`mailto:${EMAIL}`}
                className="hover:text-foreground transition-colors truncate"
              >
                {EMAIL}
              </a>
              <button
                type="button"
                onClick={handleCopy}
                aria-label={copied ? "Email copied to clipboard" : "Copy email address"}
                title={copied ? "Copied to clipboard!" : "Copy email"}
                className="inline-flex items-center justify-center p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-colors cursor-pointer shrink-0"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-emerald-500 transition-transform duration-200 scale-110" />
                ) : (
                  <Copy className="h-3.5 w-3.5 transition-transform duration-200 hover:scale-110" />
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bio one-liner */}
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="mt-5 sm:mt-6 text-sm sm:text-base font-semibold text-muted-foreground leading-relaxed"
      >
        Love to build cool stuff, AI and full-stack engineer &amp; tech enthusiast.
      </motion.p>

      {/* Hero CTA buttons (responsive: full-width stacked on mobile) */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-6 w-full"
      >
        <Button
          href="/resume.pdf"
          target="_blank"
          variant="default"
          className="w-full sm:w-auto"
          leftIcon={<FileText className="h-4 w-4" />}
        >
          Resume
        </Button>
        <Button
          href="#contact"
          variant="secondary"
          className="w-full sm:w-auto"
          leftIcon={<Mail className="h-4 w-4" />}
        >
          Contact Me
        </Button>
      </motion.div>

      {/* Shared Social Links with increased top spacing */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.38, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <SocialLinks className="mt-7 sm:mt-8 pt-1" />
      </motion.div>

      {/* GitHub Activity Heatmap */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.44, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <GithubActivity className="mt-8 sm:mt-10" />
      </motion.div>
    </section>
  );
}
