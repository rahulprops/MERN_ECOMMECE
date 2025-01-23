import express from 'express'
import 'dotenv/config.js'
import dbConnect from './server/database/db.js';
const app=express()
const port=process.env.PORT || 3000;
//! server start
app.listen(port,()=>{
    console.log(`server is runing on port http://localhost:${port}`)
    dbConnect()
})