import { ICartItem, ICartUpd } from '@/interfaces/cart-interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({
  reducerPath: 'cartAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skillfactory-task.detmir.team/',
    credentials: 'include',
  }),
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    updateCart: builder.mutation<ICartItem[], ICartUpd>({
      query: (good) => ({
        url: 'cart/update',
        method: 'POST',
        body: good,
      }),
      invalidatesTags: ['Cart'],
    }),
    fetchCartState: builder.query<ICartItem[] | undefined, string>({
      query: () => ({
        url: 'cart',
      }),
      // eslint-disable-next-line no-unused-vars
      providesTags: (result) => ['Cart'],
    }),
    //
    submitCart: builder.mutation<ICartItem[], ICartItem[]>({
      query: () => ({
        url: 'cart/submit',
        method: 'POST',
      }),
    }),
    //
  }),
});

export const { useFetchCartStateQuery, useUpdateCartMutation, useSubmitCartMutation } = cartApi;
