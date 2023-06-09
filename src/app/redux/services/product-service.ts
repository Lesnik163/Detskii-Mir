import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct, IProductHttpResponse } from '@/interfaces/product-interface';
import { IPaginationParams } from '@/interfaces/pagination-params-interface';

export const productApi = createApi({
  reducerPath: 'product-api',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skillfactory-task.detmir.team/',
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProductHttpResponse, IPaginationParams>({
      query: (params) => ({
        url: 'products',
        params,
      }),
      // serializeQueryArgs: ({ endpointName }) => endpointName,
      // merge(currentCacheData, responseData) {
      //   currentCacheData.data.push(...responseData.data);
      // },
      // forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg,
      // Закомментированный код выше для infinityScroll
    }),
    getProductById: builder.query<IProduct, string>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
