import express from "express";
import "dotenv/config.js";
import dbConnect from "./server/database/db.js";
import userRouter from "./server/routes/user.route.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import productRoute from "./server/routes/product.routes.js";
import cartRouter from "./server/routes/cart.route.js";
import addressRouter from "./server/routes/address.route.js";

const app = express();
const port = process.env.PORT || 3000;
//! middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//! api
app.use("/api/user", userRouter);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRouter);
app.use("/api/address",addressRouter)
//! server start
app.listen(port, () => {
  console.log(`server is runing on port http://localhost:${port}`);
  dbConnect();
});
