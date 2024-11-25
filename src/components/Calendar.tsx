import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import ArrowLeftIcon from "../assets/svg/ArrowLeftIcon";
import { useState } from "react";
import "react-multi-date-picker/styles/colors/green.css";
import type { Value } from "react-multi-date-picker";
import { UseFormSetValue } from "react-hook-form";
type adviceFormValues = {
  phone: string;
  date: string;
  name: string;
};
type userFormValues = {
  firstName: string;
  lastName: string;
  userName: string;
  phone: string;
  email: string;
  date: string;
};
type CalendarProps = {
  placeholder: string;
  adviceSetValue?: UseFormSetValue<adviceFormValues>;
  userSetValue?: UseFormSetValue<userFormValues>;
};
export default function Calendar({
  placeholder,
  adviceSetValue,
  userSetValue,
}: CalendarProps) {
  const [value, setDateValue] = useState<Value>();
  const handleChange = (val: Value) => {
    setDateValue(val);
    if (adviceSetValue) {
      if (val) {
        adviceSetValue("date", val.toString());
      } else {
        adviceSetValue("date", "");
      }
    } else if (userSetValue) {
      if (val) {
        userSetValue("date", val.toString());
      } else {
        userSetValue("date", "");
      }
    }
  };
  return (
    <DatePicker
      value={value}
      style={{
        boxSizing: "border-box",
        height: "38px",
        padding: "8px 16px",
        width: "100%",
      }}
      containerStyle={{
        width: "100%",
      }}
      placeholder={placeholder}
      className="rmdp-prime green"
      showOtherDays
      editable={false}
      onChange={handleChange}
      arrow={<ArrowLeftIcon />}
      calendar={persian}
      locale={persian_fa}
      calendarPosition="bottom-left"
    />
  );
}
