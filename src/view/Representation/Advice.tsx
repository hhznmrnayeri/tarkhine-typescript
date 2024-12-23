import Calendar from "../../components/Calendar";
import SectionTitle from "./SectionTitle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import * as yup from "yup";
import { BaseUrl } from "../../components/BaseUrl";
export default function Advice() {
  const schema = yup.object({
    name: yup.string().required("وارد کردن فیلد نام اجباری می باشد !!"),
    phone: yup.string().required("وارد کردن فیلد شماره اجباری می باشد !!"),
    date: yup.string().required("وارد کردن فیلد زمان اجباری می باشد !!"),
  });
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      date: "",
    },
    resolver: yupResolver(schema),
  });
  const formSubmitting = () => {
    const newAdvice = {
      name: getValues("name"),
      phone: getValues("phone"),
      date: getValues("date"),
    };
    fetch(`${BaseUrl}/advice`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAdvice),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "added to advice",
          icon: "success",
        }).then(() => {
          setValue("name", "");
          setValue("phone", "");
          setValue("date", "");
        });
      });
  };
  return (
    <>
      <div className="container">
        <section className="text-center mt-4 md:mt-12 pb-4 md:pb-14 border-b border-gray-400">
          <SectionTitle title="دریافت مشاوره" />
          {/* advice form */}
          <form
            className="flex-center flex-col gap-6 w-full"
            onSubmit={handleSubmit(formSubmitting)}
          >
            {/* input wrapper */}
            <div className="flex items-start gap-6 text-sm w-full mt-6 flex-col sm:flex-row">
              <div className="w-full flex-1 flex flex-col items-start gap-1">
                {/* input */}
                <input
                  type="text"
                  {...register("name")}
                  className="outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full"
                  placeholder="نام و نام‌خانوادگی"
                />
                {errors.name && (
                  <span className="text-error font-estedadMedium text-lg">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="w-full flex-1 flex flex-col items-start gap-1">
                {/* input */}
                <input
                  type="text"
                  {...register("phone")}
                  className="outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full"
                  placeholder="شماره تماس"
                />
                {errors.phone && (
                  <span className="text-error font-estedadMedium text-lg">
                    {errors.phone.message}
                  </span>
                )}
              </div>
              <div className="w-full flex-1 flex flex-col items-start gap-1">
                <Calendar
                  placeholder="زمان ایده‌آل"
                  adviceSetValue={setValue}
                  userSetValue={() => {}}
                />
                {errors.date && (
                  <span className="text-error font-estedadMedium text-lg">
                    {errors.date.message}
                  </span>
                )}
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
    </>
  );
}
