import { configureStore } from "@reduxjs/toolkit";
import dogReducer from "./dogSlice"; 

export const store = configureStore({
  reducer: {
    dogs: dogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
