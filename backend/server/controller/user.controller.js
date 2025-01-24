import validator from 'validator'
import userModel from '../model/user.model.js';
import bcrypt from 'bcrypt'
import errorHandler from '../middleware/err_logs/errorHandler.js';
import generateToken from '../utils/generateToken.js';
//! register user
export const register=async (req,res)=>{
    const {userName,email,password}=req.body;
    
    if(!userName || !email || !password){
        return errorHandler(res,400,"all fields requied")
    }
    // email validator
    if(!validator.isEmail(email)){
        return res.status(400).json({message:"enter valid email"})
    }
    try{
            // user exist or not
            const isUser=await userModel.findOne({email})
            if(isUser){
                return res.status(400).json({message:"user already exost"})
            }
            // hash password
            const hashpassword= await bcrypt.hash(password,12)
            // create user
            const user=new userModel({
                userName,
                email,
                password:hashpassword
            })
            if(!user){
                return res.status(400).json({ message:'user create failed'})
            }
            await user.save()
            return res.status(210).json({messge:"create",dta:user})
    }catch(err){
        return res.status(500).json({message:`server error ${err.message}`})
    }
}
//! user login
export const login = async (req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return errorHandler(res,400,"all feilds requied")
    }
    try{
        // check email valid or not
        const isCheckEmail=await userModel.findOne({email})
        if(!isCheckEmail){
            return errorHandler(res,400,"enter valid email ")
        }
        // password check valid or not
        const isPassword=await bcrypt.compare(password,isCheckEmail.password)
        if(isPassword){
            (generateToken(isCheckEmail._id,res))
            return errorHandler(res,200,"login sucessful",isCheckEmail)
        }else{
            return errorHandler(res,400,"please enter valid password")
        }
    }catch(err){
        return errorHandler(res,500,`server error ${err.message}`)
    }
}
//! logout
export const logout=async (req,res)=>{
    try{
      
        (res.cookie("token","", {maxAge:0})) 
         return errorHandler(res,200,"logout sucess")
    }catch(err){
        return errorHandler(res,500,`server error ${err.message}`)
    }
}