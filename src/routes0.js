/** @format */

// Student routes

import Dashboard from "views/Home/DashBoard/Dashboard0.js";
import GeneralInformation from "views/Home/GeneralInformation/GeneralInformation0";
import InternationalData from "views/Pages/InternationalData/InternationalData0";
import ExtraCurricularData from "views/Pages/ExtraCurricularData/ExtraCurricularData0";
import Academicsdata from "views/Pages/AcademicData/Academicdata0";
import ProfessionalDevelopmentData0 from "views/Pages/ProfessionalDevelopmentData/ProfessionalDevelopmentData0";

import Profile from "views/Home/Profile/Profile0.js";
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
  //   layout: "/admin0",
  // },
  {
    path: "/GeneralInformation",
    name: "General Information",
    icon: <StatsIcon color="inherit" />,
    component: GeneralInformation,
    layout: "/admin0",
  },

  {
    path: "/InternationalData",
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
    icon: <StatsIcon color="inherit" />,
    component: InternationalData,
    layout: "/admin0",
  },
  {
    path: "/ExtracurricularData",
    name: "ExtraCurricular",
    icon: <StatsIcon color="inherit" />,
    component: ExtraCurricularData,
    layout: "/admin0",
  },
  {
    path: "/ProfessionalDevelopmentdata",
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
    icon: <StatsIcon color="inherit" />,
    component: ProfessionalDevelopmentData0,
    layout: "/admin0",
  },
  {
    path: "/Academicsdata",
    name: "Academics",
    icon: <StatsIcon color="inherit" />,
    component: Academicsdata,
    layout: "/admin0",
  },

  {
    path: "/profile",
    name: "Profile",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: Profile,
    layout: "/admin0",
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
