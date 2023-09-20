/** @format */

// Invisible Routes

import GeneralInformationdata1 from "views/Pages/GeneralInformationData/GeneralInformationdata1";
import GeneralInformationdata2 from "views/Pages/GeneralInformationData/GeneralInformationdata2";
import GeneralInformationdata3 from "views/Pages/GeneralInformationData/GeneralInformationdata3";
import GeneralInformationdata4 from "views/Pages/GeneralInformationData/GeneralInformationdata4";

import InternationalData1 from "views/Pages/InternationalData/InternationalData1";
import InternationalData2 from "views/Pages/InternationalData/InternationalData2";
import InternationalData3 from "views/Pages/InternationalData/InternationalData3";
import InternationalData4 from "views/Pages/InternationalData/InternationalData4";

import ExtraCurricularData1 from "views/Pages/ExtraCurricularData/ExtraCurricularData1";
import ExtraCurricularData2 from "views/Pages/ExtraCurricularData/ExtraCurricularData2";
import ExtraCurricularData3 from "views/Pages/ExtraCurricularData/ExtraCurricularData3";
import ExtraCurricularData4 from "views/Pages/ExtraCurricularData/ExtraCurricularData4";

import Academicdata1 from "views/Pages/AcademicData/Academicdata1";
import Academicdata2 from "views/Pages/AcademicData/Academicdata2";
import Academicdata3 from "views/Pages/AcademicData/Academicdata3";
import Academicdata4 from "views/Pages/AcademicData/Academicdata4";

import ProfessionalDevelopmentData1 from "views/Pages/ProfessionalDevelopmentData/ProfessionalDevelopmentData1";
import ProfessionalDevelopmentData2 from "views/Pages/ProfessionalDevelopmentData/ProfessionalDevelopmentData2";
import ProfessionalDevelopmentData3 from "views/Pages/ProfessionalDevelopmentData/ProfessionalDevelopmentData3";
import ProfessionalDevelopmentData4 from "views/Pages/ProfessionalDevelopmentData/ProfessionalDevelopmentData4";

import GeneralInformationDataEdit from "views/Pages/Edit/GeneralInformationDataEdit";
import GeneralInformationDataEdit4 from "views/Pages/Edit/GeneralInformationDataEdit4";
import GeneralInformationdata from "views/Pages/Edit/GeneralInformationdata";

import AdminControlCreate from "views/Home/Admin Controls/AdminControlCreate";
import AdminControlEdit from "views/Home/Admin Controls/AdminControlEdit";

import Error404 from "views/Pages/Error404.js";
import ServerError from "views/Pages/ServerError";

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
    path: "/GeneralInformationdata",
    component: GeneralInformationdata1,
    layout: "/admin1",
  },
  {
    path: "/GeneralInformationdata",
    component: GeneralInformationdata2,
    layout: "/admin2",
  },
  {
    path: "/GeneralInformationdata",
    component: GeneralInformationdata3,
    layout: "/admin3",
  },
  {
    path: "/GeneralInformationdata",
    component: GeneralInformationdata4,
    layout: "/admin4",
  },

  {
    path: "/GeneralInformationDataEdit",
    component: GeneralInformationDataEdit,
    layout: "/admin1",
  },
  {
    path: "/GeneralInformationDataEdit",
    component: GeneralInformationDataEdit4,
    layout: "/admin4",
  },

  {
    path: "/InternationalData",
    component: InternationalData1,
    layout: "/admin1",
  },
  {
    path: "/InternationalData",
    component: InternationalData2,
    layout: "/admin2",
  },
  {
    path: "/InternationalData",
    component: InternationalData3,
    layout: "/admin3",
  },
  {
    path: "/InternationalData",
    component: InternationalData4,
    layout: "/admin4",
  },

  {
    path: "/ExtracurricularData",
    component: ExtraCurricularData1,
    layout: "/admin1",
  },
  {
    path: "/ExtracurricularData",
    component: ExtraCurricularData2,
    layout: "/admin2",
  },
  {
    path: "/ExtracurricularData",
    component: ExtraCurricularData3,
    layout: "/admin3",
  },
  {
    path: "/ExtracurricularData",
    component: ExtraCurricularData4,
    layout: "/admin4",
  },
  {
    path: "/Academicdata",
    component: Academicdata1,
    layout: "/admin1",
  },
  {
    path: "/Academicdata",
    component: Academicdata2,
    layout: "/admin2",
  },
  {
    path: "/Academicdata",
    component: Academicdata3,
    layout: "/admin3",
  },
  {
    path: "/Academicdata",
    component: Academicdata4,
    layout: "/admin4",
  },

  {
    path: "/ProfessionalDevelopmentData",
    component: ProfessionalDevelopmentData1,
    layout: "/admin1",
  },
  {
    path: "/ProfessionalDevelopmentData",
    component: ProfessionalDevelopmentData2,
    layout: "/admin2",
  },
  {
    path: "/ProfessionalDevelopmentData",
    component: ProfessionalDevelopmentData3,
    layout: "/admin3",
  },
  {
    path: "/ProfessionalDevelopmentData",
    component: ProfessionalDevelopmentData4,
    layout: "/admin4",
  },

  {
    path: "/AdminControlEdit",
    name: "Admin Controls",
    icon: <DocumentIcon color="inherit" />,
    component: AdminControlEdit,
    layout: "/admin4",
  },
  {
    path: "/AdminControlCreate",
    name: "Admin Controls",
    icon: <DocumentIcon color="inherit" />,
    component: AdminControlCreate,
    layout: "/admin4",
  },

  {
    path: "/GeneralInformationdata",
    component: GeneralInformationdata,
    layout: "/auth",
  },
  {
    path: "/Error404",
    component: Error404,
    layout: "/auth",
  },
  {
    path: "/ServerError",
    component: ServerError,
    layout: "/auth",
  },
];
export default dashRoutes;
