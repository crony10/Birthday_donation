const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user = require('../models/user');

const router = express.Router();

router.post("/signup", (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(result => {
                    res.status(201).json({
                        message: 'user added',
                        result: result
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    })
                });
        });
});

router.post("/login", (req, res, next) => {
    // console.log("aai gyu login part");
    // console.log(req.body.email);
    let fetchedUser;
    User.findOne({ email: req.body.email })
        .then(user => {
            // console.log(user);
            if (!user) {
                return res.status(401).json({
                    message: "can't find any user matching this email"
                });
            }
            fetchedUser = user;
            // console.log("here");

            return bcrypt.compare(req.body.password, user.password);
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: "can't find any user matching this email"
                });
            }
            const token = jwt.sign({email: fetchedUser.email, userId: fetchedUser._id}, 
                'secret_this_should_be_longer',
                {expiresIn:"1h"});
                // console.log(token);
            res.status(200).json({
                token: token
            })
        })
        .catch(err => {
            return res.status(401).json({
                message: "can't find any user matching this email"
            });
        });
});


module.exports = router;