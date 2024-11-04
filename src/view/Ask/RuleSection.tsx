import { useEffect, useState } from "react";
import { AskType } from "../../types/Ask.types";
import { BaseUrl } from "../../components/BaseUrl";
import Header from "../../components/Header";
import State from "./State";
import Accordion from "./Accordion";
export default function RuleSection() {
  const [ruleList, setRuleList] = useState<AskType[]>([]);
  function getQuestions() {
    fetch(`${BaseUrl}/rules`)
      .then((res) => res.json())
      .then((data) => setRuleList(data));
  }
  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <>
      <Header title="قوانین ترخینه" background="bg-header-rule" />
      <div className="bg-gray-300">
        <div className="container">
          <State title="rule" />
        </div>
      </div>
      <div className="container mb-6 md:mb-12">
        <div className="transition-all duration-300 mt-3 md:mt-6 visible opacity-100 h-auto border border-gray-400 rounded overflow-hidden">
          {ruleList.map((item) => (
            <Accordion key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
