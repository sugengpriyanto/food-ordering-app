const route = require('express').Router()

//get all menus
route.get('/', (req, res) => {
    res.send("You can see all menus here")
})

//get specific menu detail
route.get('/:id', (req, res) => {
    res.send("You can see menu detail here")
})

//add to chart

module.exports = route;