import React, { useEffect } from 'react'
import './studentlist.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


const SuperAdminStudentList = () => {
  const navigate = useNavigate()
  localStorage.setItem('i18nextLng', 'ar')

  const [student, setStudent] = React.useState([])
  useEffect(() => {
    try {
      axios.defaults.withCredentials = true
      axios.get('http://localhost:5000/superadmin/allaaplication', { withCredentials: true })
        .then((res) => {
          setStudent(res.data)
          setFilter(res.data)
        }).catch((error) => {
          navigate('/superadminLogin')
        })
    } catch (error) {
    }

  }, [])

  const [filter, setFilter] = useState(student);



  return (
    <>
      <section className='cotainer-stu'>
        <div className="navv">
          <h2>
            الطلاب
          </h2>
          <select
            onChange={(e) => {
              student.filter((item) => {
                if (e.target.value === '') {
                  setFilter(student)
                } else {
                  setFilter(student.filter((item) => item.status === parseInt(e.target.value)))
                }
              }
              )
            }}
            className='filter' name="" id="" placeholder=''>
            <option value="">الكل</option>
            <option value="0">مرفوض من الكليه</option>
            <option value="1">مقبول من الكليه</option>
            <option value="2">قيد الانتظار</option>
            <option value="3">قيد التعديل</option>
            <option value="4"> مرفوض من الجامعه</option>
            <option value="5">مقبول من الجامعه</option>
          </select>
        </div>
        <div className="student-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>اسم الطالب</th>
                <th>رقم الهوية الوطنية</th>
                <th>القسم</th>
                <th>البرنامج</th>
                <th>المرحله</th>
                <th> حاله الطلب</th>
                <th>تاريخ التقديم</th>

                <th>التفاصيل</th>
              </tr>
            </thead>
            <tbody>
              {filter.map((item, index) => (
                <tr key={item.student_id}>
                  <td>{item.student_name}</td>
                  <td>{item.national_id}</td>
                  <td>{item.department_name}</td>
                  <td>{item.program_name}</td>
                  {item.level === 1 ? <td> دبلومه</td> : item.level === 2 ? <td>دبلومه عام</td> : item.level === 3 ? <td>دبلومه مهني</td> : item.level === 4 ? <td>ماجستير</td> : item.level === 5 ? <td>دكتوراه</td> : null}
                  {item.status === 0 ? <td>مرفوض</td> : item.status === 1 ? <td>مقبول</td> : item.status === 2 ? <td>قيد الانتظار</td> : item.status === 3 ? <td>قيد التعديل</td> : item.status === 4 ? <td>مقبول من الجامعه</td> : <td>مرفوض من الجامعه</td>}
                  <td>{(item.submission_date).slice(0, 10)}</td>
                  <td><button className='moreinfo'><Link to={`/SuperAdmin/show/${item.student_id} `} style={{ textDecoration: "none" }}> مزيد من التفاصيل </Link></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default SuperAdminStudentList;