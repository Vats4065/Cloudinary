const postUpload = require("./model")

const upload = async (req, res, next) => {
    const { imgUrl, videoUrl } = req.body;

    // if (!imgUrl || !videoUrl) {
    //   res.status(400);
    //   return next(new Error("imgUrl & videoUrl fields are required"));
    // }

    try {
        const post = await postUpload.create({
            imgUrl,
            // videoUrl,
        });

        res.status(201).json({
            success: true,
            post,
        });
    } catch (error) {
        console.log(error);
        res.status(500);
        // next(error);
    }
}

module.exports = upload