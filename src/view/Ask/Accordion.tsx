import ArrowDownIcon from "../../assets/svg/ArrowDownIcon";
type AccordionProps = {
  id: string;
  question: string;
  answer: string;
};
export default function Accordion({ id, question, answer }: AccordionProps) {
  return (
    <div
      className={`group flex flex-col gap-2 p-5 ${
        id === "1" ? "" : "border-t border-gray-400"
      }`}
      tabIndex={+id}
    >
      <div className="flex cursor-pointer items-center justify-between">
        <span className="text-xs md:text-xl group-focus:text-primary">
          {question}
        </span>
        <ArrowDownIcon size="h-4 w-4 md:w-8 md:h-8 transition-all duration-500 group-focus:-rotate-180" />
      </div>
      <div className="invisible h-0 items-center opacity-0 transition-all group-focus:visible group-focus:h-auto group-focus:opacity-100 duration-300 text-justify text-2xs md:text-base">
        {answer}
      </div>
    </div>
  );
}
