"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SkillBadge } from "@/components/ui/skill-badge";
import { EXPERIENCES } from "@/data/experiences";

export default function Experience() {
  return (
    <section id="experience" className="w-full py-8 sm:py-10">
      <FadeIn yOffset={10}>
        <SectionHeading title="Experience" />

      <Accordion defaultOpenId="valnee-solutions" allowMultiple={true}>
        {EXPERIENCES.map((exp) => (
          <AccordionItem key={exp.id} id={exp.id}>
            <AccordionTrigger>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 w-full pr-1">
                {/* Left: Role name - Company with external link */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm sm:text-base font-semibold text-foreground">
                  <span>{exp.role}</span>
                  <span
                    className="text-muted-foreground/60 select-none font-normal"
                    aria-hidden="true"
                  >
                    –
                  </span>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors font-medium hover:underline"
                    title={`Visit ${exp.company}`}
                  >
                    <span>{exp.company}</span>
                    <ExternalLink
                      className="h-3 w-3 opacity-70"
                      aria-hidden="true"
                    />
                  </a>
                </div>

                {/* Right: Timeline */}
                <span className="text-xs sm:text-sm text-muted-foreground shrink-0 font-normal">
                  {exp.timeline}
                </span>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              {/* Three bullet points */}
              <ul className="space-y-2.5 text-sm text-muted-foreground leading-relaxed">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-foreground/40 mt-2 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Skill badges at bottom */}
              <div className="mt-4 pt-3.5 border-t border-border/40 flex flex-wrap items-center gap-1.5 sm:gap-2">
                {exp.techs.map((tech) => (
                  <SkillBadge
                    key={tech.name}
                    name={tech.name}
                    icon={tech.icon}
                    invertInDark={tech.invertInDark}
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* See all experiences link at bottom */}
      <div className="mt-6 flex items-center justify-start">
        <Link
          href="/experience"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:underline"
        >
          <span>See all experiences</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
      </FadeIn>
    </section>
  );
}
