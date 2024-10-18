import { useEffect, useState } from "react";
import HeaderSlider from "../../components/HeaderSlider";
import Nav from "../../components/Nav";
import Topic from "./Topic";
import Type from "./Type";
import { TopicType } from "../../types/Topic.types";
import { FoodType } from "../../types/FoodType.types";
import { BaseUrl } from "../../components/BaseUrl";
import Footer from "../../components/Footer";
import Search from "./Search";
import List from "./List";
export function Index() {
  const [topicArray, setTopicArray] = useState<TopicType[]>([]);
  const [typeArray, setTypeArray] = useState<FoodType[]>([]);
  const [foodList, setFoodList] = useState<FoodType[]>([]);
  function getTopics() {
    fetch(`${BaseUrl}/topics`)
      .then((res) => res.json())
      .then((data) => setTopicArray(data));
  }
  function getType() {
    fetch(`${BaseUrl}/types`)
      .then((res) => res.json())
      .then((data) => setTypeArray(data));
  }
  function getFoods() {
    fetch(`${BaseUrl}/types?_embed=foods`)
      .then((res) => res.json())
      .then((data) => {
        setFoodList(data);
      });
  }
  useEffect(() => {
    getTopics();
    getType();
    getFoods();
  }, []);
  return (
    <>
      <Nav title="menu" />
      <HeaderSlider title="لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!" />
      <Topic topicArray={topicArray} />
      <section className="mt-2 md:mt-4">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 justify-between">
            <Type typeArray={typeArray} />
            <Search />
          </div>
        </div>
      </section>
      <List foodList={foodList} />
      <Footer />
    </>
  );
}
