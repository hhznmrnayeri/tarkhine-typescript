import Index from "./view/Home/Index";
import { Index as Branch } from "./view/Branch/Index";
import { Index as Menu } from "./view/Menu/Index";
const routes = [
  { path: "/", element: <Index /> },
  { path: "branch", element: <Branch /> },
  { path: "menu", element: <Menu /> },
];
export default routes;
