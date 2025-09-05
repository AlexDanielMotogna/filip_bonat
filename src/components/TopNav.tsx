'use client'
import Bars from '@/assets/img/icons/bars-icons1.svg'
import Mail1 from '@/assets/img/icons/mail1.svg'
import Logo from '@/assets/img/logo/logo1.png'
import Logo2 from '@/assets/img/logo/logo2.png'
import { useState } from 'react'
import { Col, Container, Form, Offcanvas, Row } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa6'
import ThemeToggle from './ThemeToggle'
import { Link } from 'react-router-dom'

const TopNav = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

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
                  <div className="btn-area d-lg-flex">
                    <ThemeToggle />
                    <Link to="/" className="vl-btn1">
                      KONTAKTIEREN SIE MICH&nbsp;
                      <span>
                        <img src={Mail1} alt="" />
                      </span>
                    </Link>
                    <button onClick={handleShow} className="hamburger_menu" data-bs-toggle="offcanvas" role="button" aria-controls="offcanvasMenu">
                      <img src={Bars} alt="" />
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>

      <Offcanvas show={show} onHide={handleClose} placement="end" scroll={true} className="header-site-icon">
        <div className="slide-bar slide-bar1" style={{ padding: '50px' }}>
          <div className="sidebar-info">
            <div className="sidebar-logo">
              <Link to="/">
                <img src={Logo2} alt="logo" />
              </Link>
            </div>
            <div className="sidebar-content">
              <ul>
                <li>
                  <a href="#Startseite">Startseite</a>
                </li>
                <li>
                  <a href="#Übermich">Übermich</a>
                </li>
                <li>
                  <a href="#Leistungen">Leistungen</a>
                </li>
                <li>
                  <a href="#Kompetenzen">Kompetenzen</a>
                </li>
                <li>
                  <a href="#Bewertungen">Bewertungen</a>
                </li>
                <li>
                  <a href="#Kontakt">Kontakt</a>
                </li>
              </ul>
            </div>
            <div className="space32" />
            <div className="space16" />
            <div className="btn-area">
              <Link to="" className="vl-btn1">
                Kontakt aufnehmen <img src={Mail1} alt="" />
              </Link>
            </div>
            <div className="space40" />
            <div className="social-link-area">
              <h3 className="sidebar-heading">Soziale Netzwerke</h3>
              <ul>
                <li>
                  <Link to="">
                    <FaFacebook className="fa-brands" />
                  </Link>
                  <Link to="">
                    <FaInstagram className="fa-brands" />
                  </Link>
                  <Link to="">
                    <FaLinkedinIn className="fa-brands" />
                  </Link>
                  <Link to="">
                    <FaPinterestP className="fa-brands" />
                  </Link>
                  <Link to="">
                    <FaYoutube className="fa-brands" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space40" />
            <div className="form-area" style={{ width: '90%' }}>
              <h3>Newsletter abonnieren</h3>
              <Form>
                <input type="text" placeholder="E-Mail-Adresse*" />
                <button type="submit" className="vl-btn1" style={{ fontSize: '15px' }}>
                  abonnieren
                </button>
              </Form>
            </div>
          </div>
        </div>
      </Offcanvas>
    </>
  )
}

export default TopNav
