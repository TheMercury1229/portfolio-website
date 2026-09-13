import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { ExperienceList } from "@/components/experience/experience-list";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional work experience, internships, and technical leadership of Hardik Gujrathi – Full-Stack & AI Engineer.",
  openGraph: {
    title: "Experience | Hardik Gujrathi",
    description:
      "Professional work experience, internships, and technical leadership of Hardik Gujrathi – Full-Stack & AI Engineer.",
  },
};

export default function ExperiencePage() {
  return (
    <div className="w-full py-4 sm:py-6 flex flex-col gap-8 sm:gap-10">
      {/* Header & Intro */}
      <FadeIn yOffset={12}>
        <div className="space-y-4">
          <div className="space-y-1.5">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Work Experience
            </h1>
          </div>

          <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-3 pt-2">
            <p>
              A timeline of my professional software engineering internships, SaaS
              contributions, and technical leadership. From architecting asynchronous AI
              search engines and multi-engine analytics pipelines to leading developer
              teams for real-time conference systems and campus platforms, here is an
              in-depth breakdown of my journey.
            </p>
            <p>
              For a concise overview of my academic background, technical skills, and
              credentials, you can also view my latest{" "}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors inline-flex items-center gap-0.5 group"
              >
                <span>Resume PDF</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              .
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Accordion list with all 5 experiences */}
      <FadeIn yOffset={14}>
        <ExperienceList />
      </FadeIn>
    </div>
  );
}
