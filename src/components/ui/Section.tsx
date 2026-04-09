import type { ReactNode } from 'react'

type Props = {
  id: string
  tone?: 'default' | 'surface'
  eyebrow?: string
  title?: ReactNode
  titleAccent?: ReactNode
  children: ReactNode
  className?: string
}

export default function Section({
  id,
  tone = 'default',
  eyebrow,
  title,
  titleAccent,
  children,
  className = '',
}: Props) {
  const bgClass = tone === 'surface' ? 'bg-surface' : 'bg-bg'

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-24 py-16 sm:py-20 md:py-28 lg:py-32 ${bgClass} ${className}`}
    >
      <div className="container-page">
        {(eyebrow || title) && (
          <header className="mb-10 sm:mb-14 md:mb-20 max-w-3xl">
            {eyebrow && (
              <p className="mb-5 inline-flex items-center gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                <span aria-hidden className="h-px w-8 bg-accent" />
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                id={`${id}-heading`}
                className="text-3xl sm:text-4xl md:text-5xl font-semibold text-text"
              >
                {title}
                {titleAccent && (
                  <>
                    {' '}
                    <span className="text-text-muted">{titleAccent}</span>
                  </>
                )}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
