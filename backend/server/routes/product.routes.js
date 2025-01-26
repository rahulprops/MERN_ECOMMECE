import express from 'express'
import { addProduct, deleteProduct, findProduct, ProductMulter, updateProduct } from '../controller/product.controller.js'
const productRoute=express.Router()
productRoute.post("/add",ProductMulter.single("image"),addProduct)
productRoute.put("/update/:id",ProductMulter.single("image"),updateProduct)
productRoute.delete("/delete/:id",deleteProduct)
productRoute.get("/get",findProduct)
export default productRoute;