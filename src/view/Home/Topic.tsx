import { useState } from "react";
import Overlay from "../../components/Overlay";
import CloseIcon from "../../assets/svg/CloseIcon";
import { NavLink } from "react-router-dom";
import { TopicType } from "../../types/Topic.types";
import { BranchType } from "../../types/Branch.types";
type TopicProps = {
  topicArray: TopicType[];
  branchArray: BranchType[];
};
export default function Topic({ topicArray, branchArray }: TopicProps) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <section>
        <div className="container">
          {/* section title */}
          <h2 className="text-center font-estedadBold mt-6 md:mt-12 md:text-2xl">
            منوی رستوران
          </h2>
          {/* topic wrapper */}
          <div className="flex-center md:justify-between gap-x-4 gap-y-36 md:gap-y-52 md:gap-x-6 mt-20 md:mt-40 flex-wrap">
            {topicArray.map((topic: TopicType) => (
              <div
                key={topic.id}
                className="bg-primary rounded relative h-20 w-36 shadow-card md:h-40 md:w-72 flex items-end justify-center gap-3"
              >
                {/* topic img */}
                <img
                  src={`${topic.img}`}
                  alt="topic"
                  className="absolute left-0 right-0 -top-16 md:-top-36 mx-auto w-11/12 h-32 md:h-64"
                />
                {/* topic btn */}
                <button
                  onClick={toggleModal}
                  className="bg-gray-100 text-xs md:text-xl rounded p-2 px-4 w-24 h-8 md:h-12 md:w-36 -mb-6 shadow-card"
                >
                  {topic.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {showModal && (
        <Overlay onHide={toggleModal}>
          {/* choose branch modal */}
          <div className="fixed rounded-lg overflow-hidden bg-white pb-12 w-11/12 md:w-7/12 h-5/6 md:h-5/6 inset-0 m-auto z-30 overflow-y-auto">
            {/* top box */}
            <div className="bg-gray-300 md:bg-white flex items-center justify-between py-4 p-6 font-estedadMedium md:font-estedadSemiBold text-sm md:text-xl">
              {/* modal title */}
              <h3 className="text-center self-center mx-auto">انتخاب شعبه</h3>
              {/* close modal */}
              <button className="text-gray-800 self-end" onClick={toggleModal}>
                <CloseIcon size="w-6 md:w-10 h-6 md:h-10" />
              </button>
            </div>
            {/* bottom box */}
            <div className="mt-6 md:mt-10 px-4 lg:px-12 ">
              {/* modal description */}
              <p className="text-center text-xs md:text-base">
                برای دیدن منوی رستوران، لطفا شعبه مدنظر خود را انتخاب کنید:
              </p>
              {/* branch wrapper */}
              <div className="grid grid-cols-1 md:grid-cols-12  gap-2 lg:gap-5 mt-4 md:mt-5 ">
                {branchArray.map((branch: BranchType) => (
                  <NavLink
                    key={branch.id}
                    to="/branch"
                    className="col-span-1 md:col-span-3 flex md:flex-col rounded-lg md:rounded border border-gray-400 h-auto "
                  >
                    {/* branch img */}
                    <img
                      src={`${branch.img}`}
                      alt="branch"
                      className="w-20 md:w-full"
                    />
                    {/* branch content */}
                    <div className="p-2 text-center flex items-center flex-col flex-grow">
                      {/* branch title */}
                      <h4 className="text-xs lg:text-base md:font-estedadMedium md:text-nowrap">
                        شعبه {branch.title}
                      </h4>
                      {/* branch caption */}
                      <p className="text-gray-700 text-2xs lg:text-xs mt-0.5">
                        {branch.address}
                      </p>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </Overlay>
      )}
    </>
  );
}
