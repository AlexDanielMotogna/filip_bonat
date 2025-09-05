'use client'
import Skill1 from '@/assets/img/all-images/skills/skill1.png'
import Skill2 from '@/assets/img/all-images/skills/skill2.png'
import Skill3 from '@/assets/img/all-images/skills/skill3.png'
import Skill4 from '@/assets/img/all-images/skills/skill4.png'
import Skill5 from '@/assets/img/all-images/skills/skill5.png'
import Skill6 from '@/assets/img/all-images/skills/skill6.png'
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
      <div id="Kompetenzen">
        <div className="skill-section-area">
          <Container>
            <Row>
              <Col gl={12}>
                <div className="skill-header heading1">
                  <h5 data-aos="fade-left" data-aos-duration={800}>
                    <img src={Sublogo1} alt="" />
                    Kompetenzen
                  </h5>
                  <div className="space24" />
                  <h2 data-aos="fade-left" data-aos-duration={1000}>
                    Die Basis für fundierte
                  </h2>
                  <div className="space24" />
                  <h2 className="head" data-aos="fade-left" data-aos-duration={1100}>
                    <span>Versicherungsberatung</span>
                  </h2>
                </div>
                <div className="space80" />
                <Row>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={900}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <img src={Skill1} alt="Fachwissen" />
                      </div>
                      <div className="space24" />
                      <h3>
                        <span className="counter"><CountUp duration={3} start={0} end={100} /></span>%
                      </h3>
                      <div className="space16" />
                      <p>Fachwissen im Versicherungswesen</p>
                    </div>
                  </Col>

                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={1000}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <img src={Skill2} alt="Kundenorientierung" />
                      </div>
                      <div className="space24" />
                      <h3>
                        <span className="counter"><CountUp duration={3} start={0} end={95} /></span>%
                      </h3>
                      <div className="space16" />
                      <p>Kundenorientierte <br /> Beratung</p>
                    </div>
                  </Col>

                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={1100}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <img src={Skill3} alt="Risikobewertung" />
                      </div>
                      <div className="space24" />
                      <h3>
                        <span className="counter"><CountUp duration={3} start={0} end={90} /></span>%
                      </h3>
                      <div className="space16" />
                      <p>Risikobewertung & <br /> Analyse</p>
                    </div>
                  </Col>

                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={1200}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <img src={Skill4} alt="Vertragsmanagement" />
                      </div>
                      <div className="space24" />
                      <h3>
                        <span className="counter"><CountUp duration={3} start={0} end={89} /></span>%
                      </h3>
                      <div className="space16" />
                      <p>Vertragsmanagement & <br /> Betreuung</p>
                    </div>
                  </Col>

                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={1000}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <img src={Skill5} alt="Digitale Beratung" />
                      </div>
                      <div className="space24" />
                      <h3>
                        <span className="counter"><CountUp duration={3} start={0} end={92} /></span>%
                      </h3>
                      <div className="space16" />
                      <p>Digitale Beratung & <br /> Tools</p>
                    </div>
                  </Col>

                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={1100}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <img src={Skill6} alt="Regulatorisches Wissen" />
                      </div>
                      <div className="space24" />
                      <h3>
                        <span className="counter"><CountUp duration={3} start={0} end={85} /></span>%
                      </h3>
                      <div className="space16" />
                      <p>Regulatorisches <br /> Wissen</p>
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
