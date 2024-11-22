import { useState, useEffect } from "react";
import HeartFavoriteIcon from "../../assets/svg/HeartFavoriteIcon";
import HeartIcon from "../../assets/svg/HeartIcon";
import StarIcon from "../../assets/svg/StarIcon";
import ConvertToPersian from "../../hooks/ConvertToPersian";
import { addToFavorite, removeFavorite } from "../../redux/foods/foodSlice";
import { useAppDispatch } from "../../redux/hooks";
import { FoodTypes } from "../../types/Food.types";
export default function ResultItem(props: FoodTypes) {
  const dispatch = useAppDispatch();
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  const handleAddFavorite = () => {
    setIsFavorite(true);
    dispatch(addToFavorite(props.id));
  };
  const handleRemoveFavorite = () => {
    setIsFavorite(false);
    dispatch(removeFavorite(props.id));
  };
  useEffect(() => {
    setIsFavorite(props.isFavorite);
  }, [props.isFavorite]);
  return (
    <div className="col-span-1 sm:col-span-6 xl:col-span-3 flex flex-col rounded md:rounded-lg border border-gray-400 overflow-hidden">
      {/* result img */}
      <img
        src={`../${props.img[0]}`}
        alt="result"
        className="result__img object-cover w-full h-72"
      />
      {/* result content */}
      <div className="bg-white p-4 flex-center flex-col gap-4">
        {/* result name */}
        <h2 className="result__name text-xs md:text-xl font-estedadSemiBold">
          {props.title}
        </h2>
        {/* result content wrapper */}
        <div className="flex items-start justify-between w-full">
          {/* right box */}
          <div className="flex flex-col items-start gap-1 text-2xs text-gray-500">
            {/* top box */}
            <div className="flex items-center gap-1">
              {/* add favorite */}
              {isFavorite ? (
                <button
                  className="add__favorite"
                  onClick={handleRemoveFavorite}
                >
                  <HeartFavoriteIcon size="w-4 h-4" />
                </button>
              ) : (
                <button
                  className="flex items-center gap-1"
                  onClick={handleAddFavorite}
                >
                  <HeartIcon size="w-4 h-4" />
                  <span>افزودن به علاقمندی‌ها</span>
                </button>
              )}
              {/* text favorite */}
            </div>
            {/* bottom box */}
            <div className="flex items-center gap-1">
              {/* star */}
              <StarIcon size="w-4 h-4" />
              {/* rate number */}
              <span className="rate__number text-2xs md:text-sm text-gray-800 font-estedadMedium">
                {props.star}
              </span>
              {/* points */}
              <span>
                (<span className="points">{props.comment}</span> امتیاز)
              </span>
            </div>
          </div>
          {/* left box */}
          <div className="flex flex-col items-end gap-1">
            {/* top box */}
            <div className="flex items-center gap-2 text-2xs">
              {props.offerPrice && (
                <span className="main__price text-gray-500 line-through">
                  {ConvertToPersian({ num: props.offerPrice })}
                </span>
              )}
              {/* count offer */}
              <span
                className={`${
                  props.offerCount
                    ? "count__offer text-error px-1.5 rounded-lg bg-error-200"
                    : ""
                }`}
              >
                {props.offerCount
                  ? `% ${ConvertToPersian({ num: props.offerCount })}`
                  : ""}
              </span>
            </div>
            {/* offer price */}
            <span className="text-2xs md:text-base">
              <span className="offer__price">
                {ConvertToPersian({ num: props.priceValue })}
              </span>
              تومان
            </span>
          </div>
        </div>
        {/* btn result */}
        <button className="text-2xs md:text-base md:font-estedadMedium text-white px-4 py-2 w-full bg-primary flex-center rounded">
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}
