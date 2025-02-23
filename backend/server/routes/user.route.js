import express from 'express'
import { allUsers, loadUser, login, logout, register, resetPassword } from '../controller/user.controller.js'
import isAuthenticated from '../middleware/auth_middleware/isAthenticated.js'
const userRouter =express.Router()
userRouter.post("/register",register)
userRouter.post("/login",login)
userRouter.get("/all-users",allUsers)
userRouter.get("/load-user",isAuthenticated,loadUser)
userRouter.post("/logout",logout)
userRouter.post("/reset-password",isAuthenticated,resetPassword)
export default userRouter;