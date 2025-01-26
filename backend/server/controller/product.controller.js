import mongoose from "mongoose"
import errorHandler from "../middleware/err_logs/errorHandler.js"
import productModel from "../model/product.model.js"
import multer from 'multer'
import path from 'path'
import fs from 'fs'
//! product multer image upload
const imagePath=path.join("public/product")
const store=multer.diskStorage({
    destination:(req,file,cb)=>{
        return cb(null, imagePath)
    },
    filename:(req,file,cb)=>{
         cb(null , file.originalname)
    }
})
export const ProductMulter=multer({storage:store})
// ! add product
export const addProduct=async (req,res)=>{
    const {title,description,category,brand,price,salePrice,totalStock}=req.body
    const image=req.file;
    if(!image){
        return errorHandler(res,400,"please selete image")
    }
    // console.log(image)
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
            image:image.filename
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
    const image=req.file;
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
       if (image) {
        const oldImagePath = path.join("public/product", isProductExist.image);
        console.log("Old Image Path:", oldImagePath);
  
        // Delete the old image if it exists
        
          fs.unlinkSync(oldImagePath);
          console.log("Old image deleted successfully.");
        
    }
       // update product
       req.body.image = image.filename; 
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
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Validate if the ID is a valid MongoDB ObjectId
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return errorHandler(res, 400, "Please enter a valid ID");
      }
  
      // Attempt to find and delete the product
      const deletePro = await productModel.findByIdAndDelete(id);
      if (deletePro) {
        // If a product image exists, delete the corresponding file
        if (deletePro.image) {
          const imagePath = path.join("public/product", deletePro.image);
        //   console.log("Image Path to Delete:", imagePath);
             fs.unlinkSync(imagePath)
        }
  
        return res.status(200).json({
          success: true,
          message: "Product deleted successfully.",
          data: deletePro,
        });
      } else {
        return errorHandler(res, 400, "Product deletion failed.");
      }
    } catch (err) {
      return errorHandler(res, 500, `Server error: ${err.message}`);
    }
  };
//! find product
export const findProduct=async (req,res)=>{
    try{
        const find=await productModel.find({})
        if(find){
            
            return errorHandler(res,200,"done",find)
        }else{
            return errorHandler(res,400,"failed product find")
        }
    }catch(err){
        return errorHandler(res,500,`server error ${err.message}`)
    }
}