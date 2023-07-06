import { IOrder } from '@/interfaces/order-interface';
import { createSlice } from '@reduxjs/toolkit';

type OrderState = {
    orderList: IOrder[] | null,
  }
const initialState = {
  // cartList: cartsMock, //Для моковых данных
  orderList: [],
} as OrderState;
export const order = createSlice({
  name: 'orderer',
  initialState,
  reducers: {
    pushOrder: (state: OrderState, action) => {
      state.orderList?.push(action.payload);
    },
  },
});
export const {
  pushOrder,
} = order.actions;
export default order.reducer;
