import Index from "./view/Home/Index";
import { Index as Branch } from "./view/Branch/Index";
import { Index as Menu } from "./view/Menu/Index";
import { Index as Representation } from "./view/Representation/Index";
import { Index as About } from "./view/About/Index";
import { Index as Contact } from "./view/Contact/Index";
const routes = [
  { path: "/", element: <Index /> },
  { path: "branch", element: <Branch /> },
  { path: "menu", element: <Menu /> },
  { path: "representation", element: <Representation /> },
  { path: "about", element: <About /> },
  { path: "contact", element: <Contact /> },
];
export default routes;
