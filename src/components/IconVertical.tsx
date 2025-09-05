'use client'
import Home1 from '@/assets/img/icons/home1.svg'
import Home2 from '@/assets/img/icons/home2.svg'
import Home3 from '@/assets/img/icons/home3.svg'
import Home4 from '@/assets/img/icons/home4.svg'
import Home6 from '@/assets/img/icons/home6.svg'
import Home7 from '@/assets/img/icons/home7.svg'

const IconVertical = () => {
  return (
    <>
      <div id="list-example" className="list-group">
        <a className="list-group-item list-group-item-action active" href="#Startseite">
          <img src={Home1} alt="" /> <span>Startseite</span>
        </a>
        <a className="list-group-item list-group-item-action" href="#Übermich">
          <img src={Home2} alt="" /> <span>Über mich</span>
        </a>
        <a className="list-group-item list-group-item-action" href="#Leistungen">
          <img src={Home3} alt="" /> <span>Leistungen</span>
        </a>
        <a className="list-group-item list-group-item-action" href="#Kompetenzen">
          <img src={Home4} alt="" /> <span>Kompetenzen</span>
        </a>
        <a className="list-group-item list-group-item-action" href="#Bewertungen">
          <img src={Home6} alt="" /> <span>Bewertungen</span>
        </a>
        <a className="list-group-item list-group-item-action m-0" href="#Kontakt">
          <img src={Home7} alt="" /> <span>Kontakt</span>
        </a>
      </div>
    </>
  )
}

export default IconVertical
