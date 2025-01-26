import mongoose from "mongoose";
import errorHandler from "../middleware/err_logs/errorHandler.js"
import productModel from "../model/product.model.js";
import cartModel from "../model/cart.model.js";

export const addtoCart=async(req,res)=>{
    const {productId,quantity}=req.body;
      const userId=req.userId;
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
     const userId=req.userId;
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
export const updateCartItems = async (req, res) => {
    const { productId, quantity } = req.body;
    const userId=req.userId;
    if (!userId || !productId || !quantity) {
      return errorHandler(res, 400, "invalid data provided");
    }
    try {
      const cart = await cartModel.findOne({ userId });
      if (!cart) {
        return errorHandler(res, 404, "cart not found");
      }
  
      const findCurrentProductIndex = cart.items.findIndex(item => item.productId.toString() === productId);
      if (findCurrentProductIndex === -1) {
        return errorHandler(res, 404, "cart item not found");
      }
  
      cart.items[findCurrentProductIndex].quantity += quantity;
      await cart.save();
  
      await cart.populate({
        path: "items.productId",
        select: "image title price salePrice"
      });
  
      const populateCartItems = cart.items.map((item) => ({
        productId: item.productId ? item.productId._id : null,
        image: item.productId.image ? item.productId.image : null,
        title: item.productId.title ? item.productId.title : null,
        price: item.productId.price ? item.productId.price : null,
        salePrice: item.productId.salePrice ? item.productId.salePrice : null,
        quantity: item.quantity,
      }));
  
      return res.status(200).json({ ...cart._doc, items: populateCartItems });
      
    } catch (err) {
      return errorHandler(res, 500, `server error ${err.message}`);
    }
  };
  

//! delete cart items 
export const deleteCartItems = async (req, res) => {
    try {
        const {productId } = req.params;
         const userId=req.userId;
        if (!userId || !productId) {
            return errorHandler(res, 400, "Invalid data provided");
        }

        const cart = await cartModel.findOne({ userId });
        if (!cart) {
            return errorHandler(res, 404, "Cart not found");
        }

        // Remove the item from the cart
        cart.items = cart.items.filter(item => item.productId.toString() !== productId);

        // If no items left in the cart, consider clearing the cart
        if (cart.items.length === 0) {
            cart.items = [];
        }

        await cart.save();

        // Populate the cart items with product details
        await cart.populate({
            path: "items.productId",
            select: "image title price salePrice"
        });

        // Format the response with populated cart items
        const populateCartItems = cart.items.map((item) => ({
            productId: item.productId ? item.productId._id : null,
            image: item.productId ? item.productId.image : null,
            title: item.productId ? item.productId.title : null,
            price: item.productId ? item.productId.price : null,
            salePrice: item.productId ? item.productId.salePrice : null,
            quantity: item.quantity,
        }));

        // Return the updated cart with the populated items
        return res.status(200).json({ ...cart._doc, items: populateCartItems });

    } catch (err) {
        return errorHandler(res, 500, `Server error: ${err.message}`);
    }
};
