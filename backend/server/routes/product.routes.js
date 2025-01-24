import express from 'express'
import { addProduct, updateProduct } from '../controller/product.controller.js'
const productRoute=express.Router()
productRoute.post("/add",addProduct)
productRoute.put("/update/:id",updateProduct)
export default productRoute;