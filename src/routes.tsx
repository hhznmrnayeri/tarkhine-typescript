import Index from "./view/Home/Index";
import { Index as Branch } from "./view/Branch/Index";
import { Index as Menu } from "./view/Menu/Index";
import { Index as Representation } from "./view/Representation/Index";
import { Index as About } from "./view/About/Index";
import { Index as Contact } from "./view/Contact/Index";
import { Index as Search } from "./view/Search/Index";
import { Index as Ask } from "./view/Ask/Index";
import { Index as Result } from "./view/Result/Index";
import { Index as Profile } from "./view/Profile/Index";
import { Index as Payment } from "./view/Payment/Index";
import QuestionSection from "./view/Ask/QuestionSection";
import PrivacySection from "./view/Ask/PrivacySection";
import RuleSection from "./view/Ask/RuleSection";
const routes = [
  { path: "/", element: <Index /> },
  { path: "branch", element: <Branch /> },
  { path: "menu", element: <Menu /> },
  { path: "representation", element: <Representation /> },
  { path: "about", element: <About /> },
  { path: "contact", element: <Contact /> },
  { path: "buy", element: <Payment /> },
  { path: "search/:food", element: <Search /> },
  { path: "payment", element: <Result /> },
  { path: "profile", element: <Profile /> },
  {
    path: "question",
    element: <Ask />,
    children: [
      { path: "", element: <QuestionSection /> },
      { path: "rules", element: <RuleSection /> },
      { path: "privacy", element: <PrivacySection /> },
    ],
  },
];
export default routes;
