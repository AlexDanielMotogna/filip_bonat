'use client'
import Home2 from '@/assets/img/icons/home2.svg'
import Home3 from '@/assets/img/icons/home3.svg'
import Home4 from '@/assets/img/icons/home4.svg'
import Home5 from '@/assets/img/icons/home5.svg'
import Sicon1 from '@/assets/img/icons/s-icon1.svg'
import Sicon2 from '@/assets/img/icons/s-icon2.svg'
import Sicon3 from '@/assets/img/icons/s-icon3.svg'
import Sicon4 from '@/assets/img/icons/s-icon4.svg'
import Sicon5 from '@/assets/img/icons/s-icon5.svg'
import Sublogo1 from '@/assets/img/icons/sublogo1.svg'
import Aos from 'aos'
import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const About = () => {
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
      <div id="Übermich">
        <div className="about-section-area">
          <div className="heading1">
            <h5 data-aos="fade-left" data-aos-duration={800}>
              <img src={Sublogo1} alt="" />
              About Us
            </h5>
            <div className="space24" />
            <h1 data-aos="fade-left" data-aos-duration={1000}>
              Kompetente Beratung
            </h1>
            <div className="space24" />
            <h1 className="head" data-aos="fade-left" data-aos-duration={1100}>
              für <span>Ihre Sicherheit</span>
            </h1>
          </div>
          <div className="space60" />
          <div className="about-boxarea">
            <Row>
              <Col lg={12} data-aos="fade-left" data-aos-duration={1200}>
                <div className="about-main-boxes">
                  <h4>Filip Bonat</h4>
                  <div className="space24" />
                  <p>
                    Ich bin Filip Bonat, Versicherungsexperte mit über 4 Jahren Erfahrung in der Entwicklung maßgeschneiderter Versicherungslösungen für Privatpersonen und Unternehmen.
                    Mein Ziel ist es, Vertrauen aufzubauen, Risiken transparent zu managen und Sie langfristig abzusichern – unabhängig davon, ob es um Lebens-, Gesundheits-, Sach- oder Unternehmensversicherungen geht.
                  </p>
                </div>
              </Col>
              <Col lg={6} md={6} data-aos="fade-up" data-aos-duration={900}>
                <div className="about-boxes2">
                  <img src={Home2} alt="" />
                  <div className="content-area">
                    <h4>Vertrauensvolle Beratung</h4>
                    <div className="space16" />
                    <p>Persönliche Gespräche auf Augenhöhe – ich nehme mir Zeit, um Ihre individuelle Lebenssituation zu verstehen und passende Lösungen zu entwickeln.</p>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} data-aos="fade-up" data-aos-duration={1000}>
                <div className="about-boxes2">
                  <img src={Home3} alt="" />
                  <div className="content-area">
                    <h4>Transparente Kommunikation</h4>
                    <div className="space16" />
                    <p>Ich erkläre Versicherungsoptionen klar und verständlich – ohne Fachchinesisch. Sie wissen jederzeit, wofür Sie sich entscheiden.</p>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} data-aos="fade-up" data-aos-duration={1100}>
                <div className="about-boxes2">
                  <img src={Home4} alt="" />
                  <div className="content-area">
                    <h4>Ganzheitlicher Ansatz</h4>
                    <div className="space16" />
                    <p>Ich betrachte nicht nur einzelne Verträge, sondern Ihr gesamtes Risikoprofil – für eine umfassende und nachhaltige Absicherung.</p>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} data-aos="fade-up" data-aos-duration={1200}>
                <div className="about-boxes2">
                  <img src={Home5} alt="" />
                  <div className="content-area">
                    <h4>Digitale Kompetenz</h4>
                    <div className="space16" />
                    <p>Moderne Tools ermöglichen es mir, Beratung flexibel, ortsunabhängig und effizient zu gestalten – auch komplett digital.</p>
                  </div>
                </div>
              </Col>
              <div className="soace20" />
              <Col lg={6} md={6}>
                <h3>Berufserfahrung</h3>
                <div className="space32" />
                <div className="about-others-box" data-aos="zoom-in" data-aos-duration={900}>
                  <Link to="">seit 2020</Link>
                  <div className="space16" />
                  <h4>
                    <Link to="">Versicherungsexperte </Link>
                  </h4>
                  <div className="space16" />
                  <p>Finova</p>
                  <div className="space32" />
                  <Link to=""> Beratung in allen Versicherungsfragen <br />
                    Risikoanalyse und maßgeschneiderte Policen <br />
                    Betreuung von Privat- und Firmenkunden
                  </Link>
                </div>
                <div className="about-others-box text-center" data-aos="zoom-in" data-aos-duration={1000}>
                  <h4>Stay With Me </h4>
                  <div className="space18" />
                  <ul>
                    <li>
                      <Link to="">
                        <img src={Sicon1} alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <img src={Sicon2} alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <img src={Sicon3} alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <img src={Sicon4} alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="m-0">
                        <img src={Sicon5} alt="" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={6} md={6}>
                <h3>Ausbildung</h3>
                <div className="space32" />
                <div className="about-others-box" data-aos="zoom-in" data-aos-duration={1100}>
                  <Link to="">2010 - 2013</Link>
                  <div className="space16" />
                  <h4>
                    <Link to="">Zertifizierter Versicherungsberater (WKO)</Link>
                  </h4>
                  <div className="space16" />
                  <p>Graz</p>
                  <div className="space32" />
                  <Link to="">2013 - 2015</Link>
                  <div className="space16" />
                  <h4>
                    <Link to="">Österreichische Finanzakademie</Link>
                  </h4>
                  <div className="space16" />
                  <p>Graz</p>
                </div>
              </Col>
              <div className="space20" />
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
