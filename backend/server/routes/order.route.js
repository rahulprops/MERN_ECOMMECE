import express from 'express'
import { adminGetOrder, createOrder, getAllOrderByUser, getOrderDetails, updateOrderStatus } from '../controller/order.controller.js'
const orderRouters=express.Router()

orderRouters.post("/create",createOrder)
orderRouters.get("/list/:userId", getAllOrderByUser)
orderRouters.get("/details/:id",getOrderDetails)
//! admin get
orderRouters.get("/orders",adminGetOrder)
orderRouters.put("/update/:id",updateOrderStatus)

export default orderRouters;