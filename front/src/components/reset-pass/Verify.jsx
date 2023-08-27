import React, { useEffect, useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { RiLockPasswordFill } from 'react-icons/ri'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { BsFillPersonVcardFill } from 'react-icons/bs'


const Verify = () => {

    const navigate = useNavigate()

    const [error, setError] = useState([])
    const [id, setId] = useState('')

    const [loginData, setLoginData] = useState({
        national_id: '',
        email: '',
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
            axios.post('http://graduate-programs.helwan.edu.eg/law/verify', loginData, { withCredentials: true })
                .then((res) => {
                    setError('')
                    console.log(res.data.verify)
                    if (res.data.verify == true) {
                        navigate('/reset/' + res.data.student_id)
                       
                    } else {
                        setError('Invalid Email or National ID')
                    }
                }).catch((error) => {
                    console.log(error.response.data.errors[0])
                    setError(error.response.data.errors[0])
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

        <img src="assets/mini-logo.png" alt="" className='mini-logo' />

        <div className="body">
            <div className="top">
                <h2>
                    {t('r-pass')}
                </h2>
            </div>
            <div className="content" style={{ marginTop: "6rem", gap: "3rem" }}>
                <div className="input-container" style={{ gap: "2rem", }}>
                    <GrMail className='Icon' style={{ fontSize: "3.5rem" }} />
                    <input
                        type="text"
                        placeholder={t('email')}
                        className='inputIN'
                        style={{ cursor: "text", height: "4rem" }}
                        value={loginData.email} onChange={(e) => { setLoginData({ ...loginData, email: e.target.value }) }}
                    />
                </div>
                <div className="input-container" style={{ gap: "2rem", }}>
                    <BsFillPersonVcardFill className='Icon' style={{ fontSize: "3.5rem" }} />
                    <input
                        type="national_id"
                        placeholder={t('n-id')}
                        className='inputIN'
                        style={{ cursor: "text", height: "4rem" }}
                        value={loginData.national_id} onChange={(e) => { setLoginData({ ...loginData, national_id: e.target.value }) }}
                    />
                </div>
                <div className="actions">
                    <button onClick={handleLogin}> {t('r-pass')}</button>
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

export default Verify