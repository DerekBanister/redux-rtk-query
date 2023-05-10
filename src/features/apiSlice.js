import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    // The base URL for the API. Only required if not using fetchBaseQuery
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => 'products',
        }),
        getProduct: builder.query({
            query: (product) => `products/search?q=${product}`,
        }),
    }),
});

// creates a hook for all of the endpoints defined in the api object
// prefix with use, followed by the name of the endpoint because it's a hook
export const { useGetAllProductsQuery, useGetProductQuery } = productsApi;