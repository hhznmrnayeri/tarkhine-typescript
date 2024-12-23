import ConvertToPersian from "../../hooks/ConvertToPersian";
import { OrderItemType } from "../../types/OrderItem.types";
export default function FoodItem(props: OrderItemType) {
  return (
    <div className="border border-gray-400 rounded-lg flex flex-col h-24 md:h-32 relative overflow-hidden  flex-grow">
      {/* img */}
      <img src={props.img[0]} alt="food" className="w-full h-12 md:h-20" />
      {/* food content */}
      <div className="p-1 text-2xs lg:px-4 flex-center flex-col ">
        {/* food name */}
        <span className="flex-shrink-0 text-nowrap">{props.title}</span>
        {/* food price */}
        <span> {ConvertToPersian({ num: props.priceValue })} تومان</span>
      </div>
      {/* count food */}
      <span className="absolute text-primary text-2xs bg-white px-0.5 rounded-sm left-1 top-0 bottom-0 my-auto h-3 md:text-xs md:rounded md:px-1">
        {ConvertToPersian({ num: props.count })}×
      </span>
    </div>
  );
}
