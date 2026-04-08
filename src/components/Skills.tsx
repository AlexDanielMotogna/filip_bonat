import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef } from 'react'
import { skills } from '@/lib/content'
import Section from './ui/Section'

function SkillBar({
  label,
  value,
  index,
}: {
  label: string
  value: number
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduced = useReducedMotion()

  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { damping: 30, stiffness: 80 })
  const display = useTransform(spring, (v) => Math.round(v).toString())

  useEffect(() => {
    if (inView) motionValue.set(value)
  }, [inView, value, motionValue])

  return (
    <div ref={ref} className="border-t border-border first:border-t-0 py-6 md:py-7">
      <div className="flex items-baseline justify-between gap-6">
        <h3 className="text-base md:text-lg font-medium text-text">{label}</h3>
        <p className="font-display text-2xl md:text-3xl font-semibold text-text tabular-nums">
          {reduced ? value : <motion.span>{display}</motion.span>}
          <span className="text-text-muted">%</span>
        </p>
      </div>
      <div className="mt-4 h-[3px] w-full bg-border-strong overflow-hidden rounded-full">
        <motion.div
          className="h-full bg-accent origin-left"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: value / 100 } : { scaleX: 0 }}
          transition={{
            duration: reduced ? 0 : 1.2,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <Section
      id="kompetenzen"
      tone="surface"
      eyebrow={skills.eyebrow}
      title={skills.title}
      titleAccent={skills.titleAccent}
    >
      <div className="max-w-4xl">
        {skills.items.map((s, i) => (
          <SkillBar key={s.label} label={s.label} value={s.value} index={i} />
        ))}
      </div>
    </Section>
  )
}
