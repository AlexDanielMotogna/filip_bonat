import { useMemo, useState } from 'react'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { tools } from '@/lib/content'
import Section from './ui/Section'
import Reveal from './ui/Reveal'

const eur0 = new Intl.NumberFormat('de-AT', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
})

const num0 = new Intl.NumberFormat('de-AT', { maximumFractionDigits: 0 })

function calcMonthly(principal: number, annualRatePct: number, years: number) {
  const months = years * 12
  const r = annualRatePct / 100 / 12
  if (r === 0) return principal / months
  const factor = Math.pow(1 + r, months)
  return (principal * (r * factor)) / (factor - 1)
}

type FieldKey = 'amount' | 'rate' | 'years'

function SliderField({
  fieldKey,
  value,
  onChange,
  display,
}: {
  fieldKey: FieldKey
  value: number
  onChange: (v: number) => void
  display: string
}) {
  const f = tools.calculator.fields[fieldKey]
  const min =
    fieldKey === 'rate'
      ? `${f.min}%`
      : fieldKey === 'years'
      ? `${f.min} Jahre`
      : eur0.format(f.min)
  const max =
    fieldKey === 'rate'
      ? `${f.max}%`
      : fieldKey === 'years'
      ? `${f.max} Jahre`
      : eur0.format(f.max)

  return (
    <div>
      <div className="flex flex-col gap-1 mb-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <label
          htmlFor={`slider-${fieldKey}`}
          className="text-sm font-medium text-text"
        >
          {f.label}
        </label>
        <span className="font-display text-lg font-semibold text-text tabular-nums">
          {display}
        </span>
      </div>
      <input
        id={`slider-${fieldKey}`}
        type="range"
        min={f.min}
        max={f.max}
        step={f.step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div className="mt-2 flex justify-between text-[10px] sm:text-[11px] uppercase tracking-wider text-text-faint tabular-nums">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  )
}

export default function Tools() {
  const { fields } = tools.calculator
  const [amount, setAmount] = useState<number>(fields.amount.default)
  const [rate, setRate] = useState<number>(fields.rate.default)
  const [years, setYears] = useState<number>(fields.years.default)

  const { monthly, total, interest } = useMemo(() => {
    const m = calcMonthly(amount, rate, years)
    const t = m * years * 12
    return { monthly: m, total: t, interest: t - amount }
  }, [amount, rate, years])

  return (
    <Section
      id="kreditrechner"
      tone="default"
      eyebrow={tools.eyebrow}
      title={tools.title}
      titleAccent={tools.titleAccent}
    >
      <Reveal>
        <p className="max-w-2xl text-lg text-text-muted leading-relaxed mb-12">
          {tools.intro}
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Calculator card */}
        <Reveal className="lg:col-span-3">
          <div className="rounded-2xl sm:rounded-3xl border border-border bg-surface p-6 sm:p-8 md:p-10 h-full">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-faint">
              {tools.calculator.title}
            </h3>

            <div className="mt-6 sm:mt-8 space-y-7 sm:space-y-8">
              <SliderField
                fieldKey="amount"
                value={amount}
                onChange={setAmount}
                display={eur0.format(amount)}
              />
              <SliderField
                fieldKey="rate"
                value={rate}
                onChange={setRate}
                display={`${rate.toFixed(1).replace('.', ',')} %`}
              />
              <SliderField
                fieldKey="years"
                value={years}
                onChange={setYears}
                display={`${years} Jahre`}
              />
            </div>

            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-border">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-faint">
                Monatliche Rate
              </p>
              <p className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-text tabular-nums">
                {eur0.format(monthly)}
              </p>

              <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider text-text-faint">
                    Gesamtkosten
                  </p>
                  <p className="mt-2 text-base sm:text-xl font-semibold text-text tabular-nums">
                    {eur0.format(total)}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider text-text-faint">
                    Zinsen gesamt
                  </p>
                  <p className="mt-2 text-base sm:text-xl font-semibold text-text tabular-nums">
                    {eur0.format(interest)}
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 sm:mt-8 text-xs text-text-faint leading-relaxed">
              Bei {num0.format(years * 12)} Monatsraten. {tools.calculator.disclaimer}
            </p>
          </div>
        </Reveal>

        {/* Real estate card with image background and dark gradient overlay */}
        <Reveal className="lg:col-span-2" delay={0.1}>
          <a
            href={tools.realEstate.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-full min-h-[420px] sm:min-h-[480px] overflow-hidden rounded-2xl sm:rounded-3xl"
          >
            {/* Background image */}
            <img
              src="/real-state.jpg"
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />

            {/* Dark gradient: readable bottom, image-visible top */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-text via-text/80 via-40% to-text/10"
            />

            {/* Content */}
            <div className="relative flex h-full flex-col p-6 sm:p-8 md:p-10">
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {tools.realEstate.eyebrow}
              </p>

              <div className="mt-auto">
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-bg">
                  {tools.realEstate.title}
                </h3>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-bg/80 leading-relaxed">
                  {tools.realEstate.desc}
                </p>

                <div className="mt-6 sm:mt-8 flex items-center justify-between gap-4">
                  <span className="text-xs sm:text-sm font-medium text-bg break-all">
                    {tools.realEstate.cta}
                  </span>
                  <span className="grid h-11 w-11 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-full bg-accent text-accent-ink group-hover:scale-110 transition-transform">
                    <FaArrowUpRightFromSquare className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </a>
        </Reveal>
      </div>
    </Section>
  )
}
