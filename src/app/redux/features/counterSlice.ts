import { ICartItem } from '@/interfaces/cart-interfaces';
// import cartsMock from '@/mockData/cartsMock'; //Моковый массив данных
import { createSlice } from '@reduxjs/toolkit';

type CounterState = {
  cartList: ICartItem[] | null,
  blocked: boolean
}

const initialState = {
  // cartList: cartsMock, //Для моковых данных
  cartList: [],
  blocked: false,
} as CounterState;
export const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      const newState = state.cartList;
      newState?.map((item) => {
        if (item.product.id === action.payload.product.id) {
          // eslint-disable-next-line no-param-reassign
          if (action.payload > 9) {
            // eslint-disable-next-line no-param-reassign
            item.quantity = 10;
          } else {
            // eslint-disable-next-line no-param-reassign
            item.quantity += 1;
          }
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
      state?.cartList?.map((card) => {
        if (card.product.id === action.payload.product.id) {
          // eslint-disable-next-line no-param-reassign
          card.quantity = action.payload.quantity;
        }
        return card;
      });
      if (state?.cartList?.find((card) => card.product.id
      === action.payload.product.id) === undefined) {
        state?.cartList?.push(action.payload);
      }
    },
    deleteCard: (state: CounterState, action) => {
      const newState = state?.cartList?.filter((item) => item.quantity !== 0) as ICartItem[];
      // eslint-disable-next-line no-param-reassign
      state.cartList = newState;
      localStorage.removeItem(`${action.payload}`);
    },
    deleteCartList: (state: CounterState) => {
      // eslint-disable-next-line no-param-reassign
      state.cartList = [];
      localStorage.clear();
    },
    blockOrder: (state: CounterState, action) => {
      // eslint-disable-next-line no-param-reassign
      state.blocked = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  pushCard,
  deleteCard,
  deleteCartList,
  blockOrder,
} = counter.actions;
export default counter.reducer;
