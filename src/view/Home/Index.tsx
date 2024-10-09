import { useEffect, useState } from "react";
import { BaseUrl } from "../../components/BaseUrl";
import HeaderSlider from "../../components/HeaderSlider";
import Nav from "../../components/Nav";
import SearchBox from "../../components/SearchBox";
import Topic from "./Topic";
import { TopicType } from "../../types/Topic.types";
import { BranchType } from "../../types/Branch.types";
import Intro from "./Intro";
export default function Index() {
  const [topicArray, setTopicArray] = useState<TopicType[]>([]);
  const [branchArray, setBranchArray] = useState<BranchType[]>([]);
  function getTopic() {
    fetch(`${BaseUrl}/topics`)
      .then((res) => res.json())
      .then((data) => setTopicArray(data));
  }
  function getBranch() {
    fetch(`${BaseUrl}/branches`)
      .then((res) => res.json())
      .then((data) => setBranchArray(data));
  }
  useEffect(() => {
    getTopic();
    getBranch();
  }, []);
  return (
    <>
      <Nav title="home" />
      <HeaderSlider title="تجربه غذای سالم گیاهی به سبک ترخینه" />
      <SearchBox />
      <Topic topicArray={topicArray} branchArray={branchArray} />
      <Intro />
    </>
  );
}
