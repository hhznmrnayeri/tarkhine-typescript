import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";
import { OrderResultType } from "../../types/OrderResult.types";
import { BaseUrl } from "../../components/BaseUrl";
import CalendarIcon from "../../assets/svg/CalendarIcon";
import LocationIcon from "../../assets/svg/LocationIcon";
import WalletIcon from "../../assets/svg/WalletIcon";
import ConvertToPersian from "../../hooks/ConvertToPersian";
import ClockIcon from "../../assets/svg/ClockIcon";
import TruckFastIcon from "../../assets/svg/TruckFastIcon";
import TickCircleIcon from "../../assets/svg/TickCircleIcon";
import HomeOrderIcon from "../../assets/svg/HomeOrderIcon";
import FoodItem from "./FoodItem";
import { OrderItemType } from "../../types/OrderItem.types";
const week = [
  "یکشنبه",
  "دوشنبه",
  "سه شنبه",
  "چهارشنبه",
  "پنج شنبه",
  "جمعه",
  "شنبه",
];
export default function OrderItem(props: OrderResultType) {
  const [foodList, setFoodList] = useState<OrderItemType[]>([]);
  const [hourOrder] = useState(
    Math.floor((Date.now() - props.time) / (1000 * 60 * 60))
  );
  const [dateItem] = useState(new Date(props.time));
  const weekDay = week[dateItem.getDay()];
  const dateOrder = dateItem.toLocaleDateString("fa-IR");
  const hour = dateItem.getHours().toString().padStart(2, "0");
  const minute = dateItem.getMinutes().toString().padStart(2, "0");
  const deliveredTime = useState(new Date(props.time + 1000 * 60 * 60));
  const deliveredHour = deliveredTime[0].getHours().toString().padStart(2, "0");
  const deliveredMinute = deliveredTime[0]
    .getMinutes()
    .toString()
    .padStart(2, "0");
  function getFood() {
    props.list.forEach((item) => {
      fetch(`${BaseUrl}/foods/${item.id}`)
        .then((res) => res.json())
        .then((data) => {
          setFoodList((prev) => [...prev, { ...data, count: item.count }]);
        });
    });
  }
  useEffect(() => {
    getFood();
  }, []);
  return (
    <div className="order__item col-span-12 w-full border border-gray-400 rounded px-3 pt-2 pb-4 md:px-6 md:pb-6 md:pt-4">
      {/* top wrapper */}
      <div className="flex items-start justify-between mb-4">
        {/* right box */}
        <div className="flex flex-col items-start gap-4 md:gap-2">
          {/* branch name */}
          <span className="md:mt-2 text-xs md:text-sm text-gray-600">
            شعبه اقدسیه
          </span>
          {/* detail wrapper */}
          <div className="flex flex-col md:flex-row flex-wrap items-start gap-2 text-gray-600 md:text-gray-700 text-2xs">
            {/* detail item */}
            <div className="flex items-center gap-1 md:order-1">
              {/* detail icon */}
              <CalendarIcon size="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              {/* detail text */}
              <p>
                {weekDay}، {dateOrder}، ساعت {hour}:{minute}
              </p>
            </div>
            {/* detail item */}
            {props.sendState === "courier" && (
              <div className="flex items-center gap-1 md:order-2">
                {/* detail icon */}
                <LocationIcon size="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                {/* detail text */}
                <p>{props.address}</p>
              </div>
            )}
            {/* detail item */}
            <div className="flex items-center gap-1 md:order-1 ">
              {/* detail icon */}
              <WalletIcon size="w-3 h-3 md:w-4 md:h-4 flex-shrink-0 lg:hidden" />
              {/* detail text */}
              <p>
                مبلغ: <span>{ConvertToPersian({ num: props.sumPrices })}</span>{" "}
                تومان / تخفیف:{" "}
                <span>{ConvertToPersian({ num: props.offPrices })}</span> تومان
              </p>
            </div>
          </div>
        </div>
        {/* left box */}
        <div className="flex flex-col items-end gap-4 flex-shrink-0 xl:w-72">
          {/* label wrapper */}
          <div className="flex items-center gap-2 text-2xs md:text-xs">
            {/* delivery label */}
            <span className="delivery__label">
              {props.sendState === "courier" ? "ارسال توسط پیک" : "تحویل حضوری"}
            </span>
            {/* order state */}
            {hourOrder === 0 ? (
              <span className="order__state">جاری</span>
            ) : props.isComplete ? (
              <span className="delivered">تحویل شده</span>
            ) : (
              <span className="canceled">لغو شده</span>
            )}
          </div>
          {/* detail item */}
          {hourOrder === 0 ? (
            <div className="flex items-center gap-1 text-gray-600 md:text-gray-700 text-2xs md:text-xs">
              {/* detail icon */}
              <ClockIcon size="w-3 h-3 md:w-4 md:h-4" />
              {/* detail text */}
              <p>
                آماده تحویل تا{" "}
                <span className="text-primary" dir="ltr">
                  {deliveredHour}:{deliveredMinute}
                </span>
              </p>
            </div>
          ) : null}
        </div>
      </div>
      {/* order state */}
      {hourOrder === 0 ? (
        <div className="flex items-center gap-1 md:gap-2 justify-between px-2 lg:px-10 text-gray-400 text-sm">
          {/* state item */}
          <span className="state__order state__order--active flex items-center">
            <HomeOrderIcon size="w-4 h-4 md:w-6 md:h-6" />
            <span className="hidden md:block">در حال آماده‌سازی</span>
          </span>
          <div className="h-px border border-dashed border-gray-400 flex-1"></div>
          {/* state item */}
          <span className="state__order flex items-center">
            <TruckFastIcon size="w-4 h-4 md:w-6 md:h-6" />
            <span className="hidden md:block">ارسال توسط پیک</span>
          </span>
          <div className="h-px border border-dashed border-gray-400 flex-1"></div>
          {/* state item */}
          <span className="state__order flex items-center">
            <TickCircleIcon size="w-4 h-4 md:w-6 md:h-6" />
            <span className="hidden md:block">تحویل سفارش</span>
          </span>
        </div>
      ) : null}
      <Swiper
        spaceBetween={16}
        slidesPerView={2.5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode]}
        breakpoints={{
          480: {
            slidesPerView: 3.5,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 5.5,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 4.5,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 5.5,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 24,
          },
        }}
        className="mt-4"
      >
        {foodList.map((item, index) => (
          <SwiperSlide key={index}>
            <FoodItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* btn */}
      {hourOrder === 0 ? (
        <button className="cancel__order mx-auto md:ml-0 md:mr-auto border rounded p-2 text-xs flex-center h-8 w-24 md:w-30 text-error border-error mt-4">
          لغو سفارش
        </button>
      ) : (
        <button className=" mx-auto md:ml-0 md:mr-auto border rounded p-2 text-xs flex-center h-8 w-24 md:w-30 text-primary border-primary mt-4">
          سفارش مجدد
        </button>
      )}
    </div>
  );
}
