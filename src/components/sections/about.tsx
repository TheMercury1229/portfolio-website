import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/ui/fade-in";

export default function About() {
  return (
    <section id="about" className="w-full py-8 sm:py-10">
      <FadeIn yOffset={10}>
      <SectionHeading title="About Me" />
      <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed text-balance">
        <p>
          Hi! I&apos;m Hardik, a final year student pursuing{" "}
          <strong className="font-semibold text-foreground">
            Artificial Intelligence &amp; Data Science
          </strong>{" "}
          at Pune Institute of Computer Technology (PICT), Pune (holding a{" "}
          <strong className="font-semibold text-foreground">9.25 CGPA</strong>). I have a solid
          grasp of core computer science concepts and love building scalable,
          intelligent full-stack applications with thoughtful design and
          practical functionality—combining modern web stacks like{" "}
          <strong className="font-semibold text-foreground">Next.js</strong>,{" "}
          <strong className="font-semibold text-foreground">TypeScript</strong>, and{" "}
          <strong className="font-semibold text-foreground">FastAPI</strong> with
          generative AI workflows using the{" "}
          <strong className="font-semibold text-foreground">Gemini API</strong>,{" "}
          <strong className="font-semibold text-foreground">LangChain</strong>, and{" "}
          <strong className="font-semibold text-foreground">LangGraph</strong>.
        </p>
        <p>
          Through developer internships at Valnee Solutions and Froncort,
          I&apos;ve engineered production analytics engines, multi-engine AI
          search pipelines, and streamlined workflow UIs. I previously
          served as Technical Head at PICT EDC and USG Tech at PICT MUN,
          overseeing the development of internal tools, event platforms, and
          real-time systems used by 200+ participants. I&apos;m driven by
          creating reliable, real-world solutions that deliver tangible impact.
        </p>
      </div>
      </FadeIn>
    </section>
  );
}
