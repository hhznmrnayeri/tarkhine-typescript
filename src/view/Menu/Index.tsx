import { useEffect, useState } from "react";
import HeaderSlider from "../../components/HeaderSlider";
import Nav from "../../components/Nav";
import Topic from "./Topic";
import { TopicType } from "../../types/Topic.types";
import { BaseUrl } from "../../components/BaseUrl";
import Footer from "../../components/Footer";
export function Index() {
  const [topicArray, setTopicArray] = useState<TopicType[]>([]);
  function getTopics() {
    fetch(`${BaseUrl}/topics`)
      .then((res) => res.json())
      .then((data) => setTopicArray(data));
  }
  useEffect(() => {
    getTopics();
  }, []);
  return (
    <>
      <Nav title="menu" />
      <HeaderSlider title="لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!" />
      <Topic topicArray={topicArray} />
      <Footer />
    </>
  );
}
