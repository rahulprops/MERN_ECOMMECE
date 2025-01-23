import express from 'express'
import 'dotenv/config.js'
import dbConnect from './server/database/db.js';
import userRouter from './server/routes/user.route.js';
import bodyParser from 'body-parser';
const app=express()
const port=process.env.PORT || 3000;
//! middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
//! api
app.use("/api/user",userRouter)
//! server start
app.listen(port,()=>{
    console.log(`server is runing on port http://localhost:${port}`)
    dbConnect()
})