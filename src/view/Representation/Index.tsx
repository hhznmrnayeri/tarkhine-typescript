import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Advantage from "./Advantage";
import Advice from "./Advice";
import Form from "./Form";
import Option from "./Option";
export function Index() {
  return (
    <>
      <Nav title="representation" />
      <Header
        title="همین الان به خانواده بزرگ ترخینه بپیوندید!"
        background="bg-header-representation"
      />
      <Option />
      <Advantage />
      <Advice />
      <Form />
      <Footer />
    </>
  );
}
