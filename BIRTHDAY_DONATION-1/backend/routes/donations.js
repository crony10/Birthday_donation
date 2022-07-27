const express = require('express');
const bodyParser = require('body-parser');
const checkAuth = require('../middleware/check-auth');


const router = express.Router();

const Donation = require('../models/donation');
// const donation = require('../models/donation');  

router.post("",
    checkAuth,
    (req, res) => {
        try {
            // const donation  = req.body.donation;
            // console.log(donation);
            console.log(req.userData);

            const donation = new Donation({
                amount: req.body.amount,
                creator: req.userData.userId  
            })


            console.log("this is backend speaking: donation is: " + donation);
            donation.save();
            res.status(201).json({
                message: 'got the donation at server',
                amount: req.body.donation
            });
        } catch (err) {
            console.error(err);
        }
    })


router.get("",
    checkAuth,
    (req, res) => {
        try {

            Donation.find().then(documents => {
                res.status(200).json({
                    message: 'sent the donation at server',
                    donations: documents
                });
                console.log("this is from the backend your requested document is: " + documents);
            });


        } catch (err) {
            console.error(err);
        }
    })


module.exports = router;