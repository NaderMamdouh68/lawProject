import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

  const navigate = useNavigate();

  const logout = () => {
    axios.get('http://localhost:5002/logout', { withCredentials: true })
      .then((res) => {
        navigate('/law/managerLogin')
      }).catch((error) => {
        console.log(error.response)
      })
  }

  // const navigate = useNavigate()
  // const [user, setUser] = React.useState({})
  // axios.defaults.withCredentials = true
  // useEffect(() => {
  //   axios.get('http://localhost:5002/student/studentdetails', { withCredentials: true })
  //     .then((res) => {
  //       console.log(res.data)
  //       setUser(res.data)
  //     }).catch((error) => {
  //       console.log(error.response.data.user)
  //       if (error.response.data.user === false) {
  //         // navigate('/login')
  //       }
  //     })
  // }, [])
  return (
    <nav >
      <button
        onClick={logout}
        className="btn">
        <Link style={{ color: "white", textDecoration: "none" }}> تسجيل الخروج</Link>
      </button>

      <ul>
        
        
        {/* <li>
          <Link to='/law/manager/Appointment' > المواعيد </Link>
        </li>  */}
        {/* <li>
          <Link to='/law/manager/programsAndDepartments' > تحديد موعد </Link>
        </li> */}
        <li>
          <Link to='/law/manager' > عرض جميع الطلاب</Link>
        </li>

      </ul>
    </nav>

  )
}

export default Nav