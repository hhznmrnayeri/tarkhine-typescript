import { useState } from "react";
import { TopicType } from "../../types/Topic.types";
type TopicProps = {
  topicArray: TopicType[];
};
export default function Topic({ topicArray }: TopicProps) {
  const [topic, setTopic] = useState("غذای اصلی");
  const changeTopic = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    setTopic(target.innerHTML);
  };
  return (
    <div className=" bg-gray-300">
      <div className="container">
        <div className="flex items-center gap-4 md:gap-8 text-gray-700 text-xs md:text-xl py-1.5 md:py-3.5">
          {topicArray.map((item) => (
            <button
              key={item.id}
              onClick={(e) => changeTopic(e)}
              className={`${topic === item.title ? "topic__item--active" : ""}`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
