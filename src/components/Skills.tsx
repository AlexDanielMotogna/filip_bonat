'use client'
import Skill1 from '@/assets/img/icons/skill1.svg'
import Skill2 from '@/assets/img/icons/skill2.svg'
import Skill3 from '@/assets/img/icons/skill3.svg'
import Skill4 from '@/assets/img/icons/skill4.svg'
import Skill5 from '@/assets/img/icons/skill5.svg'
import Skill6 from '@/assets/img/icons/skill6.svg'
import Sublogo1 from '@/assets/img/icons/sublogo1.svg'
import Aos from 'aos'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'

const Skills = () => {
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
      <div id="list-item-4">
        <div className="skill-section-area">
          <Container>
            <Row>
              <Col gl={12}>
                <div className="skill-header heading1">
                  <h5 data-aos="fade-left" data-aos-duration={800}>
                    <img src={Sublogo1} alt="" />
                    My Skill
                  </h5>
                  <div className="space24" />
                  <h2 data-aos="fade-left" data-aos-duration={1000}>
                    The Tools Behind
                  </h2>
                  <div className="space24" />
                  <h2 className="head" data-aos="fade-left" data-aos-duration={1100}>
                    Exceptional <span>Design</span>
                  </h2>
                </div>
                <div className="space80" />
                <Row>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={900}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <img src={Skill1} alt="" />
                      </div>
                      <div className="space24" />
                      <h3>
                        <span className="counter">
                          <CountUp duration={3} start={0} end={96} />
                        </span>
                        %
                      </h3>
                      <div className="space16" />
                      <p>Figma</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={1000}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <img src={Skill2} alt="" />
                      </div>
                      <div className="space24" />
                      <h3>
                        <span className="counter">
                          <CountUp duration={3} start={0} end={87} />
                        </span>
                        %
                      </h3>
                      <div className="space16" />
                      <p>Photoshop</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={1100}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <img src={Skill3} alt="" />
                      </div>
                      <div className="space24" />
                      <h3>
                        <span className="counter">
                          <CountUp duration={3} start={0} end={90} />
                        </span>
                        %
                      </h3>
                      <div className="space16" />
                      <p>Illustrator</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={1200}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <img src={Skill4} alt="" />
                      </div>
                      <div className="space24" />
                      <h3>
                        <span className="counter">
                          <CountUp duration={3} start={0} end={89} />
                        </span>
                        %
                      </h3>
                      <div className="space16" />
                      <p>Sketch</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={1000}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <img src={Skill5} alt="" />
                      </div>
                      <div className="space24" />
                      <h3>
                        <span className="counter">
                          <CountUp duration={3} start={0} end={92} />
                        </span>
                        %
                      </h3>
                      <div className="space16" />
                      <p>Adobe XD</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={11000}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <img src={Skill6} alt="" className="Wordpress" />
                      </div>
                      <div className="space24" />
                      <h3>
                        <span className="counter">
                          <CountUp duration={3} start={0} end={85} />
                        </span>
                        %
                      </h3>
                      <div className="space16" />
                      <p>Wordpress</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Skills
