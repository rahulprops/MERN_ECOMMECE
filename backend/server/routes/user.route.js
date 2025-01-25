import express from 'express'
import { allUsers, login, logout, register } from '../controller/user.controller.js'
const userRouter =express.Router()
userRouter.post("/register",register)
userRouter.post("/login",login)
userRouter.get("/all-users",allUsers)
userRouter.post("/logout",logout)
export default userRouter;