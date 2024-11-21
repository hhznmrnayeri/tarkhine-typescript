import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from "./SectionTitle";
import SlideItem from "./SlideItem";
import ArrowLeftIcon from "../../assets/svg/ArrowLeftIcon";
import ArrowRightIcon from "../../assets/svg/ArrowRightIcon";
import { FoodTypes } from "../../types/Food.types";
type SectionItemProps = {
  array: FoodTypes[];
  label: string;
};
export default function SectionItem({ array, label }: SectionItemProps) {
  const list: FoodTypes[] = [];
  switch (label) {
    case "isSpecial": {
      array.forEach((item) => {
        if (item.isSpecial) {
          list.push(item);
        }
      });
      break;
    }
    case "isPopular": {
      array.forEach((item) => {
        if (item.isPopular) {
          list.push(item);
        }
      });
      break;
    }
    case "isForeign": {
      array.forEach((item) => {
        if (item.isForeign) {
          list.push(item);
        }
      });
      break;
    }
    default:
      break;
  }
  return (
    <section
      className={`mt-6  mb-6  ${
        label === "isPopular" ? "bg-primary" : ""
      } py-6`}
    >
      <div className="container">
        {label === "isSpecial" && <SectionTitle title="پیشنهاد ویژه" />}
        {label === "isPopular" && (
          <SectionTitle title="غذاهای محبوب" color="text-white" />
        )}
        {label === "isForeign" && <SectionTitle title="غذاهای غیر ایرانی" />}
        {/* swiper */}
        <div className="mt-3 md:mt-6 relative">
          {array.length && (
            <Swiper
              slidesPerView={1.2}
              spaceBetween={16}
              navigation={{
                nextEl: ".next__btn--swiper1",
                prevEl: ".prev__btn--swiper1",
              }}
              breakpoints={{
                350: {
                  slidesPerView: 1.4,
                  spaceBetween: 16,
                },
                480: {
                  slidesPerView: 1.9,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 2.5,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 4.3,
                  spaceBetween: 24,
                },
              }}
              modules={[Navigation]}
              className=""
            >
              {list.map((item) => (
                <SwiperSlide key={`${label}-${item.id}`}>
                  <SlideItem {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <button className="next__btn--swiper1 absolute top-64 -left-5 bg-white w-10 h-10 m-auto z-10 hidden lg:flex p-1 rounded-lg border border-gray-400 text-gray-600">
            <ArrowLeftIcon size="w-8 h-8" />
          </button>
          <button className="prev__btn--swiper1 absolute top-64 -right-5 bg-white w-10 h-10 m-auto z-10 hidden lg:flex p-1 rounded-lg border border-gray-400 text-gray-600">
            <ArrowRightIcon size="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
