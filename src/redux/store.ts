import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./foods/menuSlice";
import foodReducer from "./foods/foodSlice";
import basketSlice from "./basket/basketSlice";
import addressSlice from "./address/addressSlice";
const store = configureStore({
  reducer: {
    menu: menuReducer,
    foods: foodReducer,
    basket: basketSlice,
    address: addressSlice,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
