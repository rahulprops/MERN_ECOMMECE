import apiSlice from "./apiSlice";

const shopProduct = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchProduct: builder.query({
      query: () => ({
        url: "/product/get",
        method: "GET",
      }),
      transformResponse:(data)=>{
        return data.data
      },
    }),
  }),
});

export const { useFetchProductQuery } = shopProduct;
export default shopProduct;
