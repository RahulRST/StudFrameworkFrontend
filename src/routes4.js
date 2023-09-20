/** @format */

// Official routes

import Dashboard from "views/Home/DashBoard/Dashboard4";
import GeneralInformation from "views/Home/GeneralInformation/GeneralInformation4";
import InternationalExposure3 from "views/Home/InternationalExposure/InternationalExposure4";
import Extracurricular from "views/Home/ExtraCurricular/Extracurricular4";
import ProfessionalDevelopment from "views/Home/ProfessionalDevelopment/ProfessionalDevelopment4";
import Academic from "views/Home/Academic/Academic4";
import AdminControl from "views/Home/Admin Controls/AdminControl";

import Profile from "views/Home/Profile/Profile4.js";
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
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin4",
  },
  {
    path: "/GeneralInformation",
    name: "General Information",
    icon: <StatsIcon color="inherit" />,
    component: GeneralInformation,
    layout: "/admin4",
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
    layout: "/admin4",
  },
  {
    path: "/Extracurricular",
    name: "Extracurricular",
    icon: <CreditIcon color="inherit" />,
    component: Extracurricular,
    layout: "/admin4",
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
    layout: "/admin4",
  },
  {
    path: "/Academics",
    name: "Academics",
    icon: <DocumentIcon color="inherit" />,
    component: Academic,
    layout: "/admin4",
  },
  {
    path: "/AdminControl",
    name: "Admin Controls",
    icon: <DocumentIcon color="inherit" />,
    component: AdminControl,
    layout: "/admin4",
  },
  // {
  //   path: "/profile",
  //   name: "Profile",
  //   icon: <PersonIcon color="inherit" />,
  //   secondaryNavbar: true,
  //   component: Profile,
  //   layout: "/admin4",
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
