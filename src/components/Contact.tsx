import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa6'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { contact, profile } from '@/lib/content'
import Section from './ui/Section'
import Reveal from './ui/Reveal'

const channels = [
  {
    icon: FaPhone,
    label: 'Telefon',
    value: profile.phone,
    href: profile.phoneHref,
    external: false,
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: 'Direkt schreiben',
    href: profile.whatsappHref,
    external: true,
  },
  {
    icon: FaEnvelope,
    label: 'E-Mail',
    value: profile.email,
    href: profile.emailHref,
    external: false,
  },
  {
    icon: HiOutlineLocationMarker,
    label: 'Standort',
    value: profile.location,
    href: undefined,
    external: false,
  },
] as const

export default function Contact() {
  return (
    <Section
      id="kontakt"
      tone="default"
      eyebrow={contact.eyebrow}
      title={contact.title}
      titleAccent={contact.titleAccent}
    >
      <Reveal>
        <p className="max-w-2xl text-lg text-text-muted leading-relaxed mb-12">
          {contact.intro}
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-5 gap-px bg-border rounded-3xl overflow-hidden border border-border">
        {/* Channels */}
        <div className="lg:col-span-2 bg-bg p-8 md:p-10">
          <ul className="space-y-2">
            {channels.map((c) => {
              const Icon = c.icon
              const inner = (
                <div className="flex items-start gap-5 rounded-2xl p-3 -m-3 group">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-surface text-text group-hover:bg-accent group-hover:text-accent-ink transition-colors">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-faint">
                      {c.label}
                    </p>
                    <p className="mt-1 text-base text-text break-all">
                      {c.value}
                    </p>
                  </div>
                </div>
              )
              return (
                <li key={c.label}>
                  {c.href ? (
                    <a
                      href={c.href}
                      {...(c.external && {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      })}
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        {/* Map */}
        <div className="lg:col-span-3 bg-surface min-h-[400px] lg:min-h-0">
          <iframe
            title={`Standort ${profile.location}`}
            src={contact.mapEmbed}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  )
}
