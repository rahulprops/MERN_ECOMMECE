import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const BASE_URL="http://localhost:9512/api"
const apiSlice=createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:BASE_URL,
        credentials:'include'
    }),
    endpoints:(builder)=>({}),
})
export default apiSlice;