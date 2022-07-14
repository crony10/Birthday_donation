const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

const donationRoutes = require('../routes/donations');
const userRoutes = require('../routes/auth_user');

app.use(bodyParser.json());



mongoose.connect("mongodb+srv://Crony:gZn5RdiD2r3z61jf@cluster0.ovd99.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('db connected!');
})
.catch(()=>{
    console.log('connection fail');
})

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,PATCH,DELETE,OPTIONS"
    );
    next();
})

app.use("/api/donation/",donationRoutes);
app.use("/api/auth_user/",userRoutes);

module.exports = app;