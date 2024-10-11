import { useEffect, useState } from "react";
import HeaderSlider from "../../components/HeaderSlider";
import Nav from "../../components/Nav";
import SearchBox from "../../components/SearchBox";
import { BaseUrl } from "../../components/BaseUrl";
import { FoodTypes } from "../../types/Food.types";
import SectionItem from "./SectionItem";
import { NavLink } from "react-router-dom";
import NoteIcon from "../../assets/svg/NoteIcon";
export function Index() {
  const [specialArray, setSpecialArray] = useState<FoodTypes[]>([]);
  const [popularArray, setPopularArray] = useState<FoodTypes[]>([]);
  const [foreignArray, setForeignArray] = useState<FoodTypes[]>([]);
  function getFoods() {
    setForeignArray([]);
    setSpecialArray([]);
    setPopularArray([]);
    fetch(`${BaseUrl}/foods`)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item: FoodTypes) => {
          if (item.isSpecial) {
            setSpecialArray((prev) => [...prev, item]);
          }
          if (item.isPopular) {
            setPopularArray((prev) => [...prev, item]);
          }
          if (item.isForeign) {
            setForeignArray((prev) => [...prev, item]);
          }
        });
      });
  }
  useEffect(() => {
    getFoods();
  }, []);
  return (
    <>
      <Nav title="branch" />
      <HeaderSlider title="طعم بی‌نظیر طبیعت!" />
      <SearchBox />
      <SectionItem array={specialArray} label="special" />
      <SectionItem array={popularArray} label="popular" />
      <SectionItem array={foreignArray} label="foreign" />
      <NavLink
        to="/menu"
        className="flex-center mx-auto border mt-3 md:mt-7 border-primary text-primary gap-2 p-2 rounded md:px-4 md:font-estedadMedium text-xs md:text-base w-52"
      >
        <NoteIcon size="w-4 h-4 md:w-6 md:h-6" />
        مشاهده منوی کامل
      </NavLink>
    </>
  );
}
