import express from 'express'
import { adminGetOrder, createOrder, getAllOrderByUser, getOrderDetails } from '../controller/order.controller.js'
const orderRouters=express.Router()

orderRouters.post("/create",createOrder)
orderRouters.get("/list/:userId", getAllOrderByUser)
orderRouters.get("/details/:id",getOrderDetails)
//! admin get
orderRouters.get("/orders",adminGetOrder)

export default orderRouters;