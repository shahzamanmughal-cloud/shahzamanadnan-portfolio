import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { TiltCard } from '@/components/ui/TiltCard';
import { SkillBar } from '@/components/ui/SkillBar';
import { skillGroups, businessSkills } from '@/data/skills';

export function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-page">
        <SectionHeading
          index="04"
          eyebrow="Skills"
          title="Technical & business toolkit."
          description="Engineering fundamentals on one side, international deal-making on the other."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <RevealOnScroll key={group.id} delay={i * 0.08}>
              <TiltCard className="h-full">
                <h3 className="mb-6 font-display text-lg font-semibold">{group.title}</h3>
                <div className="space-y-5">
                  {group.skills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </div>
              </TiltCard>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.15} className="mt-8">
          <div className="rounded-2xl border border-ink-700 bg-ink-800/40 p-8">
            <h3 className="mb-5 font-display text-lg font-semibold">Business Skills</h3>
            <div className="flex flex-wrap gap-3">
              {businessSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-scalpel/40 bg-scalpel/10 px-4 py-2 text-sm text-scalpel-bright"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
