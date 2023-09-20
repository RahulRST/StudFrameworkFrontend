/** @format */

// Class Advisor routes

import Dashboard from "views/Home/DashBoard/Dashboard1.js";
import GeneralInformation from "views/Home/GeneralInformation/GeneralInformation1";
import InternationalExposure from "views/Home/InternationalExposure/InternationalExposure1";
import Extracurricular from "views/Home/ExtraCurricular/Extracurricular1";
import Academic from "views/Home/Academic/Academic1";
import ProfessionalDevelopment from "views/Home/ProfessionalDevelopment/ProfessionalDevelopment1";

import Profile from "views/Home/Profile/Profile1.js";
import SignIn from "views/Pages/SignIn.js";

import {
  HomeIcon,
  StatsIcon,
  DocumentIcon,
  PersonIcon,
  RocketIcon,
  CreditIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: <HomeIcon color="inherit" />,
  //   component: Dashboard,
  //   layout: "/admin1",
  // },
  {
    path: "/GeneralInformation",
    name: "General Information",
    icon: <StatsIcon color="inherit" />,
    component: GeneralInformation,
    layout: "/admin1",
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
    layout: "/admin1",
  },
  {
    path: "/Extracurricular",
    name: "Extracurricular",
    icon: <CreditIcon color="inherit" />,
    component: Extracurricular,
    layout: "/admin1",
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
    layout: "/admin1",
  },
  {
    path: "/Academics",
    name: "Academics",
    icon: <DocumentIcon color="inherit" />,
    component: Academic,
    layout: "/admin1",
  },

  {
    path: "/profile",
    name: "Profile",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: Profile,
    layout: "/admin1",
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
