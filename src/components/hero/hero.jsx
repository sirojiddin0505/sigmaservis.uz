import React from 'react'
import './hero.css'
import { FaCarBattery, FaWrench, FaTools, FaUnlock, FaClock , FaOilCan , FaCogs , FaCarCrash , FaStethoscope , FaIndustry , FaCarSide  } from "react-icons/fa";


const hero = () => {
  return (
    <div className='hero'>
        <div className="container hero__container">
            <p className="hero__text">bizninf xizmatlarimiz</p>
            <h2 className="hero__title">Xizmatlarimizni tekshiring</h2>
            <div className="hero__boxs">
                <div className="box">
                    <FaCarBattery className='icon'/>
                    <h3 className="box__title">Autoelektrik</h3>
                </div>
                <div className="box">
                    <FaWrench className='icon'/>
                    <h3 className="box__title">Avtomexanika</h3>
                </div>
                <div className="box">
                    <FaTools className='icon' />
                    <h3 className="box__title">Jo'nash paytida avtomobil ta'mirlash</h3>
                </div>
                <div className="box">
                    <FaWrench className='icon' />
                    <h3 className="box__title">Avto-vulkanizatsiya</h3>
                </div>
                <div className="box">
                    <FaUnlock className='icon' />
                    <h3 className="box__title">Avtomobil ochilishi</h3>
                </div>
                <div className="box">
                    <FaClock className='icon'/>
                    <h3 className="box__title">Avtomexanik 24 soat tashrif buyuradi</h3>
                </div>
                <div className="box">
                    <FaCarBattery className='icon'/>
                    <h3 className="box__title">avtoelektrikchi jo'nab ketishi 24/7</h3>
                </div>
                <div className="box">
                    <FaOilCan className='icon'/>
                    <h3 className="box__title">Yog' almashtirish</h3>
                </div>
                <div className="box">
                    <FaCarCrash className='icon'/>
                    <h3 className="box__title">Shinalarni almashtirish</h3>
                </div>
                <div className="box">
                    <FaCogs className='icon'/>
                    <h3 className="box__title">Dvigatelga texnik xizmat ko'rsatish</h3>
                </div>
                <div className="box">
                    <FaStethoscope className='icon'/>
                    <h3 className="box__title">Diagnostika</h3>
                </div>
                <div className="box">
                    <FaWrench className='icon'/>
                    <h3 className="box__title">Payvandlash ishlari</h3>
                </div>
                <div className="box">
                    <FaIndustry className='icon'/>
                    <h3 className="box__title">Burilish xizmati</h3>
                </div>
                <div className="box">
                    <FaCarSide className='icon'/>
                    <h3 className="box__title">Tonlash</h3>
                </div>
                <div className="box">
                    <FaCogs className='icon'/>
                    <h3 className="box__title">Motorist</h3>
                </div>
                <div className="box">
                    <FaCarCrash className='icon'/>
                    <h3 className="box__title">Kastaprav</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default hero