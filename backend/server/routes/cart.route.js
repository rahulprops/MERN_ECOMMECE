import express from 'express'
import { addtoCart, deleteCartItems, fetchCartItems, updateCartItems } from '../controller/cart.controller.js'
import isAuthenticated from '../middleware/auth_middleware/isAthenticated.js'
const cartRouter=express.Router()
cartRouter.post("/add-cart",isAuthenticated,addtoCart)
cartRouter.get("/get-cart/",isAuthenticated,fetchCartItems)
cartRouter.put("/update",isAuthenticated,updateCartItems)
cartRouter.delete("/delete/:productId",isAuthenticated,deleteCartItems)
export default cartRouter;