/** @format */

//Student AcademicData

import React, { useState, useEffect } from "react";
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
  TableContainer,
  Collapse,
  Button,
  SimpleGrid,
  Td,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import axios from "axios";
import { server_URL } from "controller/urls_config";

function LicetCredits() {
  var [drop1, setDrop1] = useState(false);
  var [drop2, setDrop2] = useState(false);
  var [drop3, setDrop3] = useState(false);
  var [drop4, setDrop4] = useState(false);

  const textColor = useColorModeValue("gray.700", "white");
  let params = new URLSearchParams();
  const [data, setdata] = useState([]);
  const [Adata, setAdata] = useState([]);
  params.append("StudentDetails", localStorage.getItem("StudentRoll"));
  useEffect(async () => {
    axios
      .all([
        axios.post(server_URL + "getColumnName", params),
        axios.post(server_URL + "AcademicsData", params),
      ])
      .then(
        axios.spread((data1, data2) => {
          let filtered_data = data1.data.filter(
            (header) =>
              header.COLUMN_NAME != "id" && header.COLUMN_NAME != "roll_no"
          );
          let student_data = [];
          for (var i = 0; i < data2.data.length; i++) {
            let student = Object.values(data2.data[i]);
            student.splice(0, 2);
            student_data.push(student);
          }
          setdata(filtered_data);
          setAdata(student_data);
        })
      );
  }, []);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
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
                setDrop1(true), setDrop2(true), setDrop3(true), setDrop4(true);
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
                  setDrop4(false);
              }}
            >
              Hide All
            </Button>
          </box>
        </Flex>

        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Year I
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
            <CardBody overflowX={{ sm: "scroll" }}>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Course/Activity</Th>
                      <Th>Requirements</Th>
                      <Th>
                        Marks expected <br></br> (out of)
                      </Th>
                      <Th>Credits</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td minWidth="20em">
                        <Tr>
                          <Td paddingLeft={0}>System Discovery</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>Industrial Visit</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>Guest Lecture/ Workshops</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>
                            Professional Integration Courses
                            {/* <br></br> (Skill rack
                          practice, other equivalents) */}
                          </Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>
                            Projects (Math-Science)/Competitions
                          </Td>
                        </Tr>
                      </Td>

                      <Td minWidth="20em">
                        <Tr>
                          <Td paddingLeft={0}>1 per semester</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>1 per semester</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>1 per semester</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>2 hrs/week</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>Bonus</Td>
                        </Tr>
                      </Td>

                      <Td minWidth="6em">
                        <Tr>
                          <Td paddingLeft={0}>10</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>10</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>10</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>30</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>_</Td>
                        </Tr>
                      </Td>

                      <Td minWidth="6em">
                        <Tr>
                          <Td paddingLeft={0}>{""}</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>{""}</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>{""}</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>{""}</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>{""}</Td>
                        </Tr>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
                <Table>
                  <Tr>
                    <Td minWidth={"46em"}>
                      TOTAL MARKS - Mandatory Components (I Year)
                    </Td>

                    <Td>Total</Td>
                  </Tr>
                </Table>
              </TableContainer>
            </CardBody>
          </Collapse>
        </Card>

        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Year II
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
            <CardBody overflowX={{ sm: "scroll" }}>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Course/Activity</Th>
                      <Th>Requirements</Th>
                      <Th>
                        Marks expected <br></br> (out of)
                      </Th>
                      <Th>Credits</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td minWidth="20em">
                        <Tr>
                          <Td paddingLeft={0}>System Analysis</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>Industrial Visit</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>Guest Lecture/ Workshops</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>In-plant training</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>Internship</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>
                            Certification Courses/ Online Course (MOOC)
                          </Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>Competitions and Hackathons</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>Projects</Td>
                        </Tr>
                      </Td>

                      <Td minWidth="20em">
                        <Tr>
                          <Td paddingLeft={0}>1 per semester</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>1 per semester</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>1 per semester</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>1 per year</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>Bonus</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>Bonus</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>Bonus</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>Bonus</Td>
                        </Tr>
                      </Td>

                      <Td minWidth="6em">
                        <Tr>
                          <Td paddingLeft={0}>29</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>10</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>10</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>25</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>_</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>_</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>_</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>_</Td>
                        </Tr>
                      </Td>

                      <Td minWidth="6em">
                        <Tr>
                          <Td paddingLeft={0}>{""}</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>{""}</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>{""}</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>{""}</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>{""}</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>{""}</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>{""}</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>{""}</Td>
                        </Tr>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
                <Table>
                  <Tr>
                    <Td minWidth={"46em"}>
                      TOTAL MARKS - Mandatory Components (II Year)
                    </Td>

                    <Td>Total</Td>
                  </Tr>
                </Table>
              </TableContainer>
            </CardBody>
          </Collapse>
        </Card>

        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Year III
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
          <Collapse in={drop3}>
            <CardBody overflowX={{ sm: "scroll" }}>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Course/Activity</Th>
                      <Th>Requirements</Th>
                      <Th>
                        Marks expected <br></br> (out of)
                      </Th>
                      <Th>Credits</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td minWidth="20em">
                        <Tr>
                          <Td paddingLeft={0}>Mini Project</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>Internship</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>
                            Certification Courses/ Online Course (MOOC)
                          </Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>Competitions and Hackathons </Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>
                            Soft skills (weekly assessment)
                          </Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>
                            Aptitude Training (weekly assessment)
                          </Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>
                            Employability Skills
                            {/* <br></br> (AMCAT & Co-Cubes
                          assessments /<br></br>Boot Camp, Weekly Coding
                          Challenge) */}
                          </Td>
                        </Tr>
                      </Td>

                      <Td minWidth="20em">
                        <Tr>
                          <Td paddingLeft={0}>1 per semester</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>1 per semester</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>3 per year</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>1 per semester </Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>72 hrs</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>72 hrs</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>Bonus</Td>
                        </Tr>
                      </Td>

                      <Td minWidth="6em">
                        <Tr>
                          <Td paddingLeft={0}>30</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>50</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>15</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>20</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>20</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>20</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>30</Td>
                        </Tr>
                      </Td>

                      <Td minWidth="6em">
                        <Tr>
                          <Td paddingLeft={0}>{""}</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>{""}</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>{""}</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>{""}</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>{""}</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>{""}</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>{""}</Td>
                        </Tr>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
                <Table>
                  <Tr>
                    <Td minWidth={"46em"}>
                      TOTAL MARKS - Mandatory Components (III Year)
                    </Td>

                    <Td>Total</Td>
                  </Tr>
                </Table>
              </TableContainer>
            </CardBody>
          </Collapse>
        </Card>

        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Year IV
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
            <CardBody overflowX={{ sm: "scroll" }}>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Course/Activity</Th>
                      <Th>Requirements</Th>
                      <Th>
                        Marks expected <br></br> (out of)
                      </Th>
                      <Th>Credits</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td minWidth="20em">
                        <Tr>
                          <Td paddingLeft={0}>Final Project</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>Publications </Td>
                        </Tr>
                      </Td>

                      <Td minWidth="20em">
                        <Tr>
                          <Td paddingLeft={0}>1 per semester</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>1 per semester</Td>
                        </Tr>
                      </Td>

                      <Td minWidth="6em">
                        <Tr>
                          <Td paddingLeft={0}>60</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>30</Td>
                        </Tr>
                      </Td>

                      <Td minWidth="6em">
                        <Tr>
                          <Td paddingLeft={0}>{""}</Td>
                        </Tr>
                        <Tr>
                          <Td paddingLeft={0}>{""}</Td>
                        </Tr>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
                <Table>
                  <Tr>
                    <Td minWidth={"46em"}>
                      TOTAL MARKS - Mandatory Components (IV Year)
                    </Td>

                    <Td>Total</Td>
                  </Tr>
                </Table>
              </TableContainer>
            </CardBody>
          </Collapse>
        </Card>
        <Card>
          <CardHeader>
            <Table>
              <Tr>
                <Td
                  minWidth={"46em"}
                  fontSize="l"
                  color={textColor}
                  fontWeight="bold"
                >
                  TOTAL MARKS - MANDATORY COMPONENTS
                </Td>
                <Td fontSize="l" color={textColor} fontWeight="bold">
                  Total
                </Td>
              </Tr>
            </Table>
          </CardHeader>
        </Card>
      </SimpleGrid>
    </Flex>
  );
}

export default LicetCredits;
