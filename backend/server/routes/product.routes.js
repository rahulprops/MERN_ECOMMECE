import express from 'express'
import { addProduct } from '../controller/product.controller.js'
const productRoute=express.Router()
productRoute.post("/add",addProduct)
export default productRoute;