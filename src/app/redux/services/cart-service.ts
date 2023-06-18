import { ICart, ICartItem, ICartUpd } from '@/interfaces/cart-interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({
  reducerPath: 'cartAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skillfactory-task.detmir.team/',
  }),
  endpoints: (builder) => ({
    updateCart: builder.mutation<ICartItem, ICartUpd>({
      query: (good) => ({
        url: 'cart/update',
        method: 'POST',
        body: good,
        mode: 'no-cors',
      }),
    }),
    fetchCartState: builder.query<ICart, string>({
      query: () => ({
        url: 'cart',
      }),
    }),
  }),
});

export const { useFetchCartStateQuery, useUpdateCartMutation } = cartApi;
