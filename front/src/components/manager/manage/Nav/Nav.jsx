import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

  const navigate = useNavigate();

  const logout = () => {
    axios.get('http://graduate-programs.helwan.edu.eg/law/logout', { withCredentials: true })
      .then((res) => {
        navigate('/managerLogin')
      }).catch((error) => {
        console.log(error.response)
      })
  }

  // const navigate = useNavigate()
  // const [user, setUser] = React.useState({})
  // axios.defaults.withCredentials = true
  // useEffect(() => {
  //   axios.get('http://graduate-programs.helwan.edu.eg/law/student/studentdetails', { withCredentials: true })
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
          <Link to='/manager/programsAndDepartments' >الاقسام و البرامج</Link>
        </li>
        <li>
          <Link to='/manager/StudentStatastics' > الاحصائيات </Link>
        </li> */}
        <li>
          <Link to='/manager' > عرض جميع الطلاب</Link>
        </li>

      </ul>
    </nav>

  )
}

export default Nav