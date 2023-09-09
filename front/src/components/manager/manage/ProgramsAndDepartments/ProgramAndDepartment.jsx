import React from 'react'
import { MdAdd } from 'react-icons/md'
import './editprofie.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ProgramAndDepartment = () => {

  const navigate = useNavigate()
  const [department, setDepartment] = React.useState([])
  const [adddDepartment, setAdddDepartment] = React.useState({
    department_name: '',
    department_name_ar: ''
  })
  const [error, setErroe] = React.useState("");
  const [data, setData] = React.useState([]);
  const [err , setErr] = React.useState('');

  const [appointment, setAppointment] = React.useState({
    appointment: '',
    student_number: '',
    limitdegree: '',
    comment: ''
  })


  axios.defaults.withCredentials = true
  useEffect(() => {
    axios.get('http://localhost:5002/manager/allaaplication', { withCredentials: true })
      .then((res) => {
        setData(res.data)
      }).catch((error) => {
        console.log(error.response.data.manager)
        if (error.response.data.manager === false) {
          navigate('/law/managerLogin')
        }

      })
      


  }, [])

  // const addDepartment = () => {
  //   if (document.querySelector('.add-department input').value !== '') {
  //     let con = window.confirm('هل انت متاكد من اضافه القسم')
  //     if (con) {
  //       axios.post('http://localhost:5002/manager/adddepartment', adddDepartment, { withCredentials: true })
  //         .then((res) => {
  //           window.location.reload()
  //         }).catch((error) => {
  //           console.log(error.response.data.errors.msg)
  //         })
  //     }
  //   } else {
  //     alert('ادخل اسم القسم')
  //   }
  // }

  const addAppointment = () => {
    if (!appointment.appointment || !appointment.student_number || !appointment.limitdegree) {
      alert('ادخل جميع البيانات')
    } else {
      let con = window.confirm('هل انت متاكد من اضافه الموعد')
      if (con) {
        axios.put('http://localhost:5002/manager/addappointment', appointment, { withCredentials: true })
          .then((res) => {
            // setData(res.data)
            console.log(res.data)
            window.location.href = '/law/manager/Appointment'
          }).catch((error) => {
            console.log(error.response.data.errors[0].msg)
            if('Students not found !' == error.response.data?.errors[0].msg){
              setErr("لا يوجد طلاب في قائمه الانتظار")
            }
            
          })
      }
    }
  }




  return (
    <>
      {/* <div className="program-data">
        <section className='cotainer-stu'>


          <div className="navv">
            <h2>
              الاقسام
            </h2>


          </div>
          <div className="student-container nm">

            <table className="data-table">
              <tr>
                <th>رقم القسم </th>
                <th>اسم القسم</th>
                <th>اسم القسم بالانجليزي</th>
               <th>التعديلات</th> 
              </tr>

              {department.map((item, index) => {

                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.department_name_ar}</td>
                    <td>{item.department_name}</td>
                     <td  >
                      <button className='moreinfo'><Link style={{ textDecoration: "none" }}>   تعديل </Link></button>
                      <button className='moreinfo'><Link style={{ textDecoration: "none" }}>  حذف  </Link></button>
                    </td> 
                  </tr>
                )
              }
              )}


            </table>

            <div className="add-department">
              <input id='add-department'
                onChange={(e) => { setAdddDepartment({ ...adddDepartment, department_name: e.target.value }) }}
                type="text" placeholder='اسم القسم بالغه الانجليزيه' />
              <input id='add-department'
                onChange={(e) => { setAdddDepartment({ ...adddDepartment, department_name_ar: e.target.value }) }}
                type="text" placeholder='اسم القسم بالغه العربيه' />
               <button
                onClick={addDepartment}
                className="add"> <MdAdd />  اضافه القسم</button> 
            </div>


          </div>
        </section>


      </div> */}
      <div className="program-data">
        <section className='cotainer-stu'>


          {/* <div className="navv">
            <h2>
              تحديد موعد
            </h2>

          </div> */}
          <div className="student-container nm">
            {/* <table className="data-table">
              <tr>
                <th> التسلسل </th>
                <th> اسم الطالب</th>
                <th> اللغه الاجنبيه الاولي</th>
                <th> درجه اللغه الاجنبيه الاولي</th>
                <th> اللغه الاجنبيه الثانيه</th>
                <th> درجه اللغه الاجنبيه الثانيه</th>
                <th> رقم الهويه الوطنيه</th>
                <th> رقم الهاتف</th>
                <th> الموعد </th>
              </tr>

              {data.map((item, index) => {
                
                return (

                  <tr key={item.student_id}>
                    <td>{index + 1}</td>
                    <td>{item.student_name}</td>
                    <td>{item.enDegname}</td>
                    <td>{item.enDeg}</td>
                    <td>{item.enDegname2}</td>
                    <td>{item.enDeg2}</td>
                    <td>{item.national_id}</td>
                    <td>{item.phonenumber}</td>
                    <td>{item.comment}</td>
                  </tr>
                )
              }
              )}


            </table> */}


            <div className="add-department add-p">
              <h3 style={{ fontSize: "1.5rem" }}> تحديد موعد </h3>
              <input
                id='add-p'
                onChange={(e) => { setAppointment({ ...appointment, limitdegree: e.target.value }) }}
                type="text"
                placeholder=' الحد الادنى لدرجه اللغه الاجنبيه الاولي' />
              <input
                id='add-p'
                onChange={(e) => { setAppointment({ ...appointment, student_number: e.target.value }) }}
                type="text"
                placeholder=' عدد الطلاب ' />
              <input
                id='add-p'
                onChange={(e) => { setAppointment({ ...appointment, comment: e.target.value }) }}
                type="text"
                placeholder=' الرساله التي ستظهر للطلاب ' />

              <input
                id='add-date'
                onChange={(e) => { setAppointment({ ...appointment, appointment: e.target.value }) }}
                type="date"
                placeholder=' تاريخ الحضور ' />


            {err && <h2 style={{color:'red' ,textAlign:"center"}}>{err}</h2>}

              <button
                onClick={addAppointment}
                className="add"> <MdAdd /> تحديد موعد</button>

            </div>


          </div>
        </section>
      </div>
    </>
  )
}

export default ProgramAndDepartment;