import React, { useEffect, useState } from 'react'
import { BsFillPersonVcardFill } from 'react-icons/bs'
import { RiLockPasswordFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const Reset = () => {

    const navigate = useNavigate()
    const { id } = useParams()

    const [error, setError] = useState([])

    const [loginData, setLoginData] = useState({
        password: '',
        confirmPassword: '',
        student_id: id
    })



    const handleLogin = (e) => {
        e.preventDefault()
        axios.defaults.withCredentials = true

        try {
            //غير ال ا بى اى
            axios.put('http://localhost:5002/resetpassword', loginData, { withCredentials: true })
                .then((res) => {
                    setError('')
                    if (res.data.reset == true) {
                        navigate('/login')
                    }

                }).catch((error) => {
                    console.log(error.response.data.errors[0])
                    setError(error.response.data.errors[0])
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



                    <div className="body">
                        <div className="top">
                            <h2>
                                اعاده تعيين كلمه المرور
                            </h2>
                        </div>
                        <div className="content" style={{ marginTop: "6rem", gap: "3rem" }}>
                            <div className="input-container" style={{ gap: "2rem", }}>
                                <RiLockPasswordFill className='Icon' style={{ fontSize: "3.5rem" }} />
                                <input
                                    type="text"
                                    placeholder='ادخل كلمه مرور جديده'
                                    className='inputIN'
                                    style={{ cursor: "text", height: "4rem" }}
                                    value={loginData.password} onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }}
                                />
                            </div>
                            <div className="input-container" style={{ gap: "2rem", }}>
                                <RiLockPasswordFill className='Icon' style={{ fontSize: "3.5rem" }} />
                                <input
                                    type="password"
                                    placeholder=' تاكيد كلمه المرور'
                                    className='inputIN'
                                    style={{ cursor: "text", height: "4rem" }}
                                    value={loginData.confirmPassword} onChange={(e) => { setLoginData({ ...loginData, confirmPassword: e.target.value }) }}
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

export default Reset