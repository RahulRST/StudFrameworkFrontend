/** @format */

// Official routes

import Dashboard from "views/Home/DashBoard/Dashboard3";
import GeneralInformation from "views/Home/GeneralInformation/GeneralInformation3";
import InternationalExposure3 from "views/Home/InternationalExposure/InternationalExposure3";
import Extracurricular from "views/Home/ExtraCurricular/Extracurricular3";
import ProfessionalDevelopment from "views/Home/ProfessionalDevelopment/ProfessionalDevelopment3";
import Academic from "views/Home/Academic/Academic3";

import Profile from "views/Home/Profile/Profile3.js";
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
  //   layout: "/admin3",
  // },
  {
    path: "/GeneralInformation",
    name: "General Information",
    icon: <StatsIcon color="inherit" />,
    component: GeneralInformation,
    layout: "/admin3",
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
    component: InternationalExposure3,
    layout: "/admin3",
  },
  {
    path: "/Extracurricular",
    name: "Extracurricular",
    icon: <CreditIcon color="inherit" />,
    component: Extracurricular,
    layout: "/admin3",
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
    layout: "/admin3",
  },
  {
    path: "/Academics",
    name: "Academics",
    icon: <DocumentIcon color="inherit" />,
    component: Academic,
    layout: "/admin3",
  },

  {
    path: "/profile",
    name: "Profile",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: Profile,
    layout: "/admin3",
  },
  {
    path: "/signin",
    name: "Log Out",
    icon: <DocumentIcon color="inherit" />,
    component: SignIn,
    layout: "/auth",
  },
];
export default dashRoutes;
