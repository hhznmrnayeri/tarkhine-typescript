import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Basket from "./Basket";
import Complete from "./Complete";
import Pay from "./Pay";
import ArrowLeftIcon from "../../assets/svg/ArrowLeftIcon";
import TickCircleIcon from "../../assets/svg/TickCircleIcon";
import CardIcon from "../../assets/svg/CardIcon";
import ArrowRightIcon from "../../assets/svg/ArrowRightIcon";
import ShoppingCartIcon from "../../assets/svg/ShoppingCartIcon";
import TickSquareIcon from "../../assets/svg/TickSquareIcon";
import WalletIcon from "../../assets/svg/WalletIcon";
import TrashIcon from "../../assets/svg/TrashIcon";
import WarningIcon from "../../assets/svg/WarningIcon";
import Empty from "../../components/Empty";
import Overlay from "../../components/Overlay";
import CloseIcon from "../../assets/svg/CloseIcon";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ConvertToPersian from "../../hooks/ConvertToPersian";
import {
  clearBasket,
  getOfferBasketPrice,
  getTotalBasketPrice,
  getTotalBasketQuantity,
  resetBasket,
} from "../../redux/basket/basketSlice";
import { BaseUrl } from "../../components/BaseUrl";
export default function MainSection() {
  const [sectionState, setSectionState] = useState("basket");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const basketStore = useAppSelector((state) => state.basket);
  const addressArray = useAppSelector((state) => state.address);
  const totalBasketQuantity = useAppSelector((state) =>
    getTotalBasketQuantity(state)
  );
  const totalBasketPrice = useAppSelector((state) =>
    getTotalBasketPrice(state)
  );
  const offerBasketPrice = useAppSelector((state) =>
    getOfferBasketPrice(state)
  );
  const toggleDeleteModal = () => {
    setShowDeleteModal((prev) => !prev);
  };
  const registerOrderItem = async () => {
    const requestAddress = addressArray.find((item) => item.active);
    const newOrder = {
      list: basketStore.list,
      address: requestAddress?.caption,
      caption: basketStore.caption,
      offPrices: offerBasketPrice,
      sumPrices: totalBasketPrice,
      branchesId: "1",
      isComplete: true,
      sendState: basketStore.sendState,
      time: Date.now(),
    };
    console.log(newOrder);
    await fetch(`${BaseUrl}/order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    });
    await dispatch(resetBasket());
    navigate("/payment");
  };
  const renderSection = () => {
    switch (sectionState) {
      case "basket":
        return <Basket />;
      case "complete":
        return <Complete />;
      case "pay":
        return <Pay />;
      default:
        return null;
    }
  };
  const renderOrderButton = () => {
    if (sectionState === "basket") {
      return (
        <button
          className="w-full text-white bg-primary flex-center gap-1 md:gap-2 rounded p-2 md:px-4 text-xs md:text-base md:font-estedadMedium"
          onClick={() => setSectionState("complete")}
        >
          تکمیل اطلاعات
          <ArrowLeftIcon size="w-4 md:w-6 h-4 md:h-6" />
        </button>
      );
    }
    if (sectionState === "complete") {
      return (
        <button
          className="state__btn2 w-full text-white bg-primary flex-center gap-1 md:gap-2 rounded p-2 md:px-4 text-xs md:text-base md:font-estedadMedium"
          onClick={() => setSectionState("pay")}
        >
          <span className="flex items-center gap-2">
            <TickCircleIcon size="w-4 md:w-6 h-4 md:h-6" />
            ثبت سفارش
          </span>
        </button>
      );
    }
    if (sectionState === "pay") {
      return (
        <button
          className="state__btn2 w-full text-white bg-primary flex-center gap-1 md:gap-2 rounded p-2 md:px-4 text-xs md:text-base md:font-estedadMedium"
          onClick={registerOrderItem}
        >
          <span className="flex items-center gap-2">
            <CardIcon size="w-4 md:w-6 h-4 md:h-6" />
            تایید و پرداخت
          </span>
        </button>
      );
    }
    return null;
  };
  return (
    <>
      <div className="container">
        <div className="flex items-center justify-between md:justify-center mt-6 md:mt-10">
          <button
            className="md:hidden"
            onClick={() =>
              sectionState === "basket"
                ? navigate(-1)
                : sectionState === "complete"
                ? setSectionState("basket")
                : setSectionState("complete")
            }
          >
            <ArrowRightIcon size="w-4 h-4" />
          </button>
          <div className="flex-center gap-2 text-sm md:w-1/2">
            <span
              className={`state__item flex-col flex-center ${
                sectionState === "basket"
                  ? "state__item--active"
                  : "text-primary"
              }`}
            >
              <ShoppingCartIcon size="w-6 h-6 hidden md:block" />
              سبد خرید
            </span>
            <div
              className={`hidden md:block flex-auto h-px ${
                sectionState !== "basket"
                  ? "border-primary bg-primary"
                  : "bg-gray-400 border-gray-400"
              }  border-dashed `}
            ></div>
            <span
              className={`state__item flex-col flex-center ${
                sectionState === "complete"
                  ? "state__item--active"
                  : sectionState === "pay"
                  ? "text-primary"
                  : ""
              }`}
            >
              <TickSquareIcon size="w-6 h-6 hidden md:block" />
              تکمیل اطلاعات
            </span>
            <div
              className={`hidden md:block flex-auto h-px ${
                sectionState === "pay"
                  ? "bg-primary border-primary"
                  : "bg-gray-400 border-gray-400"
              }  border-dashed `}
            ></div>
            <span
              className={`state__item flex-col flex-center ${
                sectionState === "pay" ? "state__item--active" : ""
              }`}
            >
              <WalletIcon size="w-6 h-6 hidden md:block" />
              پرداخت
            </span>
          </div>
          <button className="md:hidden" onClick={toggleDeleteModal}>
            <TrashIcon size="w-4 h-4" />
          </button>
        </div>
        <section className="my-6 md:my-10">
          {basketStore.list.length ? (
            <div className="basket__wrapper grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-6 p-6 md:p-0 rounded-lg md:rounded-none border md:border-none border-gray-400 overflow-hidden">
              {renderSection()}
              <div
                className={`col-span-1 lg:col-span-5 flex ${
                  sectionState === "basket" ? "lg:h-72" : "lg:h-64"
                } flex-col md:p-6 md:rounded-lg md:border md:border-gray-400 overflow-hidden`}
              >
                <div className="hidden md:flex items-center justify-between pb-3 md:border-b md:border-gray-400">
                  <h4>
                    سبد خرید(
                    <span className="text-sm">
                      {ConvertToPersian({ num: totalBasketQuantity })}
                    </span>
                    )
                  </h4>
                  <button className="text-gray-800" onClick={toggleDeleteModal}>
                    <TrashIcon size="w-6 h-6" />
                  </button>
                </div>
                <div className="flex items-center justify-between py-3 border-y md:border-t-0 md:border-b border-gray-400">
                  <h5 className="text-sm">تخفیف محصولات</h5>
                  <span className="text-gray-700 text-sm">
                    {ConvertToPersian({ num: offerBasketPrice })} تومان
                  </span>
                </div>
                <div className="flex flex-col gap-2 py-3 border-b border-gray-400">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm">هزینه ارسال</h5>
                    <span className="text-gray-700 text-sm">
                      {ConvertToPersian({ num: basketStore.shippingPrice })}
                      تومان
                    </span>
                  </div>
                  {sectionState === "basket" && (
                    <p className="text-warning text-2xs flex items-center gap-2">
                      <WarningIcon size="md:w-6 w-4 md:h-6 h-4" />
                      هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال
                      انتخابی شما محاسبه و به این مبلغ اضافه خواهد شد.
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between py-3">
                  <h5 className="text-sm">مبلغ قابل پرداخت</h5>
                  <span className="text-primary text-sm">
                    {ConvertToPersian({ num: totalBasketPrice })} تومان
                  </span>
                </div>
                {renderOrderButton()}
              </div>
            </div>
          ) : (
            <Empty
              caption="شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!"
              href="/menu"
              btn="منوی رستوران"
            />
          )}
        </section>
      </div>
      {showDeleteModal && (
        <Overlay onHide={toggleDeleteModal}>
          <div className="deleteAll__modal fixed overflow-hidden rounded-lg bg-white w-11/12 md:w-5/12 h-48 md:h-56 inset-0 m-auto z-30">
            <div className="bg-gray-100 flex items-center justify-between py-4 px-6 text-sm font-estedadMedium md:text-2xl md:font-estedadSemiBold">
              <h3 className="mx-auto">حذف محصولات</h3>
              <button
                onClick={toggleDeleteModal}
                className="close__deleteAll--modal text-gray-700"
              >
                <CloseIcon size="w-6 h-6" />
              </button>
            </div>
            <p className="mt-3 md:mt-8 text-xs md:text-base text-center">
              همه محصولات سبد خرید شما حذف شود؟
            </p>
            <div className="mt-8 flex-center gap-4 md:gap-5 px-16">
              <button
                onClick={toggleDeleteModal}
                className="back__btn border border-primary rounded flex-center p-2 text-primary text-xs md:px-4 md:text-base md:font-estedadMedium flex-1"
              >
                بازگشت
              </button>
              <button
                className="delete__btn bg-error-200 rounded flex-center p-2 text-error text-xs md:px-4 md:text-base md:font-estedadMedium flex-1"
                onClick={() => {
                  dispatch(clearBasket());
                  toggleDeleteModal();
                }}
              >
                حذف
              </button>
            </div>
          </div>
        </Overlay>
      )}
    </>
  );
}
