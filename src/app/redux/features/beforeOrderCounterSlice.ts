import { createSlice } from '@reduxjs/toolkit';

type BeforeOrderCounterState = {
  quantity: number;
  }
const initialState = {
  quantity: 1,
};

const beforeOrderCounter = createSlice({
  name: 'beforeOrderCounter',
  initialState,
  reducers: {
    increment: (state: BeforeOrderCounterState) => {
      // eslint-disable-next-line no-param-reassign
      state.quantity += 1;
    },
    decrement: (state: BeforeOrderCounterState) => {
      // eslint-disable-next-line no-param-reassign
      state.quantity -= 1;
    },
  },
});
export default beforeOrderCounter.reducer;
export const {
  increment,
  decrement,
} = beforeOrderCounter.actions;
