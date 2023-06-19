import { ICartItem } from '@/interfaces/cart-interfaces';
import cartsMock from '@/mockData/cartsMock';
import { createSlice } from '@reduxjs/toolkit';

type CounterState = {
  cartList: ICartItem[]
}

const initialState = {
  cartList: cartsMock,
} as CounterState;

export const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      const newState = state.cartList;
      newState.map((item) => {
        if (item.product.id === action.payload) {
          // eslint-disable-next-line no-param-reassign
          item.quantity += 1;
        }
        return item;
      });
    },
    decrement: (state: CounterState, action) => {
      const newState = state.cartList;
      newState.map((item) => {
        if (item.product.id === action.payload) {
          // eslint-disable-next-line no-param-reassign
          item.quantity -= 1;
        }
        return item;
      });
    },
  },
});

export const {
  increment,
  decrement,
} = counter.actions;
export default counter.reducer;
