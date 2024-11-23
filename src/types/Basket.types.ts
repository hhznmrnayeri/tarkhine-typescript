import { OrderItemType } from "./OrderItem.types";
export type BasketType = {
  list: OrderItemType[];
  address: string;
  caption: string;
  offPrices: number;
  sumPrices: number;
  useCode: boolean;
  statePay: string;
  sendState: string;
  shippingPrice: number;
};
