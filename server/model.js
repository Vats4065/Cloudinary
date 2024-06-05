const mongoose = require('mongoose')

const upload = new mongoose.Schema(
    {
        imgUrl: {
            type: String,
        },
        // videoUrl: {
        //     type: String,
        //     required: true,
        // },
    },
    {
        timestamps: true,
    }
);

const postUpload = new mongoose.model("postupload", upload);

module.exports = postUpload;