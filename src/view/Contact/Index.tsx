import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { BranchType } from "../../types/Branch.types";
import { BaseUrl } from "../../components/BaseUrl";
import Section from "./Section";

export function Index() {
  const [branchArray, setBranchArray] = useState<BranchType[]>([]);
  function getBranch() {
    fetch(`${BaseUrl}/branches`)
      .then((res) => res.json())
      .then((data) => setBranchArray(data));
  }
  useEffect(() => {
    getBranch();
  }, []);
  return (
    <div>
      <Nav title="contact" />
      <Header title="با ترخینه در تماس باشید." background="bg-header-contact" />
      <Section branchArray={branchArray} />
      <Footer />
    </div>
  );
}
