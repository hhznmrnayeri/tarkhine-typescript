import { useEffect, useState } from "react";
import { BaseUrl } from "../../components/BaseUrl";
import Header from "../../components/Header";
import State from "./State";
import Accordion from "./Accordion";
import { AskType } from "../../types/Ask.types";
export default function PrivacySection() {
  const [privacyList, setPrivacyList] = useState<AskType[]>([]);
  function getQuestions() {
    fetch(`${BaseUrl}/privacy`)
      .then((res) => res.json())
      .then((data) => setPrivacyList(data));
  }
  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <>
      <Header title="حریم شخصی کاربران" background="bg-header-privacy" />
      <div className="bg-gray-300">
        <div className="container">
          <State title="privacy" />
        </div>
      </div>
      <div className="container mb-6 md:mb-12">
        <div className="transition-all duration-300 mt-3 md:mt-6 visible opacity-100 h-auto border border-gray-400 rounded overflow-hidden">
          {privacyList.map((item) => (
            <Accordion key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
