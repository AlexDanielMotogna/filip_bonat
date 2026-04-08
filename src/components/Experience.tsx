import { experience } from '@/lib/content'
import Section from './ui/Section'
import Reveal from './ui/Reveal'

export default function Experience() {
  return (
    <Section
      id="erfahrung"
      tone="default"
      eyebrow={experience.eyebrow}
      title={experience.title}
      titleAccent={experience.titleAccent}
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Berufserfahrung */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-faint mb-8">
            Berufserfahrung
          </h3>
          <div className="border-l border-border-strong">
            {experience.work.map((item, i) => (
              <Reveal key={item.role} delay={i * 0.05}>
                <article className="relative pl-8 pb-12 last:pb-0">
                  <span
                    aria-hidden
                    className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg"
                  />
                  <p className="text-xs uppercase tracking-wider text-text-muted">
                    {item.period}
                  </p>
                  <h4 className="mt-2 text-2xl font-semibold text-text">
                    {item.role}
                  </h4>
                  <p className="mt-1 text-sm text-text-muted">{item.org}</p>
                  <ul className="mt-4 space-y-2 text-text-muted">
                    {item.details.map((d) => (
                      <li key={d} className="flex gap-3 text-sm">
                        <span aria-hidden className="text-text-faint">·</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Ausbildung */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-faint mb-8">
            Ausbildung
          </h3>
          <div className="border-l border-border-strong">
            {experience.education.map((item, i) => (
              <Reveal key={item.role} delay={i * 0.05}>
                <article className="relative pl-8 pb-12 last:pb-0">
                  <span
                    aria-hidden
                    className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg"
                  />
                  <p className="text-xs uppercase tracking-wider text-text-muted">
                    {item.period}
                  </p>
                  <h4 className="mt-2 text-2xl font-semibold text-text">
                    {item.role}
                  </h4>
                  <p className="mt-1 text-sm text-text-muted">{item.org}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
