import { createSlice } from '@reduxjs/toolkit';

type BeforeOrderCounterState = {
  quantity: number;
  }
const initialState = {
  quantity: 0,
};

export const beforeOrderCounter = createSlice({
  name: 'beforeOrderCounter',
  initialState,
  reducers: {
    increment: (state: BeforeOrderCounterState) => {
      // eslint-disable-next-line no-param-reassign
      state.quantity += 1;
    },
    decrement: (state: BeforeOrderCounterState) => {
      if (state.quantity >= 1) {
        // eslint-disable-next-line no-param-reassign
        state.quantity -= 1;
      }
    },
    nullify: (state: BeforeOrderCounterState) => {
      // eslint-disable-next-line no-param-reassign
      state.quantity = 0;
    },
  },
});
export const {
  increment,
  decrement,
  nullify,
} = beforeOrderCounter.actions;
export default beforeOrderCounter.reducer;
