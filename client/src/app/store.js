import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../features/auth-user/auth'
import apiSlice from "../features/apis/apiSlice";
const store=configureStore({
    reducer:{
        auth:authSlice,
        [apiSlice.reducerPath]:apiSlice.reducer
    },
    middleware:(preMiddleware)=>preMiddleware().concat([apiSlice.middleware])
})
export default store;