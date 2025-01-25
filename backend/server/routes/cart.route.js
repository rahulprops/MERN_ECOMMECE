import express from 'express'
import { addtoCart, fetchCartItems, updateCartItems } from '../controller/cart.controller.js'
const cartRouter=express.Router()
cartRouter.post("/add-cart",addtoCart)
cartRouter.get("/get-cart/:userId",fetchCartItems)
cartRouter.put("/update",updateCartItems)
export default cartRouter;