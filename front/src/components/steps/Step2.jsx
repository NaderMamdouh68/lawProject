import React from 'react'

import { useTranslation } from 'react-i18next';
import { BiSolidUser } from 'react-icons/bi'
import { GrMail } from 'react-icons/gr'
import { FaPhone } from 'react-icons/fa'
import { BsFillPersonVcardFill } from 'react-icons/bs'
import { BsFillCalendar2DateFill } from 'react-icons/bs'
const Step2 = ({ Faculties, UserData, SetUserData, Departments, Programs, Error }) => {

  const [t] = useTranslation();
  let today = new Date().toISOString().split('T')[0];
  let dateInput = document.getElementById("date-input");
  if (dateInput) {
    dateInput.setAttribute("max", today);
  } else {
    console.error("Element with id 'date-input' not found.");
  }
  const [program_level, setProgram_level] = React.useState(0)
  return (
    <>
      <div className="top">
        <h2>
          {t('step2-title')}
        </h2>
      </div>
      <div className="superContianer" style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>


        <div className="input-container" style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>

          <BiSolidUser style={UserData.name == "" ? null : { marginTop: '1.5rem' }} className='Icon' />
          <div className='edit-input' style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
            {UserData.name == "" ? null : <h1 style={{ color: "#AD8700" }}>{t('name')} </h1>}
            <input
              type="text"
              required
              placeholder={t('name')}
              className='inputIN'
              value={UserData.name}
              style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}
              onChange={(e) => { SetUserData({ ...UserData, name: e.target.value }) }}

            />
          </div>
        </div>
        <div className="input-container" style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>

          <BiSolidUser style={UserData.adress == "" ? null : { marginTop: '1.5rem' }} className='Icon' />
          <div className='edit-input' style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
            {UserData.adress == "" ? null : <h1 style={{ color: "#AD8700" }}>{t('adress')} </h1>}
            <input
              type="text"
              required
              placeholder={t('adress')}
              className='inputIN'
              value={UserData.adress}
              style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}
              onChange={(e) => { SetUserData({ ...UserData, adress: e.target.value }) }}

            />
          </div>
        </div>
        <div className="input-container" style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>

          <BiSolidUser style={UserData.nationality == "" ? null : { marginTop: '1.5rem' }} className='Icon' />
          <div className='edit-input' style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
            {UserData.nationality == "" ? null : <h1 style={{ color: "#AD8700" }}>{t('nationality')} </h1>}
            <input
              type="text"
              required
              placeholder={t('nationality')}
              className='inputIN'
              value={UserData.nationality}
              style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}
              onChange={(e) => { SetUserData({ ...UserData, nationality: e.target.value }) }}

            />
          </div>
        </div>
        <div className="input-container" style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>

          <BiSolidUser style={UserData.previous_qu == "" ? null : { marginTop: '1.5rem' }} className='Icon' />
          <div className='edit-input' style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
            {UserData.previous_qu == "" ? null : <h1 style={{ color: "#AD8700" }}>{t('previous_qu')} </h1>}
            <input
              type="text"
              required
              placeholder={t('previous_qu')}
              className='inputIN'
              value={UserData.previous_qu}
              style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}
              onChange={(e) => { SetUserData({ ...UserData, previous_qu: e.target.value }) }}

            />
          </div>
        </div>
        <div className="input-container" style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>

          <BiSolidUser style={UserData.setNum == "" ? null : { marginTop: '1.5rem' }} className='Icon' />
          <div className='edit-input' style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
            {UserData.setNum == "" ? null : <h1 style={{ color: "#AD8700" }}>{t('setNum')} </h1>}
            <input
              type="number"
              required
              placeholder={t('setNum')}
              className='inputIN'
              value={UserData.setNum}
              style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}
              onChange={(e) => { SetUserData({ ...UserData, setNum: e.target.value }) }}

            />
          </div>
        </div>
        <div className="input-container" style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>

          <BiSolidUser style={UserData.enDeg == "" ? null : { marginTop: '1.5rem' }} className='Icon' />
          <div className='edit-input' style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
            {UserData.enDeg == "" ? null : <h1 style={{ color: "#AD8700" }}>{t('enDeg')} </h1>}
            <input
              type="number"
              required
              placeholder={t('enDeg')}
              className='inputIN'
              value={UserData.enDeg}
              style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}
              onChange={(e) => { SetUserData({ ...UserData, enDeg: e.target.value }) }}

            />
          </div>
        </div>
        <div className="input-container" style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>

          <BiSolidUser style={UserData.enDeg2 == "" ? null : { marginTop: '1.5rem' }} className='Icon' />
          <div className='edit-input' style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
            {UserData.enDeg2 == "" ? null : <h1 style={{ color: "#AD8700" }}>{t('enDeg2')} </h1>}
            <input
              type="number"
              required
              placeholder={t('enDeg2')}
              className='inputIN'
              value={UserData.enDeg2}
              style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}
              onChange={(e) => { SetUserData({ ...UserData, enDeg2: e.target.value }) }}

            />
          </div>
        </div>
        <div className="input-container" style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>

          <BiSolidUser style={UserData.totalDeg == "" ? null : { marginTop: '1.5rem' }} className='Icon' />
          <div className='edit-input' style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
            {UserData.totalDeg == "" ? null : <h1 style={{ color: "#AD8700" }}>{t('totalDeg')} </h1>}
            <input
              type="number"
              required
              placeholder={t('totalDeg')}
              className='inputIN'
              value={UserData.totalDeg}
              style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}
              onChange={(e) => { SetUserData({ ...UserData, totalDeg: e.target.value }) }}

            />
          </div>
        </div>
        <div className="input-container" style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>

          <BiSolidUser style={UserData.school == "" ? null : { marginTop: '1.5rem' }} className='Icon' />
          <div className='edit-input' style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
            {UserData.school == "" ? null : <h1 style={{ color: "#AD8700" }}>{t('school')} </h1>}
            <input
              type="text"
              required
              placeholder={t('school')}
              className='inputIN'
              value={UserData.school}
              style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}
              onChange={(e) => { SetUserData({ ...UserData, school: e.target.value }) }}

            />
          </div>
        </div>
        <div className="input-container" style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>

          <BiSolidUser style={UserData.dadJob == "" ? null : { marginTop: '1.5rem' }} className='Icon' />
          <div className='edit-input' style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
            {UserData.dadJob == "" ? null : <h1 style={{ color: "#AD8700" }}>{t('dadJob')} </h1>}
            <input
              type="text"
              required
              placeholder={t('dadJob')}
              className='inputIN'
              value={UserData.dadJob}
              style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}
              onChange={(e) => { SetUserData({ ...UserData, dadJob: e.target.value }) }}

            />
          </div>
        </div>
        <div className="input-container" style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
          <FaPhone style={UserData.phoneDad == "" ? null : { marginTop: '1.5rem' }} className='Icon' />
          <div className='edit-input' style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
            {UserData.phoneDad == "" ? null : <h1 style={{ color: "#AD8700" }}>{t('phoneDad')} </h1>}
            <input
              type="text"
              placeholder={t('phoneDad')}
              className='inputIN'
              style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}
              value={UserData.phoneDad} onChange={(e) => { SetUserData({ ...UserData, phoneDad: e.target.value }) }}
            />
          </div>
        </div>
        <div className="input-container" style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
          <BsFillPersonVcardFill style={UserData.national_id == "" ? null : { marginTop: '1.5rem' }} className='Icon' />
          <div className='edit-input' style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
            {UserData.national_id == "" ? null : <h1 style={{ color: "#AD8700" }}>{t('n-id')} </h1>}
            <input
              type="text"
              placeholder={t('n-id')}
              className='inputIN'
              style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}
              value={UserData.national_id} onChange={(e) => { SetUserData({ ...UserData, national_id: e.target.value }) }}
            />
          </div>
        </div>
        <div className="input-container" style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
          <GrMail style={UserData.email == "" ? null : { marginTop: '1.5rem' }} className='Icon' />
          <div className='edit-input' style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
            {UserData.email == "" ? null : <h1 style={{ color: "#AD8700" }}>{t('email')} </h1>}
            <input
              type="text"
              placeholder={t('email')}
              className='inputIN'
              value={UserData.email}
              style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}
              onChange={(e) => { SetUserData({ ...UserData, email: e.target.value }) }}
            />
          </div>
        </div>
        <div className="input-container" style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
          <FaPhone style={UserData.phone == "" ? null : { marginTop: '1.5rem' }} className='Icon' />
          <div className='edit-input' style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
            {UserData.phone == "" ? null : <h1 style={{ color: "#AD8700" }}>{t('phone')} </h1>}
            <input
              type="text"
              placeholder={t('phone')}
              className='inputIN'
              style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}
              value={UserData.phone} onChange={(e) => { SetUserData({ ...UserData, phone: e.target.value }) }}
            />
          </div>
        </div>
        <div className="input-container" style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
          <FaPhone style={UserData.phoneArd == "" ? null : { marginTop: '1.5rem' }} className='Icon' />
          <div className='edit-input' style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
            {UserData.phoneArd == "" ? null : <h1 style={{ color: "#AD8700" }}>{t('phoneArd')} </h1>}
            <input
              type="text"
              placeholder={t('phoneArd')}
              className='inputIN'
              style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}
              value={UserData.phoneArd} onChange={(e) => { SetUserData({ ...UserData, phoneArd: e.target.value }) }}
            />
          </div>
        </div>
        <div className="input-container" style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
          <BsFillCalendar2DateFill style={UserData.dateOfBirth == "" ? null : { marginTop: '1.5rem' }} className='Icon' />
          <div className='edit-input' style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
            {UserData.dateOfBirth == "" ? null : <h1 style={{ color: "#AD8700" }}>{t('dateOfBirth')} </h1>}
            <input
              id='date-input'
              type="date"
              className='inputIN'
              max=""
              readonly
              value={UserData.dateOfBirth}
              onChange={(e) => { SetUserData({ ...UserData, dateOfBirth: e.target.value }) }}

            />
          </div>
        </div>
        <div className="input-container">
          <span></span>
          <div className="edit-input" style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
            {UserData.gender == "" ? null : <h1 style={{ color: "#AD8700" }}>{t('gender')} </h1>}
            <select
              className='inputIN'
              style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}
              value={UserData.gender}
              onChange={(e) => { SetUserData({ ...UserData, gender: e.target.value }) }}
            >
              <option value="" >{t('gender')} </option>
              <option value="1">{t('m')} </option>
              <option value="0">{t('f')} </option>
            </select>
          </div>

        </div>
        

        
          <div className="input-container">
            <span></span>
            <div className="edit-input" style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
              {UserData.department == "" ? null : <h1 style={{ color: "#AD8700" }}>{t('department')} </h1>}
              <select
                value={UserData.department}
                className='inputIN'
                style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}
                onChange={(e) => { SetUserData({ ...UserData, department: e.target.value }) }} >
                <option value="" >{t('department')} </option>
                {Departments.map((department) => (
                  (`${department.faculty_id}` === `${UserData.faculty}`) ? <option key={department.department_id} value={department.department_id}>{localStorage.getItem('i18nextLng') == "ar" ? `${department.department_name_ar}` : `${department.department_name}`}</option> : null
                ))}
              </select>
            </div>
          </div>
        
        


        

        


      </div>
      {Error ? (
        <div className='top' style={{ marginTop: "2rem", color: "red", fontWeight: "bolder" }}><h1>  {Error[0] != undefined ? `${Error[0]}` : null}  </h1> </div>)
        : null
      }
    </>
  )
}

export default Step2