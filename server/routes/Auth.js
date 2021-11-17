const express = require('express');
const router = express.Router();
const User = require('../models/User');
const CryptoJS = require("crypto-js");
//need to install
const jwt = require("jsonwebtoken");

//Register account
router.post("/register", (req, res) => {
    //create user from user input
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        //encrypt password with CryptoJS
        password: CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_SEC).toString()
    });

    //save user to database
    newUser.save()
    try {
        res.json("User added")
    }
    catch {
        res.json(err => console.log(err))
    }
})

//Login
router.post("/login", async (req, res) => {
    try {
        //check if username exist
        const user = await User.findOne({ username: req.body.username})
        if (!user) {
            res.json("error: " + "Username does not exist")
        }

        //if username exist, decrypt password from database
        const originalPassword = CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_SEC).toString()
        console.log(originalPassword)
        //JWT access token


        //check if password match with user input
        if(originalPassword !== req.body.password) {
            res.json("error: " + "Password Invalid")
        }

        //if user successfully logged in
        res.json(user)
    }
    //if error
    catch (err) {
        res.json(err)
    }    
})

module.exports = router