import errorHandler from "../middleware/err_logs/errorHandler.js"
import productModel from "../model/product.model.js"

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