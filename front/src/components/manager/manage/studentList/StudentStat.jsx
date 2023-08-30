import React, { useEffect } from 'react'
import './studentlist.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


const StudentStat = () => {
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
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');



  return (
    <>
      <section className='cotainer-stu'>
        <div className="navv">
          <select
            onChange={(e) => {
              const filteredStudents = e.target.value === ''
                ? student
                : student.filter((item) => item.status === parseInt(e.target.value));
              setFilter(filteredStudents);
              setValue(e.target.value)
              setValue2('')
              setValue3('')

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
          </select>
          <select
            onChange={(e) => {
              const filteredStudents = e.target.value === ''
                ? student
                : student.filter((item) => item.level === parseInt(e.target.value));
              setFilter(filteredStudents);
              setValue2(e.target.value)
              setValue('')
              setValue3('')

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
                : student.filter((item) => item.department_name_ar === e.target.value);
              setFilter(filteredStudents);
              setValue3(e.target.value)
              setValue('')
              setValue2('')
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
        </div>
        <div className="student-container">
          <div className='stat'>
            <h1>{filter.length} طلاّب</h1>
            <h3>{value != '' ? value == 0 ? 'مرفوض' : value == 1 ? 'مقبول' : value == 2 ? 'قيد الانتظار' : value == 3 ? 'قيد التعديل' : 'الكل' : ''}</h3>
            <h3>{value2 != '' ? value2 == 1 ? 'دبلومه' : value2 == 2 ? 'دبلومه عامه' : value2 == 3 ? 'دبلومه مهني' : value2 == 4 ? 'ماجستير' : value2 == 5 ? 'دكتوراه' : 'الكل' : ''}</h3>
            <h3>{value3 != '' ? value3 : ''}</h3>

          </div>
        </div>
      </section>
    </>
  )
}

export default StudentStat;