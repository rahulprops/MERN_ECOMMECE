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
     const {userId}=req.params;
     if(!userId){
        return errorHandler(res,400,"user id manadatory")
     }
    try{
        const cart = await cartModel.findOne({userId}).populate({
            path:"items.productId",
            select:"image title price salePrice"
        })
        if(!cart){
            return errorHandler(res,404,"cart not found")
        }
        // console.log(cart)
        const validItem=cart.items.filter(productItems=>productItems.productId)
        // console.log(validItem)
        if(validItem.length <cart.items.length){
            cart.items=validItem;
            await cart.save()
        }
        const populateCartItems=validItem.map(item=>({
            productId:item.productId._id,
            image:item.productId.image,
            title:item.productId.title,
            price:item.productId.price,
            salePrice:item.productId.salePrice,
            quantity:item.quantity
            
        }))
        return errorHandler(res,200,{...cart._doc,items:populateCartItems})
        // console.log("fetchcart")
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