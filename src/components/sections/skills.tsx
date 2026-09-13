import { SectionHeading } from "@/components/shared/section-heading";
import { SkillBadge } from "@/components/ui/skill-badge";
import { SKILLS } from "@/data/skills";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/fade-in";

export default function Skills() {
  return (
    <section id="skills" className="w-full py-8 sm:py-10">
      <FadeIn yOffset={10}>
        <SectionHeading title="Essential Tools I use" />
      </FadeIn>

      <FadeInStagger faster className="flex flex-wrap items-center gap-2 sm:gap-2.5">
        {SKILLS.map((skill) => (
          <FadeInStaggerItem key={skill.id} yOffset={6}>
            <SkillBadge
              name={skill.name}
              icon={skill.icon}
              invertInDark={skill.invertInDark}
              size="md"
            />
          </FadeInStaggerItem>
        ))}
      </FadeInStagger>
    </section>
  );
}
