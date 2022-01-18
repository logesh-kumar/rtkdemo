import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import dogsReducer from "../features/dogs/dogsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dogs: dogsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
