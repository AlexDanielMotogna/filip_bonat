import { services } from '@/lib/content'
import Section from './ui/Section'
import Reveal from './ui/Reveal'

export default function Services() {
  return (
    <Section
      id="leistungen"
      tone="surface"
      eyebrow={services.eyebrow}
      title={services.title}
      titleAccent={services.titleAccent}
    >
      <div className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {services.items.map((s, i) => (
          <Reveal key={s.number} delay={i * 0.05}>
            <article className="group relative h-full bg-bg p-8 md:p-10 hover:bg-surface transition-colors">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-5xl md:text-6xl font-semibold text-text-faint tabular-nums">
                  {s.number}
                </span>
                <span
                  aria-hidden
                  className="h-px w-12 bg-border-strong group-hover:bg-accent group-hover:w-20 transition-all duration-300"
                />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-text">{s.title}</h3>
              <p className="mt-4 text-text-muted leading-relaxed">{s.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
