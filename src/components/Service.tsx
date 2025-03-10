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
      <div id="list-item-3">
        <div className="service-section-area">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="service-header heading1">
                  <h5 data-aos="fade-left" data-aos-duration={800}>
                    <img src={Sublog1} alt="" />
                    My Services
                  </h5>
                  <div className="space24" />
                  <h2 data-aos="fade-left" data-aos-duration={1000}>
                    Elevating Brands
                  </h2>
                  <div className="space24" />
                  <h2 className="head" data-aos="fade-left" data-aos-duration={1100}>
                    Intuitive <span>Design</span>
                  </h2>
                  <div className="space50" />
                  <div className="div" data-aos="fade-left" data-aos-duration={900}>
                    <div className="service-main-boxes">
                      <h4>UI/UX Design</h4>
                      <div className="space24" />
                      <p>Designing intuitive, user-focused interfaces that prioritize functionality and seamless navigation.</p>
                    </div>
                  </div>
                  <div className="space30" />
                  <div className="div" data-aos="fade-left" data-aos-duration={1000}>
                    <div className="service-main-boxes">
                      <h4>User Research &amp; Prototyping</h4>
                      <div className="space24" />
                      <p>Conducting in-depth user research and creating interactive prototypes to validate ideas and refine designs.</p>
                    </div>
                  </div>
                  <div className="space30" />
                  <div className="div" data-aos="fade-left" data-aos-duration={1100}>
                    <div className="service-main-boxes">
                      <h4>Responsive Web Design</h4>
                      <div className="space24" />
                      <p>Crafting designs that adapt seamlessly across all devices, ensuring a consistent user experience.</p>
                    </div>
                  </div>
                  <div className="space30" />
                  <div className="div" data-aos="fade-left" data-aos-duration={1200}>
                    <div className="service-main-boxes">
                      <h4>Wireframing &amp; Visual Design</h4>
                      <div className="space24" />
                      <p>Creating detailed wireframes and visually stunning designs to bring ideas into focus.</p>
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
