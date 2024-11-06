import { useState } from "react";
import OrderItem from "./OrderItem";
import { OrderItemType } from "../../types/OrderItem.types";
export default function Basket() {
  const [basketArray] = useState<OrderItemType[]>([]);
  return (
    <div
      dir="ltr"
      className="col-span-1 lg:col-span-7 h-44 lg:h-[554px] overflow-y-auto flex flex-col md:p-6 md:gap-4 md:border md:border-gray-400 md:rounded-lg overflow-hidden"
    >
      {basketArray.map((item) => (
        <OrderItem key={item.id} {...item} />
      ))}
    </div>
  );
}
