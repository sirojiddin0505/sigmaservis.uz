import React from 'react'
import './section.css'
import section1 from '../images/section1.jpg'
import { FaCarSide, FaCar, FaTools , FaOilCan, FaCheck, FaArrowRight} from "react-icons/fa";


const section = () => {
  return (
    <div className='section'>
        <div className="container section__container">
            <div className="section__left">
                <span className="section__span">
                    <FaCarSide className='icons'/><h2 className="section__title">Diagnostika</h2>
                </span>
                <span className="section__span">
                    <FaCar className='icons'/> <h2 className="section__title">Dvigatelga texnik xizmat ko'rsatish</h2>
                </span>
                <span className="section__span">
                    <FaTools className='icons'/> <h2 className="section__title">Shina almashtirish</h2>
                </span>
                <span className="section__span">
                    <FaOilCan className='icons'/> <h2 className="section__title">Yog' almashtirish</h2>
                </span>
            </div>
            <div className="section__center">
                <img src={section1} alt="#" className="section__img" />
            </div>
            <div className="section__right">
                <h2 className="section__subtitle">Avtoservisda 15 yillik tajriba</h2>
                <p className="section__info">Biz eng zamonaviy texnologiyalar va uskunalardan foydalangan holda avtomobilingiz uchun yuqori sifatli diagnostika xizmatlarini taqdim etamiz.</p>
                <div className="right__box">
                    <div className="section__box"><FaCheck className='box__icon'/> <p className="section__text">Sifatli xizmat</p></div>
                    <div className="section__box"><FaCheck className='box__icon'/> <p className="section__text">Tajribali mutahasislar</p></div>
                    <div className="section__box"><FaCheck className='box__icon'/> <p className="section__text">Zamonaviy uskunalar</p></div>
                </div>
                <button className="section__btn">Qo'ng'iroq qiling <FaArrowRight/></button>
            </div>
        </div>
    </div>
  )
}

export default section