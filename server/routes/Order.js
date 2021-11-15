const route = require('express').Router()

//get all ordered item status
route.get('/', (req, res) => {
    res.send("You can see all products you are ordered")
})

//get specific ordered item status
route.get('/:id', (req, res) => {
    res.send("You can see the product status here")
})


module.exports = route;