import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Counter {
  value: number;
}

const initialState: Counter = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    addNumber(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    decrement(state) {
      state.value--;
    },
  },
});

export const { increment, decrement, addNumber } = counterSlice.actions;
export default counterSlice.reducer;
