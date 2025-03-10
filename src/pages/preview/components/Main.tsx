
import Preview1 from '@/assets/img/all-images/hero/preview-img1.png'
import Preview2 from '@/assets/img/all-images/hero/preview-img2.png'
import Aos from 'aos'
import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
      <Row>
        <Col lg={10} className=" m-auto">
          <div className="heading1 text-center">
            <h5>VERSION 1.0</h5>
            <div className="space20" />
            <h2 className="head" data-aos="fade-up" data-aos-duration={1000}>
              Personal Portfolio <span>One Page</span> HTML5 Template
            </h2>
          </div>
          <div className="space80 d-lg-block d-none" />
          <div className="space40 d-lg-none d-block" />
        </Col>
      </Row>
      <Row>
        <Col lg={12} className="m-auto">
          <div className="images-area" data-aos="fade-up" data-aos-duration={1000}>
            <div className="img1">
              <Link to="/demo-1" >
                <img src={Preview1} alt="" />
              </Link>
            </div>
            <div className="space32" />
            <div className="text text-center">
              <Link to="/demo-1">
                Main Demo
              </Link>
            </div>
          </div>
          <div className="space100 d-lg-block d-none" />
          <div className="space50 d-lg-none d-block" />
          <Row>
            <Col lg={6} data-aos="fade-right" data-aos-duration={1000}>
              <div className="images-area2">
                <div className="img1">
                  <Link to="/demo-2">
                    <video muted autoPlay loop>
                      <source src="/video1.mp4" type="video/mp4" />
                    </video>
                  </Link>
                </div>
                <div className="btn-area1">
                  <Link to="/demo-2" className="vl-btn1 m-0">
                    VIEW DEMO
                  </Link>
                </div>
                <div className="space32" />
                <div className="text text-center">
                  <Link to="/demo-2">
                    Water Effect
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-left" data-aos-duration={1000}>
              <div className="images-area2">
                <div className="img1">
                  <Link to="/demo-3">
                    <video muted autoPlay loop>
                      <source src="/video2.mp4" type="video/mp4" />
                    </video>
                  </Link>
                </div>
                <div className="btn-area1">
                  <Link to="/demo-3" className="vl-btn1 m-0">
                    VIEW DEMO
                  </Link>
                </div>
                <div className="space32" />
                <div className="text text-center">
                  <Link to="/demo-3">
                    Particles Effect
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-right" data-aos-duration={1000}>
              <div className="images-area2">
                <div className="img1">
                  <Link to="/demo-4">
                    <video muted autoPlay loop>
                      <source src="/video3.mp4" type="video/mp4" />
                    </video>
                  </Link>
                </div>
                <div className="btn-area1">
                  <Link to="/demo-4" className="vl-btn1 m-0">
                    VIEW DEMO
                  </Link>
                </div>
                <div className="space32" />
                <div className="text text-center">
                  <Link to="/demo-4">
                    Noise Effect
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-left" data-aos-duration={1000}>
              <div className="images-area2">
                <div className="img1">
                  <Link to="/demo-5">
                    <video muted autoPlay loop>
                      <source src="/video4.mp4" type="video/mp4" />
                    </video>
                  </Link>
                </div>
                <div className="btn-area1">
                  <Link to="/demo-5" className="vl-btn1 m-0">
                    VIEW DEMO
                  </Link>
                </div>
                <div className="space32" />
                <div className="text text-center">
                  <Link to="/demo-5">
                    3D Effect
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-right" data-aos-duration={1000}>
              <div className="images-area2">
                <div className="img1">
                  <Link to="/demo-6">
                    <video muted autoPlay loop>
                      <source src="/video5.mp4" type="video/mp4" />
                    </video>
                  </Link>
                </div>
                <div className="btn-area1">
                  <Link to="/demo-6" className="vl-btn1 m-0">
                    VIEW DEMO
                  </Link>
                </div>
                <div className="space32" />
                <div className="text text-center">
                  <Link to="/demo-6">
                    Earth Line Sphere
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-left" data-aos-duration={1000}>
              <div className="images-area2">
                <div className="img1">
                  <Link to="/demo-7">
                    <img src={Preview2} alt="" />
                  </Link>
                </div>
                <div className="btn-area1">
                  <Link to="/demo-7"  className="vl-btn1 m-0">
                    VIEW DEMO
                  </Link>
                </div>
                <div className="space32" />
                <div className="text text-center">
                  <Link to="/demo-7">
                    Solid Color
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <div className="space30" />
          <div className="footer-area2">
            <p className="text-center">© 2024 OVRO. All Rights Reserved.</p>
          </div>
          <div className="space32" />
        </Col>
      </Row>
    </>
  )
}

export default Main
