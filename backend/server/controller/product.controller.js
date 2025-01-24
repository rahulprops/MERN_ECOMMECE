import mongoose from "mongoose"
import errorHandler from "../middleware/err_logs/errorHandler.js"
import productModel from "../model/product.model.js"
// ! add product
export const addProduct=async (req,res)=>{
    const {title,description,category,brand,price,salePrice,totalStock}=req.body
    if(!title || !description || !category || !brand || !price || !salePrice || !totalStock){
        return errorHandler(res,400,"all feilds requied")
    }
    try{
        // create product
        const product = new productModel({
            title,
            description,
            category,
            brand,
            price,
            salePrice,
            totalStock,
        })
        if(product){
            await product.save()
            return errorHandler(res,201,"produce created sucessful",product)
        }else{
            return errorHandler(res,400,"please try again")
        }
    }catch(err){
        return errorHandler(res,500,`server error ${err.message}`)
    }
}
//! update product
export const updateProduct=async (req,res)=>{
    const {id}=req.params;
    if(!id){
        return errorHandler(res,400,"please enter id")
    }
    // validate id valid or not
    if(!mongoose.Types.ObjectId.isValid(id)){
        return errorHandler(res,400,"please enter valid id")
    }
    try{
       // check this id product exist or not
       const isProductExist=await productModel.findById(id)
       if(!isProductExist){
        return errorHandler(res,404,"product not found :id")
       }
       // update product
       const update=await productModel.findByIdAndUpdate(id,req.body,{new:true})
       if(update){
        return errorHandler(res,200,"update sucess",update)
       }else{
        return errorHandler(res,400,"update failed")
       }
    }catch(err){
        return errorHandler(res,500,`server error ${err.message}`)
    }
}
//! delete product
export const deleteProduct=async (req,res)=>{
    const {id}=req.params;

    try{
        // check id valid or not
        if(!mongoose.Types.ObjectId.isValid(id)){
            return errorHandler(res,400,"please enter valid id")
        }
       // delete product
       const deletePro=await productModel.findByIdAndDelete(id)
       if(deletePro){
        return errorHandler(res,200,"delete product sucees")
       }else{
        return errorHandler(res,400,"delete product failed")
       }
    }catch(err){
        return errorHandler(res,500,`server error ${err.message}`)
    }
}