import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../../utils/baseURL.js";



export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
    endpoints: (builder) => ({
      login: builder.mutation({
        query: (credentials) => ({
          url: "/login",
          method: "POST",
          body: credentials,
        }),
      }),
      register: builder.mutation({
        query: (userData) => ({
          url: "/register",
          method: "POST",
          body: userData,
        }),
      }),
      logout: builder.mutation({
        query: () => ({
          url: "/logout",
          method: "POST",
        }),
      }),
      deleteUser: builder.mutation({
        query: (userId) => ({
          url: `/users/${userId}`,
          method: "DELETE",
        }),
      }),
      updateUserRole: builder.mutation({
        query: ({ userId, role }) => ({
          url: `/users/${userId}/role`,
          method: "PATCH",
          body: { role },
        }),
      }),
      getProfile: builder.query({
        query: () => ({
          url: "/profile",
          method: "GET",
        }),
      }),
    }),
  });
  
  export const { 
    useLoginMutation, 
    useRegisterMutation, 
    useLogoutMutation, 
    useDeleteUserMutation, 
    useUpdateUserRoleMutation, 
    useGetProfileQuery 
  } = authApi;
  