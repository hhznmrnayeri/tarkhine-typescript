import Index from "./view/Home/Index";
import { Index as Branch } from "./view/Branch/Index";

const routes = [
  { path: "/", element: <Index /> },
  { path: "branch", element: <Branch /> },
];
export default routes;
