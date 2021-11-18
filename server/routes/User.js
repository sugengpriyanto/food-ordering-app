const route = require('express').Router();
const User = require('../models/User');
const CryptoJS = require("crypto-js");

//get all users
route.get('/', (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//get user
route.get('/:id', async (req, res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

//add user
//add user can only be done with register

//edit user
route.put('/:id', (req, res) => {
    User.findById(req.params.id)
    .then(user => {
        user.username = req.body.username,
        user.email = req.body.email,
        user.password = CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_SEC).toString()

        user.save()
        .then(res.json("User is updated"))
        .catch(err => res.json(err))
    })
    .catch(err => res.json(err))
})

//delete user
route.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(res.json("User deleted"))
    .catch(err => res.json({message: err.message}))
})


module.exports = route;