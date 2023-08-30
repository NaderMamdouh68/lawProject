import React from 'react'
import { MdAdd } from 'react-icons/md'
import './editprofie.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Addm1m2f = () => {

  const navigate = useNavigate()
  const [facuality, setFacuality] = React.useState([])
  const [addFacuality, setAddFacuality] = React.useState({
    faculty_name: '',
    faculty_name_ar: ''
  })
  const [error, setErroe] = React.useState("");

  const [managers, setManagers] = React.useState([])
  const [managers2, setManagers2] = React.useState([])
  const [addManager, setAddManager] = React.useState({
    manager_name: '',
    manager_email: '',
    password: '',
    faculty_id: '',
    type: ''
  })
  axios.defaults.withCredentials = true
  useEffect(() => {
    axios.get('http://localhost:5002/superadmin/allFaculty', { withCredentials: true })
      .then((res) => {
        setFacuality(res.data)
      }).catch((error) => {
        if (error.response.data.admin === false) {
          navigate('/superAdminLogin')
        }

      })

    axios.get('http://localhost:5002/superadmin/allmanager2', { withCredentials: true })
      .then((res) => {
        setManagers(res.data)
      }
      ).catch((error) => {
        if (error.response.data.Admin === false) {
          navigate('/superAdminLogin')
        }
      }
      )

    axios.get('http://localhost:5002/superadmin/allmanager1', { withCredentials: true })
      .then((res) => {
        setManagers2(res.data)
      }
      ).catch((error) => {

        if (error.response.data.Admin === false) {
          navigate('/superAdminLogin')
        }
      }
      )
  }, [])

  const addFaculty = () => {
    if (document.querySelector('.add-department input').value !== '') {
      let con = window.confirm('هل انت متاكد من اضافه الكليه')
      if (con) {

        axios.post('http://localhost:5002/superadmin/addfaculty', addFacuality, { withCredentials: true })
          .then((res) => {
            window.location.reload()
          }).catch((error) => {
          })
      }
    } else {
      alert('ادخل اسم القسم')
    }
  }




  const handleEdit = (index) => {
    let con = window.confirm('هل انت متاكد من التعديل')
    if (con) {
      axios.post('http://localhost:5002/superadmin/updatefaculty', facuality[index], { withCredentials: true })
        .then((res) => {
          window.location.reload()
        }).catch((error) => {
        })
    }
  }

  const handleEditm1 = (index) => {
    let con = window.confirm('هل انت متاكد من التعديل')
    if (con) {
      axios.put('http://localhost:5002/superadmin/updatemanager1', managers[index], { withCredentials: true })
        .then((res) => {
          window.location.reload()
        }).catch((error) => {
        })
    }
  }

  const handleEditm2 = (index) => {
    let con = window.confirm('هل انت متاكد من التعديل')
    if (con) {
      axios.put('http://localhost:5002/superadmin/updatemanager2', managers2[index], { withCredentials: true })
        .then((res) => {
          window.location.reload()
        }).catch((error) => {
        })
    }
  }

  const addm1 = () => {
    if (document.querySelector('.add-p input').value !== '' && document.querySelector('.add-p select').value !== '') {
      let con = window.confirm('هل انت متاكد من اضافه الموظف')
      if (con) {
        axios.post('http://localhost:5002/superadmin/addmanager1', addManager, { withCredentials: true })
          .then((res) => {
            alert('تم اضافه الموظف')
            window.location.reload()
          }).catch((error) => {
            setErroe(error.response.data.errors.msg)
          })
      }
    } else {
      alert('ادخل بيانات  الموظف')
    }
  }

  const addm2 = () => {
    let con = window.confirm('هل انت متاكد من اضافه الموظف')
    if (con) {
      axios.post('http://localhost:5002/superadmin/addmanager2', addManager, { withCredentials: true })
        .then((res) => {
          alert('تم اضافه الموظف')
          window.location.reload()
        }).catch((error) => {
          setErroe(error.response.data.errors.msg)
        })
    }
  }





  return (
    <>
      <div className="program-data">
        <section className='cotainer-stu'>


          <div className="navv">
            <h2>
              الكليات
            </h2>


          </div>
          <div className="student-container nm">
            <div className="add-department">
              <input id='add-department'
                onChange={(e) => { setAddFacuality({ ...addFacuality, faculty_name: e.target.value }) }}
                type="text" placeholder=' اسم الكليه بالانجليزيه' />
              <input id='add-department'
                onChange={(e) => { setAddFacuality({ ...addFacuality, faculty_name_ar: e.target.value }) }}
                type="text" placeholder=' اسم الكليه بالعربيه' />
              <button
                onClick={addFaculty}
                className="add"> <MdAdd />  اضافه الكليه</button>
            </div>

            <table className="data-table">
              <tr>
                <th>رقم الكليه </th>
                <th>اسم الكليه بالانجليزيه</th>
                <th>اسم الكليه بالعربيه</th>
                <th>التعديل</th>
              </tr>

              {facuality.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td><input className='input-cell' type="text" value={item.faculty_name} placeholder={item.faculty_name} onChange={(e) => {
                      const updatedFacuality = [...facuality];
                      updatedFacuality[index] = { ...item, faculty_name: e.target.value };
                      setFacuality(updatedFacuality);
                    }} /></td>
                    <td><input className='input-cell' type="text" value={item.faculty_name_ar} placeholder={item.faculty_name_ar} onChange={(e) => {
                      const updatedFacuality = [...facuality];
                      updatedFacuality[index] = { ...item, faculty_name_ar: e.target.value };
                      setFacuality(updatedFacuality);
                    }} /></td>
                    <td><button onClick={() => { handleEdit(index) }}>تعديل</button></td>
                  </tr>
                )
              })}


            </table>
          </div>
        </section>


      </div>



      <div className="program-data">
        <section className='cotainer-stu'>


          <div className="navv">
            <h2>
              موظف الجامعه
            </h2>

          </div>
          <div className="student-container nm">
            <div className="add-department add-p">
              <h3 style={{ fontSize: "1.5rem" }}>اضافه موظف الجامعه</h3>
              <input
                id='add-p'
                onChange={(e) => { setAddManager({ ...addManager, manager_name: e.target.value }) }}
                type="text"
                placeholder='اسم الموظف' />
              <input
                id='add-p'
                onChange={(e) => { setAddManager({ ...addManager, manager_email: e.target.value }) }}
                type="email"
                placeholder='البريد الالكترونى' />
              <input
                id='add-p'
                onChange={(e) => { setAddManager({ ...addManager, password: e.target.value }) }}
                type="text"
                placeholder='كلمه المرور' />
              <select onChange={(e) => { setAddManager({ ...addManager, faculty_id: e.target.value }) }}>
                <option value=""> الكليه </option>
                {
                  facuality.map((item) => {
                    return (
                      <option value={item.faculty_id}> {item.faculty_name_ar} </option>
                    )
                  }
                  )
                }
              </select>

              {error ? <p > يرجى ادخال بيانات الموظف</p> : null}
              <button
                onClick={addm1}
                className="add"> <MdAdd />  اضافه الموظف</button>

            </div>

            <table className="data-table">
              <tr>
                <th> اسم الموظف </th>
                <th> البريد الالكترونى </th>
                <th> الكليه</th>
                <th> تعديل</th>

              </tr>

              {managers.map((manager, index) => {

                return (
                  <tr key={index}>
                    <td><input className='input-cell' type="text" value={manager.manager_name} placeholder={manager.manager_name} onChange={(e) => {
                      const updatedManagers = [...managers];
                      updatedManagers[index] = { ...manager, manager_name: e.target.value };
                      setManagers(updatedManagers);
                    }} /></td>
                    <td><input className='input-cell' type="text" value={manager.manager_email} placeholder={manager.manager_email} onChange={(e) => {
                      const updatedManagers = [...managers];
                      updatedManagers[index] = { ...manager, manager_email: e.target.value };
                      setManagers(updatedManagers);
                    }} /></td>
                    <td>{manager.faculty_name_ar}</td>
                    <td><button onClick={() => { handleEditm1(index) }}>تعديل</button></td>
                  </tr>

                )
              }
              )}


            </table>
          </div>
        </section>
      </div>
      <div className="program-data">
        <section className='cotainer-stu'>


          <div className="navv">
            <h2>
              موظف الكليه
            </h2>

          </div>
          <div className="student-container nm">
            <div className="add-department add-p">
              <h3 style={{ fontSize: "1.5rem" }}>اضافه موظف</h3>
              <input
                id='add-p'
                onChange={(e) => { setAddManager({ ...addManager, manager_name: e.target.value }) }}
                type="text"
                placeholder='اسم الموظف' />
              <input
                id='add-p'
                onChange={(e) => { setAddManager({ ...addManager, manager_email: e.target.value }) }}
                type="text"
                placeholder='البريد الالكترونى' />
              <input
                id='add-p'
                onChange={(e) => { setAddManager({ ...addManager, password: e.target.value }) }}
                type="text"
                placeholder='كلمه المرور' />
              <select onChange={(e) => { setAddManager({ ...addManager, faculty_id: e.target.value }) }}>
                <option value=""> الكليه </option>
                {
                  facuality.map((item) => {
                    return (
                      <option value={item.faculty_id}> {item.faculty_name_ar} </option>
                    )
                  }
                  )
                }

              </select>

              {error ? <p > يرجى ادخال بيانات الموظف</p> : null}
              <button
                onClick={addm2}
                className="add"> <MdAdd />  اضافه الموظف</button>

            </div>

            <table className="data-table">
              <tr>
                <th> اسم الموظف </th>
                <th> البريد الالكترونى </th>
                <th> الكليه</th>
                <th> تعديل</th>
              </tr>

              {managers2.map((manager, index) => {

                return (
                  <tr key={index}>
                    <td><input className='input-cell' type="text" value={manager.manager_name} placeholder={manager.manager_name} onChange={(e) => {
                      const updatedManagers = [...managers2];
                      updatedManagers[index] = { ...manager, manager_name: e.target.value };
                      setManagers2(updatedManagers);
                    }} /></td>
                    <td><input className='input-cell' type="text" value={manager.manager_email} placeholder={manager.manager_email} onChange={(e) => {
                      const updatedManagers = [...managers2];
                      updatedManagers[index] = { ...manager, manager_email: e.target.value };
                      setManagers2(updatedManagers);
                    }} /></td>
                    <td>{manager.faculty_name_ar}</td>
                    <td><button onClick={() => { handleEditm2(index) }}>تعديل</button></td>
                  </tr>

                )
              }
              )}


            </table>
          </div>
        </section>
      </div>


    </>
  )
}

export default Addm1m2f;