import express from 'express'
import { addtoCart, deleteCartItems, fetchCartItems, updateCartItems } from '../controller/cart.controller.js'
const cartRouter=express.Router()
cartRouter.post("/add-cart",addtoCart)
cartRouter.get("/get-cart/:userId",fetchCartItems)
cartRouter.put("/update",updateCartItems)
cartRouter.delete("/delete/:userId/:productId",deleteCartItems)
export default cartRouter;