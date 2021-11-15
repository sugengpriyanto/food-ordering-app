const route = require('express').Router();
const User = require('../models/User');

//get profile information
route.get('/', (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//update profil with form
route.put('/update', (req, res) => {
    res.send("You can update your information here")
})

//delete account after two confirmation box
route.delete('/delete', (req, res) => {
    res.send("Your account has been deactivated")
})

module.exports = route;