import SectionTitle from "./SectionTitle";
import AddFolderIcon from "../../assets/svg/AddFolderIcon";
import SectionSubTitle from "./SectionSubTitle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import * as yup from "yup";
import { BaseUrl } from "../../components/BaseUrl";
import { ChangeEvent, useState } from "react";
export default function Form() {
  const [hasLicense, setHasLicense] = useState(false);
  const [hasParking, setHasParking] = useState(false);
  const [hasKitchen, setHasKitchen] = useState(false);
  const [hasWarehouse, setHasWarehouse] = useState(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };
  const schema = yup.object({
    name: yup.string().required("وارد کردن فیلد نام اجباری می باشد !!"),
    nationalCode: yup
      .string()
      .length(10, "کد ملی باید 10 رقمی باشد")
      .required("وارد کردن فیلد کد ملی اجباری می باشد !!"),
    phone: yup.string().required("وارد کردن فیلد شماره اجباری می باشد !!"),
    province: yup.string().required("انتخاب کردن فیلد استان اجباری می باشد !!"),
    city: yup.string().required("وارد کردن فیلد شهر اجباری می باشد !!"),
    region: yup.string().required("وارد کردن فیلد منطقه اجباری می باشد !!"),
    address: yup.string().required("وارد کردن فیلد آدرس اجباری می باشد !!"),
    type: yup.string().required("وارد کردن فیلد نوع مالکیت اجباری می باشد !!"),
    space: yup.string().required("وارد کردن فیلد مساحت اجباری می باشد !!"),
    age: yup.string().required("وارد کردن فیلد سن بنا اجباری می باشد !!"),
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
      nationalCode: "",
      phone: "",
      province: "",
      city: "",
      region: "",
      address: "",
      type: "",
      space: "",
      age: "",
    },
    resolver: yupResolver(schema),
  });
  const formSubmitting = async () => {
    if (!selectedFile) {
      Swal.fire({
        title: "شما باید حداقل یک تصویر از ملک بارگذاری کنید",
        icon: "error",
      });
      return;
    }
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("name", getValues("name"));
    formData.append("nationalCode", getValues("nationalCode"));
    formData.append("phone", getValues("phone"));
    formData.append("province", getValues("province"));
    formData.append("city", getValues("city"));
    formData.append("region", getValues("region"));
    formData.append("address", getValues("address"));
    formData.append("type", getValues("type"));
    formData.append("space", getValues("space"));
    formData.append("age", getValues("age"));
    formData.append("license", hasLicense.toString());
    formData.append("kitchen", hasKitchen.toString());
    formData.append("parking", hasParking.toString());
    formData.append("warehouse", hasWarehouse.toString());
    try {
      const response = await fetch(`${BaseUrl}/representation`, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        Swal.fire({
          title: "درخواست نمایندگی شما ثبت شد",
          icon: "success",
        }).then(() => {
          setValue("name", "");
          setValue("nationalCode", "");
          setValue("phone", "");
          setValue("province", "");
          setValue("city", "");
          setValue("region", "");
          setValue("address", "");
          setValue("type", "");
          setValue("space", "");
          setValue("age", "");
          setHasLicense(false);
          setHasParking(false);
          setHasKitchen(false);
          setHasWarehouse(false);
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "مشکلی پیش آمده بعدا تلاش کنید",
        icon: "error",
      });
    }
  };
  return (
    <>
      <div className="container mb-6 md:mb-12">
        <form
          className="text-center mt-4 md:mt-12 py-4 md:py-8 px-4 md:px-6 border border-gray-400 flex flex-col"
          onSubmit={handleSubmit(formSubmitting)}
        >
          <SectionTitle title="فرم درخواست نمایندگی" />
          <SectionSubTitle subTitle="مشخصات فردی متقاضی" />
          {/* input wrapper */}
          <div className="flex items-center gap-4 text-sm w-full mt-6 flex-col sm:flex-row sm:items-start">
            {/* input */}
            <div className="w-full flex-1 flex flex-col items-start gap-1">
              <input
                type="text"
                className="outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full flex-1"
                placeholder="نام و نام‌خانوادگی"
                {...register("name")}
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
                className="outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full flex-1"
                placeholder="کدملی"
                {...register("nationalCode")}
              />
              {errors.nationalCode && (
                <span className="text-error font-estedadMedium text-lg">
                  {errors.nationalCode.message}
                </span>
              )}
            </div>
            <div className="w-full flex-1 flex flex-col items-start gap-1">
              {/* input */}
              <input
                type="text"
                className="outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full flex-1"
                placeholder="شماره تماس"
                {...register("phone")}
              />
              {errors.phone && (
                <span className="text-error font-estedadMedium text-lg">
                  {errors.phone.message}
                </span>
              )}
            </div>
          </div>
          <SectionSubTitle subTitle="آدرس ملک متقاضی" />
          {/* input wrapper */}
          <div className="flex items-center gap-4 text-sm w-full mt-6 flex-col md:flex-row md:items-start">
            {/* right box */}
            <div className="flex items-start gap-4 text-sm w-full flex-col flex-1">
              {/* top box */}
              <div className="flex items-start gap-4 gap-x-8 text-sm w-full flex-col lg:flex-row lg:items-start">
                {/* input wrapper */}
                <div
                  className="shire__wrapper group relative w-[380px]  flex flex-col"
                  tabIndex={1}
                >
                  <select
                    className=" outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full"
                    {...register("province")}
                    value="تهران"
                  >
                    <option
                      value="تهران"
                      className="py-2 border-b border-gray-300 w-full text-start"
                    >
                      تهران
                    </option>
                    <option
                      value="اصفهان"
                      className="py-2 border-b border-gray-300 w-full text-start"
                    >
                      اصفهان
                    </option>
                    <option
                      value="شیراز"
                      className="py-2 border-b border-gray-300 w-full text-start"
                    >
                      شیراز
                    </option>
                    <option
                      value="مشهد"
                      className="py-2 border-b border-gray-300 w-full text-start"
                    >
                      مشهد
                    </option>
                    <option
                      value="کرمان"
                      className="py-2 border-b border-gray-300 w-full text-start"
                    >
                      کرمان
                    </option>
                  </select>
                  {errors.province && (
                    <span className="text-error font-estedadMedium text-lg">
                      {errors.province.message}
                    </span>
                  )}
                </div>
                <div className="w-full flex-1 flex flex-col items-start gap-1">
                  {/* input */}
                  <input
                    type="text"
                    className="outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full flex-1"
                    {...register("city")}
                    placeholder="شهر"
                    tabIndex={2}
                  />
                  {errors.city && (
                    <span className="text-error font-estedadMedium text-lg">
                      {errors.city.message}
                    </span>
                  )}
                </div>
              </div>
              {/* bottom box */}
              <div className="flex items-start gap-4 text-sm w-full flex-col lg:flex-row lg:items-start">
                <div className="w-full flex-1 flex flex-col items-start gap-1">
                  {/* input */}
                  <input
                    type="text"
                    className="outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full lg:w-[252px] xl:w-[380px] "
                    placeholder="منطقه"
                    {...register("region")}
                  />
                  {errors.region && (
                    <span className="text-error font-estedadMedium text-lg">
                      {errors.region.message}
                    </span>
                  )}
                </div>
                <div className="w-full flex-1 flex flex-col items-start gap-1">
                  {/* input */}
                  <textarea
                    className="outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full flex-1"
                    placeholder="آدرس دقیق"
                    rows={6}
                    {...register("address")}
                  ></textarea>
                  {errors.address && (
                    <span className="text-error font-estedadMedium text-lg">
                      {errors.address.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            {/* left box */}
            <div className="bg-map rounded border border-gray-400 flex flex-col text-primary justify-between self-stretch p-3 w-full md:w-96">
              {/* top box */}
              <div className="flex flex-col self-end items-center gap-1">
                {/* zoom in */}
                <span className="bg-white gap-1.5 rounded-sm shadow-4 w-5 h-5">
                  +
                </span>
                {/* zoom out */}
                <span className="bg-white gap-1.5 rounded-sm shadow-4 w-5 h-5">
                  -
                </span>
              </div>
              {/* submit map */}
              <span className="text-xs font-estedadMedium bg-white py-0.5 px-3 rounded self-center">
                ثبت موقعیت
              </span>
            </div>
          </div>
          <SectionSubTitle subTitle="مشخصات ملک متقاضی" />
          {/* input wrapper */}
          <div className="flex items-center gap-4 text-sm w-full mt-6 flex-col sm:flex-row sm:items-start">
            <div className="w-full flex-1 flex flex-col items-start gap-1">
              {/* input */}
              <input
                type="text"
                className="outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full flex-1"
                placeholder="نوع مالکیت"
                {...register("type")}
              />
              {errors.type && (
                <span className="text-error font-estedadMedium text-lg">
                  {errors.type.message}
                </span>
              )}
            </div>
            <div className="w-full flex-1 flex flex-col items-start gap-1">
              {/* input */}
              <input
                type="text"
                className="outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full flex-1"
                placeholder="مساحت ملک (متر مربع)"
                {...register("space")}
              />
              {errors.space && (
                <span className="text-error font-estedadMedium text-lg">
                  {errors.space.message}
                </span>
              )}
            </div>
            <div className="w-full flex-1 flex flex-col items-start gap-1">
              {/* input */}
              <input
                type="text"
                className="outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full flex-1"
                placeholder="سن بنا"
                {...register("age")}
              />
              {errors.age && (
                <span className="text-error font-estedadMedium text-lg">
                  {errors.age.message}
                </span>
              )}
            </div>
          </div>
          <SectionSubTitle subTitle="امکانات ملک متقاضی" />
          {/* input wrapper */}
          <div className="flex items-start gap-4 text-sm w-full mt-6 flex-col md:flex-row ">
            {/* right box */}
            <div className="flex items-start gap-4 flex-col flex-1 text-gray-700">
              {/* box title */}
              <h5 className="">ملک متقاضی:</h5>
              {/* checkbox wrapper */}
              <div className="flex gap-x-20 flex-col xs:flex-row gap-y-2">
                {/* right box */}
                <div className="flex items-start gap-2 text-sm  flex-col ">
                  {/* checkbox */}
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="license"
                      id="license"
                      checked={hasLicense}
                      onChange={(e) => setHasLicense(e.target.checked)}
                    />
                    <label htmlFor="license" className="">
                      پروانه کسب دارد.
                    </label>
                  </div>
                  {/* checkbox */}
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="parking"
                      id="license"
                      checked={hasParking}
                      onChange={(e) => setHasParking(e.target.checked)}
                    />
                    <label htmlFor="parking" className="">
                      پارکینگ دارد.
                    </label>
                  </div>
                </div>
                {/* left box */}
                <div className="flex items-start gap-2 text-sm  flex-col ">
                  {/* checkbox */}
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="kitchen"
                      id="license"
                      checked={hasKitchen}
                      onChange={(e) => setHasKitchen(e.target.checked)}
                    />
                    <label htmlFor="kitchen" className="">
                      آشپزخانه دارد.
                    </label>
                  </div>
                  {/* checkbox */}
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="warehouse"
                      id="license"
                      checked={hasWarehouse}
                      onChange={(e) => setHasWarehouse(e.target.checked)}
                    />
                    <label htmlFor="warehouse" className="">
                      انبار دارد.
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* left box */}
            <div className=" text-gray-700 flex flex-col flex-1 items-start w-full">
              {/* box title */}
              <h5 className="">تصاویر ملک</h5>
              {/* choose box */}
              <div className="border-2 border-gray-400 rounded h-48 flex-center flex-col gap-2 w-full">
                <span>
                  <AddFolderIcon size="w-16 h-16" />
                </span>
                {/* caption */}
                <p className="font-estedadMedium text-sm">
                  تصاویری از ملک را بارگذاری کنید
                </p>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-48"
                />
              </div>
            </div>
          </div>
          {/* form btn */}
          <button className="text-white bg-primary font-estedadMedium p-2 md:px-4 rounded h-10 w-48 self-center mt-4">
            ثبت اطلاعات
          </button>
        </form>
      </div>
    </>
  );
}
