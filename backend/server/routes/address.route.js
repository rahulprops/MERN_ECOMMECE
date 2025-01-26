import express from 'express'
import { createAddress, deleteAddress, editAddress, fetchAddress } from '../controller/address.controller.js'
import isAuthenticated from '../middleware/auth_middleware/isAthenticated.js'
const addressRouter=express.Router()
addressRouter.post("/create",isAuthenticated,createAddress)
addressRouter.get("/get",isAuthenticated,fetchAddress)
addressRouter.put("/update/:addressId",isAuthenticated,editAddress)
addressRouter.delete("/delete/:addressId",isAuthenticated,deleteAddress)
export default addressRouter;