import React, { useState } from 'react'
import { BiSolidPrinter } from 'react-icons/bi'
import './show.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf'


const Show = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const pdfRef = React.useRef()


  const navigate = useNavigate()
  const [user, setUser] = useState({})
  const [msg, SetMsg] = useState("")
  const [rejRes, SetRejRes] = useState("")
  const [editRes, SetEditRes] = useState("")



  axios.defaults.withCredentials = true
  useEffect(() => {
    localStorage.setItem('i18nextLng', 'ar')

    axios.get('http://graduate-programs.helwan.edu.eg/law/student/studentdetails/' + id, { withCredentials: true })
      .then((res) => {
        setUser(res.data)
        // console.log(res.data)
      }).catch((error) => {
        console.log(error.response.data.user)
        navigate('/managerLogin')

      })
  }, [])
  const openImage = (url) => {
    const filename = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.target = '_blank';
    aTag.click();
    aTag.remove();
  }
  const downloadImage = (url) => {
    saveAs(url, 'image.jpg')
  }

  const downloadPDF = () => {
    localStorage.setItem('i18nextLng', 'ar')

    const inpput = pdfRef.current;
    html2canvas(inpput).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jspdf('l', 'px', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgwidth = canvas.width;
      const imgheight = canvas.height;
      const ratio = imgwidth / imgheight >= pdfWidth / pdfHeight ? pdfWidth / imgwidth : pdfHeight / imgheight;
      const imgx = (pdfWidth - imgwidth * ratio) / 2;
      const imgy = (pdfHeight - imgheight * ratio) / 2;
      pdf.addImage(imgData, 'PNG', imgx, imgy, imgwidth * ratio, imgheight * ratio);
      pdf.save('download.pdf');
    })
  }

  const [status, setStatus] = React.useState('')
  const handelAccept = () => {
    try {
      if (msg !== "") {
      if (window.confirm("هل انت متاكد من قبول الطالب")) {
      axios.put('http://graduate-programs.helwan.edu.eg/law/manager/updatestatus/' + id, { status: 1 , comment: msg}, { withCredentials: true })
        .then((res) => {
          window.location.reload()
        }).catch((error) => {
          console.log(error.response)

        })
      }
      } else {
        alert("يجب ادخال رساله القبول")
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handelwait = () => {
    if (editRes !== "") {
      if(window.confirm("هل انت متاكد من طلب تعديل البيانات")){
      try {
        axios.put('http://graduate-programs.helwan.edu.eg/law/manager/updatestatus/' + id, { status: "3", comment: editRes }, { withCredentials: true })
          .then((res) => {
            window.location.reload()
          }).catch((error) => {
            console.log(error.response)

          })
      } catch (error) {
        console.log(error)
      }
    }
    }
    else {
      alert("يجب ادخال سبب التعديل")
    }
  }






  return (
    <>
      <section className="cotainer-data">
        <div className="navv">
          <h2>
            بيانات الطالب
          </h2>
          <button onClick={downloadPDF}><BiSolidPrinter />طباعه</button>
        </div>
        <div className="data-container" ref={pdfRef}>
          <div className='image-con'>
            <img src={`http://graduate-programs.helwan.edu.eg/law/${user.national_id}/${user.img}`} alt="img" className='imagee' />
            {user.status == 1 ? (
                <>
                  <p style={{ background: "rgb(35, 175, 110)" }}> تم ارسال معاد المقابله</p>
                  <h2> معاد المقابله</h2>
                  <p style={{ background: "rgb(35, 175, 110) "}}>{user.comment}</p>
                </>
              )
                : user.status == 2 ?
                  <>
                    <button onClick={handelAccept} className='acc'>ارسال معاد المقابله</button>
                    <input
                      type="date"
                      value={msg}
                      onChange={(e) => { SetMsg(e.target.value) }}
                    />



                    <button onClick={handelwait} className='wait-edit'>طلب تعديل البيانات</button>
                    <input
                      type="text"
                      placeholder='سبب التعديل'
                      value={editRes}
                      onChange={(e) => { SetEditRes(e.target.value)}}
                    />





                  </>
                  : (
                    <>
                      <p >يرجى التعديل</p>
                      <h2>سبب التعديل</h2>
                      <p >{user.comment}</p>
                    </>
                  )}
          </div>
          <table className="data-table" style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
            <tr>
              <th>Application Basic Information</th>
              <th>Application Data</th>
            </tr>

            <tr>
              <td>{t('name')}</td>
              <td>
                {user.student_name}
              </td>
            </tr>
            <tr>
              <td>{t('email')}</td>
              <td>
                {user.email}
              </td>
            </tr>
            <tr>
              <td>{t('phoneArd')}</td>
              <td>
                {user.phoneArd}
              </td>
            </tr>
            <tr>
              <td>{t('phone')}</td>
              <td>
                {user.phonenumber}
              </td>
            </tr>
            <tr>
              <td>{t('adress')}</td>
              <td>
                {user.adress}
              </td>
            </tr>
            <tr>
              <td>{t('nationality')}</td>
              <td>
                {user.nationality}
              </td>
            </tr>
            <tr>
              <td>{t('previous_qu')}</td>
              <td>
                {user.previous_qu}
              </td>
            </tr>
            <tr>
              <td>{t('setNum')}</td>
              <td>
                {user.setNum}
              </td>
            </tr>
            <tr>
              <td>{t('school')}</td>
              <td>
                {user.school}
              </td>
            </tr>
            <tr>
              <td>{t('enDegname')}</td>
              <td>
               {user.enDegname}
              </td>
            </tr>
            <tr>
              <td>{t('enDeg')}</td>
              <td>
               {user.enDeg}
              </td>
            </tr>
            <tr>
              <td>{t('enDegname2')}</td>
              <td>
                {user.enDegname2}
              </td>
            </tr>
            <tr>
              <td>{t('enDeg2')}</td>
              <td>
                {user.enDeg2}
              </td>
            </tr>
            <tr>
              <td>{t('totalDeg')}</td>
              <td>
                {user.totalDeg}
              </td>
            </tr>
            <tr>
              <td>{t('dadJob')}</td>
              <td>
                {user.dadJob}
              </td>
            </tr>
            <tr>
              <td>{t('phoneDad')}</td>
              <td>
                {user.phoneDad}
              </td>
            </tr>

            <tr>
              <td>{t('n-id')}</td>
              <td>
                {user.national_id}
              </td>
            </tr>
            <tr>
              <td>{t('dateOfBirth')}</td>
              <td>
                {(user.birthdate?.split('T')[0]) || ''}
              </td>
            </tr>
            <tr>
              <td>{t('gender')}</td>
              <td>
                {user.gender == 1 ? "ذكر" : "انثي"}
              </td>
            </tr>

            
            <tr>
              <td>{t('department')}</td>
              <td>
                {localStorage.getItem('i18nextLng') == "ar" ? user.department_name_ar : user.department_name} 
                    
              </td>
            </tr>
            
            
            
            <tr>
              <td>{t('dateOfsubmition')}</td>
              <td>
                {(user.submission_date?.split('T')[0]) || ''}
              </td>
            </tr>
            
          </table>
        </div>

        <h1>المرفقات</h1>

        <table class="profile-table">

          <tr>
            <th>Attachement</th>
            <th>Buttons</th>
          </tr>


          {user.photo_national_id != 0 ? (
            <tr>
              <td>صورة البطاقه الشخصيه</td>
              <td className='att-row'>
                <button
                  onClick={() => { openImage(`http://graduate-programs.helwan.edu.eg/law/${user.national_id}/${user.photo_national_id}`) }}
                  style={{ background: "#003C70" }} class="atch-btn">Open
                </button>
                <button
                  onClick={() => { downloadImage(`http://graduate-programs.helwan.edu.eg/law/${user.national_id}/${user.photo_national_id}`) }}
                  style={{ background: "#AD8700" }} class="atch-btn">Download
                </button>

              </td>
            </tr>
          ) : null}


          {user.birth_certificate != 0 ? (
            <tr>
              <td>صورة شهاده الميلاد</td>
              <td className='att-row'>
                <button
                  onClick={() => { openImage(`http://graduate-programs.helwan.edu.eg/law/${user.national_id}/${user.birth_certificate}`) }}
                  style={{ background: "#003C70" }} class="atch-btn">Open
                </button>
                <button
                  onClick={() => { downloadImage(`http://graduate-programs.helwan.edu.eg/law/${user.national_id}/${user.birth_certificate}`) }}
                  style={{ background: "#AD8700" }} class="atch-btn">Download
                </button>


              </td>
            </tr>
          ) : null}


          {user.academic_qualification != 0 ? (
            <tr>
              <td>صورة شهاده الثانويه العامه</td>
              <td className='att-row'>
                <button
                  onClick={() => { openImage(`http://graduate-programs.helwan.edu.eg/law/${user.national_id}/${user.academic_qualification}`) }}
                  style={{ background: "#003C70" }} class="atch-btn">Open
                </button>
                <button
                  onClick={() => { downloadImage(`http://graduate-programs.helwan.edu.eg/law/${user.national_id}/${user.academic_qualification}`) }}
                  style={{ background: "#AD8700" }} class="atch-btn">Download
                </button>


              </td>
            </tr>
          ) : null}

          

        </table>

      </section>
    </>
  )
}

export default Show