const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

app.use(bodyParser.json());

const Donation = require('../models/donation');

mongoose.connect("mongodb+srv://Crony:gZn5RdiD2r3z61jf@cluster0.ovd99.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>{
    console.log('db connected!');
})
.catch(()=>{
    console.log('connection failde');
})

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,PATCH,DELETE,OPTIONS"
    );
    next();
})

app.post("/api/donation", (req, res) => {
    try {
        // const donation  = req.body.donation;
        // console.log(donation);

        const donation = new Donation({
            amount: req.body.amount
        })
        console.log(donation);
        donation.save();
        res.status(201).json({
            message:'got the donation at server',
            amount: req.body.donation
        });
    } catch (err) {
        console.error(err);
    }
})


app.get("/api/donation", (req, res) => {
    try {

        Donation.find().then(documents =>{
            res.status(200).json({
                message:'sent the donation at server',
                donations: documents
            });
            console.log(documents);
        });

        
    } catch (err) {
        console.error(err);
    }
})

module.exports = app;