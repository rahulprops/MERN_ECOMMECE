import errorHandler from "../middleware/err_logs/errorHandler.js";
import addressModel from "../model/address.molel.js";
//! create address
export const createAddress = async (req, res) => {
  const { address, city, pincode, phone, notes } = req.body;
   const userId=req.userId;
  if (!userId || !address || !city || !pincode || !phone || !notes) {
    return errorHandler(res, 400, "all feild requied");
  }
  // create address
  const addressNew = new addressModel({
    userId,
    address,
    city,
    pincode,
    phone,
    notes,
  });
  if (addressNew) {
    await addressNew.save();
    return errorHandler(res, 201, "address create sucessful", addressNew);
  } else {
    return errorHandler(res, 400, "create address failed");
  }
  try {
  } catch (err) {
    return errorHandler(res, 500, `server error ${err.message}`);
  }
};
//! fetch address
export const fetchAddress = async (req, res) => {
  try {
    const userId=req.userId;
    const addresss = await addressModel.find({ userId });
    if (!addresss) {
      return errorHandler(res, 404, "address not found");
    }
    return errorHandler(res, 200, "address get sucessful", addresss);
  } catch (err) {
    return errorHandler(res, 500, `server error ${err.message}`);
  }
};
//! edit address
export const editAddress = async (req, res) => {
  const { addressId } = req.params;
  const userId=req.userId;
  const formData = req.body;
  if (!userId || !addressId) {
    return errorHandler(res, 400, "invaid data provided");
  }
  try {
    const address = await addressModel.findOneAndUpdate(
      { _id: addressId, userId },
      formData,
      { new: true }
    );
    if (!address) {
      return errorHandler(res, 404, "address not found");
    }
    return errorHandler(res, 200, "update sucessful", address);
  } catch (err) {
    return errorHandler(res, 500, `server error ${err.message}`);
  }
};
//! delete address
export const deleteAddress = async (req, res) => {
  const { addressId } = req.params;
  const userId=req.userId;
  if (!userId || !addressId) {
    return errorHandler(res, 400, "enter valid data");
  }
  try {
    const address = await addressModel.findOneAndDelete({
      _id: addressId,
      userId,
    });
    if(!address){
        return errorHandler(res,404,"address not found")
    }
    return errorHandler(res,200,"address delete sucssful",address)
  } catch (err) {
    return errorHandler(res, 500, `server error ${err.message}`);
  }
};
