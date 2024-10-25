import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Section from "./Section";
export function Index() {
  return (
    <>
      <Nav title="about" />
      <Header
        title="درباره ترخینه بیشتر بدانید!"
        background="bg-header-about"
      />
      <Section />
      <Footer />
    </>
  );
}
