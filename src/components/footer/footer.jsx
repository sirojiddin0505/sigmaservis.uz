import React from "react";
import './footer.css'
import { FaArrowRight , FaInstagram, FaTelegram } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDropright } from "react-icons/io";



const footer = ()=>{
    return(
        <footer>
            <div className="container footer__container">
                <div className="footer__left">
                    <h2 className="footer__title">Manzil</h2>
                    <p className="footer__text"><CiLocationOn className="footer__icon"/> Yakkasaroyskaya ko‘chasi, Toshkent, O‘zbekiston, Orientir: “Navro‘z” to‘yxonasi ro‘parasi</p>
                    <span className="footer__span"><BsFillTelephoneFill className="footer__icon"/> <a href="tel:+99897 717 11 18" className="footer__link">+99897 717 11 18</a></span>
                    <span className="footer__span"><BsFillTelephoneFill className="footer__icon"/> <a href="tel:+99897 738 72 75" className="footer__link">+99897 738 72 75</a></span>
                    <span className="footer__span"><FaInstagram className="footer__icon"/> <FaTelegram className="footer__icon"/> </span>
                </div>
                <div className="footer__time">
                    <h2 className="footer__title">Ish vaqti</h2>
                    <p className="footer__text">Dushanba - Yakshanba:24/7</p>
                </div>
                <div className="footer__center">
                    <h2 className="footer__title">Xizmatlar</h2>
                    <a href="" className="footer__link"><IoIosArrowDropright className="footer__icons"/> Diagnostika</a>
                    <a href="" className="footer__link"><IoIosArrowDropright className="footer__icons"/>  Dvigatelga texnik xizmat ko'rsatish</a>
                    <a href="" className="footer__link"><IoIosArrowDropright className="footer__icons"/> Shinalarni almashtirish</a>
                    <a href="" className="footer__link"><IoIosArrowDropright className="footer__icons"/> Yog' almashtirish</a>
                    <a href="" className="footer__link"><IoIosArrowDropright className="footer__icons"/> Burilish xizmati</a>
                    <a href="" className="footer__link"><IoIosArrowDropright className="footer__icons"/> Tonlash</a>
                    <a href="" className="footer__link"><IoIosArrowDropright className="footer__icons"/> Motorist</a>
                    <a href="" className="footer__link"><IoIosArrowDropright className="footer__icons"/> Kaspatrav</a>
                </div>
                <div className="footer__right">
                    <h2 className="footer__title">Kontaktlar</h2>
                    <button className="footer__btn">Texnikni Chaqiring <FaArrowRight className="footer__icon"/></button>
                </div>
            </div>
        </footer>
    )
}
export default footer