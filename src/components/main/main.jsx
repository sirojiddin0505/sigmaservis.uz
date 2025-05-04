import React from 'react'
import './main.css'
import { FaArrowRight } from "react-icons/fa";
import main1 from '../images/main.jpg'


const main = () => {
  return (
    <div className='main'>
        <div className="container main__container">
            <div className="main__left">
                <img src={main1} alt="" className="main__img" />
            </div>
            <div className="main__right">
                <p className="main__text">//biz haqimizda//</p>
                <h2 className="main__title">Sigma Avtoservis -Avtomobilingizga g'amxo'rlik qilish uchun eng yaxshi joy</h2>
                <p className="main__info">Biz ko'p yillik tajriba va professionallik bilan yuqori sifatli avtomobillarni ta'mirlash xizmatlarini taqdim etamiz. Bizning mutaxassislar jamoasi har qanday vaziyatda sizga yordam berishga tayyor.</p>
                <div className="main__box">
                    <p className="box__text">01</p>
                    <span className='box__span'>
                        <h3 className="main__subtitle">Mutaxasislar va mutahasislar</h3>
                        <p className="box__info">Mutaxassislarimiz yuqori malaka va professionallikka ega.</p>
                    </span>
                </div>
                <div className="main__box">
                    <p className="box__text">02</p>
                    <span className='box__span'>
                        <h3 className="main__subtitle">Sifatli xizmat ko'rsatish markazi </h3>
                        <p className="box__info">Biz har bir mijozga yuqori sifatli xizmatni kafolatlaymiz.
                        </p>
                    </span>
                </div>
                <div className="main__box">
                    <p className="box__text">03</p>
                    <span className='box__span'>
                        <h3 className="main__subtitle">Mukofotlangan xodimlar</h3>
                        <p className="box__info">Xodimlarimiz mehnatlari uchun ko'plab mukofotlarga sazovor bo'lgan.
                        </p>
                    </span>
                </div>
                <button className="main__btn">Qo'ng'iroq qiling <FaArrowRight/> </button>
            </div>
        </div>
    </div>
  )
}

export default main