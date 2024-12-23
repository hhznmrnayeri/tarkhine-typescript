import ConvertToPersian from "../../hooks/ConvertToPersian";
import StarIcon from "../../assets/svg/StarIcon";
import StarEmptyIcon from "../../assets/svg/StarEmptyIcon";
import HeartFavoriteIcon from "../../assets/svg/HeartFavoriteIcon";
import { FoodTypes } from "../../types/Food.types";
import { useAppDispatch } from "../../redux/hooks";
import { removeFavorite } from "../../redux/foods/foodSlice";
import { useEffect, useState } from "react";
import { addItemToBasket } from "../../redux/basket/basketSlice";
type FavoriteItemProps = FoodTypes & { onRemoveFavorite: (id: string) => void };
export default function FavoriteItem(props: FavoriteItemProps) {
  const dispatch = useAppDispatch();
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  const handleRemoveFavorite = () => {
    setIsFavorite(false);
    dispatch(removeFavorite(props.id));
    props.onRemoveFavorite(props.id);
  };
  useEffect(() => {
    setIsFavorite(props.isFavorite);
  }, [props.isFavorite]);
  return (
    <div className="col-span-6 md:col-span-12 lg:col-span-6 xl:col-span-4 flex flex-col overflow-hidden rounded md:rounded-lg border border-gray-400">
      {/* img */}
      <img
        src={props.img[0]}
        alt="food"
        className="w-full rounded md:rounded-lg h-72"
      />
      {/* favorite content */}
      <div className="p-2 md:p-4">
        {/* top wrapper */}
        <div className="flex items-center justify-between">
          {/* favorite title */}
          <h4 className="text-xs md:text-xl md:font-estedadSemiBold">
            {props.title}
          </h4>
          {/* heart btn */}
          {isFavorite ? (
            <button onClick={handleRemoveFavorite}>
              <HeartFavoriteIcon size="w-4 h-4 md:w-6 md:h-6" />
            </button>
          ) : null}
        </div>
        {/* center wrapper */}
        <div className="flex items-center justify-between mt-1 md:mt-2">
          <div className="hidden md:flex items-center text-[#F4B740] child:w-4 child:h-4 child:md:w-6 child:md:h-6">
            {Array(5 - props.star)
              .fill(0)
              .map((_i, index) => (
                <StarEmptyIcon key={index + 1} />
              ))}
            {Array(props.star)
              .fill(0)
              .map((_i, index) => (
                <StarIcon key={index + 1} />
              ))}
          </div>
          {/* mobile star */}
          <div className="flex md:hidden items-center gap-0.5 text-xs">
            {/* star */}
            <StarIcon size="w-4 h-4 md:w-6 md:h-6" />
            {/* star count */}
            <span>{ConvertToPersian({ num: props.star })}</span>
          </div>
          {/* price wrapper */}
          <span className="text-xs md:text-base">
            {ConvertToPersian({ num: props.priceValue })} تومان
          </span>
        </div>
        {/* btn */}
        <button
          className="text-2xs text-white bg-primary md:font-estedadMedium md:text-base rounded p-2 md:px-4 w-full h-10 mt-2 md:mt-6"
          onClick={() => dispatch(addItemToBasket(props))}
        >
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}
