import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import MainSection from "./MainSection";
export function Index() {
  return (
    <div>
      <Nav title="buy" shadow={true} />
      <MainSection />
      <Footer />
    </div>
  );
}
