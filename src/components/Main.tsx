'use client'
import Other1 from '@/assets/img/all-images/others/others1.png'
import Elements1 from '@/assets/img/elements/elements1.png'
import Arrow from '@/assets/img/icons/arrow1.svg'
import Sublogo1 from '@/assets/img/icons/sublogo1.svg'
import Aos from 'aos'
import { useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
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
      <div id="list-item-1">
        <div className="hero-heading-area heading1">
          <h5 data-aos="fade-left" data-aos-duration={800}>
            <img src={Sublogo1} alt="" />
            Hi, I’m Alex, UI/UX Designer
          </h5>
          <div className="space24" />
          <h1 data-aos="fade-left" data-aos-duration={900}>
            Designing Intuitive
          </h1>
          <div className="space24" />
          <h1 className="head" data-aos="fade-left" data-aos-duration={1000}>
            Experiences <span>Inspire</span>
          </h1>
          <div className="space24" />
          <p data-aos="fade-left" data-aos-duration={1100}>
            Your gateway to innovative design, seamless user experiences, and impactful solutions. Turning complex ideas into user-friendly designs.
          </p>
          <div className="arrow" data-aos="fade-left" data-aos-duration={1200}>
            <Link to="">
              <img src={Elements1} alt="" className="elements1 keyframe5" />
              <img src={Arrow} alt="" className="arrow1" />
            </Link>
            <div className="images">
              <img src={Other1} alt="" />
              <p>
                2k+ reviews <br /> (4.90 of 5)
              </p>
            </div>
          </div>
          <div className="space32" />
          <div className="main-btn-area" data-aos="fade-up" data-aos-duration={1200}>
            <Link to="">
              Lets Work Together
              <span>
                <FaArrowRight className="fa-solid" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
