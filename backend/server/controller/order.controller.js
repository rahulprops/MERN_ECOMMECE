import errorHandler from "../middleware/err_logs/errorHandler.js";
import orderModel from "../model/order.model.js";

export const createOrder = async (req, res) => {
    try {
        const { 
            userId, 
            cartItems, 
            addressInfo, 
            orderStatus = "Pending", 
            paymentMethod, 
            paymentStatus = "Pending", 
            totalAmount, 
            orderDate = new Date() 
        } = req.body;

        // Validate required fields
        if (!userId || !cartItems || cartItems.length === 0 || !addressInfo) {
            return errorHandler(res, 400, "Missing required fields");
        }

        // Create new order
        const newOrder = new orderModel({
            userId,
            cartItems,
            addressInfo,
            orderStatus,
            paymentMethod,
            paymentStatus,
            totalAmount,
            orderDate,
        });

        // Save order to the database
        const savedOrder = await newOrder.save();
        return errorHandler(res,201,"order sucessful created",savedOrder)

    } catch (err) {
        return errorHandler(res, 500, `Server error: ${err.message}`);
    }
};

//! getAllOrderByUser 
export const getAllOrderByUser=async (req,res)=>{
    try {
        const {userId}=req.params;
        const order = await orderModel.find({userId})
        
        if(!order.length){
            return errorHandler(res,400,"no orders found ")
        }
        return errorHandler(res,200,"get sucess",order)

    } catch (err) {
        return errorHandler(res,500,`server error ${err.message}`)
    }
}
export const getOrderDetails=async (req,res)=>{
    try {
        const {id}=req.params;
        const order =await orderModel.findById(id)
        if(!order){
            return errorHandler(res,400,"order details not found")
        }
        return errorHandler(res,200,"get details sucess",order)
    } catch (err) {
        return errorHandler(res,500,`server error ${err.message}`)
    }
}