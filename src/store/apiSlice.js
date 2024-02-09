import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:3333" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products/all",
    }),
    getAllCategories: builder.query({
      query: () => "/categories/all"
    })
  }),
});


export const { useGetAllProductsQuery, useGetAllCategoriesQuery } = productApi;

