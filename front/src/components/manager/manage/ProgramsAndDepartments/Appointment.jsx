import React from 'react'
import { MdAdd } from 'react-icons/md'
import './editprofie.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const Appointment = () => {

  const navigate = useNavigate()
  const [department, setDepartment] = React.useState([])
  const [adddDepartment, setAdddDepartment] = React.useState({
    department_name: '',
    department_name_ar: ''
  })
  const [error, setErroe] = React.useState("");
  const [data, setData] = React.useState([])
  const [data2, setData2] = React.useState([])
  const [filter, setFilter] = React.useState(data);

  const [appointment, setAppointment] = React.useState({
    appointment: '',
    student_number: '',
    limitdegree: ''
  })


  axios.defaults.withCredentials = true
  useEffect(() => {
    axios.get('http://localhost:5002/manager/allaaplication', { withCredentials: true })
      .then((res) => {
        setData(res.data)
        setData2(res.data)
      }).catch((error) => {
        console.log(error.response.data.manager)
        if (error.response.data.manager === false) {
          navigate('/law/managerLogin')
        }

      })

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
            window.location.reload()
          }).catch((error) => {
            console.log(error.response.data.errors.msg)
          })
      }
    }
  }

  const uniqueComments = [];

  for (const item of data2) {
    if (!uniqueComments.includes(item.comment) && item.comment !== null && item.comment !== '') {
      uniqueComments.push(item.comment);
    }
  }

  const downloadPDF = useReactToPrint({
    content: () => pdfRef.current,
    documentTitle: 'grade',
    fonts: [
      {
        weights: [900, 900],
        style: "bolder",

      },
    ],


  });

  const pdfRef = React.useRef()

  return (
    <>

      <div className="program-data">
        <section className='cotainer-stu'>


          <div className="navv">
            <h2>
              المواعيد
            </h2>
            <select
              onChange={(e) => {
                const filteredStudents = e.target.value === ''
                  ? data2
                  : data2.filter((item) => item.comment === e.target.value);
                setData(filteredStudents);

              }}
              className='filter'
              name=""
              id=""
            >
              <option value="">المواعيد</option>
              {uniqueComments.map((item, index) => {
                return (
                  <option value={item}>{item}</option>
                )
              })}
            </select>
            <select
              onChange={(e) => {
                const filteredStudents = e.target.value === ''
                  ? data2
                  : data2.filter((item) => item.department_name_ar === e.target.value);
                setData(filteredStudents);
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
            {/* <button
                      onClick={downloadPDF}
                        
                      className="add"> طباعه الجدول </button> */}
            <ReactHTMLTableToExcel
              id="test-table-xls-button"
              table="table-to-xls"
              filename="tablexls"
              sheet="tablexls"
              className="add"
              buttonText="تحميل الجدول في ملف اكسل" />
          </div>
          {/* {uniqueComments.map((item, index) => {
            
            return ( */}

          <div className="student-container nm" style={{ gap: "0" }}>


            <table className="data-table" ref={pdfRef} id='table-to-xls'>
              <tr>
                <th> التسلسل </th>
                <th> اسم الطالب</th>
                <th> القسم</th>
                <th> اللغه الاجنبيه الاولي</th>
                <th> درجه اللغه الاجنبيه الاولي</th>
                <th> اللغه الاجنبيه الثانيه</th>
                <th> درجه اللغه الاجنبيه الثانيه</th>
                <th> رقم الهويه الوطنيه</th>
                <th> رقم الهاتف</th>
                <th> الموعد </th>
              </tr>

              {data.map((item2, index2) => {
                if (+item2.status === 2) {
                  return (

                    <tr>
                      <td>{index2 + 1}</td>
                      <td>{item2.student_name}</td>
                      <td>{item2.department_name_ar}</td>
                      <td>{item2.enDegname}</td>
                      <td>{item2.enDeg}</td>
                      <td>{item2.enDegname2}</td>
                      <td>{item2.enDeg2}</td>
                      <td>{item2.national_id}</td>
                      <td>{item2.phonenumber}</td>
                      <td>{item2.comment}</td>
                    </tr>
                  )
                }
              }
              )}

            </table>






          </div>

        </section>
      </div>
    </>
  )
}

export default Appointment;