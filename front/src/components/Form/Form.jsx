import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './form.css'
import './steps.css'
import Step1 from '../steps/Step1'
import Step2 from '../steps/Step2'
import Step3 from '../steps/Step3'
import Step4 from '../steps/Step4'

import axios from 'axios'


const Form = () => {

  const navigate = useNavigate()

  const [t, i18n] = useTranslation();
  const [toggle, setToggle] = useState(true);
  const [faculties, setFaculties] = useState([])
  const [departments, setDepartments] = useState([])
  const [programs, setPrograms] = useState([])
  const [flag, setFlag] = useState(true)
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState([])
  const [error2, setError2] = useState([])
  const [loading, setLoading] = useState(null)

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    checkpassword: '',
    phone: '',
    phoneArd: '',
    adress: '',
    nationality: '',
    previous_qu: '',
    setNum: '',
    school: '',
    enDeg: '',
    enDeg2: '',
    totalDeg: '',
    dadJob: '',
    phoneDad: '',
    national_id: '',
    dateOfBirth: '',
    gender: '',
    department: '',
    length_of_file: '4',
  })
  const [images, setImages] = useState({
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    
  })



  useEffect(() => {
    try {
      axios.get('http://localhost:5000/getfaculty')
        .then((res) => {
          setFaculties(res.data)

        })
    } catch (error) {
      console.log(error)

    }

    try {
      axios.get('http://localhost:5000/getdepartment')
        .then((res) => {
          setDepartments(res.data)
        }
        )
    } catch (error) {
      console.log(error)
    }

    try {
      axios.get('http://localhost:5000/getprogram')
        .then((res) => {
          setPrograms(res.data)
        }
        )
    } catch (error) {
      console.log(error)
    }

  }


    , [])





  const [page, setPage] = useState(0)
  const returnStep = (page) => {
    switch (page) {
      case 0:
        return <Step1 />
      case 1:
        return <Step2 Toggle={toggle} Error={error} SetError={setError} Faculties={faculties} Departments={departments} Programs={programs} UserData={userData} SetUserData={setUserData} />
      case 2:
        return <Step3 UserData={userData} SetUserData={setUserData} Images={images} SetImages={setImages} />
      case 3:
        return <Step4 Loaded={loading} Error={error2} UserData={userData} SetUserData={setUserData} Images={images} SetImages={setImages} />

      default:
        break;
    }
  }


  const handleClick = () => {
    i18n.changeLanguage(toggle ? 'ar' : 'en')
    setToggle(!toggle);
  };

  function handlePage(action) {

    switch (action) {
      case "increment":

        if (page < 3) {
          if (page === 1) {
            if (true) {
              try {
                axios.post('http://localhost:5000/checkpages/checkpage1', userData)
                  .then((res) => {
                    setFlag(true);
                    setPage(2)

                  }).catch(async (error) => {
                    setFlag(true);
                    setPage(1)
                    setError(error.response.data.errors.msg)

                  }
                  )
              }
              catch (error) {
                console.log(error)
                setFlag(false);
              }


            } else {
              setFlag(false)
            }
          }
          if (flag && page !== 1) {
            setPage((currPage) => currPage + 1)
          }






        }
        break;
      case "decrment":
        if (page > 0) {
          setPage((currPage) => currPage - 1)
        } else {
          setPage(0)
          navigate('/')

        }
        break;

      default:
        break;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError2([])
    setError([])
    
    const formData = new FormData()
    
    setDisabled(true)
    formData.append('name', userData.name)
    formData.append('email', userData.email)
    formData.append('password', userData.password)
    formData.append('checkpassword', userData.checkpassword)
    formData.append('phone', userData.phone)
    formData.append('adress', userData.adress)
    formData.append('nationality', userData.nationality)
    formData.append('previous_qu', userData.previous_qu)
    formData.append('setNum', userData.setNum)
    formData.append('school', userData.school)
    formData.append('enDeg', userData.enDeg)
    formData.append('enDeg2', userData.enDeg2)
    formData.append('totalDeg', userData.totalDeg)
    formData.append('dadJob', userData.dadJob)
    formData.append('phoneDad', userData.phoneDad)
    formData.append('phoneArd', userData.phoneArd)
    formData.append('national_id', userData.national_id)
    formData.append('dateOfBirth', userData.dateOfBirth)
    formData.append('gender', userData.gender)
    formData.append('department', userData.department)
    formData.append('length_of_file', userData.length_of_file)
    

    formData.append('image1', images.image1)
    formData.append('image2', images.image2)
    formData.append('image3', images.image3)
    formData.append('image4', images.image4)
    
    try {
      axios.post('http://localhost:5000/newapp/signup', formData,
        {
          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            let percent = Math.floor((loaded * 100) / total);
            console.log(`${loaded}kb of ${total}kb | ${percent}%`);
            if (percent <= 100) {
              setLoading(percent);
            }
          }
        }
      )
        .then((res) => {

          navigate('/')

        }).catch((error) => {
          setError2(error.response.data.errors.msg)
          setDisabled(false)
          setLoading(null)
        }
        )
    } catch (error) {
      setDisabled(false)
    }

  }


  return (
    <>
      <section className='subCon'>

        <img src="assets/lg.jpg" alt="" className='mini-logo' />

        <div className="body">
          {returnStep(page)}
        </div>
        <button onClick={handleClick} className='lan-btn'>{localStorage.getItem('i18nextLng') == "en" ? ("عربي") : ("English")}</button>
        <div className="nav">
          <button className="prev" onClick={() => { handlePage("decrment") }}>{t('prev')}</button>
          <div className='page-n'> {`${page + 1} from 4`}</div>
          {+page === 3 ? <button className="next" disabled={disabled} onClick={handleSubmit} >{t('submit')} </button> : <button className="next" onClick={() => { handlePage("increment") }} >{t('next')}</button>}
        </div>
      </section>

    </>
  )
}

export default Form