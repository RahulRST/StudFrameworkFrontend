/** @format */

// Invisible Routes

import GeneralInformationdata1 from "views/Pages/GeneralInformationData/GeneralInformationdata1";
import GeneralInformationdata2 from "views/Pages/GeneralInformationData/GeneralInformationdata2";
import GeneralInformationdata3 from "views/Pages/GeneralInformationData/GeneralInformationdata3";

import InternationalData1 from "views/Pages/InternationalData/InternationalData1";
import InternationalData2 from "views/Pages/InternationalData/InternationalData2";
import InternationalData3 from "views/Pages/InternationalData/InternationalData3";

import ExtraCurricularData1 from "views/Pages/ExtraCurricularData/ExtraCurricularData1";
import ExtraCurricularData2 from "views/Pages/ExtraCurricularData/ExtraCurricularData2";
import ExtraCurricularData3 from "views/Pages/ExtraCurricularData/ExtraCurricularData3";

import Academicdata1 from "views/Pages/AcademicData/Academicdata1";
import Academicdata2 from "views/Pages/AcademicData/Academicdata2";
import Academicdata3 from "views/Pages/AcademicData/Academicdata3";

import ProfessionalDevelopmentData1 from "views/Pages/ProfessionalDevelopmentData/ProfessionalDevelopmentData1";
import ProfessionalDevelopmentData2 from "views/Pages/ProfessionalDevelopmentData/ProfessionalDevelopmentData2";

import GeneralInformationDataEdit from "views/Pages/Edit/GeneralInformationDataEdit";
import GeneralInformationdata from "views/Pages/Edit/GeneralInformationdata";

import Error404 from "views/Pages/Error404.js";
import ServerError from "views/Pages/ServerError";

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
    path: "/GeneralInformationDataEdit",
    component: GeneralInformationDataEdit,
    layout: "/admin1",
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
