import React from 'react'
import { useTranslation } from 'react-i18next';
import {HiUserAdd} from 'react-icons/hi'
import { Link } from 'react-router-dom';
import './Content.css'
const Content = () => {



  const [t, i18n] =useTranslation();
  const [toggle, setToggle] = React.useState(true);

  const handleClick = () => {
    i18n.changeLanguage(toggle ? 'ar' : 'en')
    setToggle(!toggle);
  };


  return (
    <>
    <div className="home">
    <div className="uni-logo">
      <h4 style={{position:"absolute" , bottom:"2rem", left : "1.5rem"}}>{t('copy-right')}</h4>
        </div>

    <div className='Content'>
          
          <img src="assets/lg.jpg" alt="" className='mini-logo' style={{width:"20%"}}/>

          <p style={{fontSize:"2.5rem" , margin :"2rem" ,textAlign: "center"}}>{t('welcome')} </p>
          <div className="icon">
            
          </div>
          {/* <h1 style={{margin :"2rem" ,color: "#003C70"}}>{t('New applicant services ')}</h1> */}
          <div className="options">
          <Link to='/form' style={{width:"50%"}}><button style={{background:"#AD8700"}}>{t('new')}<HiUserAdd/></button></Link>
          <Link to='/login' style={{width:"50%"}}><button style={{background:"#003C70" }}>  {t('con')} <HiUserAdd/></button> </Link>
          </div>
          <button onClick={handleClick} className='lan-btn'>{localStorage.getItem('i18nextLng') == "en"  ? ("عربي") : ("English")}</button>
          <a href='https://drive.google.com/file/d/1hAgYuX9wdiB4X7EAblqL_EDgUIevqDrB/view?usp=sharing' target='_blank'style={{fontSize:"2rem" ,color:"#003C70"}}>{t('link-1')}</a>
        </div>
        </div>
    </>
        
  )
}

export default Content