import React, { useEffect, useState } from 'react'
import './login.css'
import { BsFillPersonVcardFill } from 'react-icons/bs'
import { RiLockPasswordFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';

import axios from 'axios'

const SuperAdminLogin = () => {

    const navigate = useNavigate()

    const [error, setError] = useState([])

    const [loginData, setLoginData] = useState({
        password: '',
        email: '',
    })


    axios.defaults.withCredentials = true

    const handleLogin = (e) => {
        e.preventDefault()
        try {
            axios.post('http://localhost:5000/superadminlog/login', loginData, { withCredentials: true })
                .then((res) => {
                    if (res.data.first == true && res.data.admin == true) {
                        navigate('/restpass')
                    } else if (res.data.first == true && res.data.admin == false) {
                        navigate('/superadminLogin')
                    } else if (res.data.first == false && res.data.admin == true) {
                        navigate('/superadmin')
                    } else if (res.data.first == false && res.data.admin == false) {
                        navigate('/superadminLogin')
                    }
                }).catch((error) => {
                    setError(error.response.data.errors[0].msg)
                    navigate('/superadminLogin')
                })

        } catch (error) {
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
                                تسجيل الدخول
                            </h2>
                        </div>
                        <div className="content" style={{ marginTop: "6rem", gap: "3rem" }}>
                            <div className="input-container" style={{ gap: "2rem", }}>
                                <BsFillPersonVcardFill className='Icon' style={{ fontSize: "3.5rem" }} />
                                <input
                                    type="text"
                                    placeholder='اسم البريد الالكتروني'
                                    className='inputIN'
                                    style={{ cursor: "text", height: "4rem" }}
                                    value={loginData.email} onChange={(e) => { setLoginData({ ...loginData, email: e.target.value }) }}
                                />
                            </div>
                            <div className="input-container" style={{ gap: "2rem", }}>
                                <RiLockPasswordFill className='Icon' style={{ fontSize: "3.5rem" }} />
                                <input
                                    type="password"
                                    placeholder='كلمه المرور'
                                    className='inputIN'
                                    style={{ cursor: "text", height: "4rem" }}
                                    value={loginData.password} onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }}
                                />
                                
                            </div>
                            <div className="actions">
                                <button onClick={handleLogin}> تسجيل الدخول </button>

                            </div>
                            <div className='top' style={{ marginTop: "2rem", color: "red", fontWeight: "bolder" }}><h1>{error}</h1></div>

                        </div>

                    </div>



                </section>
            </div>
        </>
    )
}

export default SuperAdminLogin