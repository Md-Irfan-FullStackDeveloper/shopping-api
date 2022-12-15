const {Router} = require('express')
const { getProduct, addProduct } = require('../Controllers/productController')

const productRouter = Router()

productRouter.get('/', getProduct) 
productRouter.post('/addProduct', addProduct)

module.exports = {
    productRouter
}