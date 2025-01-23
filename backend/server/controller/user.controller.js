import validator from 'validator'
import userModel from '../model/user.model.js';
import bcrypt from 'bcrypt'
//! register user
export const register=async (req,res)=>{
    const {userName,email,password}=req.body;
    
    if(!userName || !email || !password){
        return res.status(400).json({message:"all fields requied"})
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