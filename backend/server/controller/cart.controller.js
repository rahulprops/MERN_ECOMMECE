import mongoose from "mongoose";
import errorHandler from "../middleware/err_logs/errorHandler.js"
import productModel from "../model/product.model.js";
import cartModel from "../model/cart.model.js";

export const addtoCart=async(req,res)=>{
    const {userId,productId,quantity}=req.body;

    if(!userId || !productId || !quantity){
        return errorHandler(res,400,"invalid data provided")
    }
   // check id valid or not
   if(!mongoose.Types.ObjectId.isValid(userId)){
    return errorHandler(res,400,"please enter valid userId")
   }
   if(!mongoose.Types.ObjectId.isValid(productId)){
    return errorHandler(res,400,"please enter valid productId ")
   }
  try{
    const product=await productModel.findById(productId)
     
     if(!product){
        return errorHandler(res,404,"product not found")
     }
     let cart=await cartModel.findOne({userId:userId})

     if(!cart){
        cart=new cartModel({userId,items:[]})
     }
     const findCurrentProductIndex=cart.items.findIndex((item)=>item.productId.toString()===productId);
//   console.log(findCurrentProductIndex)
     if(findCurrentProductIndex === -1){
        cart.items.push({productId,quantity})
     }else{
        cart.items[findCurrentProductIndex].quantity += quantity;
        // console.log(cart.items[findCurrentProductIndex].quantity)
     }
     await cart.save();
     return errorHandler(res,201,"addToCart sucess",cart)
    // console.log("addtocart")
  }catch(err){
    return errorHandler(res,500,`server error ${err.message}`)
  }
}

//! fetch cart items
export const fetchCartItems=async (req,res)=>{
    try{
        console.log("fetchcart")
    }catch(err){
        return errorHandler(res,500,`server error ${err.message}`)
    }
}

//! update cart items
export const updateCartItems=async (req,res)=>{
    try{
        console.log("update cart itmes ")
    }catch(err){
        return errorHandler(res,500,`server error ${err.message}`)
    }
}

//! delete cart items 
export const deleteCartItems=async (req,res)=>{
    try{
        console.log("delete cart items")
    }catch(err){
        return errorHandler(res,500,`server error ${err.message}`)
    }
}