import React from 'react'
import Nav from './Nav/Nav'
import { Outlet } from 'react-router-dom'
import Logo from '../../../images/mini-logo.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Manager = () => {

    




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

export default Manager