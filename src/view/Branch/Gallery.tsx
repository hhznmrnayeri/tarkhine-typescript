import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { AlbumType } from "../../types/Album.types";
import SectionTitle from "./SectionTitle";
import ArrowLeftIcon from "../../assets/svg/ArrowLeftIcon";
import ArrowRightIcon from "../../assets/svg/ArrowRightIcon";
type GalleryProps = {
  listAlbum: AlbumType[];
};
export default function Gallery({ listAlbum }: GalleryProps) {
  return (
    <section className="mt-6 md:mt-12">
      <SectionTitle title="شعبه اکباتان" center={true} />
      <h2 className="text-center font-estedadBold md:text-2xl"></h2>
      <Swiper
        navigation={{
          nextEl: ".next__btn--swiper4",
          prevEl: ".prev__btn--swiper4",
        }}
        modules={[Navigation]}
        className="h-44 md:h-80 relative mt-3 md:mt-5"
      >
        <div className="bg-slide__gallery1 "></div>
        <div className="bg-slide__gallery2 "></div>
        <div className="bg-slide__gallery3 "></div>
        <div className="bg-slide__gallery4 "></div>
        <div className="bg-slide__gallery5 "></div>
        <div className="bg-slide__gallery6 "></div>
        <div className="bg-slide__gallery7 "></div>
        <div className="bg-slide__gallery8 "></div>
        <div className="bg-slide__gallery9 "></div>
        <div className="bg-slide__gallery10"></div>
        <div className="bg-slide__gallery11"></div>
        <div className="bg-slide__gallery12"></div>
        <div className="bg-slide__gallery13"></div>
        <div className="bg-slide__gallery14"></div>
        <div className="bg-slide__gallery15"></div>
        <div className="bg-slide__gallery16"></div>
        <div className="bg-slide__gallery17"></div>
        <div className="bg-slide__gallery18"></div>
        <div className="bg-slide__gallery19"></div>
        <div className="bg-slide__gallery20"></div>
        <div className="bg-slide__gallery21"></div>
        <div className="bg-slide__gallery22"></div>
        <div className="bg-slide__gallery23"></div>
        <div className="bg-slide__gallery24"></div>
        <div className="bg-slide__gallery25"></div>
        <div className="bg-slide__gallery26"></div>
        <div className="bg-slide__gallery27"></div>
        <div className="bg-slide__gallery28"></div>
        <div className="bg-slide__gallery29"></div>
        <div className="bg-slide__gallery30"></div>
        <div className="bg-slide__gallery31"></div>

        {listAlbum.map((item: AlbumType) => (
          <SwiperSlide
            key={item.id}
            className={`${item.className} w-full h-full bg-center object-cover bg-cover`}
          ></SwiperSlide>
        ))}
        <button className="next__btn--swiper4 absolute z-10 w-6 h-6 md:w-12 md:h-12 top-0 bottom-0 m-auto left-3 md:left-6 text-white">
          <ArrowLeftIcon size="w-6 h-6 md:w-12 md:h-12" />
        </button>
        <button className="prev__btn--swiper4 absolute z-10 w-6 h-6 md:w-12 md:h-12 top-0 bottom-0 m-auto right-3 md:right-6 text-white">
          <ArrowRightIcon size="w-6 h-6 md:w-12 md:h-12" />
        </button>
      </Swiper>
    </section>
  );
}
