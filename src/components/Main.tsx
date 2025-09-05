'use client'
import Other1 from '@/assets/img/all-images/others/others1.png'
import Aos from 'aos'
import { useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const Main = () => {
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
      <div id="Startseite">
        <div className="hero-heading-area heading1">
          {/*  */}
          <div className="space24" />
          <h1 data-aos="fade-left" data-aos-duration={900}>
            Individuelle Finanzberatung
          </h1>
          <div className="space24" />
          <h1 className="head" data-aos="fade-left" data-aos-duration={1000}>
            die <span>Vertrauen</span> schafft
          </h1>
          <div className="space24" />
          <p data-aos="fade-left" data-aos-duration={1100}>
            Ihre Zukunft in guten Händen transparent, persönlich, unabhängig.
          </p>
          <div className="arrow" data-aos="fade-left" data-aos-duration={1200}>
            <div className="images">
              <img src={Other1} alt="" />
              <p>
                100+ zufriedene Kunden
                <br />Bewertung (4.90 of 5)
              </p>
            </div>
          </div>
          <div className="space32" />
          <div className="main-btn-area" data-aos="fade-up" data-aos-duration={1200}>
            <a href="tel:+43 676 7857277">
              Jetzt Kontakt aufnehmen
              <span>
                <FaArrowRight className="fa-solid" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
