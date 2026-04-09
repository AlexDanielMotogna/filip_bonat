import { FaQuoteLeft, FaStar } from 'react-icons/fa6'
import { testimonials } from '@/lib/content'
import Section from './ui/Section'
import Reveal from './ui/Reveal'

export default function Testimonials() {
  return (
    <Section
      id="stimmen"
      tone="surface"
      eyebrow={testimonials.eyebrow}
      title={testimonials.title}
      titleAccent={testimonials.titleAccent}
    >
      <div className="grid md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
        {testimonials.items.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.05}>
            <figure className="h-full rounded-2xl border border-border bg-bg p-6 sm:p-8 md:p-10 hover:border-border-strong transition-colors">
              <FaQuoteLeft className="h-5 w-5 text-text-faint" aria-hidden />
              <div
                className="mt-4 flex gap-1 text-accent"
                aria-label="5 von 5 Sternen"
              >
                {Array.from({ length: 5 }).map((_, j) => (
                  <FaStar key={j} className="h-3.5 w-3.5" />
                ))}
              </div>
              <blockquote className="mt-5 sm:mt-6 text-base sm:text-lg text-text leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-border">
                <p className="font-semibold text-text">{t.name}</p>
                <p className="mt-1 text-sm text-text-muted">{t.role}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
