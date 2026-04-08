// All German copy for the site lives here.
// Edit this file to update text without touching JSX.

export const profile = {
  name: 'Filip Bonat',
  role: 'Versicherungsexperte',
  phone: '+43 676 7857277',
  phoneHref: 'tel:+436767857277',
  whatsapp: 'WhatsApp Chat',
  whatsappHref: 'https://wa.me/436767857277',
  email: 'info@filipbonat.at', // TODO: replace with real address
  emailHref: 'mailto:info@filipbonat.at',
  location: 'Graz, Österreich',
  rating: 4.9,
  customers: '100+',
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    youtube: '#',
  },
} as const

export const nav = [
  { id: 'uebermich', label: 'Über mich' },
  { id: 'leistungen', label: 'Leistungen' },
  { id: 'kompetenzen', label: 'Kompetenzen' },
  { id: 'erfahrung', label: 'Erfahrung' },
  { id: 'stimmen', label: 'Stimmen' },
] as const

export const hero = {
  eyebrow: 'Individuelle Finanzberatung',
  titleLead: 'Beratung,',
  titleAccent: 'die Vertrauen schafft.',
  description:
    'Ihre Zukunft in guten Händen. Transparent, persönlich und unabhängig. Maßgeschneiderte Versicherungslösungen für Privatpersonen und Unternehmen.',
  primaryCta: {
    label: 'Jetzt Kontakt aufnehmen',
    href: 'tel:+436767857277',
  },
} as const

export const about = {
  eyebrow: 'Über mich',
  title: 'Kompetente Beratung',
  titleAccent: 'für Ihre Sicherheit.',
  intro:
    'Ich bin Filip Bonat, Versicherungsexperte mit über 4 Jahren Erfahrung in der Entwicklung maßgeschneiderter Versicherungslösungen für Privatpersonen und Unternehmen. Mein Ziel ist es, Vertrauen aufzubauen, Risiken transparent zu managen und Sie langfristig abzusichern, unabhängig davon, ob es um Lebens-, Gesundheits-, Sach- oder Unternehmensversicherungen geht.',
  values: [
    {
      title: 'Vertrauensvolle Beratung',
      desc: 'Persönliche Gespräche auf Augenhöhe. Ich nehme mir Zeit, um Ihre individuelle Lebenssituation zu verstehen.',
    },
    {
      title: 'Transparente Kommunikation',
      desc: 'Versicherungsoptionen klar und verständlich erklärt, ohne Fachchinesisch.',
    },
    {
      title: 'Ganzheitlicher Ansatz',
      desc: 'Ich betrachte Ihr gesamtes Risikoprofil für eine umfassende und nachhaltige Absicherung.',
    },
    {
      title: 'Digitale Kompetenz',
      desc: 'Moderne Tools ermöglichen flexible, ortsunabhängige und effiziente Beratung, auch komplett digital.',
    },
  ],
} as const

export const services = {
  eyebrow: 'Leistungen',
  title: 'Versicherungslösungen',
  titleAccent: 'für jede Lebenslage.',
  items: [
    {
      number: '01',
      title: 'Beratung & Analyse',
      desc: 'Wir analysieren Ihre individuelle Situation und finden die optimale Versicherung.',
    },
    {
      number: '02',
      title: 'Private Versicherungen',
      desc: 'Lebens-, Unfall-, Hausrat-, Haftpflicht- und Krankenversicherung.',
    },
    {
      number: '03',
      title: 'Gewerbliche Versicherungen',
      desc: 'Schutz für Unternehmen, Mitarbeiter, Fuhrpark und Betriebshaftpflicht.',
    },
    {
      number: '04',
      title: 'Digitale Vertragsverwaltung',
      desc: 'Alle Policen übersichtlich, digital und jederzeit zugänglich.',
    },
  ],
} as const

