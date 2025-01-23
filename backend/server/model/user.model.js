import mongoose, { Schema } from "mongoose";

const userSchema=new Schema({
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:String
},{timestamps:true})
const userModel=mongoose.model("user",userSchema)
export default userModel;