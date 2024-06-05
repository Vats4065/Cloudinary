import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UploadImage() {
  const [img, setImg] = useState()
  const [display, setDisplay] = useState([])




  const result = async () => {
    const data = await axios.get("http://localhost:8080/image")
    console.log(data.data);
    const mainData = data.data
    setDisplay(mainData)
  }
  console.log(display);
  useEffect(() => {
    result()
  }, [img])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('photo', img)
    const res = await axios.post("http://localhost:8080/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",

      },

    })
    console.log(res.data.imgUrl);
    // setDisplay(res.data.imgUrl)
    


  }
  return (
    <div >
      <form action="post" className='w-50 mx-auto mb-5' onSubmit={handleSubmit} >
        <div className="form-group d-flex align-items-center mt-4">
          <label htmlFor="img">
            img:
          </label>
          <input type="file" name="photo" id="img" className="file-control form-control ms-3" accept='image/*' onChange={(e) => setImg(e.target.files[0])} />
          <button type='submit' className='btn  btn-primary'>Upload</button>
        </div>
      </form>

      <div className="displayImg  mt-5 text-center">
        {
          display.map((item, index) => {
            return (
              <div className='mt-5'>
                <img src={item?.imgUrl} key={index} alt="img" />
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default UploadImage