const express = require('express')
const { v4: uuidv4 } = require('uuid')
const cloudinary = require('cloudinary').v2
const fs = require('fs')

const api = express.Router()
cloudinary.config({
    cloud_name: 'di7iebcws',
    api_key: '367627439816384',
    api_secret: 'cHAt4RoLnhK_CKK0LxHDekjwNg0'
});





const multer = require('multer')
const postUpload = require('./model')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        console.log("file", file);
        const uuid = uuidv4()
        cb(null, uuid + " " + file.originalname)
    }
})



const upload = multer({
    storage: storage,

})


api.post('/api/upload', upload.single("photo"), async (req, res) => {

    console.log(req.file.path);
    const x = await cloudinary.uploader.upload(req.file.path)
    console.log(x);
    const postUtl = await postUpload.create({ imgUrl: x.secure_url })
    console.log(postUtl);

    fs.unlink(req.file.path, (err) => {
        if (err) {
            console.log(err);
        }
        else {

            console.log("delte");
        }
    }),




        res.send(postUtl)
})


api.get('/image', async (req, res) => {
    const result = await postUpload.find({})
    res.send(result)
})

module.exports = api