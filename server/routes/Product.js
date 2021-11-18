const route = require('express').Router()
const Products = require('../models/Product')

//get all products
route.get('/', (req, res) => {
    Products.find()
    .then(products => res.json(products))
    .catch(err => res.json(err))
})

//get specific product detail
route.get('/:id', (req, res) => {
    Products.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.json(err))
})

//add product
route.put('/add', (req, res) => {
    const newProduct = new Products({
        name: req.body.name,
        description: req.body.description,
        img: req.body.img,
        categories: req.body.categories,
        size: req.body.size,
        color: req.body.color,
        price: req.body.price
    })
    newProduct.save()
    .then(res.json("Product Added"))
    .catch(err => res.json(err))
})

//modify product
route.put('/:id', (req, res) => {
    Products.findById(req.params.id)
    .then(product => {
        product.name = req.body.name,
        product.description = req.body.description,
        product.img = req.body.img,
        product.categories = req.body.categories,
        size = req.body.size,
        product.color = req.body.color,
        product.price = req.body.price

        product.save()
        .then(res.json("Product Updated"))
        .catch(err => res.json(err))
    })
    .catch(err => res.json(err))
})


//delete product
route.delete('/:id', (req, res) => {
    Products.findByIdAndDelete(req.params.id)
    .then(res.json("Product deleted"))
    .catch(err => res.json({message: err.message}))
})

module.exports = route;