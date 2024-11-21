import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./foods/menuSlice";
import foodReducer from "./foods/foodSlice";
const store = configureStore({
  reducer: {
    menu: menuReducer,
    foods: foodReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
