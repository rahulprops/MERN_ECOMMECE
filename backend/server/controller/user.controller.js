import validator from 'validator'
import userModel from '../model/user.model.js';
import bcrypt from 'bcrypt'
import errorHandler from '../middleware/err_logs/errorHandler.js';
import generateToken from '../utils/generateToken.js';
import jwt from 'jsonwebtoken'
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
//! get all user
export const allUsers=async (req,res)=>{
    try{
        const users=await userModel.find({})
        if(!users){
            return errorHandler(res,404,"user not found")
        }
        return errorHandler(res,200,"users get sucess",users)
    }catch(err){
        return errorHandler(res,500,`server error ${err.message}`)
    }
}
//! loaduser
export const loadUser=async (req,res)=>{
    const userId=req.userId;
      if(!userId){
        return errorHandler(res,404,"userId not found")
      }
    try{
           const user=await userModel.findById(userId).select("-password")
           if(!user){
            return errorHandler(res,404,"user not found")
           }
           return errorHandler(res,200,"loadUser sucess",user)
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
//! reset-password
export const resetPassword = async (req, res) => {
    const userId = req.userId;
    const { oldPassword, newPassword } = req.body;

    // Input validation
    if (!oldPassword || !newPassword) {
        return errorHandler(res, 400, "oldPassword and newPassword are required");
    }

    try {
        // Find user by ID
        const user = await userModel.findById(userId).select("password");
        if (!user) {
            return errorHandler(res, 404, "User not found");
        }

        // Verify old password
        const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
        if (!isPasswordValid) {
            return errorHandler(res, 400, "Invalid old password");
        }

        // Check if new password is the same as old password
        if (oldPassword === newPassword) {
            return errorHandler(res, 400, "New password must be different from the old password");
        }

        // Hash new password
        const newPasswordHash = await bcrypt.hash(newPassword, 12);

        // Update user's password
        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { $set: { password: newPasswordHash } },
            { new: true }
        );

        if (updatedUser) {
            return errorHandler(res, 200, "Password updated successfully");
        }
    } catch (err) {
        // console.error("Error in resetPassword:", err);
        return errorHandler(res, 500, "Internal server error");
    }
};

//! refresh-token 
export const refreshToken = async (req, res) => {
    const userId = req.userId;

    // Input validation
    if (!userId) {
        return errorHandler(res, 400, "User ID is required");
    }

    try {
        // Generate a new JWT
        const token = jwt.sign({ userId }, process.env.JWT, { expiresIn: "5d" });

        // Set the token as an HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true,
           
            maxAge: 5 * 24 * 60 * 60 * 1000, // 5 days
        });

        // Return success response
        return errorHandler(res, 200, "Refresh token generated successfully");
    } catch (err) {
        console.error("Error in refreshToken:", err);
        return errorHandler(res, 500, "Internal server error");
    }
};