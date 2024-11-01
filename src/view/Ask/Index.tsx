import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
export function Index() {
  return (
    <div>
      <Nav title="about" />
      <Outlet />
      <Footer />
    </div>
  );
}
