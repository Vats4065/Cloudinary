import React, { useState } from 'react'
import axios from 'axios'
import { Bars } from "react-loader-spinner"

function UploadImage() {
    const [img, setImg] = useState(null)
    // const [video, setVideo] = useState(null)
    const [load, setLoad] = useState(false)


    const uploadFile = async (type) => {
        const data = new FormData()
        data.append('file', img)
        data.append('upload_preset', "rds0yjfk")
        try {

            // let resourceType = type === 'image' ? 'image' : 'video'


            const res = await axios.post(`https://api.cloudinary.com/v1_1/di7iebcws/image/upload`, data)
            console.log({ res });
            const { secure_url } = res.data
            console.log(secure_url);
            return secure_url
        } catch (error) {
            console.log(error);
        }

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoad(true)
            const imgUrl = await uploadFile('image')
            // const videoUrl = await uploadFile('video')

            let result = await axios.post("http://localhost:3000/api/image", { imgUrl })
            console.log(result);

            setImg(null)
            // setVideo(null)

            console.log("file upload successfully");
            setLoad(false)

        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit} className='w-25 mx-auto mt-5'>
                <div className='image form-group d-flex align-items-center'>
                    <label htmlFor="img">Image: </label>
                    <input type="file" className='form-control ms-2 ' name="img" id="img" accept='image/*' onChange={(e) => setImg(e.target.files[0])} />
                </div>
                {/* <div>
                    <label htmlFor="video">Video</label>
                    <input type="file" name="video" id="video" accept='video/*' onChange={(e) => setVideo(e.target.files[0])} />
                </div> */}
                <div className='submit-btn mt-3'>
                    <button className='btn btn-primary' type='submit'>Upload</button>
                </div>

            </form>
            {
                load && <Bars
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />



            }
        </div>

    )
}

export default UploadImage