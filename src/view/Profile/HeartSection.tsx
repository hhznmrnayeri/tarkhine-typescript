import { useEffect, useState } from "react";
import Empty from "../../components/Empty";
import { TopicType } from "../../types/Topic.types";
import { FoodTypes } from "../../types/Food.types";
import ArrowLeftIcon from "../../assets/svg/ArrowLeftIcon";
import TickIcon from "../../assets/svg/TickIcon";
import SearchIcon from "../../assets/svg/SearchIcon";
import FavoriteItem from "./FavoriteItem";
import { useAppSelector } from "../../redux/hooks";
type HeartSectionProps = {
  topicArray: TopicType[];
};
export default function HeartSection({ topicArray }: HeartSectionProps) {
  const favoriteArray = useAppSelector((state) =>
    state.foods.filter((food: FoodTypes) => food.isFavorite)
  );
  const [filteredArray, setFilteredArray] =
    useState<FoodTypes[]>(favoriteArray);
  const [searchValue, setSearchValue] = useState("");
  const [filterItemActive, setFilterItemActive] = useState("همه");
  const setFavorites = () => {
    if (filterItemActive === "همه") {
      setFilteredArray([]);
      favoriteArray.forEach((food) => {
        setFilteredArray((prev) => [...prev, food]);
      });
    } else {
      setFilteredArray([]);
      topicArray.forEach((topic) => {
        if (topic.title === filterItemActive) {
          favoriteArray.forEach((food) => {
            if (food.topicId === topic.id) {
              setFilteredArray((prev) => [...prev, food]);
            }
          });
        }
      });
    }
  };
  const searchFavorite = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resultArray = filteredArray.filter((item) => {
      return item.title.includes(searchValue);
    });
    setFilteredArray(resultArray);
  };
  const handleRemoveFavorite = (id: string) => {
    setFilteredArray(filteredArray.filter((food) => food.id !== id));
  };
  useEffect(() => {
    setFavorites();
  }, [filterItemActive]);
  return (
    <section>
      {favoriteArray.length ? (
        <div className="flex flex-col items-start">
          {/* center wrapper */}
          <div className="flex items-center justify-between mt-2 md:mt-4 w-full gap-2 md:gap-4">
            {/* filter wrapper */}
            <div className="hidden lg:flex items-center gap-2 ">
              <button
                onClick={() => {
                  setFilterItemActive("همه");
                }}
                className={`filter__item ${
                  filterItemActive === "همه" ? "filter__item--active" : ""
                } text-2xs md:text-base text-nowrap flex items-center gap-1 px-2 rounded-lg md:rounded-5xl bg-gray-300 py-1`}
              >
                <TickIcon size="tick__icon w-2.5 h-2.5" />
                <span>همه</span>
                <ArrowLeftIcon size="arrow__icon w-3 md:w-4 h-3 md:h-4" />
              </button>
              <button
                onClick={() => {
                  setFilterItemActive("غذای اصلی");
                }}
                className={`filter__item ${
                  filterItemActive === "غذای اصلی" ? "filter__item--active" : ""
                } text-2xs md:text-base text-nowrap flex items-center gap-1 px-2 rounded-lg md:rounded-5xl bg-gray-300 py-1`}
              >
                <TickIcon size="tick__icon w-2.5 h-2.5" />
                <span>غذای اصلی</span>
                <ArrowLeftIcon size="arrow__icon w-3 md:w-4 h-3 md:h-4" />
              </button>
              <button
                onClick={() => {
                  setFilterItemActive("پیش غذا");
                }}
                className={`filter__item ${
                  filterItemActive === "پیش غذا" ? "filter__item--active" : ""
                } text-2xs md:text-base text-nowrap flex items-center gap-1 px-2 rounded-lg md:rounded-5xl bg-gray-300 py-1`}
              >
                <TickIcon size="tick__icon w-2.5 h-2.5" />
                <span>پیش غذا</span>
                <ArrowLeftIcon size="arrow__icon w-3 md:w-4 h-3 md:h-4" />
              </button>
              <button
                onClick={() => {
                  setFilterItemActive("دسر");
                }}
                className={`filter__item ${
                  filterItemActive === "دسر" ? "filter__item--active" : ""
                } text-2xs md:text-base text-nowrap flex items-center gap-1 px-2 rounded-lg md:rounded-5xl bg-gray-300 py-1`}
              >
                <TickIcon size="tick__icon w-2.5 h-2.5" />
                <span>دسر</span>
                <ArrowLeftIcon size="arrow__icon w-3 md:w-4 h-3 md:h-4" />
              </button>
              <button
                onClick={() => {
                  setFilterItemActive("نوشیدنی");
                }}
                className={`filter__item ${
                  filterItemActive === "نوشیدنی" ? "filter__item--active" : ""
                } text-2xs md:text-base text-nowrap flex items-center gap-1 px-2 rounded-lg md:rounded-5xl bg-gray-300 py-1`}
              >
                <TickIcon size="tick__icon w-2.5 h-2.5" />
                <span>نوشیدنی</span>
                <ArrowLeftIcon size="arrow__icon w-3 md:w-4 h-3 md:h-4" />
              </button>
            </div>
            {/* search wrapper */}
            <form
              className="flex items-center justify-between px-4 py-2 border border-gray-400 rounded w-full overflow-hidden flex-grow"
              onSubmit={searchFavorite}
            >
              {/* search input */}
              <input
                type="text"
                className="border-none outline-none text-2xs md:text-xs flex-grow"
                placeholder="جستجو"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  if (!e.target.value) {
                    setFavorites();
                  }
                }}
              />
              {/* search btn */}
              <button className="search__btn">
                <SearchIcon size="w-4 h-4 md:w-6 md:h-6" />
              </button>
            </form>
          </div>
          {/* bottom wrapper */}
          <div className="flex flex-col w-full">
            {/* undefined box */}
            {filteredArray.length ? (
              <div className="grid grid-cols-12 gap-x-4 gap-y-5 md:gap-y-6 mt-6 md:mt-11">
                {filteredArray.map((item, index) => (
                  <FavoriteItem
                    key={index + 1}
                    {...item}
                    onRemoveFavorite={handleRemoveFavorite}
                  />
                ))}
              </div>
            ) : (
              <div className="flex-center flex-col gap-4 py-40">
                {/* caption */}
                <p className="text-xs md:text-xl">
                  موردی با این مشخصات پیدا نکردیم!
                </p>
                {/* img */}
                <img
                  src="src/assets/images/home/undefined.webp"
                  alt="undefined"
                  className="w-40 md:w-96"
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Empty
          href="/menu"
          caption="حال حاضر هیچ محصولی را به علاقه‌مندی‌ها اضافه نکرده‌اید!"
          btn="منوی رستوران"
        />
      )}
    </section>
  );
}
