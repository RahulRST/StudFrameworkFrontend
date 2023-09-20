/** @format */

//Class Advisor ProfessionalDevelopment Data

import React, { useState, useEffect } from "react";
import axios from "axios";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  SimpleGrid,
  Button,
  Collapse,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import ProfessionalDevelopmentTableRow1 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDIndustrialVisitTR1";
import ProfessionalDevelopmentTableRow2 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDInplantTrainingTR1";
import ProfessionalDevelopmentTableRow3 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDGuestlectureTR1";
import ProfessionalDevelopmentTableRow4 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDMotivationalTalkTR1";
import ProfessionalDevelopmentTableRow5 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDInternshipTR1";
import ProfessionalDevelopmentTableRow6 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDCoursesTR1";
import ProfessionalDevelopmentTableRow7 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDWorkshopTR1";
import ProfessionalDevelopmentTableRow8 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDWebinarTR1";
import ProfessionalDevelopmentTableRow9 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDCompetitionsTR1";
import ProfessionalDevelopmentTableRow10 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDPlacementTR1";
import ProfessionalDevelopmentTableRow11 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDMiniProjectTR1";
import ProfessionalDevelopmentTableRow12 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDFinalprojectTR1";
import ProfessionalDevelopmentTableRow13 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDPublicationsTR1";
import ProfessionalDevelopmentTableRow14 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDSystemDiscoveryTR1";
import ProfessionalDevelopmentTableRow15 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDSkillRackTR1";
import ProfessionalDevelopmentTableRow16 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDSoftSkillsTR1";
import ProfessionalDevelopmentTableRow17 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDEmployabilityTR1";

import { URL, server_URL } from "controller/urls_config";

