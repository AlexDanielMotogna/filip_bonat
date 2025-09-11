'use client'
import Bars from '@/assets/img/icons/bars-icons1.svg'
import Mail1 from '@/assets/img/icons/mail1.svg'
import Logo from '@/assets/img/logo/logo1.png'
import Logo2 from '@/assets/img/logo/logo2.png'
import { useState } from 'react'
import { Col, Container, Form, Offcanvas, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import KreditrechnerModal from './KreditrechnerModal'

const TopNav = () => {
  const { i18n, t } = useTranslation()
  const [show, setShow] = useState(false)
  const [showKreditModal, setShowKreditModal] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <header>
        <div className="header-area homepage1 header header-sticky " id="header">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="header-elements">
                  <div className="site-logo">
                    <Link to="/">
                      <img src={Logo} alt="" />
                    </Link>
                  </div>
                  <div className="btn-area d-lg-flex gap-3 align-items-center">
                    <select
                      onChange={(e) => changeLanguage(e.target.value)}
                      defaultValue={i18n.language}
                      className="lang-select"
                    >
                      <option value="de">DE</option>
                      <option value="en">EN</option>
                      <option value="es">ES</option>
                      <option value="pl">PL</option>
                      <option value="hr">HR</option>
                      <option value="hu">HU</option>
                      <option value="ro">RO</option>
                      <option value="sk">SK</option>
                      <option value="sl">SL</option>
                    </select>
                    <button
                      onClick={() => setShowKreditModal(true)}
                      className="kreditrechner-btn"
                    >
                      {t('kreditrechner')}
                    </button>
                    <button
                      onClick={handleShow}
                      className="hamburger_menu"
                      data-bs-toggle="offcanvas"
                      role="button"
                      aria-controls="offcanvasMenu"
                    >
                      <img src={Bars} alt="" />
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        scroll={true}
        className="header-site-icon"
      >
        <div className="slide-bar slide-bar1" style={{ padding: '50px' }}>
          <div className="sidebar-info">
            <div className="sidebar-logo">
              <Link to="/">
                <img src={Logo2} alt="logo" />
              </Link>
            </div>
            <div className="sidebar-content">
              <ul>
                <li><a href="#Startseite">{t('Startseite')}</a></li>
                <li><a href="#Übermich">{t('Übermich')}</a></li>
                <li><a href="#Leistungen">{t('Leistungen')}</a></li>
                <li><a href="#Kompetenzen">{t('Kompetenzen')}</a></li>
                <li><a href="#Bewertungen">{t('Bewertungen')}</a></li>
                <li><a href="#Kontakt">{t('Kontakt')}</a></li>
              </ul>
            </div>
            <div className="space32" />
            <div className="space16" />
            <div className="btn-area">
              <Link to="" className="vl-btn1">
                {t('Kontakt aufnehmen')} <img src={Mail1} alt="" />
              </Link>
            </div>
            <div className="space40" />
            <div className="social-link-area">
              <h3 className="sidebar-heading">{t('Soziale Netzwerke')}</h3>
              <ul>
                <li>
                  <Link to=""><FaFacebook className="fa-brands" /></Link>
                  <Link to=""><FaInstagram className="fa-brands" /></Link>
                  <Link to=""><FaLinkedinIn className="fa-brands" /></Link>
                  <Link to=""><FaPinterestP className="fa-brands" /></Link>
                  <Link to=""><FaYoutube className="fa-brands" /></Link>
                </li>
              </ul>
            </div>
            <div className="space40" />
            <div className="form-area" style={{ width: '90%' }}>
              <h3>{t('Newsletter abonnieren')}</h3>
              <Form>
                <input type="text" placeholder="E-Mail-Adresse*" />
                <button
                  type="submit"
                  className="vl-btn1"
                  style={{ fontSize: '15px' }}
                >
                  {t('abonnieren')}
                </button>
              </Form>
            </div>
          </div>
        </div>
      </Offcanvas>

      {/* Kreditrechner Modal */}
      <KreditrechnerModal
        isOpen={showKreditModal}
        onClose={() => setShowKreditModal(false)}
      />
    </>
  )
}

export default TopNav
