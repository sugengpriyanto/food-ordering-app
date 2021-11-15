const express = require('express');
const router = express.Router();
const User = require('../models/User');
const CryptoJS = require("crypto-js");

//Register account
router.post("/register", (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_SEC).toString()
    });

    newUser.save()
    .then((user)=> res.json(user))
    .catch(err => console.log(err))
})

//Login


module.exports = router