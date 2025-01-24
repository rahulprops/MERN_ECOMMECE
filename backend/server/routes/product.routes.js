import express from 'express'
import { addProduct, deleteProduct, updateProduct } from '../controller/product.controller.js'
const productRoute=express.Router()
productRoute.post("/add",addProduct)
productRoute.put("/update/:id",updateProduct)
productRoute.delete("/delete/:id",deleteProduct)
export default productRoute;