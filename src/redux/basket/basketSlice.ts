import { createSlice } from "@reduxjs/toolkit";
import { BasketType } from "../../types/Basket.types";
const initialState: BasketType = {
  list: [],
  address: "",
  caption: "",
  offPrices: 0,
  sumPrices: 0,
  useCode: true,
  statePay: "online",
  sendState: "courier",
  shippingPrice: 30000,
};
const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItemToBasket(state, action) {
      const basketItem = state.list.find(
        (item) => item.id === action.payload.id
      );
      if (basketItem) {
        basketItem.count++;
      } else {
        const newItem = {
          ...action.payload,
          count: 1,
        };
        state.list.push(newItem);
      }
    },
    removeItemFromBasket(state, action) {
      state.list = state.list.filter((item) => item.id !== action.payload.id);
    },
    minusCountItem(state, action) {
      const requestItem = state.list.find(
        (item) => item.id === action.payload.id
      );
      if (requestItem) {
        requestItem.count--;
      }
    },
    clearBasket(state) {
      state.list = [];
    },
  },
});
export const {
  addItemToBasket,
  removeItemFromBasket,
  minusCountItem,
  clearBasket,
} = basketSlice.actions;
export default basketSlice.reducer;

export const getTotalBasketQuantity = (state: { basket: BasketType }) => {
  return state.basket.list.reduce((sum: number, item) => sum + item.count, 0);
};
export const getTotalBasketPrice = (state: { basket: BasketType }) => {
  const sumValue = state.basket.list.reduce(
    (sum: number, item) => sum + item.count * Number(item.priceValue),
    0
  );
  return sumValue + state.basket.shippingPrice;
};
export const getOfferBasketPrice = (state: { basket: BasketType }) => {
  const offerValue = state.basket.list.reduce((sum: number, item) => {
    if (item.offerPrice) {
      return (
        sum + item.count * (Number(item.offerPrice) - Number(item.priceValue))
      );
    }
    return sum;
  }, 0);
  return offerValue;
};
