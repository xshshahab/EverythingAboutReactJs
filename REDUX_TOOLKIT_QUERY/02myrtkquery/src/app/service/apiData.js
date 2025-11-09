import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productAPI = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/products`,
    }),
  }),
});

export const { useGetAllProductsQuery } = productAPI;
