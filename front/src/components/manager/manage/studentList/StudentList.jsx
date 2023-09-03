import React, { useEffect } from 'react'
import './studentlist.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


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



  return (
    <>
      <section className='cotainer-stu'>
        <div className="navv">
          <h2>الطلاب</h2>
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
          <select
            onChange={(e) => {
              const filteredStudents = e.target.value === ''
                ? student
                : student.filter((item) => item.department_id === parseInt(e.target.value));
              setFilter(filteredStudents);
            }}

            className='filter'
            name=""
            id=""
          >
            <option value="">القسم</option>
            {department.map((item, index) => (
              <option value={item.department_id}>{item.department_name_ar}</option>
            ))}
          </select> */}
        </div>
        <div className="student-container">
          <table className="data-table">
            <thead>
              <tr>
                <th> التسلسل</th>
                <th>اسم الطالب</th>
                {/* <th>رقم الهوية الوطنية</th> */}
                {/* <th>القسم</th> */}
                <th> اللغه الاجنبيه الاولي</th>
                <th> درجه اللغه الاجنبيه الاولي</th>
                <th> اللغه الاجنبيه الثانيه</th>
                <th> درجه اللغه الاجنبيه الثانيه</th>
                <th>حالة الطلب</th>
                <th>تاريخ التقديم</th>
                <th>التفاصيل</th>
              </tr>
            </thead>
            <tbody>
              {(filter.map((item, index) => (
                <tr key={item.student_id}>
                  <td>{index + 1}</td>
                  <td>{item.student_name}</td>
                  {/* <td>{item.national_id}</td> */}
                  {/* <td>{item.department_name_ar}</td> */}
                  <td>{item.enDegname}</td>
                  <td>{item.enDeg}</td>
                  <td>{item.enDegname2}</td>
                  <td>{item.enDeg2}</td>
                  <td>
                    {item.status === 1 ? 'قيد الانتظار' :
                      item.status === 2 ? 'تم ارسال تاريج الحضور' :
                        item.status === 3 ? 'قيد التعديل' : null}
                  </td>
                  <td>{item.submission_date.slice(0, 10)}</td>
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
        </div>
      </section>
    </>
  )
}

export default StudentList;