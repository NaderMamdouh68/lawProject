import React from 'react'
import Nav from './Nav/SuperAdminNav'
import { Outlet } from 'react-router-dom'
import Logo from '../../../images/mini-logo.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const SuperAdmin = () => {
    localStorage.setItem('i18nextLng', 'ar')

    




    return (
        <>
            <Nav/>
            <div className="g-container">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <Outlet/>
            </div>
        </>
    )
}

export default SuperAdmin