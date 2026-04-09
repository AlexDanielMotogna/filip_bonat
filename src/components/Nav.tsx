import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa6'
import { nav, profile } from '@/lib/content'
import ContactMenu from './ui/ContactMenu'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        open
          ? 'bg-bg border-b border-border'
          : scrolled
          ? 'bg-bg/85 backdrop-blur-md border-b border-border'
          : 'bg-bg/60 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="container-page flex h-16 sm:h-20 items-center justify-between gap-3 sm:gap-6">
        <a
          href="#startseite"
          className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0"
        >
          <img src="/fav-logo1.png" alt="" className="h-7 w-7 sm:h-8 sm:w-8 brightness-0 shrink-0" />
          <span className="font-display font-semibold tracking-tight text-text truncate">
            {profile.name}
          </span>
        </a>

        <nav
          aria-label="Hauptnavigation"
          className="hidden lg:flex items-center gap-7"
        >
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-text-muted hover:text-text transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="#kreditrechner"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-text hover:border-text transition-colors"
          >
            Kreditrechner
          </a>
          <div className="hidden md:block">
            <ContactMenu variant="primary" size="md" />
          </div>
          {/* Mobile-only quick call button */}
          <a
            href={profile.phoneHref}
            aria-label="Anrufen"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-ink hover:bg-accent-hover transition-colors"
          >
            <FaPhone className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-border-strong text-text"
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={open}
          >
            {open ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      </header>

      {/* Mobile drawer — must be OUTSIDE the header because the header has
          backdrop-filter, which makes it the containing block for any fixed
          descendants (so a fixed drawer inside would be clipped to the header). */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 z-40 bg-bg border-t border-border overflow-y-auto transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav
          aria-label="Mobile Navigation"
          className="container-page py-10 sm:py-12 flex flex-col gap-5 sm:gap-6"
        >
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="text-2xl sm:text-3xl font-display font-semibold text-text hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-xs uppercase tracking-[0.2em] text-text-faint mb-4">
              Direkt erreichbar
            </p>
            <div className="grid gap-2">
              <a
                href={profile.phoneHref}
                onClick={() => setOpen(false)}
                className="flex items-center gap-4 rounded-xl p-3 hover:bg-surface transition-colors"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-surface text-text">
                  <FaPhone className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-text">Anrufen</span>
                  <span className="block text-xs text-text-muted">{profile.phone}</span>
                </span>
              </a>
              <a
                href={profile.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-4 rounded-xl p-3 hover:bg-surface transition-colors"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-surface text-text">
                  <FaWhatsapp className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-text">WhatsApp</span>
                  <span className="block text-xs text-text-muted">Direkt schreiben</span>
                </span>
              </a>
              <a
                href={profile.emailHref}
                onClick={() => setOpen(false)}
                className="flex items-center gap-4 rounded-xl p-3 hover:bg-surface transition-colors"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-surface text-text">
                  <FaEnvelope className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-text">E-Mail</span>
                  <span className="block text-xs text-text-muted truncate">{profile.email}</span>
                </span>
              </a>
            </div>

            <a
              href="#kreditrechner"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-text"
            >
              Kreditrechner öffnen
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
