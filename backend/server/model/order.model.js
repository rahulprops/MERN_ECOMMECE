import mongoose, { Schema } from "mongoose";

const OrderSchema=new mongoose.Schema({
    userId:String,
    cartItems:[
        {
            productId:String,
            title:String,
            Image:String,
            price:String,
            salePrice:String
        }
    ],
    addressInfo:{
        addressId:String,
        address:String,
        city:String,
        pincode:String,
        phone:String,
        notes:String,
    },
    orderStatus:String,
    paymentMethod:String,
    paymentStauts:String,
    totalAmonut:Number,
    orderData:Date,
},{timestamps:true})

 const orderModel=mongoose.model("order",OrderSchema)
 export default orderModel;