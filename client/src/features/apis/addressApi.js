import apiSlice from "./apiSlice";

const addressApi=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        createAddress:builder.mutation({
            query:(inputData)=>({
                url:"/address/create",
                method:"POST",
                body:inputData
            }),
            invalidatesTags:["fetch_address"]
        }),
        fetchAddress:builder.query({
            query:()=>({
                url:"/address/get",
                method:"GET"
            }),
            transformResponse:(data)=>{
                return data.data
            },
            providesTags:["fetch_address"]
        }),
        deleteAddress:builder.mutation({
            query:(productId)=>({
                url:`/address/delete/${productId}`,
                method:"DELETE"
            }),
            invalidatesTags:["fetch_address"]
        }),
        updateAddress:builder.mutation({
            query:({addressId , addressForm})=>({
                url:`/address/update/${addressId}`,
                method:"PUT",
                body:addressForm
            })
        })
    })
})
export const {useCreateAddressMutation,useFetchAddressQuery,useDeleteAddressMutation,useUpdateAddressMutation}=addressApi
export default addressApi;