export const tools = {
  eyebrow: 'Tools',
  title: 'Kreditrechner',
  titleAccent: '& Immobilien.',
  intro:
    'Berechnen Sie Ihre monatliche Rate in Sekunden. Oder finden Sie direkt Ihre nächste Immobilie.',
  calculator: {
    title: 'Monatliche Rate berechnen',
    fields: {
      amount: { label: 'Kreditbetrag', min: 10000, max: 1000000, step: 5000, default: 250000 },
      rate: { label: 'Zinssatz', min: 0.5, max: 10, step: 0.1, default: 3.5 },
      years: { label: 'Laufzeit', min: 5, max: 35, step: 1, default: 25 },
    },
    disclaimer:
      'Unverbindliche Beispielrechnung auf Annuitätenbasis. Tatsächliche Konditionen können abweichen.',
  },
  realEstate: {
    eyebrow: 'Externer Service',
    title: 'Immobilien finden',
    desc: 'Entdecken Sie aktuelle Wohnungen, Häuser und Anlageobjekte über unseren Partner Finova Real Estate.',
    cta: 'realestate.finova.at',
    href: 'https://realestate.finova.at/',
  },
} as const

export const skills = {
  eyebrow: 'Kompetenzen',
  title: 'Die Basis für fundierte',
  titleAccent: 'Versicherungsberatung.',
  items: [
    { label: 'Fachwissen im Versicherungswesen', value: 100 },
    { label: 'Kundenorientierte Beratung', value: 95 },
    { label: 'Digitale Beratung & Tools', value: 92 },
    { label: 'Risikobewertung & Analyse', value: 90 },
    { label: 'Vertragsmanagement & Betreuung', value: 89 },
    { label: 'Regulatorisches Wissen', value: 85 },
  ],
} as const

export const experience = {
  eyebrow: 'Erfahrung',
  title: 'Werdegang &',
  titleAccent: 'Ausbildung.',
  work: [
    {
      period: 'seit 2020',
      role: 'Versicherungsexperte',
      org: 'Finova',
      details: [
        'Beratung in allen Versicherungsfragen',
        'Risikoanalyse und maßgeschneiderte Policen',
        'Betreuung von Privat- und Firmenkunden',
      ],
    },
  ],
  education: [
    {
      period: '2013 - 2015',
      role: 'Österreichische Finanzakademie',
      org: 'Graz',
    },
    {
      period: '2010 - 2013',
      role: 'Zertifizierter Versicherungsberater (WKO)',
      org: 'Graz',
    },
  ],
} as const

export const testimonials = {
  eyebrow: 'Stimmen',
  title: 'Was Kund:innen',
  titleAccent: 'sagen.',
  items: [
    {
      quote:
        'Die Zusammenarbeit mit Herrn Bonat war außergewöhnlich. Seine Fachkompetenz und klare Kommunikation haben uns geholfen, unsere Versicherungen neu zu strukturieren. Sehr empfehlenswert!',
      name: 'David Elson',
      role: 'Unternehmer',
    },
    {
      quote:
        'Filip Bonat hat uns durch den Versicherungsdschungel geführt und dabei auf unsere individuelle Situation Rücksicht genommen. So geht Kundenservice!',
      name: 'Chris Glasser',
      role: 'Freiberufler',
    },
    {
      quote:
        'Kompetent, freundlich und immer erreichbar. Dank seiner Hilfe habe ich jetzt eine maßgeschneiderte Absicherung für mein Unternehmen.',
      name: 'Rodger Struck',
      role: 'Selbstständiger',
    },
    {
      quote:
        'Ich fühlte mich jederzeit gut beraten. Filip hat mir geholfen, Klarheit in meine bestehenden Verträge zu bringen und unnötige Kosten zu vermeiden.',
      name: 'Mary Freund',
      role: 'Privatkundin',
    },
  ],
} as const

export const contact = {
  eyebrow: 'Kontakt',
  title: 'Sprechen wir über Ihre',
  titleAccent: 'Absicherung.',
  intro:
    'Persönlich, telefonisch oder digital. Ich freue mich auf Ihre Anfrage.',
  // Graz, Austria embed
  mapEmbed:
    'https://www.google.com/maps?q=Graz,+%C3%96sterreich&hl=de&z=12&output=embed',
} as const
