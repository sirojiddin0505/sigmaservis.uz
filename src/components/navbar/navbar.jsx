import React from 'react'
import './navbar.css'
import { FaArrowRight } from "react-icons/fa";
import logo from '../images/logo.png'

const navbar = () => {
  return (
    <nav>
        <div className="container nav__container">
            <div className="nav__logo">
                <img src={logo} alt="" className="nav__logo" />
            </div>
            <div className="nav__center">
                <a href="" className="nav__link">UY</a>
                <a href="" className="nav__link">BIZ HAQIMIZDA</a>
                <a href="" className="nav__link">XIZMATLAR</a>
                <a href="" className="nav__link">KONTAKTLAR</a>
                <a href="tel:+993977171118" className="nav__link">+998 97 717 11 18</a>
            </div>
            <div className="nav__right"><button className="nav__btn">Texnikni Chaqiring <FaArrowRight/> </button></div>
            <div className="hum__menu">≡</div>
        </div>
    </nav>
)
}

export default navbar