'use client'
import BlogImg03 from '@/assets/img/all-images/blog/blog-img3.png'
import BlogImg04 from '@/assets/img/all-images/blog/blog-img4.png'
import BlogImg05 from '@/assets/img/all-images/blog/blog-img5.png'
import BlogImg06 from '@/assets/img/all-images/blog/blog-img6.png'
import BlogImg07 from '@/assets/img/all-images/blog/blog-img7.png'
import BlogImg08 from '@/assets/img/all-images/blog/blog-img8.png'
import SubLogo1 from '@/assets/img/icons/sublogo1.svg'
import Aos from 'aos'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCalendarDays, FaClock, FaFacebookF, FaInstagram, FaReply, FaYoutube } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const BlogDetails = () => {
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
        <div className="blog-single-area">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="heading1">
                  <h5>
                    <img src={SubLogo1} alt="image" />
                    Blog details
                  </h5>
                  <div className="space24" />
                  <h2>Behind the Pixels: My Favorite Design Projects</h2>
                </div>
                <div className="space48" />
                <div className="blog-details-content">
                  <div className="list">
                    <ul>
                      <li>
                        <Link to="">
                          <img src={BlogImg05} alt="image" /> Alex Carry
                        </Link>
                        <span> | </span>
                      </li>
                      <li>
                        <Link to="">UI/UX</Link>
                      </li>
                    </ul>
                    <ul className="list1">
                      <li>
                        <Link to="">
                          <FaCalendarDays className="fa-solid " /> Oct 26, 2024
                        </Link>
                        <span> | </span>
                      </li>
                      <li>
                        <Link to="">
                          <FaClock className="fa-solid" /> 3 min read
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space24" />
                  <div className="img1">
                    <img src={BlogImg06} alt="image" />
                  </div>
                  <div className="space24" />
                  <p>
                    Design is more than just visuals; it’s about creating meaningful connections between users and digital platforms. Over the years,
                    I’ve had the privilege of working on projects that challenged my creativity, enhanced my skills, and left a lasting impact on both
                    clients and users. Here’s a closer look at some of my favorite design projects and the stories behind them.
                  </p>
                  <div className="space48" />
                  <h3>Redefining an E-Commerce Experience</h3>
                  <div className="space24" />
                  <p>
                    The goal was to create a seamless shopping experience that catered to a diverse audience. By focusing on intuitive navigation and
                    personalized interfaces, I designed a platform that simplified online shopping without sacrificing style. This project was a
                    turning point in understanding the power of user personas and how small details like button placements can enhance engagement.
                  </p>
                  <div className="space48" />
                  <h3>A Minimalist Approach to Productivity</h3>
                  <div className="space24" />
                  <p>
                    This project was all about balance. The challenge was to combine functionality with simplicity for a productivity app. By
                    stripping down unnecessary elements and using a clean, calming color palette, I delivered a design that made task management
                    stress-free. This taught me the importance of reducing cognitive load through design.
                  </p>
                  <div className="space48" />
                  <h3>Breathing New Life into a Legacy Brand</h3>
                  <div className="space24" />
                  <p>
                    Working with an established company meant maintaining its identity while modernizing its digital presence. Through bold
                    typography, dynamic visuals, and a responsive layout, I transformed their outdated website into a vibrant online hub. This project
                    reinforced my ability to blend tradition with innovation.
                  </p>
                  <div className="space48" />
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="img1">
                        <img src={BlogImg04} alt="image" />
                      </div>
                      <div className="space30" />
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="img1">
                        <img src={BlogImg03} alt="image" />
                      </div>
                      <div className="space30" />
                    </div>
                  </div>
                  <div className="space18" />
                  <h3>Crafting an Immersive Experience</h3>
                  <div className="space24" />
                  <p>
                    For a platform designed to inspire travel, the design had to be as exciting as the destinations it showcased. High-resolution
                    imagery, immersive animations, and interactive maps brought the user journey to life. This project allowed me to experiment with
                    motion design and understand the importance of visual storytelling.
                  </p>
                  <div className="space48" />
                  <div className="pera-box">
                    <p>"Good design is making something intelligible and memorable. Great design is making something memorable and meaningful."</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={20} viewBox="0 0 24 20" fill="none">
                      <path
                        d="M13.7277 18.2909C14.7008 17.7229 15.7926 16.9209 16.7705 15.8129C17.4513 15.0511 17.9602 14.1348 18.2586 13.1333C18.5569 12.1317 18.6371 11.0712 18.4928 10.0319C18.4798 9.93292 18.4349 9.84176 18.3658 9.77392C17.8605 9.9643 17.3222 10.0353 16.7884 9.98192C15.8792 9.89192 15.0688 9.45592 14.4477 8.79892C14.2838 8.63575 14.1377 8.45362 14.0119 8.25592C13.4256 7.39192 13.1112 6.28292 13.2025 5.10792C13.3936 2.63092 15.3098 0.797922 17.4811 1.01292L18.1192 1.07592C19.6213 1.22492 22.5493 2.41892 22.5851 6.69392C22.6208 10.9699 21.5366 13.7389 18.4176 16.7989C16.9973 18.1909 15.3183 18.8769 13.9103 19.2109C13.4237 19.3269 13.2844 18.5509 13.7277 18.2909ZM2.07591 18.2909C3.04908 17.7229 4.14085 16.9209 5.11873 15.8129C5.79955 15.0511 6.3084 14.1348 6.60679 13.1333C6.90518 12.1317 6.9853 11.0712 6.84108 10.0319C6.82803 9.93292 6.78314 9.84176 6.71403 9.77392C6.20872 9.96433 5.6704 10.0353 5.13661 9.98192C4.22744 9.89192 3.41708 9.45592 2.79591 8.79892C2.63205 8.63575 2.48589 8.45362 2.36014 8.25592C1.77379 7.39192 1.45944 6.28292 1.55073 5.10792C1.74179 2.63092 3.65803 0.797922 5.83026 1.01292L6.46744 1.07592C7.96956 1.22492 10.8976 2.41892 10.9333 6.69392C10.9691 10.9699 9.88485 13.7379 6.76579 16.7979C5.34555 18.1909 3.6665 18.8769 2.26038 19.2109C1.77285 19.3269 1.63261 18.5509 2.07591 18.2909Z"
                        stroke="#FFAE00"
                        strokeWidth="1.4"
                      />
                    </svg>
                  </div>
                  <div className="space48" />
                  <div className="tags-social">
                    <div className="tags">
                      <ul>
                        <li>Tags:</li>
                        <li>
                          <Link to="">#TechSolution</Link>
                        </li>
                        <li>
                          <Link to="" className="m-0">
                            #BussinessIT
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="social">
                      <ul>
                        <li>Social:</li>
                        <li>
                          <Link to="">
                            <FaFacebookF className="fa-brands" />
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <FaInstagram className="fa-brands" />
                          </Link>
                        </li>
                        <li>
                          <Link to="" className="m-0">
                            <FaYoutube className="fa-brands" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="space48" />
                  <h3>Comments (2)</h3>
                  <div className="space32" />
                  <div className="comments-boxarea">
                    <div className="comments-boxes">
                      <div className="comments-auhtor-box">
                        <div className="img3">
                          <img src={BlogImg07} alt="image" />
                        </div>
                        <div className="content">
                          <Link to="" className="name">
                            Mr. Ana Ritchie
                          </Link>
                          <Link to="" className="date">
                            {/* <img src={Calender} alt="image" />  */}8 December 2024
                          </Link>
                        </div>
                      </div>
                      <Link to="" className="reply">
                        <FaReply className="fa-solid" /> Reply
                      </Link>
                    </div>
                    <div className="space16" />
                    <p>
                      Before diving into complex design software or frameworks, it's crucial to have a solid understanding of the fundamentals of web
                      design, including HTML, CSS, and JavaScript. These languages form the backbone of every website and are.
                    </p>
                  </div>
                  <div className="space30" />
                  <div className="comments-boxarea box2">
                    <div className="comments-boxes">
                      <div className="comments-auhtor-box">
                        <div className="img3">
                          <img src={BlogImg08} alt="image" />
                        </div>
                        <div className="content">
                          <Link to="" className="name">
                            Andre Philips
                          </Link>
                          <Link to="" className="date">
                            {/* <img src={Calender} alt="image" />  */}8 December 2024
                          </Link>
                        </div>
                      </div>
                      <Link to="" className="reply">
                        <FaReply className="fa-solid" /> Reply
                      </Link>
                    </div>
                    <div className="space16" />
                    <p>
                      The field of web design is constantly evolving, with new trends and technologies emerging regularly. Make it a habit to stay
                      updated on the latest design trends by following industry blogs, attending.
                    </p>
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

export default BlogDetails
