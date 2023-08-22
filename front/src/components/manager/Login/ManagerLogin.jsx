import React, { useEffect, useState } from 'react'
import './login.css'
import { BsFillPersonVcardFill } from 'react-icons/bs'
import { RiLockPasswordFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';

import axios from 'axios'

const ManagerLogin = () => {

    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({
        password: '',
        manager_email: '',
    })


    axios.defaults.withCredentials = true

    const handleLogin = (e) => {
        e.preventDefault()
        try {
            axios.post('http://localhost:5000/managerlog/login', loginData, { withCredentials: true })
                .then((res) => {
                    if(res.data.first == true && res.data.manager == true){
                        navigate('/managerLogin/restpass')
                    }else if(res.data.first == true && res.data.manager == false){
                        navigate('/managerLogin')
                    }else if(res.data.first == false && res.data.manager == true){
                        navigate('/manager')
                    }else if(res.data.first == false && res.data.manager == false){
                        navigate('/managerLogin')
                    }
                }).catch((error) => {
                    alert('يجب ان تكون مديرا لتسجيل الدخول')
                    navigate('/managerLogin')
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
                                    value={loginData.manager_email} onChange={(e) => { setLoginData({ ...loginData, manager_email: e.target.value }) }}
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
                                {/* <a href='https://drive.google.com/file/d/1JTYhX7MgzTP2wWyF65WG25eNHwXgP7kd/view?usp=sharing' target='_blank' style={{fontSize:"2rem" ,color:"#003C70"}}>شرح اداره حساب موظف الكليه</a> */}
                            </div>
                        </div>

                    </div>



                </section>
            </div>
        </>
    )
}

export default ManagerLogin