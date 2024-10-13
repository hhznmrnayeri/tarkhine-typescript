import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CommentType } from "../../types/Comment.types";
import { FoodTypes } from "../../types/Food.types";
import { AlbumType } from "../../types/Album.types";
import HeaderSlider from "../../components/HeaderSlider";
import Nav from "../../components/Nav";
import SearchBox from "../../components/SearchBox";
import { BaseUrl } from "../../components/BaseUrl";
import Footer from "../../components/Footer";
import NoteIcon from "../../assets/svg/NoteIcon";
import SectionItem from "./SectionItem";
import Gallery from "./Gallery";
import Comment from "./Comment";
export function Index() {
  const [listAlbum, setListAlbum] = useState<AlbumType[]>([]);
  const [commentArray, setCommentArray] = useState<CommentType[]>([]);
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
  function getListAlbum() {
    fetch(`${BaseUrl}/albums`)
      .then((res) => res.json())
      .then((data) => setListAlbum(data));
  }
  function getComments() {
    fetch(`${BaseUrl}/comments?_embed=user`)
      .then((res) => res.json())
      .then((data) => setCommentArray(data));
  }
  useEffect(() => {
    getFoods();
    getListAlbum();
    getComments();
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
      <Gallery listAlbum={listAlbum} />
      <Comment commentArray={commentArray} />
      <Footer />
    </>
  );
}
