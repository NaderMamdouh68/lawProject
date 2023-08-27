
import React,{useState} from 'react'
import './navbar.css'
import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { t } from 'i18next';


const Navbar = ({ User }) => {
  const [user, setUser] = useState({})  
  const [t, i18n] = useTranslation();
  const [toggle, setToggle] = useState(true);


  const navigate = useNavigate()

  const handleClick = () => {
    i18n.changeLanguage(toggle ? 'ar' : 'en')
    setToggle(!toggle);
  };

  const logout = () => {
    try {
      axios.defaults.withCredentials = true
      axios.get('http://graduate-programs.helwan.edu.eg/law/logout', { withCredentials: true })
        .then((res) => {
          navigate('/login')
        }).catch((error) => {
          console.log(error)
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav  style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "ltr" } : { direction: "rtl" }}>
      <div>
      <button
        onClick={logout}
        className="btn">{t('logout')}
      </button>
      <button onClick={handleClick} className='lan-btn' style={{margin:"0 .5rem"}}>{localStorage.getItem('i18nextLng') == "en" ? ("عربي") : ("English") }</button>
      </div>
      <ul>
        <li>
          <Link to='/profile/contact' >{t('contact')}</Link>
        </li>
        <li>
          {User.status === 3 ? (
            <Link to='/profile/edit'>{t('edit')}</Link>
          ) : (
            <span style={{ color: "gray", fontWeight: "600", fontSize: "17px", cursor: "not-allowed" }}>{t('edit')}</span>

          )}
        </li>
        <li>
          <Link to='/profile' >  {t('app-status')}</Link>
        </li>
      </ul>
    </nav>

  )
}

export default Navbar