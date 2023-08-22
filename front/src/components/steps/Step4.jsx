import React from 'react'
import { useTranslation } from 'react-i18next';

const Step4 = ({UserData ,SetUserData ,Images ,SetImages ,Error ,Loaded}) => {

  
  const [t, i18n] =useTranslation();

  return (
    <>
      <div className="top">
        <h2>
          {t('step4-title')} 
        </h2>
      </div>
      <div className="content">
        <div className="input-container">
          <span></span>
          <input
            type="password"
            placeholder={t('password')} 
            className='inputIN' 
            value={UserData.password}
            onChange={(e) => { SetUserData({ ...UserData, password: e.target.value }) }}
          />
        </div>
        <div className="input-container">
          <span></span>
          <input 
            type="password" 
            placeholder={t('r-password')} 
            className='inputIN'
            value={UserData.checkpassword} 
            onChange={(e) => { SetUserData({ ...UserData, checkpassword: e.target.value }) }}
          />
        </div>
      </div>
      <div className='top' style={{marginTop:"2rem" ,color: "#003C70" ,fontWeight: "bolder" ,fontSize:"1.3em"}}><h1> كلمه المرور يجب ان لا تقل عن 8 ارقام بالاضافه للحروف والرمز </h1> </div>

      <div className='top' style={{marginTop:"2rem" ,color: "#AD8700" ,fontWeight: "bolder" ,fontSize:"1.3em"}}><h1> يرجى العلم بانه يمكنك متابعه الطلب من خلال  تسجيل الدخول على الموقع باستخدام الايميل الذى تم إدخاله في البيانات وكلمة المرور</h1> </div>
      <div className='top' style={{marginTop:"2rem" ,color: "#003C70" ,fontWeight: "bolder" ,fontSize:"1.3em"}}>

      </div>

    
    {Loaded == null ? null :
      <div className='top' style={{marginTop:"2rem" ,color: "#AD8700" ,fontWeight: "bolder" ,fontSize:"1.3em"}}>      
      <div className="progress-bar"
        role='progressbar'
        aria-valuenow={Loaded}
        aria-valuemin='0'
        aria-valuemax='100'
        style={{ width: `${Loaded}%` }}
      >
        {Loaded}%
      </div>
      </div>
    }
      { Error ? (
      <div className='top' style={{marginTop:"2rem" ,color: "red" ,fontWeight: "bolder"}}><h1>  {Error[0] != undefined ? `${Error[0]}` : null}  </h1> </div>) 
      : null
      }

    </>
  )
}

export default Step4