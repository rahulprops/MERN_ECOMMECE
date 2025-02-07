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
