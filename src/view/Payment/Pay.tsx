import { useState } from "react";
import DiscountShapeIcon from "../../assets/svg/DiscountShapeIcon";
import WalletMoneyIcon from "../../assets/svg/WalletMoneyIcon";
import CardPosIcon from "../../assets/svg/CardPosIcon";
import WalletIcon from "../../assets/svg/WalletIcon";
import CardIcon from "../../assets/svg/CardIcon";
import WarningIcon from "../../assets/svg/WarningIcon";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  checkOffCode,
  setOfflinePay,
  setOnlinePay,
} from "../../redux/basket/basketSlice";
import Swal from "sweetalert2";
export default function Pay() {
  const [statusPay, setStatusPay] = useState("online");
  const [bankActive, setBankActive] = useState(1);
  const [offerCode, setOfferCode] = useState("");
  const dispatch = useAppDispatch();
  const basketStore = useAppSelector((state) => state.basket);
  const checkCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (basketStore.useCode) {
      if (offerCode === "Nayeri60") {
        dispatch(checkOffCode());
        setOfferCode("");
        Swal.fire({
          title: "مبلغ 60000 به تخفیفات این سفارش اضافه شد",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "کد تخفیف وارد شده معتبر نیست",
          icon: "error",
        });
      }
    } else {
      Swal.fire({
        title: "شما تنها از یک کد تخفیف می توانید استفاده کنید",
        icon: "warning",
      });
    }
  };
  return (
    <>
      <div className="col-span-1 lg:col-span-7 flex flex-col  overflow-hidden">
        {/* discount pay */}
        <form
          className="border border-gray-400 rounded-lg p-4 md:py-8 md:px-6 flex flex-col md:flex-row items-start md:items-center md:justify-between gap-2 w-full"
          onSubmit={checkCode}
        >
          {/* title */}
          <h3 className="flex gap-1 items-center text-sm md:text-base pb-2 mb-2 md:mb-0 md:pb-0 border-b md:border-none border-gray-400 w-full md:w-auto">
            <DiscountShapeIcon size="w-4 md:w-6 h-4 md:h-6" />
            ثبت کد تخفیف
          </h3>
          {/* form wrapper */}
          <div className="flex gap-2">
            {/* input code */}
            <input
              type="text"
              className="outline-none p-2 md:px-4 flex-1 border border-gray-400 rounded-lg text-sm text-gray-700"
              value={offerCode}
              onChange={(e) => setOfferCode(e.target.value)}
              placeholder="کد تخفیف:(Nayeri60)"
            />
            {/* submit discount */}
            <button
              className="checkCode__btn text-gray-300 text-xs rounded bg-primary p-2 md:px-4"
              disabled={!basketStore.useCode}
            >
              ثبت کد
            </button>
          </div>
        </form>
        {/* state pay */}
        <div className="border border-gray-400 rounded-lg p-4 md:py-8 md:px-6 flex flex-col md:flex-row items-start md:items-center md:justify-between gap-2 w-full mt-3 md:mt-6">
          {/* title */}
          <h3 className="flex gap-1 items-center text-sm md:text-base pb-2 mb-2 md:mb-0 md:pb-0 border-b md:border-none border-gray-400 w-full md:w-auto">
            <WalletMoneyIcon size="w-4 md:w-6 h-4 md:h-6" />
            روش پرداخت
          </h3>
          {/* radio input */}
          <button
            onClick={() => {
              setStatusPay("online");
              dispatch(setOnlinePay());
            }}
            className={`${
              statusPay === "online" ? "state__pay--active" : ""
            }  flex items-center gap-2`}
          >
            <span className="state__radio w-4 h-4 rounded-full border border-gray-400 p-1 relative"></span>
            <span className="flex items-center gap-1 text-gray-700 text-xs md:text-sm">
              پرداخت اینترنتی
              <CardPosIcon size="w-4 md:w-6 h-4 md:h-6" />
            </span>
          </button>
          {/* radio input */}
          <button
            onClick={() => {
              setStatusPay("offline");
              dispatch(setOfflinePay());
            }}
            className={`${
              statusPay === "offline" ? "state__pay--active" : ""
            } flex items-center gap-2`}
          >
            <span className="state__radio w-4 h-4 rounded-full border border-gray-400 p-1 relative"></span>
            <span className="flex items-center gap-1 text-gray-700 text-xs md:text-sm">
              پرداخت در محل
              <WalletIcon size="w-4 md:w-6 h-4 md:h-6" />
            </span>
          </button>
        </div>
        {/* section wrapper */}
        <div className="flex flex-col mt-3 md:mt-6 overflow-hidden">
          {statusPay === "online" ? (
            <div
              id="online"
              className="section__pay section__pay--active p-4 md:px-6 border border-gray-400 rounded-lg flex flex-col md:flex-row items-start gap-x-12"
            >
              {/* title */}
              <h3 className="flex gap-1 items-center text-sm md:text-base pb-2 mb-2 md:mb-0 md:pb-0 border-b md:border-none border-gray-400 w-full md:w-auto flex-shrink-0">
                <CardIcon size="w-4 md:w-6 h-4 md:h-6" />
                درگاه پرداخت
              </h3>
              {/* content */}
              <div className="flex flex-col gap-2 text-2xs text-center text-gray-700">
                {/* bank wrapper */}
                <div className="flex items-center gap-2 md:gap-4">
                  {/* bank item */}
                  <button
                    onClick={() => {
                      setBankActive(1);
                    }}
                    className={`bank__item ${
                      bankActive === 1 ? "bank__item--active" : ""
                    }`}
                  >
                    <img src="../src/assets/images/buy/bank1.webp" alt="bank" />
                  </button>
                  {/* bank item */}
                  <button
                    onClick={() => {
                      setBankActive(2);
                    }}
                    className={`bank__item ${
                      bankActive === 2 ? "bank__item--active" : ""
                    }`}
                  >
                    <img src="../src/assets/images/buy/bank2.webp" alt="bank" />
                  </button>
                  {/* bank item */}
                  <button
                    onClick={() => {
                      setBankActive(3);
                    }}
                    className={`bank__item ${
                      bankActive === 3 ? "bank__item--active" : ""
                    }`}
                  >
                    <img src="../src/assets/images/buy/bank3.webp" alt="bank" />
                  </button>
                </div>
                {/* caption */}
                <p className=" md:text-xs">
                  پرداخت از طریق کلیه کارت‌های عضو شتاب امکان‌پذیر است.‌
                </p>
                {/* description */}
                <p className=" ">
                  (لطفا قبل از پرداخت فیلترشکن خود را خاموش کنید.)‌
                </p>
              </div>
            </div>
          ) : (
            <div
              id="offline"
              className="section__pay p-4 md:px-6 border border-gray-400 rounded-lg flex flex-col md:flex-row items-start justify-between bg-gray-100 gap-4"
            >
              {/* title */}
              <h3 className="flex gap-1 items-center text-sm md:text-base pb-2 mb-2 md:mb-0 md:pb-0 border-b md:border-none border-gray-400 w-full md:w-auto flex-shrink-0">
                <WarningIcon size="w-4 md:w-6 h-4 md:h-6" />
                قابل توجه
              </h3>
              {/* caption */}
              <p className="text-2xs text-gray-700">
                هزینه سفارش شما در حین تحویل کالا دریافت خواهد شد. لطفا قبل از
                تحویل کالا کارت بانکی یا پول نقد همراه خود داشته باشید و از
                درخواست برای پرداخت در زمان بعدی یا نسیه خودداری فرمایید. با
                تشکر از همراهی شما.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
