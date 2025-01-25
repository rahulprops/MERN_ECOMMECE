import mongoose, { Schema } from "mongoose";

const CartSchema=new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    items:[
        {
            productId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"product",
                required:true,
            },
            quantity:{
                type:Number,
                required:true,
                min:1,
            }
        }
    ]
},{timestamps:true})
const cartModel=mongoose.model("cart",CartSchema)
export default cartModel;