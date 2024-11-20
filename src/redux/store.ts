import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./foods/foodSlice";
const store = configureStore({
  reducer: {
    foods: foodReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
