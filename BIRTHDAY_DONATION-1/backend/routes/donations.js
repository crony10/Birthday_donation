const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const Donation = require('../models/donation');
// const donation = require('../models/donation');  

router.post("", (req, res) => {
    try {
        // const donation  = req.body.donation;
        // console.log(donation);

        const donation = new Donation({
            amount: req.body.amount
        })
        console.log("this is backend speacking: donation is: "+donation);
        donation.save();
        res.status(201).json({
            message:'got the donation at server',
            amount: req.body.donation
        });
    } catch (err) {
        console.error(err);
    }
})


router.get("", (req, res) => {
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


module.exports = router;