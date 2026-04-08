import { about } from '@/lib/content'
import Section from './ui/Section'
import Reveal from './ui/Reveal'

export default function About() {
  return (
    <Section
      id="uebermich"
      tone="default"
      eyebrow={about.eyebrow}
      title={about.title}
      titleAccent={about.titleAccent}
    >
      <Reveal>
        <p className="max-w-3xl text-lg md:text-xl text-text-muted leading-relaxed">
          {about.intro}
        </p>
      </Reveal>

      <ul className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {about.values.map((v, i) => (
          <Reveal as="li" key={v.title} delay={i * 0.05}>
            <div className="h-full bg-bg p-6 md:p-8 hover:bg-surface transition-colors">
              <div
                aria-hidden
                className="mb-6 font-display text-sm font-semibold text-text-faint tabular-nums"
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <h4 className="text-lg font-semibold text-text">{v.title}</h4>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                {v.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
