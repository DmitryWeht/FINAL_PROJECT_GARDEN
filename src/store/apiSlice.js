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
    getCategoryById: builder.query({
      query: (id) => `/categories/${id}`,
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetAllCategoriesQuery,
  useGetProductByIdQuery,
  useGetCategoryByIdQuery,
} = appApi;
