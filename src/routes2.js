/** @format */

// HoD routes

import Dashboard from "views/Home/DashBoard/Dashboard2.js";
import GeneralInformation from "views/Home/GeneralInformation/GeneralInformation2";
import InternationalExposure from "views/Home/InternationalExposure/InternationalExposure2";
import Extracurricular from "views/Home/ExtraCurricular/Extracurricular2";
import Academic from "views/Home/Academic/Academic2";
import ProfessionalDevelopment from "views/Home/ProfessionalDevelopment/ProfessionalDevelopment2";

import Profile from "views/Home/Profile/Profile2.js";
import SignIn from "views/Pages/SignIn.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: <HomeIcon color="inherit" />,
  //   component: Dashboard,
  //   layout: "/admin2",
  // },
  {
    path: "/GeneralInformation",
    name: "General Information",
    icon: <StatsIcon color="inherit" />,
    component: GeneralInformation,
    layout: "/admin2",
  },
  {
    path: "/InternationalExposure",
    name: (
      <p
        style={{
          textAlign: "left",

          whiteSpace: "normal",
          wordWrap: "break-word",
        }}
      >
        International Exposure
      </p>
    ),
    icon: <RocketIcon color="inherit" />,
    component: InternationalExposure,
    layout: "/admin2",
  },
  {
    path: "/Extracurricular",
    name: "Extracurricular",
    icon: <CreditIcon color="inherit" />,
    component: Extracurricular,
    layout: "/admin2",
  },
  {
    path: "/ProfessionalDevelopment",
    name: (
      <p
        style={{
          textAlign: "left",
          lineHeight: "1.2rem",
          whiteSpace: "normal",
          wordWrap: "break-word",
        }}
      >
        Professional Development
      </p>
    ),
    icon: <CreditIcon color="inherit" />,
    component: ProfessionalDevelopment,
    layout: "/admin2",
  },
  {
    path: "/Academics",
    name: "Academics",
    icon: <DocumentIcon color="inherit" />,
    component: Academic,
    layout: "/admin2",
  },

  // {
  //   path: "/profile",
  //   name: "Profile",
  //   icon: <PersonIcon color="inherit" />,
  //   secondaryNavbar: true,
  //   component: Profile,
  //   layout: "/admin2",
  // },
  {
    path: "/signin",
    name: "Log Out",
    icon: <DocumentIcon color="inherit" />,
    component: SignIn,
    layout: "/auth",
  },
];
export default dashRoutes;
