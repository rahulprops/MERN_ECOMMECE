import express from 'express'
import { createAddress } from '../controller/address.controller.js'
const addressRouter=express.Router()
addressRouter.post("/create",createAddress)
export default addressRouter;