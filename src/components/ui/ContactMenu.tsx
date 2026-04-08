import { useEffect, useRef, useState } from 'react'
import {
  FaChevronDown,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa6'
import { profile } from '@/lib/content'

type Variant = 'primary' | 'outline'
type Size = 'md' | 'lg'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-accent text-accent-ink hover:bg-accent-hover',
  outline:
    'border border-border-strong text-text bg-transparent hover:border-text',
}

const sizeClasses: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-4 text-base',
}

const options = [
  {
    icon: FaPhone,
    label: 'Anrufen',
    sublabel: profile.phone,
    href: profile.phoneHref,
    external: false,
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    sublabel: 'Direkt schreiben',
    href: profile.whatsappHref,
    external: true,
  },
  {
    icon: FaEnvelope,
    label: 'E-Mail',
    sublabel: profile.email,
    href: profile.emailHref,
    external: false,
  },
] as const

type Props = {
  variant?: Variant
  size?: Size
  label?: string
  align?: 'left' | 'right'
}

export default function ContactMenu({
  variant = 'primary',
  size = 'md',
  label = 'Kontakt',
  align = 'right',
}: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onEsc)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onEsc)
    }
  }, [open])

  return (
    <div ref={ref} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={`inline-flex items-center gap-2.5 rounded-full font-medium transition-colors ${variantClasses[variant]} ${sizeClasses[size]}`}
      >
        {label}
        <FaChevronDown
          className={`h-3 w-3 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <div
          role="menu"
          className={`absolute top-full mt-3 w-72 rounded-2xl border border-border bg-bg p-2 shadow-2xl shadow-text/10 z-50 ${
            align === 'right' ? 'right-0' : 'left-0'
          }`}
        >
          {options.map((opt) => {
            const Icon = opt.icon
            return (
              <a
                key={opt.label}
                href={opt.href}
                {...(opt.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                onClick={() => setOpen(false)}
                role="menuitem"
                className="flex items-center gap-4 rounded-xl p-3 hover:bg-surface transition-colors group"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-surface text-text group-hover:bg-accent group-hover:text-accent-ink transition-colors">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="flex-1 min-w-0 text-left">
                  <span className="block text-sm font-semibold text-text">
                    {opt.label}
                  </span>
                  <span className="block text-xs text-text-muted truncate">
                    {opt.sublabel}
                  </span>
                </span>
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}
