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
                <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d11996.39274892076!2d69.2194!3d41.263198!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE1JzQ3LjUiTiA2OcKwMTMnMDkuOCJF!5e0!3m2!1sru!2sus!4v1746418301048!5m2!1sru!2sus" allowFullScreen="" loading="lazy" style={{}} referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
export default contact