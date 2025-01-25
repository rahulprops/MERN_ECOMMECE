import errorHandler from "../middleware/err_logs/errorHandler.js"
import addressModel from "../model/address.molel.js";
//! create address
export const createAddress=async (req,res)=>{
    const {userId,address,city,pincode,phone,notes}=req.body;
    if(!userId || !address ||!city || !pincode || !phone || !notes){
        return errorHandler(res,400,"all feild requied")
    }
    // create address
    const addressNew=new addressModel({
        userId,address,city,pincode,phone,notes
    })
    if(addressNew){
        await addressNew.save()
        return errorHandler(res,201,"address create sucessful",addressNew)
    }else{
        return errorHandler(res,400,"create address failed")
    }
    try{}catch(err){
        return errorHandler(res,500,`server error ${err.message}`)
    }
}
//! fetch address
export const fetchAddress=async (req,res)=>{
    try{
        const {userId}=req.params;
        const addresss= await addressModel.find({userId})
        if(!addresss){
            return errorHandler(res,404,"address not found")
        }
        return errorHandler(res,200,"address get sucessful",addresss)
    }catch(err){
        return errorHandler(res,500,`server error ${err.message}`)
    }
}