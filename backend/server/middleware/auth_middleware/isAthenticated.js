import userModel from "../../model/user.model.js";
import errorHandler from "../err_logs/errorHandler.js"
import jwt from 'jsonwebtoken'
const isAuthenticated= async (req,res,next)=>{
    const {token}=req.cookies;
    // console.log(token)
    if(!token){
        return errorHandler(res,400,"user not Authorized")
    }
    try{
        // verify token
        const decode=  jwt.verify(token,process.env.JWT)
        if(!decode){
            return errorHandler(res,400,"token not valid")
        }
        // console.log(decode)
        // check user
        const user=await userModel.findById(decode.userId)
        if(!user){
            return errorHandler(res,404,"user not found ")
        }
        req.userId=decode.userId
        next()
        // console.log("isAuthenticated")
    }catch(err){
        return errorHandler(res,500,`server error ${err.message}`)
    }
}
export default isAuthenticated;