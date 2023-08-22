import React from 'react'
import './contact.css'
import { useTranslation } from 'react-i18next';
import { HiOutlineMail } from 'react-icons/hi'
import { BsPhone } from 'react-icons/bs'
import Image from '../../../images/contact_us.jpg'

const Contact = () => {
  const [t, i18n] = useTranslation();
  return (
    <>
      <section className="cotainer">
        <div className="sub-container">
          <div className="image">
            <img src={Image} alt="" />
          </div>
          <div className="content">
            <h2>{t('contact')}</h2>
            <div className="contacts" id="#ContactUs" style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
              <h4>   {t('con-ul-1')} </h4>
              <h4> <a href="http://postgraduate.helwan.edu.eg/?p=126" target='_blank'>{t('con-ul-2')}</a></h4>
              <h4> <a href="https://docs.google.com/forms/d/e/1FAIpQLSeVFyreEMKM7hX9NsuTSt-zpf5qUta_09ONs0SHpON5oG9a_Q/viewform?pli=1" target='_blank'>{t('con-ul-3')}</a></h4>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact