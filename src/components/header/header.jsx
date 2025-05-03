import React from 'react'
import './header.css'
import { FaArrowRight } from "react-icons/fa";
import header1 from '../images/header1.jpeg'
// import header2 from '../images/header.png'
// import header3 from '../images/header.jpg'
import header4 from '../images/header4.png'
// import header5 from '../images/header'
// import header6 from '../images/header'


const header = () => {
  return (
    <header>
        <div className="container header__container">
            <div className="header__left">
                <p className="header__text">//Avtomobilni ta'mirlash //</p>
                <h1 className="header__title">Avtomobilni bo'lib-bo'lib ta'mirlash</h1>
                <button className="header__btn">Batafsil ma'lumot oling <FaArrowRight/> </button>
            </div>
            <div className="header__right">
                <img src={header4} alt="" className="header__img" />
            </div>
        </div>
    </header>
)
}

export default header