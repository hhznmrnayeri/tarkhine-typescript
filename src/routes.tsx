import Index from "./view/Home/Index";
import { Index as Branch } from "./view/Branch/Index";
import { Index as Menu } from "./view/Menu/Index";
import { Index as Representation } from "./view/Representation/Index";
import { Index as About } from "./view/About/Index";
import { Index as Contact } from "./view/Contact/Index";
import { Index as Search } from "./view/Search/Index";
import { Index as Ask } from "./view/Ask/Index";
const routes = [
  { path: "/", element: <Index /> },
  { path: "branch", element: <Branch /> },
  { path: "menu", element: <Menu /> },
  { path: "representation", element: <Representation /> },
  { path: "about", element: <About /> },
  { path: "contact", element: <Contact /> },
  { path: "search/:food", element: <Search /> },
  { path: "search/:food", element: <Ask /> },
];
export default routes;
