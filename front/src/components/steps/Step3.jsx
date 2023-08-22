import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { FaRegFilePdf } from 'react-icons/fa'
import { AiTwotoneDelete } from 'react-icons/ai'

const Step3 = ({ UserData, SetUserData, Images, SetImages }) => {




  const [t, i18n] = useTranslation();
  let counter = 0;

  useEffect(() => {
    // console.log(UserData);
    SetUserData(prevUserData => ({
      ...prevUserData,
      length_of_file: counter
    }));
  }, [counter, SetUserData]);




  return (
    <>
      <div className="top">
        <h2>
          {t('step3-title')}
        </h2>
      </div>


      <div className="content superContianer">

        <div className="input-img-container gridChange">
          <span className='labelChooes'>{t('img-1')} </span>
          <label htmlFor="image1" className='inputIN'>
            {
              Images.image1 ? `${Images.image1.name}` : `${t('choose-file')} `
            }
          </label>
          <input
            type="file"
            name="image1"
            id="image1"
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files[0];
              SetImages({ ...Images, image1: file });
            }}
          />
          {Images.image1 && (
            <>
              {Images.image1.type === "application/pdf" ? <FaRegFilePdf style={{ fontSize: "10rem", margin: "3% auto", color: "red" }} /> : <img src={URL.createObjectURL(Images.image1)} alt="Preview Image" className='Preview-Image' />}
              <div className="div-icon" onClick={() => { SetImages({ ...Images, image1: "" }) }}>
                <AiTwotoneDelete />
              </div>
            </>

          )}
          <div style={{ display: "none" }}>
            {counter = counter + 1}
          </div>
        </div>


        <div className="input-img-container gridChange ">
          <span className='labelChooes'>{t('img-2')} </span>
          <label htmlFor="image2" className='inputIN'>
            {
              Images.image2 ? `${Images.image2.name}` : `${t('choose-file')} `
            }
          </label>

          <input
            type="file"
            name="image2"
            id="image2"
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files[0];
              SetImages({ ...Images, image2: file });
            }}
          />
          {Images.image2 && (
            <>
              {Images.image2.type === "application/pdf" ? <FaRegFilePdf style={{ fontSize: "10rem", margin: "3% auto", color: "red" }} /> : <img src={URL.createObjectURL(Images.image2)} alt="Preview Image" className='Preview-Image' />}
              <div className="div-icon" onClick={() => { SetImages({ ...Images, image2: "" }) }}>
                <AiTwotoneDelete />
              </div>
            </>

          )}
          <div style={{ display: "none" }}>
            {counter = counter + 1}
          </div>
        </div>

        <div className="input-img-container gridChange">
          <span className='labelChooes'> {t('img-3')} </span>
          <label htmlFor="image3" className='inputIN'>
            {
              Images.image3 ? `${Images.image3.name}` : `${t('choose-file')} `
            }
          </label>

          <input
            type="file"
            name="image3"
            id="image3"
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files[0];
              SetImages({ ...Images, image3: file });
            }}
          />
          {Images.image3 && (
            <>
              {Images.image3.type === "application/pdf" ? <FaRegFilePdf style={{ fontSize: "10rem", margin: "3% auto", color: "red" }} /> : <img src={URL.createObjectURL(Images.image3)} alt="Preview Image" className='Preview-Image' />}
              <div className="div-icon" onClick={() => { SetImages({ ...Images, image3: "" }) }}>
                <AiTwotoneDelete />
              </div>
            </>

          )}
          <div style={{ display: "none" }}>
            {counter = counter + 1}
          </div>
        </div>

        <div className="input-img-container gridChange">
          <span className='labelChooes'>{t('img-4')} </span>
          <label htmlFor="image4" className='inputIN'>
            {
              Images.image4 ? `${Images.image4.name}` : `${t('choose-file')} `
            }
          </label>

          <input
            type="file"
            name="image4"
            id="image4"
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files[0];
              SetImages({ ...Images, image4: file });
            }}
          />
          {Images.image4 && (
            <>
              {Images.image4.type === "application/pdf" ? <FaRegFilePdf style={{ fontSize: "10rem", margin: "3% auto", color: "red" }} /> : <img src={URL.createObjectURL(Images.image4)} alt="Preview Image" className='Preview-Image' />}
              <div className="div-icon" onClick={() => { SetImages({ ...Images, image4: "" }) }}>
                <AiTwotoneDelete />
              </div>
            </>

          )}
          <div style={{ display: "none" }}>
            {counter = counter + 1}
          </div>
        </div>

        
        


    </div >


      <div className='top' style={{ marginTop: "2rem" }}><h1>*** {t('add-media')} *** </h1> </div>

    </>

  )
}

export default Step3