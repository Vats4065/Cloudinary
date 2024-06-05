const express = require('express');
const db = require('./config');
const api = require('./routes');
const cors = require('cors');


const app = express();
app.use(cors())
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(api)


app.listen(8080,()=>{
    console.log("listening on port 8080");
    db()

})