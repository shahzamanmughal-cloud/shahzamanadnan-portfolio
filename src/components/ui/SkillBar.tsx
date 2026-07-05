import { motion } from 'framer-motion';
import { Skill } from '@/data/skills';

export function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-ink-100">{skill.name}</span>
        <span className="font-mono text-xs text-ink-400">{skill.level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-700/70">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-scalpel-deep via-scalpel to-scalpel-bright"
        />
      </div>
    </div>
  );
}
