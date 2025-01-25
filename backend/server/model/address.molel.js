import mongoose, { Schema } from "mongoose";

const addressSchema=new Schema({
    userId:String,
    address:String,
    city:String,
    pincode:String,
    phone:String,
    note:String
},{
    timestamps:true
})
const addressModel=mongoose.model("address",addressSchema)
export default addressModel;