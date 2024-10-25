import { useState } from "react";
import Calendar from "../../components/Calendar";
import Overlay from "../../components/Overlay";
import SectionTitle from "./SectionTitle";
export default function Advice() {
  const [showCalendar, setShowCalendar] = useState(false);
  const toggleCalendar = () => {
    setShowCalendar((prev) => !prev);
  };
  return (
    <>
      <div className="container">
        <section className="text-center mt-4 md:mt-12 pb-4 md:pb-14 border-b border-gray-400">
          <SectionTitle title="دریافت مشاوره" />
          {/* advice form */}
          <form className="flex-center flex-col gap-6 w-full">
            {/* input wrapper */}
            <div className="flex items-start gap-6 text-sm w-full mt-6 flex-col sm:flex-row">
              <div className="w-full flex-1 flex flex-col items-start gap-1">
                {/* input */}
                <input
                  type="text"
                  className="outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full"
                  placeholder="نام و نام‌خانوادگی"
                />
              </div>
              <div className="w-full flex-1 flex flex-col items-start gap-1">
                {/* input */}
                <input
                  type="text"
                  className="outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full"
                  placeholder="شماره تماس"
                />
              </div>
              {/* input wrapper */}
              <div
                className="calendar__wrapper group relative w-full flex-1 flex flex-col"
                onClick={toggleCalendar}
                tabIndex={1}
              >
                {/* input */}
                <input
                  type="text"
                  className=" outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full"
                  placeholder="زمان ایده‌آل"
                />
                {showCalendar && <Calendar />}
              </div>
            </div>
            {/* form btn */}
            <button
              type="submit"
              className="text-white bg-primary md:font-estedadMedium text-xs md:text-base rounded px-4 h-10 w-40"
            >
              درخواست مشاوره
            </button>
          </form>
        </section>
      </div>
      {showCalendar && (
        <Overlay onHide={toggleCalendar} backgroundNone={true}></Overlay>
      )}
    </>
  );
}
