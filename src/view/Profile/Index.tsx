import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Aside from "./Aside";
export function Index() {
  return (
    <>
      <Nav title="profile" shadow={true} />
      <Aside />
      <Footer />
    </>
  );
}
