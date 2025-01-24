import mongoose, { Schema } from "mongoose";

const productSchema=new Schema({
    title:String,
    description:String,
    image:String,
    category:String,
    brand:String,
    price:Number,
    salePrice:Number,
    totalStock:Number,
},{timestamps:true})
const productModel=mongoose.model("product",productSchema)
export default productModel;