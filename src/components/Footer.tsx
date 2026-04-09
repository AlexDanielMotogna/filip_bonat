import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa6'
import { profile } from '@/lib/content'

const socials = [
  { icon: FaInstagram, href: profile.social.instagram, label: 'Instagram' },
  { icon: FaLinkedinIn, href: profile.social.linkedin, label: 'LinkedIn' },
  { icon: FaFacebook, href: profile.social.facebook, label: 'Facebook' },
  { icon: FaYoutube, href: profile.social.youtube, label: 'YouTube' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-bg border-t border-border">
      <div className="container-page py-10 sm:py-12">
        {/* Top row: logo + socials */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/fav-logo1.png" alt="" className="h-7 w-7 brightness-0" />
            <p className="text-sm text-text-muted">
              © {year}{' '}
              <span className="text-text font-medium">{profile.name}</span>
            </p>
          </div>

          <ul className="flex items-center gap-3">
            {socials.map((s) => {
              const Icon = s.icon
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-border text-text-muted hover:border-text hover:text-text transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Bottom row: legal links + credit */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-text-muted">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href="/impressum.html" className="hover:text-text transition-colors">
              Impressum
            </a>
            <a href="/datenschutz.html" className="hover:text-text transition-colors">
              Datenschutz
            </a>
            <span>Alle Rechte vorbehalten.</span>
          </div>

          <a
            href="https://motogna.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text transition-colors"
          >
            Built by motogna.tech
          </a>
        </div>
      </div>
    </footer>
  )
}
