const mongoose = require('mongoose')

const db = async () => {
    try {
        await mongoose.connect("mongodb+srv://upload:upload@cluster0.bzyz2tu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Connected");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = db