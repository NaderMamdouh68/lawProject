import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SuperAdminNav = () => {

  const navigate = useNavigate();

  const logout = () => {
    axios.get('http://localhost:5002/logout', { withCredentials: true })
      .then((res) => {
        navigate('/superadminLogin')
      }).catch((error) => {
      })
  }


  return (
    <nav >
      <button
        onClick={logout}
        className="btn">
        <Link style={{ color: "white", textDecoration: "none" }}> تسجيل الخروج</Link>
      </button>

      <ul>
        <li>
          <Link to='/SuperAdmin/add' >لوحه التحكم </Link>
        </li>
        <li>
          <Link to='/SuperAdmin' > عرض جميع الطلاب</Link>
        </li>

      </ul>
    </nav>

  )
}

export default SuperAdminNav