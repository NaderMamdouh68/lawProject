import React, { useEffect, useState } from 'react'
import './login.css'
import { GrMail } from 'react-icons/gr'
import { RiLockPasswordFill } from 'react-icons/ri'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { PiListNumbers } from 'react-icons/pi'


import axios from 'axios'

const Login = () => {
    const navigate = useNavigate()

    const [error, setError] = useState([])

    const [loginData, setLoginData] = useState({
        national_id: '',
        setNum: '',
    })

    const [t, i18n] = useTranslation();
    const [toggle, setToggle] = React.useState(true);

    const handleClick = () => {
        i18n.changeLanguage(toggle ? 'ar' : 'en')
        setToggle(!toggle);
    };
    axios.defaults.withCredentials = true

    const handleLogin = (e) => {
        e.preventDefault()
        try {
            axios.post('http://graduate-programs.helwan.edu.eg/law/login', loginData, { withCredentials: true })
                .then((res) => {
                    navigate('/law/profile')
                }).catch((error) => {
                    setError(error.response.data.errors[0].msg)
                })

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div className="home">
                <div className="uni-logo">
                </div>


                <section className='subCon'>

                    <img src="assets/lg.jpg" alt="" className='mini-logo' />

                    <div className="body">
                        <div className="top">
                            <h2>
                                {t('login')}
                            </h2>
                        </div>
                        <div className="content" style={{ marginTop: "6rem", gap: "3rem" }}>
                            <div className="input-container" style={{ gap: "2rem", }}>
                                <PiListNumbers className='Icon' style={{ fontSize: "3.5rem" }} />
                                <input
                                    type="text"
                                    placeholder={t('setNum')}
                                    className='inputIN'
                                    style={{ cursor: "text", height: "4rem" }}
                                    value={loginData.setNum} onChange={(e) => { setLoginData({ ...loginData, setNum: e.target.value }) }}
                                />
                            </div>
                            <div className="input-container" style={{ gap: "2rem", }}>
                                <PiListNumbers className='Icon' style={{ fontSize: "3.5rem" }} />
                                <input
                                    type="text"
                                    placeholder={t('n-id')}
                                    className='inputIN'
                                    style={{ cursor: "text", height: "4rem" }}
                                    value={loginData.national_id} onChange={(e) => { setLoginData({ ...loginData, national_id: e.target.value }) }}
                                />
                            </div>
                            <div className="actions">
                                <button onClick={handleLogin}> {t('login')}</button>
                                <a href='/law/form' style={{ color: "#003C70", marginTop: "1rem" }}>{t('new-app-question')}  </a>
                                {/* <a href='/Verify' style={{ color: "#000", marginTop: "1rem" }}>{t('f-pass')}  </a> */}
                            </div>
                        </div>
                        <div className='top' style={{ marginTop: "2rem", color: "red", fontWeight: "bolder" }}><h1>{error}</h1></div>

                    </div>
                    <button onClick={handleClick} className='lan-btn'>{localStorage.getItem('i18nextLng') == "en" ? ("عربي") : ("English")}</button>


                </section>
            </div>
        </>
    )
}

export default Login 