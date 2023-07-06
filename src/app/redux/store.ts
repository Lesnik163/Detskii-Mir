import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { productApi } from './services/product-service';
import { cartApi } from './services/cart-service';
import counterReducer from './features/counterSlice';
import beforeOrderCounterReducer from './features/beforeOrderCounterSlice';
import orderReducer from './features/orderSlice';
import { orderApi } from './services/order-service';

export const store = configureStore({
  reducer: {
    counterReducer,
    beforeOrderCounterReducer,
    orderReducer,
    [productApi.reducerPath]: productApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({})
    .concat([productApi.middleware, cartApi.middleware, orderApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
