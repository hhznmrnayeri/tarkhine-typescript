import { createSlice } from "@reduxjs/toolkit";
import { BasketType } from "../../types/Basket.types";
const initialState: BasketType = {
  list: [],
  caption: "",
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
    setCourierDelivery(state) {
      state.sendState = "courier";
      state.shippingPrice = 30000;
    },
    setPersonDelivery(state) {
      state.sendState = "person";
      state.shippingPrice = 0;
    },
    setCaption(state, action) {
      state.caption = action.payload;
    },
    setOnlinePay(state) {
      state.statePay = "online";
    },
    setOfflinePay(state) {
      state.statePay = "offline";
    },
    checkOffCode(state) {
      state.useCode = false;
    },
    resetBasket() {
      return initialState;
    },
  },
});
export const {
  addItemToBasket,
  removeItemFromBasket,
  minusCountItem,
  clearBasket,
  setCourierDelivery,
  setPersonDelivery,
  setCaption,
  setOfflinePay,
  setOnlinePay,
  checkOffCode,
  resetBasket,
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
  if (state.basket.useCode) {
    return sumValue + state.basket.shippingPrice;
  } else {
    return sumValue + state.basket.shippingPrice - 60000;
  }
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
  if (state.basket.useCode) {
    return offerValue;
  } else {
    return offerValue + 60000;
  }
};
