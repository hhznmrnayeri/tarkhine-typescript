import { OrderItemType } from "./OrderItem.types";
export type BasketType = {
  list: OrderItemType[];
  caption: string;
  useCode: boolean;
  statePay: string;
  sendState: string;
  shippingPrice: number;
};
