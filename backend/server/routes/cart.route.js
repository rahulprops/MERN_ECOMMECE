import express from 'express'
import { addtoCart, fetchCartItems } from '../controller/cart.controller.js'
const cartRouter=express.Router()
cartRouter.post("/add-cart",addtoCart)
cartRouter.get("/get-cart/:userId",fetchCartItems)
export default cartRouter;