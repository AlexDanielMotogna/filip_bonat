import { FaStar } from 'react-icons/fa6'
import { hero, profile } from '@/lib/content'
import Reveal from './ui/Reveal'
import ContactMenu from './ui/ContactMenu'

export default function Hero() {
  return (
    <section
      id="startseite"
      aria-label="Startseite"
      className="relative bg-bg pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="container-page relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left: text column */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-6 sm:mb-8 inline-flex items-center gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                <span aria-hidden className="h-px w-8 sm:w-10 bg-accent" />
                {hero.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-semibold text-text">
                {hero.titleLead}
                <br />
                <span className="text-text-muted">{hero.titleAccent}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg md:text-xl text-text-muted leading-relaxed">
                {hero.description}
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
                <ContactMenu variant="primary" size="lg" align="left" />
                <a
                  href="#kreditrechner"
                  className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-text hover:border-text transition-colors"
                >
                  Kreditrechner
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: portrait card */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="relative max-w-xs sm:max-w-sm mx-auto lg:max-w-none lg:ml-auto">
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-surface">
                  <img
                    src="/hero-img1.png"
                    alt={`Portrait von ${profile.name}`}
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>

                {/* Info strip below portrait */}
                <div className="mt-5 sm:mt-6 flex items-end justify-between gap-4">
                  <div className="min-w-0">
                    <p className="font-display text-lg sm:text-xl font-semibold text-text truncate">
                      {profile.name}
                    </p>
                    <p className="text-xs sm:text-sm text-text-muted mt-1">{profile.role}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="flex items-center justify-end gap-1 text-accent">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar key={i} className="h-3 w-3" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-text-muted mt-1 tabular-nums">
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
