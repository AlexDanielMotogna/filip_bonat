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
      <div className="container-page py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="flex items-center gap-3">
          <img src="/fav-logo1.png" alt="" className="h-7 w-7 brightness-0" />
          <p className="text-sm text-text-muted">
            © {year}{' '}
            <span className="text-text font-medium">{profile.name}</span> ·
            Alle Rechte vorbehalten.
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
    </footer>
  )
}
