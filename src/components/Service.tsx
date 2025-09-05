'use client'
import Sublog1 from '@/assets/img/icons/sublogo1.svg'
import Aos from 'aos'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Service = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })
    return () => {
      Aos.refresh()
    }
  }, [])
  return (
    <>
      <div id="Leistungen">
        <div className="service-section-area">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="service-header heading1">
                  <h5 data-aos="fade-left" data-aos-duration={800}>
                    <img src={Sublog1} alt="" />
                    Leistungen
                  </h5>
                  <div className="space24" />
                  <h2 data-aos="fade-left" data-aos-duration={1000}>
                    Versicherungslösungen
                  </h2>
                  <div className="space24" />
                  <h2 className="head" data-aos="fade-left" data-aos-duration={1100}>
                    für jede <span>Lebenslage</span>
                  </h2>
                  <div className="space50" />
                  <div className="div" data-aos="fade-left" data-aos-duration={900}>
                    <div className="service-main-boxes">
                      <h4>Beratung & Analyse</h4>
                      <div className="space24" />
                      <p>Wir analysieren Ihre individuelle Situation und finden die optimale Versicherung.</p>
                    </div>
                  </div>
                  <div className="space30" />
                  <div className="div" data-aos="fade-left" data-aos-duration={1000}>
                    <div className="service-main-boxes">
                      <h4>Private Versicherungen</h4>
                      <div className="space24" />
                      <p>Lebens-, Unfall-, Hausrat-, Haftpflicht- und Krankenversicherung.</p>
                    </div>
                  </div>
                  <div className="space30" />
                  <div className="div" data-aos="fade-left" data-aos-duration={1100}>
                    <div className="service-main-boxes">
                      <h4>Gewerbliche Versicherungen</h4>
                      <div className="space24" />
                      <p>Schutz für Unternehmen, Mitarbeiter, Fuhrpark und Betriebshaftpflicht.
                      </p>
                    </div>
                  </div>
                  <div className="space30" />
                  <div className="div" data-aos="fade-left" data-aos-duration={1200}>
                    <div className="service-main-boxes">
                      <h4>Digitale Vertragsverwaltung</h4>
                      <div className="space24" />
                      <p>Alle Policen übersichtlich, digital & jederzeit zugänglich.</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Service
