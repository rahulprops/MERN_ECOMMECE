import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:null,
    isAuthenticated:false
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
                userLogging:(state,action)=>{
                    state.user=action.payload,
                    state.isAuthenticated=true
                },
                userLogout:(state)=>{
                     state.user=null,
                     state.isAuthenticated=false
                }
    }
})
export const {userLogging,userLogout}=authSlice.actions;
export default authSlice.reducer;