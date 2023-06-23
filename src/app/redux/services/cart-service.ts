import { ICartItem, ICartUpd } from '@/interfaces/cart-interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({
  reducerPath: 'cartAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skillfactory-task.detmir.team/',
  }),
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    updateCart: builder.mutation<ICartItem[], ICartUpd>({
      query: (good) => ({
        url: 'cart/update',
        method: 'POST',
        body: good,
        // mode: 'no-cors',
      }),
      invalidatesTags: ['Cart'],
    }),
    fetchCartState: builder.query<ICartItem[], string>({
      query: () => ({
        url: 'cart',
      }),
      // eslint-disable-next-line no-unused-vars
      providesTags: (result) => ['Cart'],
    }),
  }),
});

export const { useFetchCartStateQuery, useUpdateCartMutation } = cartApi;
