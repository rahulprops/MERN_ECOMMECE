import express from 'express'
import { createOrder } from '../controller/order.controller.js'
const orderRouters=express.Router()

orderRouters.post("/create",createOrder)

export default orderRouters;