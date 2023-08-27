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

  const [program, setProgram] = React.useState([])
  const [addProgram, setAddProgram] = React.useState({
    program_name: '',
    program_name_ar: '',
    diploma: 0,
    diploma_g: 0,
    diploma_m: 0,
    masters: 0,
    phd: 0,
    department_id: ''
  })
  axios.defaults.withCredentials = true
  useEffect(() => {
    axios.get('http://localhost:5002/manager/alldepartment', { withCredentials: true })
      .then((res) => {
        setDepartment(res.data)
      }).catch((error) => {
        console.log(error.response.data.manager)
        if (error.response.data.manager === false) {
          navigate('/managerLogin')
        }

      })

    axios.get('http://localhost:5002/manager/allprogram', { withCredentials: true })
      .then((res) => {
        setProgram(res.data)
      }
      ).catch((error) => {
        console.log(error.response.data.manager)
        if (error.response.data.manager === false) {
          navigate('/managerLogin')
        }
      }
      )
  }, [])

  const addDepartment = () => {
    if (document.querySelector('.add-department input').value !== '') {
      let con = window.confirm('هل انت متاكد من اضافه القسم')
      if (con) {
        axios.post('http://localhost:5002/manager/adddepartment', adddDepartment, { withCredentials: true })
          .then((res) => {
            window.location.reload()
          }).catch((error) => {
            console.log(error.response.data.errors.msg)
          })
      }
    } else {
      alert('ادخل اسم القسم')
    }
  }

  const addpro = () => {

    axios.post('http://localhost:5002/manager/addprogram', addProgram, { withCredentials: true })
      .then((res) => {
        alert('تم اضافه البرنامج')
        window.location.reload()
      }).catch((error) => {
        console.log(error.response.data.errors.msg)
        setErroe(error.response.data.errors.msg)


      })

  }



  return (
    <>
      <div className="program-data">
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
                {/* <th>التعديلات</th> */}
              </tr>

              {department.map((item, index) => {

                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.department_name_ar}</td>
                    <td>{item.department_name}</td>
                    {/* <td  >
                      <button className='moreinfo'><Link style={{ textDecoration: "none" }}>   تعديل </Link></button>
                      <button className='moreinfo'><Link style={{ textDecoration: "none" }}>  حذف  </Link></button>
                    </td> */}
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


      </div>
      <div className="program-data">
        <section className='cotainer-stu'>


          <div className="navv">
            <h2>
              البرامج
            </h2>

          </div>
          <div className="student-container nm">
          <table className="data-table">
              <tr>
                <th>رقم البرنامج </th>
                <th>اسم البرنامج بالانجليزي</th>
                <th>اسم البرنامج</th>
                <th>اسم القسم</th>
                <th> المرحله</th>
              </tr>

              {program.map((item, index) => {

                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.program_name_ar}</td>
                    <td>{item.program_name}</td>
                    <td>{item.department_name_ar}</td>
                    <td>
                      {item.diploma ? ' دبلومه ' : null}
                      <br />
                      {item.diploma_g ? ' دبلومه عام ' : null}
                      <br />
                      {item.diploma_m ? ' دبلومه مهني ' : null}
                      <br />
                      {item.masters ? ' ماجستير ' : null}
                      <br />
                      {item.phd ? ' دكتوراه ' : null}

                    </td>

                  </tr>
                )
              }
              )}


            </table>
            <div className="add-department add-p">
              <h3 style={{ fontSize: "1.5rem" }}>اضافه برنامج</h3>
              <input
                id='add-p'
                onChange={(e) => { setAddProgram({ ...addProgram, program_name: e.target.value }) }}
                type="text"
                placeholder='اسم البرنامج باللغه الانجليزيه' />
              <input
                id='add-p'
                onChange={(e) => { setAddProgram({ ...addProgram, program_name_ar: e.target.value }) }}
                type="text"
                placeholder='اسم البرنامج بالغه العربيه' />

              <div>
                <input type="checkbox" name="diploma" id="diploma" value={addProgram.diploma ? 0 : 1}
                  onChange={(e) => { setAddProgram({ ...addProgram, diploma: e.target.value }) }} />
                <label for="diploma">دبلومه</label>
              </div>

              <div>
                <input type="checkbox" name="diploma_g" id="diploma_g" value={addProgram.diploma_g ? 0 : 1}
                  onChange={(e) => { setAddProgram({ ...addProgram, diploma_g: e.target.value }) }} />
                <label for="diploma_g">دبلومه عام</label>
              </div>

              <div>
                <input type="checkbox" name="diploma_m" id="diploma_m" value={addProgram.diploma_m ? 0 : 1}
                  onChange={(e) => { setAddProgram({ ...addProgram, diploma_m: e.target.value }) }} />
                <label for="diploma_m">دبلومه مهني</label>
              </div>

              <div>
                <input type="checkbox" name="masters" id="masters" value={addProgram.masters ? 0 : 1}
                  onChange={(e) => { setAddProgram({ ...addProgram, masters: e.target.value }) }} />
                <label for="masters">ماجستير</label>
              </div>

              <div>
                <input type="checkbox" name="phd" id="phd" value={addProgram.phd ? 0 : 1}
                  onChange={(e) => { setAddProgram({ ...addProgram, phd: e.target.value }) }} />
                <label for="phd">دكتوراه</label>
              </div>


              <select onChange={(e) => { setAddProgram({ ...addProgram, department_id: e.target.value }) }}>
                <option id='sel2' value="" > القسم </option>
                {department.map((item) => {
                  return (
                    <option value={item.department_id}>{item.department_name_ar}</option>
                  )
                })}


              </select>
              {error ? <p > يرجى ادخال اسم القسم</p> : null}
              <button
                onClick={addpro}
                className="add"> <MdAdd />  اضافه البرنامج</button>

            </div>

            
          </div>
        </section>
      </div>
    </>
  )
}

export default ProgramAndDepartment;