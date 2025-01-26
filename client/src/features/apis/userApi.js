import apiSlice from "./apiSlice";
import { userLogging, userLogout } from "../auth-user/auth";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (inputData) => ({
        url: "/user/login", // Replace with your actual endpoint
        method: "POST",
        body: inputData,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(userLogging(data)); 
        } catch (error) {
          console.error("Error logging in user:", error);
          dispatch(userLogout()); 
        }
      },
    }),
  }),
});

export const { useLoginUserMutation } = userApi;
export default userApi;
