const route = require('express').Router()
const Cart = require('../models/Cart')

//get everything on cart
route.get('/', (req, res) => {
    res.send("You can see all products on your cart")
})

//update cart with form
route.put('/update', (req, res) => {
    res.send("You can update your products on your cart")
})

//remove item from cart
route.delete('/id', (req, res) => {
    res.send("Your product has been removed from the cart")
})

//post item to order

module.exports = route;