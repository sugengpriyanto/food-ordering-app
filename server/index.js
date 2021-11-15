//required package first
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//external routes
const authRouter = require('./routes/Auth');
const userRouter = require('./routes/User');
const orderRouter = require('./routes/Order');
const productRouter = require('./routes/Product');
const cartRouter = require('./routes/Cart');

//usage variable of package
const app = express()
require('dotenv').config()

//env and internal data
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

//database integration
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const connection = mongoose.connection;
connection.once('open', () => console.log('Database Connected'))

//middleware
app.use(express.json())
app.use(cors())

//routes
//homepage route
app.get('/', (req, res) => {
    res.send("This is homepage")
})

//authentication
app.use('/auth', authRouter)

//profile route
app.use('/user', userRouter);

//menu route
app.use('/product', productRouter);

//cart route
app.use('/cart', cartRouter);

//orderRouter
app.use('/order', orderRouter);

//server started
app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})