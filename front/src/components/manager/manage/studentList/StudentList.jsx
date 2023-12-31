import React, { useEffect } from 'react'
import './studentlist.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


const StudentList = () => {
  const navigate = useNavigate()
  const [student, setStudent] = React.useState([])
  localStorage.setItem('i18nextLng', 'ar')
  const [department, setDepartment] = useState([]);


  useEffect(() => {
    try {
      axios.defaults.withCredentials = true
      axios.get('http://localhost:5002/manager/allaaplication', { withCredentials: true })
        .then((res) => {
          setStudent(res.data)
          setFilter(res.data)

        }).catch((error) => {
          console.log(error.response)
          navigate('/law/managerLogin')
        })
    } catch (error) {
      console.log(error)
    }

    try {
      axios.defaults.withCredentials = true
      axios.get('http://localhost:5002/manager/alldepartment', { withCredentials: true })
        .then((res) => {
          setDepartment(res.data)

        }).catch((error) => {
          console.log(error.response)
          navigate('/law/managerLogin')
        })
    } catch (error) {
      console.log(error)
    }

  }, [])

  const [filter, setFilter] = useState(student);
  // const [filter2, setFilter2] = useState(student);
  // const [filter3, setFilter3] = useState(student);

  console.log(filter)

  const pdfRef = React.useRef()
  const [xlsFile, setXlsFile] = useState('')

  return (
    <>
      <section className='cotainer-stu'>
        <div className="navv">
          {/* <h2>الطلاب</h2> */}
          {/* <select
            onChange={(e) => {
              const filteredStudents = e.target.value === ''
                ? student
                : student.filter((item) => item.status === parseInt(e.target.value));
              setFilter(filteredStudents);
              
            }}
            className='filter'
            name=""
            id=""
          >
            <option value="">الحاله</option>
            <option value="0">مرفوض</option>
            <option value="1">مقبول</option>
            <option value="2">قيد الانتظار</option>
            <option value="3">قيد التعديل</option>
            <option value=""> الكل</option>
          </select>
          <select
            onChange={(e) => {
              const filteredStudents = e.target.value === ''
                ? student
                : student.filter((item) => item.level === parseInt(e.target.value));
              setFilter(filteredStudents);
            }}
            className='filter'
            name=""
            id=""
          >
            <option value="">المرحله</option>
            <option value="1">دبلومه</option>
            <option value="2">دبلومه عامه</option>
            <option value="3">دبلومه مهني</option>
            <option value="4">ماجستير</option>
            <option value="5">دكتوراه</option>
          </select>
          */}
          <select
            onChange={(e) => {
              const filteredStudents = e.target.value === ''
                ? student
                : student.filter((item) => item.department_name_ar === e.target.value);
              setFilter(filteredStudents);
            }}


            className='filter'
            name=""
            id=""
          >
            <option value="">القسم</option>
            {department.map((item, index) => (
              <option value={item.department_name_ar}>{item.department_name_ar}</option>
            ))}
          </select>

          {/* <input
            type='text'
            placeholder='بحث بدرجه اللغه الاجنبيه الاولي'
            className='filter'
            onChange={(e) => {
              const filteredStudents = e.target.value === ''
                ? student
                : student.filter((item) => +item.enDeg >= parseInt(e.target.value));
              setFilter(filteredStudents);
            }}
          />
          <input
            type='text'
            placeholder='بحث بدرجه اللغه الاجنبيه الثانيه'
            className='filter'
            onChange={(e) => {
              const filteredStudents = e.target.value === ''
                ? student
                : student.filter((item) => +item.enDeg2 >= parseInt(e.target.value));
              setFilter(filteredStudents);
            }}
          /> */}


          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            table="table-to-xls2"
            filename="tablexls"
            sheet="tablexls"
            className="btt02 add"
            buttonText="تحميل بيانات الطلاب" />

          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            table="table-to-xls"
            filename="tablexls"
            sheet="tablexls"
            className=" add"
            
            buttonText="تحميل الجدول في ملف اكسل" />

          <div style={{ display: 'flex', alignItems: 'center' , gap:'10px',flexDirection:'row'}}>
            <div>
              <label htmlFor="file" className="add">رفع ملف اكسل</label>
              <input
                type='file'
                style={{ display: 'none' }}
                id='file'
                onChange={(e) => {
                  setXlsFile(e.target.files[0])
                }}
              />
              <p style={{ display: 'inline-block', margin: '0 10px' }}>
                {xlsFile && xlsFile.name
                  ? xlsFile.name
                  : 'لم يتم اختيار ملف'}

              </p>
            </div>
            {xlsFile && xlsFile.name &&
              <button
              style={{ display: 'inline-block' ,margin:'0 10px' ,alignItems:'center'}}
                onClick={() => {
                  if (xlsFile) {
                    const formData = new FormData();
                    formData.append('file', xlsFile)
                    axios.put('http://localhost:5002/manager/updatePayAndDate', formData)
                      .then((res) => {
                        console.log(res)
                        window.location.reload()
                      })
                      .catch((err) => {
                        console.log(err)
                      })
                  }
                }}
                className="add">تأكيد</button>
            }
          </div>

        </div>
        <div className="student-container">
          <table className="data-table" >
            <thead>
              <tr>
                <th> التسلسل</th>
                <th>اسم الطالب</th>
                <th>القسم</th>
                <th> اللغه الاجنبيه الاولي</th>
                <th> درجه اللغه الاجنبيه الاولي</th>
                <th> اللغه الاجنبيه الثانيه</th>
                <th> درجه اللغه الاجنبيه الثانيه</th>
                <th>حالة الطلب</th>
                <th>تاريخ التقديم</th>
                <th>الموعد</th>
                <th>كود الدفع</th>
                <th>التفاصيل</th>
              </tr>
            </thead>
            <tbody>
              {(filter.map((item, index) => (
                <tr key={item.student_id}>
                  <td>{index + 1}</td>
                  <td>{item.student_name}</td>
                  <td>{item.department_name_ar}</td>
                  <td>{item.enDegname}</td>
                  <td>{item.enDeg}</td>
                  <td>{item.enDegname2}</td>
                  <td>{item.enDeg2}</td>
                  <td>
                    {+item.status === 1 ? 'قيد الانتظار' :
                      +item.status === 2 ? 'تم ارسال تاريج الحضور' :
                        +item.status === 3 ? 'قيد التعديل' : 
                        +item.status === 5 ? 'تم تحديد الموعد' :
                        +item.status === 6 ? 'تم الرفض' : null}
                  </td>
                  <td>{item.submission_date.slice(0, 10)}</td>
                  <td>{item.appointment}</td>
                  <td>{item.payment_code}</td>
                  <td>
                    <button className='moreinfo'>
                      <Link to={`/law/manager/show/${item.student_id}`} style={{ textDecoration: "none" }}>
                        مزيد من التفاصيل
                      </Link>
                    </button>
                  </td>
                </tr>
              )))}
            </tbody>
          </table>
          <table className="data-table" ref={pdfRef} id='table-to-xls' style={{ display: 'none' }}>
            <thead>
              <tr>
                <th> التسلسل</th>
                <th>student_id</th>
                <th>اسم الطالب</th>
                <th>القسم</th>
                <th> اللغه الاجنبيه الاولي</th>
                <th> درجه اللغه الاجنبيه الاولي</th>
                <th> اللغه الاجنبيه الثانيه</th>
                <th> درجه اللغه الاجنبيه الثانيه</th>
                <th>حالة الطلب</th>
                <th>تاريخ التقديم</th>
                <th>الموعد</th>
                <th>كود_الدفع</th>
              </tr>
            </thead>
            <tbody>
              {(filter.map((item, index) => (
                <tr key={item.student_id}>
                  <td>{index + 1}</td>
                  <td>{item.student_id}</td>
                  <td>{item.student_name}</td>
                  <td>{item.department_name_ar}</td>
                  <td>{item.enDegname}</td>
                  <td>{item.enDeg}</td>
                  <td>{item.enDegname2}</td>
                  <td>{item.enDeg2}</td>
                  <td>
                    {+item.status === 1 ? 'قيد الانتظار' :
                      +item.status === 2 ? 'تم ارسال تاريج الحضور' :
                        +item.status === 3 ? 'قيد التعديل' : 
                        +item.status === 5 ? 'تم تحديد الموعد' :
                        +item.status === 6 ? 'تم الرفض' : null}
                  </td>
                  <td>{item.submission_date.slice(0, 10)}</td>
                  <td>{item.appointment}</td>
                  <td>{item.payment_code}</td>
                  {/* <td>
                    <button className='moreinfo'>
                      <Link to={`/law/manager/show/${item.student_id}`} style={{ textDecoration: "none" }}>
                        مزيد من التفاصيل
                      </Link>
                    </button>
                  </td> */}
                </tr>
              )))}
            </tbody>
          </table>
          <table className="data-table" ref={pdfRef} id='table-to-xls2' style={{ display: 'none' }}>
            <thead>
              <tr>
                <th> التسلسل</th>
                <th>اسم الطالب</th>
                <th>القسم</th>
                <th> اللغه الاجنبيه الاولي</th>
                <th> درجه اللغه الاجنبيه الاولي</th>
                <th> اللغه الاجنبيه الثانيه</th>
                <th> درجه اللغه الاجنبيه الثانيه</th>
                <th> البريد الالكترونى </th>
                <th>رقم الهاتف</th>
                <th> رقم الهاتف الارضي </th>
                <th> الجنسية </th>
                <th> تاريخ الميلاد </th>
                <th> رقم الجلوس </th>
                <th> المدرسة الثانوية </th>
                <th> المجموع الكلي في الثانويه العامه </th>
                <th> وظيفة الاب </th>
                <th> رقم الاب </th>
                <th> النوع </th>
                <th>العنوان</th>
                <th>حالة الطلب</th>
                <th>تاريخ التقديم</th>
                <th>الموعد</th>
                <th>كود_الدفع</th>
              </tr>
            </thead>
            <tbody>
              {(filter.map((item, index) => (
                <tr key={item.student_id}>
                  <td>{index + 1}</td>
                  <td>{item.student_name}</td>
                  <td>{item.department_name_ar}</td>
                  <td>{item.enDegname}</td>
                  <td>{item.enDeg}</td>
                  <td>{item.enDegname2}</td>
                  <td>{item.enDeg2}</td>
                  <td>{item.email}</td>
                  <td>{item.phonenumber}</td>
                  <td>{item.phoneArd}</td>
                  <td>{item.nationality}</td>
                  <td>{item.birthdate?.slice(0, 10)}</td>
                  <td>{item.setNum}</td>
                  <td>{item.school}</td>
                  <td>{item.totalDeg}</td>
                  <td>{item.dadJob}</td>
                  <td>{item.phoneDad}</td>
                  <td>{item.gender}</td>
                  <td>{item.adress}</td>
                  <td>
                    {+item.status === 1 ? 'قيد الانتظار' :
                      +item.status === 2 ? 'تم ارسال تاريج الحضور' :
                        +item.status === 3 ? 'قيد التعديل' :
                          +item.status === 5 ? 'تم تحديد الموعد' :
                            +item.status === 6 ? 'تم الرفض' : null}
                  </td>
                  <td>{item.submission_date?.slice(0, 10)}</td>
                  <td>{item.appointment}</td>
                  <td>{item.payment_code}</td>
                  {/* <td>
                    <button className='moreinfo'>
                      <Link to={`/law/manager/show/${item.student_id}`} style={{ textDecoration: "none" }}>
                        مزيد من التفاصيل
                      </Link>
                    </button>
                  </td> */}
                </tr>
              )))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default StudentList;