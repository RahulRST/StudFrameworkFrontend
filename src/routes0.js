/** @format */

// Student routes

import Dashboard from "views/Home/DashBoard/Dashboard0.js";
import GeneralInformation from "views/Home/GeneralInformation/GeneralInformation0";
import InternationalData from "views/Pages/InternationalData/InternationalData0";
import ExtraCurricularData from "views/Pages/ExtraCurricularData/ExtraCurricularData0";
import Academicsdata from "views/Pages/AcademicData/Academicdata0";
import ProfessionalDevelopmentData0 from "views/Pages/ProfessionalDevelopmentData/ProfessionalDevelopmentData0";
import LicetCredits from "views/Home/LICET Credits/LicetCredits0";

import Profile from "views/Home/Profile/Profile0.js";
import SignIn from "views/Pages/SignIn.js";

import {
  ProfileIcon,
  StatsIcon,
  CartIcon,
  SupportIcon,
  DocumentIcon,
  GlobeIcon,
  ClockIcon,
  RocketIcon
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
    icon: <DocumentIcon color="inherit" />,
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
    icon: <GlobeIcon color="inherit" />,
    component: InternationalData,
    layout: "/admin0",
  },
  {
    path: "/ExtracurricularData",
    name: "ExtraCurricular",
    icon: <ClockIcon color="inherit" />,
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
    icon: <RocketIcon color="inherit" />,
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
    path: "/Licetcredits",
    name: "LICET Credits",
    icon: <CartIcon color="inherit" />,
    component: LicetCredits,
    layout: "/admin0",
  },

  {
    path: "/profile",
    name: "Profile",
    icon: <ProfileIcon color="inherit" />,
    secondaryNavbar: true,
    component: Profile,
    layout: "/admin0",
  },
  {
    path: "/signin",
    name: "Log Out",
    icon: <SupportIcon color="inherit" />,
    component: SignIn,
    layout: "/auth",
  },
];
export default dashRoutes;
