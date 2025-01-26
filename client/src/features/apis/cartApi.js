import apiSlice from "./apiSlice";

const cartApi=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        addToCart:builder.mutation({
             query:(inputData)=>({
                url:"/cart/add-cart",
                method:"POST",
                body:inputData
             }),
             invalidatesTags:["fetch_cart"]

        }),
        getCart:builder.query({
            query:()=>({
                url:"cart/get-cart",
                method:"GET"
            }),
            transformResponse:(data)=>{
                return data.message.items
            },
            providesTags:["fetch_cart"]
        }),
        updateCart:builder.mutation({
            query:(inputData)=>({
                url:"/cart/update",
                method:"PUT",
                body:inputData
            }),
            invalidatesTags:["fetch_cart"]
        }),
        deleteCart:builder.mutation({
            query:(productId)=>({
                url:`/cart/delete/${productId}`,
                method:"DELETE",
            
            }),
            invalidatesTags:["fetch_cart"]
        })
    })
})
export const { useAddToCartMutation,useGetCartQuery,useUpdateCartMutation,useDeleteCartMutation}=cartApi
export default cartApi;