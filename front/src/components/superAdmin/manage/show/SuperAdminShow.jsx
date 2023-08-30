import React from 'react'
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


const SuperAdminShow = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const pdfRef = React.useRef()


  const navigate = useNavigate()
  const [user, setUser] = React.useState({})
  axios.defaults.withCredentials = true
  useEffect(() => {
    axios.get('http://localhost:5002/student/studentdetailsReport/' + id, { withCredentials: true })
      .then((res) => {
        setUser(res.data)
      }).catch((error) => {
        navigate('/superadminLogin')

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
    saveAs(url, 'image.jpg');
  }

  const downloadPDF = () => {
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
            <img src={`http://localhost:5002/${user.national_id}/${user.img}`} alt="img" className='imagee' />
            {
              user.status == 0 ? <div className='status-con'>
                <p className='status' style={{ background: '#FF0000' }}>مرفوض من الكليه</p>
              </div> : user.status == 1 ? <div className='status-con'>
                <p className='status'>مقبول من الكليه</p>
              </div> : user.status == 2 ? <div className='status-con'>
                <p className='status'>قيد الانتظار</p>
              </div> : user.status == 3 ? <div className='status-con'>
                <p className='status'>قيد التعديل</p>
              </div> : user.status == 4 ? <div className='status-con'>
                <p className='status'>مقبول من الجامعه</p>
              </div> : <div className='status-con'>
                <p className='status' style={{ background: '#FF0000' }}>مرفوض من الجامعه</p>
              </div>

            }


          </div>
          <table className="data-table">
            <tr>
              <th>Application Basic Information</th>
              <th>Application Data</th>
            </tr>

            <tr>
              <td>الاسم</td>
              <td>
                {user.student_name}
              </td>
            </tr>
            <tr>
              <td>البريد الالكترونى</td>
              <td>
                {user.email}
              </td>
            </tr>
            <tr>
              <td>رقم الهاتف</td>
              <td>
                {user.phonenumber}
              </td>
            </tr>
            <tr>
              <td>القم القومى</td>
              <td>
                {user.national_id}
              </td>
            </tr>
            <tr>
              <td>تاريخ الميلاد</td>
              <td>
                {(user.birthdate?.split('T')[0]) || ''}
              </td>
            </tr>
            <tr>
              <td>النوع</td>
              <td>
                {user.gender == 1 ? 'ذكر' : 'انثى'}
              </td>
            </tr>

            <tr>
              <td>الكليه</td>
              <td>
                {user.faculty_name_ar}
              </td>
            </tr>
            <tr>
              <td>القسم</td>
              <td>
                {user.department_name_ar}
              </td>
            </tr>
            <tr>
              <td>البرنامج</td>
              <td>
                {user.program_name_ar}
              </td>
            </tr>
            <tr>
              <td>المرحله</td>
              {user.level === 1 ? <td> دبلومه</td> : user.level === 2 ? <td>دبلومه عام</td> : user.level === 3 ? <td>دبلومه مهني</td> : user.level === 4 ? <td>ماجستير</td> : user.level === 5 ? <td>دكتوراه</td> : null}
            </tr>
            {+user.gender === 1 && (
              <tr>
                <td>الموقف من التجنيد</td>
                <td>
                  {user.military_status == 0 ? `اعفاء نهائى` : user.military_status == 1 ? `اعفاء مؤقت` : `انهى الخدمه`}
                </td>
              </tr>
            )}
            <tr>
              <td>تاريخ الطلب</td>
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

          {user.photo_national_id !== "0" && (
            <tr>
              <td>صورة البطاقه الشخصيه</td>
              <td className='att-row'>
                <button
                  onClick={() => { openImage(`http://localhost:5002/${user.national_id}/${user.photo_national_id}`) }}
                  style={{ background: "#003C70" }} class="atch-btn">Open
                </button>
                <button
                  onClick={() => { downloadImage(`http://localhost:5002/${user.national_id}/${user.photo_national_id}`) }}
                  style={{ background: "#AD8700" }} class="atch-btn">Download
                </button>

              </td>
            </tr>
          )
          }

          {user.birth_certificate !== "0" && (
            <tr>
              <td>صورة شهاده الميلاد</td>
              <td className='att-row'>
                <button
                  onClick={() => { openImage(`http://localhost:5002/${user.national_id}/${user.birth_certificate}`) }}
                  style={{ background: "#003C70" }} class="atch-btn">Open
                </button>
                <button
                  onClick={() => { downloadImage(`http://localhost:5002/${user.national_id}/${user.birth_certificate}`) }}
                  style={{ background: "#AD8700" }} class="atch-btn">Download
                </button>


              </td>
            </tr>
          )
          }

          {user.academic_qualification !== "0" && (
            <tr>
              <td>صورة المؤهل</td>
              <td className='att-row'>
                <button
                  onClick={() => { openImage(`http://localhost:5002/${user.national_id}/${user.academic_qualification}`) }}
                  style={{ background: "#003C70" }} class="atch-btn">Open
                </button>
                <button
                  onClick={() => { downloadImage(`http://localhost:5002/${user.national_id}/${user.academic_qualification}`) }}
                  style={{ background: "#AD8700" }} class="atch-btn">Download
                </button>


              </td>
            </tr>
          )
          }

          {user.grade_statement !== "0" && (
            <tr>
              <td>صورة بيان الدرجات</td>
              <td className='att-row'>
                <button
                  onClick={() => { openImage(`http://localhost:5002/${user.national_id}/${user.grade_statement}`) }}
                  style={{ background: "#003C70" }} class="atch-btn">Open
                </button>
                <button
                  onClick={() => { downloadImage(`http://localhost:5002/${user.national_id}/${user.grade_statement}`) }}
                  style={{ background: "#AD8700" }} class="atch-btn">Download
                </button>


              </td>
            </tr>
          )
          }

          {user.good_conduct_form !== "0" && (
            <tr>
              <td>صورة استمارة حسن سير وسلوك</td>
              <td className='att-row'>
                <button
                  onClick={() => { openImage(`http://localhost:5002/${user.national_id}/${user.good_conduct_form}`) }}
                  style={{ background: "#003C70" }} class="atch-btn">Open
                </button>
                <button
                  onClick={() => { downloadImage(`http://localhost:5002/${user.national_id}/${user.good_conduct_form}`) }}
                  style={{ background: "#AD8700" }} class="atch-btn">Download
                </button>


              </td>
            </tr>
          )
          }

          {user.approval_from_employer !== "0" && (
            <tr>
              <td>صورة موافقة جهة العمل</td>
              <td className='att-row'>
                <button
                  onClick={() => { openImage(`http://localhost:5002/${user.national_id}/${user.approval_from_employer}`) }}
                  style={{ background: "#003C70" }} class="atch-btn">Open
                </button>
                <button
                  onClick={() => { downloadImage(`http://localhost:5002/${user.national_id}/${user.approval_from_employer}`) }}
                  style={{ background: "#AD8700" }} class="atch-btn">Download
                </button>


              </td>
            </tr>
          )
          }

          {user.position_on_military !== "0" ?
            <tr>
              <td>صورة الموقف من التجنيد</td>
              <td className='att-row'>
                <button
                  onClick={() => { openImage(`http://localhost:5002/${user.national_id}/${user.position_on_military}`) }}
                  style={{ background: "#003C70" }} class="atch-btn">Open
                </button>
                <button
                  onClick={() => { downloadImage(`http://localhost:5002/${user.national_id}/${user.position_on_military}`) }}
                  style={{ background: "#AD8700" }} class="atch-btn">Download
                </button>

              </td>
            </tr>
            : null}

          {user.masters_photo !== "0" ?
            <tr>
              <td>صوره الماجستير</td>
              <td className='att-row'>
                <button
                  onClick={() => { openImage(`http://localhost:5002/${user.national_id}/${user.masters_photo}`) }}
                  style={{ background: "#003C70" }} class="atch-btn">Open
                </button>
                <button
                  onClick={() => { downloadImage(`http://localhost:5002/${user.national_id}/${user.masters_photo}`) }}
                  style={{ background: "#AD8700" }} class="atch-btn">Download
                </button>


              </td>
            </tr>
            : null}


        </table>

      </section>
    </>
  )
}

export default SuperAdminShow