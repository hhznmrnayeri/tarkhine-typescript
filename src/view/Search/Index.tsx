import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BaseUrl } from "../../components/BaseUrl";
import Nav from "../../components/Nav";
import SearchIcon from "../../assets/svg/SearchIcon";
import Footer from "../../components/Footer";
import { FoodTypes } from "../../types/Food.types";
import ResultItem from "./ResultItem";
export function Index() {
  const [resultArray, setResultArray] = useState<FoodTypes[]>([]);
  const { food } = useParams();
  const [searchValue, setSearchValue] = useState(food);
  function searchFood() {
    setResultArray([]);
    if (searchValue) {
      fetch(`${BaseUrl}/foods`)
        .then((res) => res.json())
        .then((data) => {
          data.forEach((item: FoodTypes) => {
            if (item.title.includes(searchValue)) {
              setResultArray((prev) => [...prev, item]);
            }
          });
        });
    }
  }
  useEffect(() => {
    searchFood();
  }, []);
  return (
    <div>
      <Nav title="search" />
      <div className="container mb-6 md:mb-12">
        {resultArray.length ? null : (
          <p className="undefined__caption text-xl text-center mt-12">
            موردی با این مشخصات پیدا نکردیم!
          </p>
        )}
        {resultArray.length ? (
          <h1 className="result__title font-estedadBold text-xl text-center">
            نتایج جستجو برای:{" "}
            <span className="food__result text-primary">{searchValue}</span>
          </h1>
        ) : null}
        <form
          className="border border-gray-400 rounded-lg mt-6 flex-center px-4 py-2 text-gray-800 text-sm font-estedadMedium w-full xs:w-96 mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="w-full h-full outline-none"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button onClick={() => searchFood()}>
            <SearchIcon size="w-6 h-6" />
          </button>
        </form>
        {resultArray.length ? null : (
          <img
            src="../src/assets/images/home/undefined.webp"
            alt="undefined"
            className="undefined__img mx-auto mt-14"
          />
        )}
        <div className="result__wrapper grid grid-cols-1 sm:grid-cols-12 gap-6 items-center justify-items-center content-center w-full justify-center mt-12">
          {resultArray.map((item, index) => (
            <ResultItem key={index + 1} {...item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
