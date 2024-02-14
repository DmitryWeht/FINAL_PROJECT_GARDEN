import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const appApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:3333" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products/all",
    }),
    getAllCategories: builder.query({
      query: () => "/categories/all",
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
    getCategoryById: builder.query({
      query: (id) => `/categories/${id}`,
    }),
    addNewUser: builder.mutation({
      query: (user) => ({
        url: "/sale/send",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetAllCategoriesQuery,
  useGetProductByIdQuery,
  useGetCategoryByIdQuery,
  useAddNewUserMutation,
} = appApi;
