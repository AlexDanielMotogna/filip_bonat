'use client'
import Home1 from '@/assets/img/icons/home1.svg'
import Home2 from '@/assets/img/icons/home2.svg'
import Home3 from '@/assets/img/icons/home3.svg'
import Home4 from '@/assets/img/icons/home4.svg'
import Home5 from '@/assets/img/icons/home5.svg'
import Home6 from '@/assets/img/icons/home6.svg'
import Home7 from '@/assets/img/icons/home7.svg'
import Home8 from '@/assets/img/icons/home8.svg'

const IconVertical = () => {
  return (
    <>
      <div id="list-example" className="list-group">
        <a className="list-group-item list-group-item-action active" href="#list-item-1">
          <img src={Home1} alt="" /> <span>Home</span>
        </a>
        <a className="list-group-item list-group-item-action" href="#list-item-2">
          <img src={Home2} alt="" /> <span>About Us</span>
        </a>
        <a className="list-group-item list-group-item-action" href="#list-item-3">
          <img src={Home3} alt="" /> <span>Our Service</span>
        </a>
        <a className="list-group-item list-group-item-action" href="#list-item-4">
          <img src={Home4} alt="" /> <span>My Skill</span>
        </a>
        <a className="list-group-item list-group-item-action" href="#list-item-5">
          <img src={Home5} alt="" /> <span>Portfolio</span>
        </a>
        <a className="list-group-item list-group-item-action" href="#list-item-6">
          <img src={Home6} alt="" /> <span>Testimonial</span>
        </a>
        <a className="list-group-item list-group-item-action" href="#list-item-7">
          <img src={Home8} alt="" /> <span>Our Blog</span>
        </a>
        <a className="list-group-item list-group-item-action m-0" href="#list-item-8">
          <img src={Home7} alt="" /> <span>Contact Us</span>
        </a>
      </div>
    </>
  )
}

export default IconVertical