function ProfessionalDevelopmentData1() {
  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);
  const [drop4, setDrop4] = useState(false);
  const [drop5, setDrop5] = useState(false);
  const [drop6, setDrop6] = useState(false);
  const [drop7, setDrop7] = useState(false);
  const [drop8, setDrop8] = useState(false);
  const [drop9, setDrop9] = useState(false);
  const [drop10, setDrop10] = useState(false);
  const [drop11, setDrop11] = useState(false);
  const [drop12, setDrop12] = useState(false);
  const [drop13, setDrop13] = useState(false);
  const [drop14, setDrop14] = useState(false);
  const [drop15, setDrop15] = useState(false);
  const [drop16, setDrop16] = useState(false);
  const [drop17, setDrop17] = useState(false);

  const [p1data, setp1data] = useState([]);
  const [p2data, setp2data] = useState([]);
  const [p3data, setp3data] = useState([]);
  const [p4data, setp4data] = useState([]);
  const [p5data, setp5data] = useState([]);
  const [p6data, setp6data] = useState([]);
  const [p7data, setp7data] = useState([]);
  const [p8data, setp8data] = useState([]);
  const [p9data, setp9data] = useState([]);
  const [p10data, setp10data] = useState([]);
  const [p11data, setp11data] = useState([]);
  const [p12data, setp12data] = useState([]);
  const [p13data, setp13data] = useState([]);
  const [p14data, setp14data] = useState([]);
  const [p15data, setp15data] = useState([]);
  const [p16data, setp16data] = useState([]);
  const [p17data, setp17data] = useState([]);

  const textColor = useColorModeValue("gray.700", "white");
  const Null_message = "NULL";

  let params = new URLSearchParams();
  params.append("RollNumber", localStorage.getItem("generalStudent"));
  useEffect(async () => {
    axios
      .all([
        axios.post(server_URL + "Industrialv_cadisplay", params),
        axios.post(server_URL + "Inplant_cadisplay", params),
        axios.post(server_URL + "guest_Ca_display", params),
        axios.post(server_URL + "Motivational_cadisplay", params),
        axios.post(server_URL + "intern_CA_display", params),
        axios.post(server_URL + "cour_CA_display", params),
        axios.post(server_URL + "workshop_cadisplay", params),
        axios.post(server_URL + "webinar_cadisplay", params),
        axios.post(server_URL + "comp_ca_display", params),
        axios.post(server_URL + "placement_cadisplay", params),
        axios.post(server_URL + "Miniproj_cadisplay", params),
        axios.post(server_URL + "finpro_CA_display", params),
        axios.post(server_URL + "publication_cadisplay", params),
        axios.post(server_URL + "sdiscovery_cadisplay", params),
        axios.post(server_URL + "aptitude_cadisplay", params),
        axios.post(server_URL + "sskills_cadisplay", params),
        axios.post(server_URL + "empskills_cadisplay", params),
      ])
      .then(
        axios.spread(
          (
            data1,
            data2,
            data3,
            data4,
            data5,
            data6,
            data7,
            data8,
            data9,
            data10,
            data11,
            data12,
            data13,
            data14,
            data15,
            data16,
            data17
          ) => {
            setp1data(data1.data);
            setp2data(data2.data);
            setp3data(data3.data);
            setp4data(data4.data);
            setp5data(data5.data);
            setp6data(data6.data);
            setp7data(data7.data);
            setp8data(data8.data);
            setp9data(data9.data);
            setp10data(data10.data);
            setp11data(data11.data);
            setp12data(data12.data);
            setp13data(data13.data);
            setp14data(data14.data);
            setp15data(data15.data);
            setp16data(data16.data);
            setp17data(data17.data);
          }
        )
      );
  }, []);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "65px" }}>
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Flex direction="column" align="flex-end">
          <box>
            <Button
              ms="auto"
              me="1em"
              bg="orange.400"
              width="6em"
              height="2em"
              onClick={() => {
                setDrop1(true),
                  setDrop2(true),
                  setDrop3(true),
                  setDrop4(true),
                  setDrop5(true),
                  setDrop6(true),
                  setDrop7(true),
                  setDrop8(true),
                  setDrop9(true),
                  setDrop10(true),
                  setDrop11(true),
                  setDrop12(true),
                  setDrop13(true),
                  setDrop14(true),
                  setDrop15(true),
                  setDrop16(true),
                  setDrop17(true);
              }}
            >
              Show All
            </Button>

            <Button
              ms="auto"
              me="1em"
              bg="orange.400"
              width="6em"
              height="2em"
              onClick={() => {
                setDrop1(false),
                  setDrop2(false),
                  setDrop3(false),
                  setDrop4(false),
                  setDrop5(false),
                  setDrop6(false),
                  setDrop7(false),
                  setDrop8(false),
                  setDrop9(false),
                  setDrop10(false),
                  setDrop11(false),
                  setDrop12(false),
                  setDrop13(false),
                  setDrop14(false),
                  setDrop15(false),
                  setDrop16(false),
                  setDrop17(false);
              }}
            >
              Hide All
            </Button>
          </box>
        </Flex>
        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Industrial Visit
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop1(!drop1)}
            >
              {drop1 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop1}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Industry</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p1data.map((item1) => {
                    return (
                      <ProfessionalDevelopmentTableRow1
                        id={item1.s_no}
                        row1={item1.industry_name || Null_message}
                        row2={item1.date || Null_message}
                        row3={item1.outcome || Null_message}
                        row4={item1.credits || Null_message}
                        row5={item1.verified || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Inplant Training
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop2(!drop2)}
            >
              {drop2 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop2}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Industry</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p2data.map((item2) => {
                    return (
                      <ProfessionalDevelopmentTableRow2
                        id={item2.s_no}
                        row1={item2.industry || Null_message}
                        row2={item2.date || Null_message}
                        row3={item2.outcome || Null_message}
                        row4={item2.credits || Null_message}
                        row5={item2.verified || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Guest Lecture
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop3(!drop3)}
            >
              {drop3 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse mt="1em" in={drop3}>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Resource Person</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p3data.map((item3) => {
                    return (
                      <ProfessionalDevelopmentTableRow3
                        id={item3.s_no}
                        row1={item3.topic || Null_message}
                        row2={item3.resource_person || Null_message}
                        row3={item3.outcome || Null_message}
                        row4={item3.credits || Null_message}
                        row5={item3.verified || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Motivational Talks
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop4(!drop4)}
            >
              {drop4 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop4}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Resource Person</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p4data.map((item4) => {
                    return (
                      <ProfessionalDevelopmentTableRow4
                        id={item4.s_no}
                        row1={item4.topic || Null_message}
                        row2={item4.date || Null_message}
                        row3={item4.resource_person || Null_message}
                        row4={item4.outcome || Null_message}
                        row5={item4.credits || Null_message}
                        row6={item4.verified || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Internships
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop5(!drop5)}
            >
              {drop5 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop5}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Company</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Duration in months</Th>
                    <Th color="gray.400">Reference</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p5data.map((item5) => {
                    return (
                      <ProfessionalDevelopmentTableRow5
                        id={item5.s_no}
                        row1={item5.company_name || Null_message}
                        row2={item5.date || Null_message}
                        row3={item5.duration || Null_message}
                        row4={item5.reference || Null_message}
                        row5={item5.credits || Null_message}
                        row6={item5.verified || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Value Added Course
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop6(!drop6)}
            >
              {drop6 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop6}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Course Name</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p6data.map((item6) => {
                    return (
                      <ProfessionalDevelopmentTableRow6
                        id={item6.s_no}
                        row1={item6.course_name || Null_message}
                        row2={item6.date || Null_message}
                        row3={item6.outcome || Null_message}
                        row4={item6.credits || Null_message}
                        row5={item6.verified || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Workshop
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop7(!drop7)}
            >
              {drop7 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop7}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Resource Person</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p7data.map((item7) => {
                    return (
                      <ProfessionalDevelopmentTableRow7
                        id={item7.s_no}
                        row1={item7.topic || Null_message}
                        row2={item7.date || Null_message}
                        row3={item7.resource_person || Null_message}
                        row4={item7.outcome || Null_message}
                        row5={item7.credits || Null_message}
                        row6={item7.verified || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Webinar
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop8(!drop8)}
            >
              {drop8 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop8}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Resource Person</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p8data.map((item8) => {
                    return (
                      <ProfessionalDevelopmentTableRow8
                        id={item8.s_no}
                        row1={item8.topic || Null_message}
                        row2={item8.date || Null_message}
                        row3={item8.resource_person || Null_message}
                        row4={item8.outcome || Null_message}
                        row5={item8.credits || Null_message}
                        row6={item8.verified || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Competition
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop9(!drop9)}
            >
              {drop9 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop9}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Name</Th>
                    <Th color="gray.400">
                      Type of Competion (Coding / Project)
                    </Th>
                    <Th color="gray.400">Date and year</Th>
                    <Th color="gray.400">Position Secured</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p9data.map((item9) => {
                    return (
                      <ProfessionalDevelopmentTableRow9
                        id={item9.s_no}
                        row1={item9.comp_name || Null_message}
                        row2={item9.comp_type || Null_message}
                        row3={item9.date || Null_message}
                        row4={item9.position_secured || Null_message}
                        row5={item9.credits || Null_message}
                        row6={item9.verified || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Mini Project
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop11(!drop11)}
            >
              {drop11 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop11}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Title</Th>
                    <Th color="gray.400">Objective</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p11data.map((item11) => {
                    return (
                      <ProfessionalDevelopmentTableRow11
                        id={item11.s_no}
                        row1={item11.project_title || Null_message}
                        row2={item11.objective || Null_message}
                        row3={item11.outcome || Null_message}
                        row4={item11.credits || Null_message}
                        row5={item11.verified || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Final Project
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop12(!drop12)}
            >
              {drop12 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop12}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Title</Th>
                    <Th color="gray.400">Objective</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p12data.map((item12) => {
                    return (
                      <ProfessionalDevelopmentTableRow12
                        id={item12.s_no}
                        row1={item12.title || Null_message}
                        row2={item12.objective || Null_message}
                        row3={item12.outcome || Null_message}
                        row4={item12.credits || Null_message}
                        row5={item12.verified || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Publications
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop13(!drop13)}
            >
              {drop13 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop13}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Conference / Journal</Th>
                    <Th color="gray.400">Name of Conference / Journal</Th>
                    <Th color="gray.400">Title Of the Article</Th>
                    <Th color="gray.400">Impact Factor</Th>
                    <Th color="gray.400">Indexed In</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p13data.map((item13) => {
                    return (
                      <ProfessionalDevelopmentTableRow13
                        id={item13.s_no}
                        row1={item13.conf_or_journal || Null_message}
                        row2={item13.name || Null_message}
                        row3={item13.title || Null_message}
                        row4={item13.impact_factor || Null_message}
                        row5={item13.indexed_in || Null_message}
                        row6={item13.credits || Null_message}
                        row7={item13.verified || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Placement Training
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop10(!drop10)}
            >
              {drop10 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop10}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Aptitude</Th>
                    <Th color="gray.400">Soft Skill</Th>
                    <Th color="gray.400">Reasoning</Th>
                    <Th color="gray.400">Technical Skill</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p10data.map((item10) => {
                    return (
                      <ProfessionalDevelopmentTableRow10
                        id={item10.s_no}
                        row1={item10.aptitude || Null_message}
                        row2={item10.soft_skills || Null_message}
                        row3={item10.reasoning || Null_message}
                        row4={item10.technical_training || Null_message}
                        row5={item10.credits || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Aptitude
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop15(!drop15)}
            >
              {drop15 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop15}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Assessment</Th>
                    <Th color="gray.400">Date</Th>
                    <Th color="gray.400">Remarks</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p15data.map((item15) => {
                    return (
                      <ProfessionalDevelopmentTableRow15
                        id={item15.s_no}
                        row1={item15.assessment || Null_message}
                        row2={item15.date || Null_message}
                        row3={item15.remarks || Null_message}
                        row4={item15.credits || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        {/* <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Soft Skills
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop16(!drop16)}
            >
              {drop16 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop16}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Skill</Th>
                    <Th color="gray.400">Trainer</Th>
                    <Th color="gray.400">Date</Th>
                    <Th color="gray.400">Remarks</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p16data.map((item16) => {
                    return (
                      <ProfessionalDevelopmentTableRow16
                        id={item16.s_no}
                        row1={item16.skill || Null_message}
                        row2={item16.trainer || Null_message}
                        row3={item16.date || Null_message}
                        row4={item16.remarks || Null_message}
                        row5={item16.credits || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              System Discovery
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop14(!drop14)}
            >
              {drop14 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop14}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Components</Th>
                    <Th color="gray.400">Date</Th>
                    <Th color="gray.400">Remarks</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p14data.map((item14) => {
                    return (
                      <ProfessionalDevelopmentTableRow14
                        id={item14.s_no}
                        row1={item14.components || Null_message}
                        row2={item14.date || Null_message}
                        row3={item14.remarks || Null_message}
                        row4={item14.credits || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Employability Skills
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop17(!drop17)}
            >
              {drop17 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop17}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Components</Th>
                    <Th color="gray.400">Date</Th>
                    <Th color="gray.400">Remarks</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p17data.map((item17) => {
                    return (
                      <ProfessionalDevelopmentTableRow17
                        id={item17.s_no}
                        row1={item17.assessment || Null_message}
                        row2={item17.date || Null_message}
                        row3={item17.title || Null_message}
                        row4={item17.credits || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card> */}
      </SimpleGrid>
    </Flex>
  );
}

export default ProfessionalDevelopmentData1;
