const route = require('express').Router();
const Profile = require('../models/Profile');

//get profile information
route.get('/', (req, res) => {
    res.send("You can see your profile here")
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