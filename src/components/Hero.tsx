import { FaStar } from 'react-icons/fa6'
import { hero, profile } from '@/lib/content'
import Reveal from './ui/Reveal'
import ContactMenu from './ui/ContactMenu'

export default function Hero() {
  return (
    <section
      id="startseite"
      aria-label="Startseite"
      className="relative bg-bg pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="container-page relative">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          {/* Left: text column */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                <span aria-hidden className="h-px w-10 bg-accent" />
                {hero.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-semibold text-text">
                {hero.titleLead}
                <br />
                <span className="text-text-muted">{hero.titleAccent}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-8 max-w-xl text-lg md:text-xl text-text-muted leading-relaxed">
                {hero.description}
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <ContactMenu variant="primary" size="lg" align="left" />
                <a
                  href="#kreditrechner"
                  className="inline-flex items-center gap-2 rounded-full border border-border-strong px-7 py-4 text-base font-medium text-text hover:border-text transition-colors"
                >
                  Kreditrechner
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: portrait card */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="relative max-w-sm mx-auto lg:max-w-none lg:ml-auto">
                <div className="relative overflow-hidden rounded-3xl border border-border bg-surface">
                  <img
                    src="/hero-img1.png"
                    alt={`Portrait von ${profile.name}`}
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>

                {/* Info strip below portrait */}
                <div className="mt-6 flex items-end justify-between gap-6">
                  <div>
                    <p className="font-display text-xl font-semibold text-text">
                      {profile.name}
                    </p>
                    <p className="text-sm text-text-muted mt-1">{profile.role}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-1 text-accent">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar key={i} className="h-3 w-3" />
                      ))}
                    </div>
                    <p className="text-sm text-text-muted mt-1 tabular-nums">
                      {profile.rating.toFixed(2)} · {profile.customers} Kunden
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
