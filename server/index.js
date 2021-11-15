//required package first
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//external routes
const profileRouter = require('./routes/Profile');
const menuRouter = require('./routes/Menu');
const cartRouter = require('./routes/Cart');
const orderRouter = require('./routes/Order');

//usage variable of package
const app = express()
require('dotenv').config()

//env and internal data
const port = process.env.PORT || 5000;

//database integration

//middleware
app.use(express.json())
app.use(cors())

//routes
//homepage route
app.get('/', (req, res) => {
    res.send("This is homepage")
})

//profile route
app.use('/profile', profileRouter);

//menu route
app.use('/menu', menuRouter);

//cart route
app.use('/cart', cartRouter);

//orderRouter
app.use('/order', orderRouter);

//server started
app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})