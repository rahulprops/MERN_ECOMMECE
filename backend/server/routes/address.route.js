import express from 'express'
import { createAddress, editAddress, fetchAddress } from '../controller/address.controller.js'
const addressRouter=express.Router()
addressRouter.post("/create",createAddress)
addressRouter.get("/get/:userId",fetchAddress)
addressRouter.put("/update/:userId/:addressId",editAddress)
export default addressRouter;