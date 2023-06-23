import { ICartItem } from '@/interfaces/cart-interfaces';
// import cartsMock from '@/mockData/cartsMock'; //Моковый массив данных
import { createSlice } from '@reduxjs/toolkit';

const storageArr = Object.entries(localStorage);
const parseStorageArr = storageArr.map((item) => JSON.parse(item[1]));

const forCartListInitValue = parseStorageArr.length === 0 ? [] : parseStorageArr;

type CounterState = {
  cartList: ICartItem[] | null,
}

const initialState = {
  // cartList: cartsMock, //Для моковых данных
  cartList: forCartListInitValue,
} as CounterState;
export const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      const newState = state.cartList;
      newState?.map((item) => {
        if (item.product.id === action.payload) {
          // eslint-disable-next-line no-param-reassign
          item.quantity += 1;
        }
        return item;
      });
    },
    decrement: (state: CounterState, action) => {
      const newState = state.cartList;
      newState?.map((item) => {
        if (item.product.id === action.payload) {
          // eslint-disable-next-line no-param-reassign
          item.quantity -= 1;
        }
        return item;
      });
    },
    pushCard: (state: CounterState, action) => {
      state?.cartList?.push(action.payload);
    },
  },
});

export const {
  increment,
  decrement,
  pushCard,
} = counter.actions;
export default counter.reducer;
