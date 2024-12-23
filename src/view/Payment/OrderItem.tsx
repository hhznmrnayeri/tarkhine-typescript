import StarEmptyIcon from "../../assets/svg/StarEmptyIcon";
import StarIcon from "../../assets/svg/StarIcon";
import TrashIcon from "../../assets/svg/TrashIcon";
import ConvertToPersian from "../../hooks/ConvertToPersian";
import {
  addItemToBasket,
  minusCountItem,
  removeItemFromBasket,
} from "../../redux/basket/basketSlice";
import { useAppDispatch } from "../../redux/hooks";
import { OrderItemType } from "../../types/OrderItem.types";

export default function OrderItem(props: OrderItemType) {
  const dispatch = useAppDispatch();
  return (
    <div
      dir="rtl"
      className="flex items-center md:border md:border-gray-400 rounded"
    >
      {/* food img */}
      <img
        src={props.img[0]}
        alt="food"
        className="hidden md:block w-44 h-full"
      />
      {/* food content */}
      <div className="p-2 md:py-4 md:px-4 w-full h-full overflow-hidden bg-gray-100 md:bg-white flex items-start justify-between flex-col md:flex-row xl:gap-5">
        {/* right box */}
        <div className="flex md:flex-col items-start justify-between gap-1 w-full h-full flex-grow ">
          {/* food name */}
          <h4 className="text-xs md:text-2xl md:font-estedadSemiBold">
            {props.title}
          </h4>
          {/* food resepi */}
          <p className="md:text-sm hidden md:block">{props.resepi}</p>
          {/* bottom wrapper */}
          <div className="flex items-center gap-6">
            {/* star wrapper */}
            <div className=" items-center hidden md:flex">
              {Array(5 - props.star)
                .fill(0)
                .map((_i, index) => (
                  <StarEmptyIcon key={index + 1} size="w-4 h-4 md:w-6 md:h-6" />
                ))}
              {Array(props.star)
                .fill(0)
                .map((_i, index) => (
                  <StarIcon key={index + 1} size="w-4 h-4 md:w-6 md:h-6" />
                ))}
            </div>
            {/* count wrapper */}
            <div className="flex items-center gap-2 px-1 bg-tint-100 rounded text-primary md:text-xl">
              {/* plus btn */}
              <button
                className="font-estedadBold"
                onClick={() => dispatch(addItemToBasket(props))}
              >
                +
              </button>
              {/* count food */}
              <span className="count__food text-sm">
                {ConvertToPersian({ num: props.count })}
              </span>
              {/* minus btn */}
              {props.count === 1 ? (
                <button
                  className="minus__btn"
                  onClick={() => dispatch(removeItemFromBasket(props))}
                >
                  <TrashIcon size="w-4 h-4" />
                </button>
              ) : (
                <button
                  className="font-estedadBold"
                  onClick={() => dispatch(minusCountItem(props))}
                >
                  -
                </button>
              )}
            </div>
          </div>
        </div>
        {/* left box */}
        <div className="flex flex-col items-end gap-8 h-full justify-between">
          {/* trash btn */}
          <button
            className="trash__btn hidden md:block"
            onClick={() => dispatch(removeItemFromBasket(props))}
          >
            <TrashIcon size="w-6 h-6" />
          </button>
          {/* price content */}
          <div className="flex flex-col gap-1">
            {/* offer wrapper */}
            <div className=" items-center gap-2 justify-end hidden md:flex">
              {/* main price */}
              {props.offerPrice && (
                <h5 className="line-through text-gray-500">
                  {ConvertToPersian({ num: props.offerPrice })}
                </h5>
              )}
              {/* offer count */}
              {props.offerCount ? (
                <h6 className="text-error text-2xs bg-error-200 rounded-lg px-1.5">
                  {ConvertToPersian({ num: props.offerCount })} %
                </h6>
              ) : null}
            </div>
            {/* offer price */}
            <h5 className="text-gray-700 text-2xs md:text-gray-800 md:text-lg">
              <span className="md:text-2xl">
                {ConvertToPersian({ num: props.priceValue })}
              </span>
              تومان
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
