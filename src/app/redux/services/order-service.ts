import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPaginationParams } from '@/interfaces/pagination-params-interface';
import { IOrder } from '@/interfaces/order-interface';

export const orderApi = createApi({
  reducerPath: 'order-api',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skillfactory-task.detmir.team/',
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getOrders: builder.query<IOrder, IPaginationParams>({
      query: (params) => ({
        url: 'orders',
        params,
      }),
      // serializeQueryArgs: ({ endpointName }) => endpointName,
      // merge(currentCacheData, responseData) {
      //   currentCacheData.data.push(...responseData.data);
      // },
      // forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg,
      // Закомментированный код выше для infinityScroll
    }),
  }),
});
export const { useGetOrdersQuery } = orderApi;
