const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connection = require('./config/db')
const { productRouter } = require('./Routes/product.route')

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())

app.use('/products', productRouter)

app.listen(PORT, async () => {
    try {
        await connection;
        console.log('Connected to db successfully');
    } catch (error) {
        console.log(error);
        console.log('error connecting to db');
    }
})