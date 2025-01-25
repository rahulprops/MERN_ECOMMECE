import express from 'express'
import { createAddress, fetchAddress } from '../controller/address.controller.js'
const addressRouter=express.Router()
addressRouter.post("/create",createAddress)
addressRouter.get("/get/:userId",fetchAddress)
export default addressRouter;