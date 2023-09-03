import React, { useEffect } from 'react'
import './profilestatus.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const ProfileStatus = () => {
  const navigate = useNavigate()
  const [user, setUser] = React.useState({})
  const [t, i18n] = useTranslation();

  axios.defaults.withCredentials = true
  useEffect(() => {
    axios.get('http://localhost:5002/student/studentdetails', { withCredentials: true })
      .then((res) => {
        setUser(res.data)
      }).catch((error) => {
        console.log(error.response.data.user)
        if (error.response.data.user === false) {
          navigate('/login')
        }
      })
  }, [])
  return (
    <section className="cotainer">
      <div className="info">
        <h2>{t('app-status')}</h2>

        <div className='info-con'>
          <div className="sub-info">
            <span className='title'>{t('std-name')}</span>
            <span className='inner'>{user.student_name}   </span>
          </div>
          <div className="sub-info">
            <span className='title'>{t('app-status')}</span>
            <span className='inner'>
              {user.status == 2 ? " تم تحديد موعد ": user.status == 3 ? " يرجى تعديل البيانات ":  user.status == 1 ? " لم يتم تحديد موعد ": null}
            </span>
            <span className='inner'>
              {user.status == 2 ? user.comment : null}
            </span>
          </div>
        </div>

        
              <h2 style={{ color: "red", direction: "rtl" }}>
                {user.status === 2 ||  user.status === 3 ?  user.comment2 : ""}
                </h2>
            

        
      </div>
    </section>
  )
}

export default ProfileStatus