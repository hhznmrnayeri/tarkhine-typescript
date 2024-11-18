import { OrderItemType } from "./OrderItem.types";
export type OrderResultType = {
  id: string;
  list: OrderItemType[];
  address: string;
  caption: string;
  offPrices: number;
  sumPrices: number;
  branchesId: string;
  isComplete: boolean;
  sendState: string;
  time: number;
};
