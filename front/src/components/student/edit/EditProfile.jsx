import React from 'react'
import { BiArrowBack, BiSolidPrinter } from 'react-icons/bi'
import './editprofie.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { use } from 'i18next';
import { saveAs } from 'file-saver'

const EditProfile = () => {
  const [t, i18n] = useTranslation();
  const [error, setError] = React.useState('')
  const [disabled, setDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(null);



  const navigate = useNavigate()
  const [data, setData] = React.useState({})
  const [departments, setDepartments] = React.useState([])
  const [user, setUser] = React.useState({
    image1: '',
    image2: '',
    image3: '',
    image4: '',

  })
  const [images, setImages] = React.useState({
    image11: '',
    image22: '',
    image33: '',
    image44: '',

  })
  axios.defaults.withCredentials = true
  useEffect(() => {
    axios.defaults.withCredentials = true

    axios.get('http://graduate-programs.helwan.edu.eg/law/student/studentdetails', { withCredentials: true })
      .then((res) => {
        setData(res.data)
      }).catch((error) => {
        if (error.response.data.user === false) {
          navigate('/login')
        }
      })

    axios.defaults.withCredentials = false


    axios.get('http://graduate-programs.helwan.edu.eg/law/getdepartment')
      .then((res) => {
        setDepartments(res.data)
      }
      )
      .catch((error) => {
        console.log(error)
      }
      )





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


  const changeimage = (index1, index2) => {
    const inputTag = document.createElement('input');
    inputTag.type = 'file';
    inputTag.accept = 'image/*';
    inputTag.click();
    inputTag.addEventListener('change', (e) => {
      const file = e.target.files[0];
      setUser({ ...user, [index1]: file })
      setImages({ ...images, [index2]: file.name })
    })
    inputTag.remove();
  }

  const confirmData = () => {
    if (window.confirm(t('confirm'))) {
      const formData = new FormData()
      setDisabled(true)
      formData.append('image1', user.image1)
      formData.append('image2', user.image2)
      formData.append('image3', user.image3)
      formData.append('image4', user.image4)
      formData.append('name', data.student_name)
      formData.append('email', data.email)
      formData.append('phone', data.phonenumber)
      formData.append('national_id', data.national_id)
      formData.append('dateOfBirth', data.birthdate)
      formData.append('gender', data.gender)
      formData.append('phoneArd', data.phoneArd)
      formData.append('adress', data.adress)
      formData.append('nationality', data.nationality)
      formData.append('previous_qu', data.previous_qu)
      formData.append('setNum', data.setNum)
      formData.append('school', data.school)
      formData.append('enDeg', data.enDeg)
      formData.append('enDeg2', data.enDeg2)
      formData.append('enDegname', data.enDegname)
      formData.append('enDegname2', data.enDegname2)
      formData.append('totalDeg', data.totalDeg)
      formData.append('dadJob', data.dadJob)
      formData.append('phoneDad', data.phoneDad)
      formData.append('department', data.department_id)



      try {
        axios.put('http://graduate-programs.helwan.edu.eg/law/student/studentupdate', formData, {
          withCredentials: true,

          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            let percent = Math.floor((loaded * 100) / total);
            console.log(`${loaded}kb of ${total}kb | ${percent}%`);
            if (percent <= 100) {
              setLoading(percent);
            }
          }
        })
          .then((res) => {
            alert('data updated')
            navigate('/profile')
            window.location.reload()
          }).catch((error) => {
            console.log(error.response.data.errors.msg[0])
            setError(error.response.data.errors.msg[0])
            setDisabled(false)
          })

      }
      catch (error) {
        console.log(error)
        setDisabled(false)

      }
    }
  }





  // {
  //   document.getElementById("date").defaultValue = data.birthdate
  // }



  return (
    <>
      <section className="cotainer-data">
        <div className="navv">
          <h2>
            Student Application Report
          </h2>
        </div>
        <div className="data-container">
          <div className='image-con'>
            <img src={`http://graduate-programs.helwan.edu.eg/law/${data.national_id}/${data.img}`} alt="" className="image" />
            <button
              onClick={() => { changeimage('image1', 'image11') }}
              style={{ background: "#003C70" }} class="atch-btn">{t('change')}
            </button>
            {images.image11 != "" && (<p id='change-1'>{images.image11 != "" ? images.image11 : ""}</p>)}

          </div>
          <table className="data-table" style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
            <tr>
              <th>Application Basic Information</th>
              <th>Application Data</th>
            </tr>

            <tr>
              <td>{t('name')}</td>
              <td>
                <input type="text"
                  value={data.student_name}
                  onChange={(e) => { setData({ ...data, student_name: e.target.value }) }}
                />
              </td>
            </tr>
            <tr>
              <td>{t('email')}</td>
              <td>
                <input type="text"
                  value={data.email}
                  onChange={(e) => { setData({ ...data, email: e.target.value }) }}
                />
              </td>
            </tr>
            <tr>
              <td>{t('phoneArd')}</td>
              <td>
                <input type="text"
                  value={data.phoneArd}
                  onChange={(e) => { setData({ ...data, phoneArd: e.target.value }) }}
                />
              </td>
            </tr>
            <tr>
              <td>{t('phone')}</td>
              <td>
                <input type="text"
                  value={data.phonenumber}
                  onChange={(e) => { setData({ ...data, phonenumber: e.target.value }) }}
                />
              </td>
            </tr>
            <tr>
              <td>{t('adress')}</td>
              <td>
                <input type="text"
                  value={data.adress}
                  onChange={(e) => { setData({ ...data, adress: e.target.value }) }}
                />
              </td>
            </tr>
            <tr>
              <td>{t('nationality')}</td>
              <td>
                <input type="text"
                  value={data.nationality}
                  onChange={(e) => { setData({ ...data, nationality: e.target.value }) }}
                />
              </td>
            </tr>
            <tr>
              <td>{t('previous_qu')}</td>
              <td>
                <input type="text"
                  value={data.previous_qu}
                  onChange={(e) => { setData({ ...data, previous_qu: e.target.value }) }}
                />
              </td>
            </tr>
            <tr>
              <td>{t('setNum')}</td>
              <td>
                <input type="text"
                  value={data.setNum}
                  onChange={(e) => { setData({ ...data, setNum: e.target.value }) }}
                />
              </td>
            </tr>
            <tr>
              <td>{t('school')}</td>
              <td>
                <input type="text"
                  value={data.school}
                  onChange={(e) => { setData({ ...data, school: e.target.value }) }}
                />
              </td>
            </tr>
            <tr>
              <td>{t('enDegname')}</td>
              <td>
                <input type="text"
                  value={data.enDegname}
                  onChange={(e) => { setData({ ...data, enDegname: e.target.value }) }}
                />
              </td>
            </tr>
            <tr>
              <td>{t('enDeg')}</td>
              <td>
                <input type="text"
                  value={data.enDeg}
                  onChange={(e) => { setData({ ...data, enDeg: e.target.value }) }}
                />
              </td>
            </tr>
            <tr>
              <td>{t('enDegname2')}</td>
              <td>
                <input type="text"
                  value={data.enDegname2}
                  onChange={(e) => { setData({ ...data, enDegname2: e.target.value }) }}
                />
              </td>
            </tr>
            <tr>
              <td>{t('enDeg2')}</td>
              <td>
                <input type="text"
                  value={data.enDeg2}
                  onChange={(e) => { setData({ ...data, enDeg2: e.target.value }) }}
                />
              </td>
            </tr>
            <tr>
              <td>{t('totalDeg')}</td>
              <td>
                <input type="text"
                  value={data.totalDeg}
                  onChange={(e) => { setData({ ...data, totalDeg: e.target.value }) }}
                />
              </td>
            </tr>
            <tr>
              <td>{t('dadJob')}</td>
              <td>
                <input type="text"
                  value={data.dadJob}
                  onChange={(e) => { setData({ ...data, dadJob: e.target.value }) }}
                />
              </td>
            </tr>
            <tr>
              <td>{t('phoneDad')}</td>
              <td>
                <input type="text"
                  value={data.phoneDad}
                  onChange={(e) => { setData({ ...data, phoneDad: e.target.value }) }}
                />
              </td>
            </tr>

            <tr>
              <td>{t('n-id')}</td>
              <td>
                {data.national_id}
              </td>
            </tr>
            <tr>
              <td>{t('dateOfBirth')}</td>
              <td>
                <input
                  type="date"
                  name=""
                  id="date"
                  value={(data.birthdate?.split('T')[0]) || ''}
                  onChange={(e) => { setData({ ...data, birthdate: e.target.value }) }}
                />
              </td>
            </tr>
            <tr>
              <td>{t('gender')}</td>
              <td>
                {/* {data.gender == 1 ? `${t('m')}` : `${t('f')}`} */}
                <select
                  className='inputIN'
                  style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}
                  value={data.gender}
                  onChange={(e) => { setData({ ...data, gender: e.target.value }) }}
                >
                  <option value="" >{t('gender')} </option>
                  <option value="1">{t('m')} </option>
                  <option value="0">{t('f')} </option>
                </select>
              </td>
            </tr>


            <tr>
              <td>{t('department')}</td>
              <td>
                <select
                  className='inputIN'
                  style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}
                  value={data.department_id}
                  onChange={(e) => { setData({ ...data, department_id: e.target.value }) }}
                >
                  <option value="" >{t('department')} </option>
                  {departments.filter((department) => department.faculty_id == data.faculty_id).map((department) => {
                    return (
                      <option value={department.department_id}>{localStorage.getItem('i18nextLng') == "ar" ? department.department_name_ar : department.department_name} </option>
                    )
                  })}
                </select>
              </td>
            </tr>



            <tr>
              <td>{t('dateOfsubmition')}</td>
              <td>
                {(data.submission_date?.split('T')[0]) || ''}
              </td>
            </tr>

          </table>
        </div>

        <h1>{t('att')}</h1>

        <table class="profile-table">

          <tr>
            <th>{t('att')}</th>
            <th>{t('buttons')}</th>
          </tr>

          {data.photo_national_id !== "0" && (
            <tr>
              <td>{t('img-profile-2')}</td>
              <td className='att-row'>
                <button
                  onClick={() => { openImage(`http://graduate-programs.helwan.edu.eg/law/${data.national_id}/${data.photo_national_id}`) }}
                  style={{ background: "#003C70" }} class="atch-btn">{t('open')}
                </button>
                <button
                  onClick={() => { downloadImage(`http://graduate-programs.helwan.edu.eg/law/${data.national_id}/${data.photo_national_id}`) }}
                  style={{ background: "#AD8700" }} class="atch-btn">{t('download')}
                </button>
                <button
                  onClick={() => { changeimage('image2', 'image22') }}
                  style={{ background: "#003C70" }} class="atch-btn">{t('change')}
                </button>
                <p id='change-1'>{images.image22 != "" ? images.image22 : ""}</p>
              </td>
            </tr>
          )
          }



          {data.birth_certificate !== "0" && (
            <tr>
              <td>{t('img-profile-3')}</td>
              <td className='att-row'>
                <button
                  onClick={() => { openImage(`http://graduate-programs.helwan.edu.eg/law/${data.national_id}/${data.birth_certificate}`) }}
                  style={{ background: "#003C70" }} class="atch-btn">{t('open')}
                </button>
                <button
                  onClick={() => { downloadImage(`http://graduate-programs.helwan.edu.eg/law/${data.national_id}/${data.birth_certificate}`) }}
                  style={{ background: "#AD8700" }} class="atch-btn">{t('download')}
                </button>
                <button
                  onClick={() => { changeimage('image3', 'image33') }}
                  style={{ background: "#003C70" }} class="atch-btn">{t('change')}
                </button>
                <p id='change-1'>{images.image33 != "" ? images.image33 : ""}</p>
              </td>
            </tr>
          )
          }

          {data.academic_qualification !== "0" && (
            <tr>
              <td>{t('img-profile-4')}</td>
              <td className='att-row'>
                <button
                  onClick={() => { openImage(`http://graduate-programs.helwan.edu.eg/law/${data.national_id}/${data.academic_qualification}`) }}
                  style={{ background: "#003C70" }} class="atch-btn">{t('open')}
                </button>
                <button
                  onClick={() => { downloadImage(`http://graduate-programs.helwan.edu.eg/law/${data.national_id}/${data.academic_qualification}`) }}
                  style={{ background: "#AD8700" }} class="atch-btn">{t('download')}
                </button>
                <button
                  onClick={() => { changeimage('image4', 'image44') }}
                  style={{ background: "#003C70" }} class="atch-btn">{t('change')}
                </button>
                <p id='change-1'>{images.image44 != "" ? images.image44 : ""}</p>
              </td>
            </tr>
          )
          }


        </table>
        <h1>{error}</h1>

        {loading == null ? null :
          <div className='top' style={{ marginTop: "2rem", width: "90%", color: "#AD8700", fontWeight: "bolder", fontSize: "1.3em" }}>
            <div className="progress-bar"
              role='progressbar'
              aria-valuenow={loading}
              aria-valuemin='0'
              aria-valuemax='100'
              style={{ width: `${loading}%` }}
            >
              {loading}%
            </div>
          </div>
        }
        {Error ? (
          <div className='top' style={{ marginTop: "2rem", color: "red", fontWeight: "bolder" }}><h1>  {Error[0] != undefined ? `${Error[0]}` : null}  </h1> </div>)
          : null
        }
        <button
          disabled={disabled}
          onClick={confirmData}
          className='confirm-btn'>{t('confirm')}
        </button>
      </section>
    </>
  )
}

export default EditProfile