import React from "react";
import './contact.css'
import { FcSms } from "react-icons/fc";



const contact = ()=>{
    return(
        <div className="contact">
            <div className="container contact__container">
                <p className="contact__text">//biz bilan bog'laning//</p>
                <h2 className="contact__title">Har qanday savol uchun biz bilan bog'laning</h2>
                <div className="contact__box">
                    <div className="box1">
                        <h2 className="box__title">//bronlash//</h2>
                        <span>
                            <FcSms className="icon1"/><a href="tel:+99897 717 11 18" className="contact__link">+99897 717 11 18</a>
                        </span>
                    </div>
                    <div className="box1">
                        <h2 className="box__title">//umumiy savollar//</h2>
                        <span>
                            <FcSms className="icon1"/><a href="tel:+99897 738 72 75" className="contact__link">+99897 738 72 75</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default contact