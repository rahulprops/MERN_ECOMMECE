import express from 'express'
import { addtoCart } from '../controller/cart.controller.js'
const cartRouter=express.Router()
cartRouter.post("/add-cart",addtoCart)
export default cartRouter;