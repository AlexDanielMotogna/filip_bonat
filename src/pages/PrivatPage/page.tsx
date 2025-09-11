import React, { useState } from 'react'
import { FaHandPointer } from "react-icons/fa"
import { Link } from 'react-router-dom'
import AnfrageModal from '../../components/shared/AnfrageModal'
import SubcategoryModal from '../../components/shared/SubcategoryModal'
import TopNav from '../../components/TopNav'
import { useTranslation } from 'react-i18next';
const privatCategories = [
  {
    id: 'finanz',
    title: 'Finanz',
    icon: '💰',
    description: 'Finanzielle Lösungen für Privatkunden',
    subcategories: [
      {
        id: 'hypothek',
        name: 'Hypothek',
        tabs: [
          {
            id: 'standard',
            name: 'Hypothek',
            unterlagen: [
              'Einkommensnachweis',
              'Personalausweis',
              'Grundbuchauszug',
              'Kreditwürdigkeit (Schufa-Auskunft)'
            ]
          }
        ]
      },
      {
        id: 'konsum',
        name: 'Konsumkredit',
        tabs: [
          {
            id: 'standard',
            name: 'Konsumkredit',
            unterlagen: [
              'Einkommensnachweis',
              'Personalausweis',
              'Bankverbindung',
              'Bestehende Kredite'
            ]
          }
        ]
      },
      {
        id: 'leasing',
        name: 'Leasing',
        tabs: [
          {
            id: 'standard',
            name: 'Leasingvertrag',
            unterlagen: [
              'Personalausweis',
              'Einkommensnachweis',
              'Fahrzeugschein / Leasingobjekt-Daten'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'versicherung',
    title: 'Versicherung',
    icon: '🛡️',
    description: 'Umfassender Schutz für Ihr Leben und Eigentum',
    subcategories: [
      {
        id: 'auto',
        name: 'Autoversicherung',
        tabs: [
          {
            id: 'standard',
            name: 'KFZ-Versicherung',
            unterlagen: ['Fahrzeugschein', 'Führerschein', 'Schadensfreiheitsrabatt']
          }
        ]
      },
      {
        id: 'rechtsschutz',
        name: 'Rechtsschutz',
        tabs: [
          {
            id: 'standard',
            name: 'Rechtsschutzversicherung',
            unterlagen: ['Personalausweis', 'Berufsnachweis']
          }
        ]
      },
      {
        id: 'unfall',
        name: 'Unfallversicherung',
        tabs: [
          {
            id: 'standard',
            name: 'Unfallversicherung',
            unterlagen: ['Personalausweis', 'Gesundheitsfragebogen']
          }
        ]
      },
      {
        id: 'haushalt',
        name: 'Haushaltsversicherung',
        tabs: [
          {
            id: 'standard',
            name: 'Haushaltversicherung',
            unterlagen: ['Wohnsitznachweis', 'Inventarliste']
          }
        ]
      },
      {
        id: 'beruf',
        name: 'Berufsfähigkeit',
        tabs: [
          {
            id: 'standard',
            name: 'Berufsunfähigkeitsversicherung',
            unterlagen: ['Einkommensnachweis', 'Gesundheitsfragebogen']
          }
        ]
      },
      {
        id: 'kranken',
        name: 'Krankenversicherung',
        tabs: [
          {
            id: 'gesetzlich',
            name: 'Gesetzlich',
            unterlagen: ['Sozialversicherungsausweis', 'Arbeitgeberbescheinigung']
          },
          {
            id: 'privat',
            name: 'Privat',
            unterlagen: ['Gesundheitsprüfung', 'Vorversicherungsnachweis']
          }
        ]
      },
      {
        id: 'ableben',
        name: 'Ablebensversicherung',
        tabs: [
          {
            id: 'standard',
            name: 'Ablebensversicherung',
            unterlagen: ['Personalausweis', 'Gesundheitsprüfung']
          }
        ]
      }
    ]
  },
  {
    id: 'investment',
    title: 'Investment',
    icon: '📈',
    description: 'Kapitalanlagen für Privatkunden',
    subcategories: [
      {
        id: 'depot',
        name: 'Depot',
        tabs: [
          {
            id: 'standard',
            name: 'Wertpapierdepot',
            unterlagen: ['Personalausweis', 'Steuer-ID', 'Bankverbindung']
          }
        ]
      },
      {
        id: 'fonds',
        name: 'Fonds',
        tabs: [
          {
            id: 'standard',
            name: 'Investmentfonds',
            unterlagen: ['Personalausweis', 'Anlageprofil']
          }
        ]
      },
      {
        id: 'anlegerwohnungen',
        name: 'Anlegerwohnungen',
        tabs: [
          {
            id: 'standard',
            name: 'Immobilieninvestition',
            unterlagen: ['Einkommensnachweis', 'Finanzierungsnachweis']
          }
        ]
      }
    ]
  },
  {
    id: 'immobilien',
    title: 'Immobilien',
    icon: '🏡',
    description: 'Wohn- und Gewerbeimmobilien',
    subcategories: [
      {
        id: 'realestate',
        name: 'Real Estate',
        tabs: [
          {
            id: 'link',
            name: 'Immobilienportal',
            unterlagen: [],
            externalLink: 'https://www.immobilienscout24.at/'
          }
        ]
      }
    ]
  }
]

const PrivatPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<any>(null)
  const [setSelectedSubcategory] = useState<any>(null)
  const [showAnfrageModal, setShowAnfrageModal] = useState(false)
  const [selectedUnterlagen, setSelectedUnterlagen] = useState<string[]>([])
  const { t } = useTranslation();

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category)
  }

  const handleSubcategorySelect = (subcategory: any) => {
    setSelectedSubcategory(subcategory)
  }

  const handleAnfrageClick = (unterlagen: string[]) => {
    setSelectedUnterlagen(unterlagen)
    setShowAnfrageModal(true)
  }

  return (
    <>
      <div className="body1">
        <TopNav />
        <div className="privat-page-area">
          <div className="container">
            <div className="page-header">
              <h1>
                {t('Privat')}<span>{t('kunden')}</span>
              </h1>
              <p>
                {t('Maßgeschneiderte Versicherungslösungen für Ihre persönlichen Bedürfnisse')}
              </p>
            </div>

            <div className="category-grid">
              {privatCategories.map((category) => (
                <div
                  key={category.id}
                  className="category-card clickable"
                  onClick={() => handleCategoryClick(category)}
                >
                  <div className="category-icon">{category.icon}</div>
                  <h3>{t(category.title)}</h3>
                  <p>{t(category.description)}</p>
                  <span className="click-hint">
                    <FaHandPointer />
                  </span>
                </div>
              ))}
            </div>

            <div className="navigation-area">
              <Link to="/firma" className="nav-btn">
                {t('Zu Firmenkunden →')}
              </Link>
            </div>
          </div>
        </div>

        {/* Subcategory Modal */}
        {selectedCategory && (
          <SubcategoryModal
            category={selectedCategory}
            onClose={() => setSelectedCategory(null)}
            onSubcategorySelect={handleSubcategorySelect}
            onAnfrageClick={handleAnfrageClick}
          />
        )}

        {/* Anfrage Modal */}
        {showAnfrageModal && (
          <AnfrageModal
            unterlagen={selectedUnterlagen.map((u) => t(u))}
            onClose={() => setShowAnfrageModal(false)}
          />
        )}
      </div>
    </>
  )
}
export default PrivatPage
