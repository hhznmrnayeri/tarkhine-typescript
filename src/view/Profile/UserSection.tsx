import { useState } from "react";
import { UserType } from "../../types/User.types";
import { BaseUrl } from "../../components/BaseUrl";
import Calendar from "../../components/Calendar";
import EditIcon from "../../assets/svg/EditIcon";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
type UserSectionProps = {
  userInfo: UserType;
};
export default function UserSection({ userInfo }: UserSectionProps) {
  const [isShowEditBox, setIsShowEditBox] = useState(false);
  const schema = yup.object({
    firstName: yup.string().required("وارد کردن فیلد نام اجباری می باشد !!"),
    lastName: yup
      .string()
      .required("وارد کردن فیلد نام خانوادگی اجباری می باشد !!"),
    userName: yup
      .string()
      .required("وارد کردن فیلد نام کاربری اجباری می باشد !!"),
    phone: yup.string().required("وارد کردن فیلد شماره اجباری می باشد !!"),
    email: yup.string().required("وارد کردن فیلد ایمیل اجباری می باشد !!"),
    date: yup.string().required("وارد کردن فیلد تاریخ تولد اجباری می باشد !!"),
  });
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      userName: userInfo.userName,
      phone: userInfo.phone,
      email: userInfo.email,
      date: userInfo.date,
    },
    resolver: yupResolver(schema),
  });
  const editHandler = () => {
    const updateUser = {
      firstName: getValues("firstName"),
      lastName: getValues("lastName"),
      userName: getValues("userName"),
      phone: getValues("phone"),
      email: getValues("email"),
      date: getValues("date"),
      commentId: "1",
    };
    fetch(`${BaseUrl}/users/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then(() => {
        setIsShowEditBox(false);
        setValue("firstName", "");
        setValue("lastName", "");
        setValue("userName", "");
        setValue("phone", "");
        setValue("email", "");
        setValue("date", "");
      });
  };
  const openEditBox = () => {
    setIsShowEditBox(true);
  };
  const closeEditBox = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsShowEditBox(false);
  };
  return (
    <>
      <section>
        {isShowEditBox ? (
          <div className="flex flex-col items-start">
            {/* bottom wrapper */}
            <form
              className="flex flex-col gap-3 md:gap-6 mt-6 md:mt-12 w-full pb-60"
              onSubmit={handleSubmit(editHandler)}
            >
              {/* detail wrapper */}
              <div className="flex-center flex-col md:flex-row gap-3 md:gap-4 w-full">
                {/* detail item */}
                <div className="relative w-full h-10 flex flex-col items-start gap-1">
                  <input
                    className="profile__edit--input peer"
                    placeholder=""
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <span className="text-error font-estedadMedium text-lg">
                      {errors.firstName.message}
                    </span>
                  )}
                  <label className="profile__edit--label">نام</label>
                </div>
                {/* detail item */}
                <div className="relative w-full h-10 flex flex-col items-start gap-1">
                  <input
                    className="profile__edit--input peer"
                    placeholder=" "
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <span className="text-error font-estedadMedium text-lg">
                      {errors.lastName.message}
                    </span>
                  )}
                  <label className="profile__edit--label">نام خانوادگی</label>
                </div>
              </div>
              {/* detail wrapper */}
              <div className="flex-center flex-col md:flex-row gap-3 md:gap-4 w-full">
                {/* detail item */}
                <div className="relative w-full h-10 flex flex-col items-start gap-1">
                  <input
                    className="profile__edit--input peer"
                    dir="ltr"
                    placeholder=""
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="text-error font-estedadMedium text-lg">
                      {errors.email.message}
                    </span>
                  )}
                  <label className="profile__edit--label">آدرس ایمیل</label>
                </div>
                {/* detail item */}
                <div className="relative w-full h-10 flex flex-col items-start gap-1">
                  <input
                    className="profile__edit--input peer"
                    dir="ltr"
                    placeholder=" "
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <span className="text-error font-estedadMedium text-lg">
                      {errors.phone.message}
                    </span>
                  )}
                  <label className="profile__edit--label">شماره همراه</label>
                </div>
              </div>
              {/* detail wrapper */}
              <div className="flex-center flex-col md:flex-row gap-3 md:gap-4 w-full">
                {/* input wrapper */}
                <div
                  className="calendar__wrapper group relative w-full flex flex-col h-10"
                  tabIndex={1}
                >
                  <Calendar
                    placeholder="تاریخ تولد (اختیاری)"
                    adviceSetValue={() => {}}
                    userSetValue={setValue}
                  />
                  {errors.date && (
                    <span className="text-error font-estedadMedium text-lg">
                      {errors.date.message}
                    </span>
                  )}
                </div>
                {/* detail item */}
                <div className="relative w-full h-10 flex flex-col items-start gap-1">
                  <input
                    className="profile__edit--input peer"
                    placeholder=" "
                    {...register("userName")}
                  />
                  {errors.userName && (
                    <span className="text-error font-estedadMedium text-lg">
                      {errors.userName.message}
                    </span>
                  )}
                  <label className="profile__edit--label">نام نمایشی</label>
                </div>
              </div>
              {/* btn wrapper */}
              <div className="flex items-center md:justify-end gap-4">
                {/* cancel btn */}
                <button
                  onClick={closeEditBox}
                  className="text-primary bg-white border border-primary text-xs rounded flex-center md:text-base md:font-estedadMedium h-8 md:h-10 w-full md:w-36"
                >
                  انصراف
                </button>
                {/* submit btn */}
                <button
                  onClick={editHandler}
                  className="bg-primary text-white text-xs rounded flex-center md:text-base md:font-estedadMedium h-8 md:h-10 w-full md:w-36"
                >
                  ذخیره اطلاعات
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="flex flex-col gap-3 md:gap-6 mt-6 md:mt-12 w-full">
            {/* detail wrapper */}
            <div className="flex-center flex-col md:flex-row gap-3 md:gap-4 w-full">
              {/* detail item */}
              <span className="border border-gray-400 h-8 md:h-10 w-full flex items-center text-gray-400 text-2xs px-4 py-1 rounded md:rounded-lg">
                {userInfo.firstName ? userInfo.firstName : "نام"}
              </span>
              {/* detail item */}
              <span className="border border-gray-400 h-8 md:h-10 w-full flex items-center text-gray-400 text-2xs px-4 py-1 rounded md:rounded-lg">
                {userInfo.lastName ? userInfo.lastName : "نام خانوادگی"}
              </span>
            </div>
            {/* detail wrapper */}
            <div className="flex-center flex-col md:flex-row gap-3 md:gap-4 w-full">
              {/* detail item */}
              <span className="border border-gray-400 h-8 md:h-10 w-full flex items-center text-gray-400 text-2xs px-4 py-1 rounded md:rounded-lg">
                {userInfo.email ? userInfo.email : "آدرس ایمیل"}
              </span>
              {/* detail item */}
              <span
                className="border border-gray-400 h-8 md:h-10 w-full flex items-center text-gray-400 text-2xs px-4 py-1 rounded md:rounded-lg"
                dir={userInfo.phone ? "ltr" : "rtl"}
              >
                {userInfo.phone ? userInfo.phone : "شماره همراه"}
              </span>
            </div>
            {/* detail wrapper */}
            <div className="flex-center flex-col md:flex-row gap-3 md:gap-4 w-full">
              {/* detail item */}
              <span className="border border-gray-400 h-8 md:h-10 w-full flex items-center text-gray-400 text-2xs px-4 py-1 rounded md:rounded-lg">
                {userInfo.date ? (
                  userInfo.date
                ) : (
                  <span>
                    تاریخ تولد <span className="text-2xs">(اختیاری)</span>
                  </span>
                )}
              </span>
              {/* detail item */}
              <span className="border border-gray-400 h-8 md:h-10 w-full flex items-center text-gray-400 text-2xs px-4 py-1 rounded md:rounded-lg">
                {userInfo.userName ? userInfo.userName : "نام نمایشی"}
              </span>
            </div>
            {/* edit btn */}
            <button
              onClick={openEditBox}
              className="flex-center gap-1 md:gap-2 text-primary text-xs border border-primary rounded p-2 self-center mx-auto h-8 w-40 md:h-10 md:w-72 md:text-base md:font-estedadMedium mt-2 md:py-2 md:px-4"
            >
              <EditIcon size="w-4 h-4 md:w-6 md:h-6" />
              ویرایش اطلاعات شخصی
            </button>
          </div>
        )}
      </section>
    </>
  );
}
