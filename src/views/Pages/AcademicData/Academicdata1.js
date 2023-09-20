/** @format */

//Class Advisor AcademicData

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
  Stat,
  StatLabel,
  SimpleGrid,
  Td,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import BarChart from "components/Charts/BarChart";

import Academicsummarytablerow from "components/Tables/AcademicTableRow/AcademicSummaryTableRow/Academicsummarytablerow1";

import axios from "axios";
import { server_URL } from "controller/urls_config";

function Academicdata() {
  const textColor = useColorModeValue("gray.700", "white");
  let params = new URLSearchParams();
  const [data, setdata] = useState([]);
  const [Adata, setAdata] = useState([]);
  const [Sdata, setSdata] = useState([]);

  params.append("StudentDetails", localStorage.getItem("StudentRoll"));
  useEffect(async () => {
    axios
      .all([
        axios.post(server_URL + "getColumnName", params),
        axios.post(server_URL + "AcademicsData", params),
        axios.post(server_URL + "academic_summary", params),
      ])
      .then(
        axios.spread((data1, data2, data3) => {
          let filtered_data = data1.data.filter(
            (header) =>
              header.COLUMN_NAME != "id" && header.COLUMN_NAME != "roll_no"
          );
          filtered_data.reverse();
          console.log("JJ");
          console.log(filtered_data);

          console.log(data2);
          let student_data = [];
          for (var i = 0; i < data2.data.length; i++) {
            let student = Object.values(data2.data[i]);
            student.splice(0, 2);
            student_data.push(student);
          }
          setdata(filtered_data);
          setAdata(student_data);
          setSdata(new Array(data3.data));
        })
      );
  }, []);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Internal Exam Results
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  {data.map((items) => {
                    return <Th color="gray.400">{items.COLUMN_NAME}</Th>;
                  })}
                </Tr>
              </Thead>

              <Tbody>
                {Adata.map((items) => {
                  return (
                    <Tr>
                      {items.map((item) => {
                        return <Td>{item}</Td>;
                      })}
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </CardBody>
        </Card>
        <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }} gap={5}>
          <Card minH="300px">
            <CardBody>
              <Flex
                flexDirection="column"
                align="center"
                justify="center"
                w="100%"
              >
                <Stat mr="auto">
                  <StatLabel
                    fontSize="sm"
                    color="gray.400"
                    fontWeight="bold"
                    pb="1.5rem"
                  >
                    Academic Results
                  </StatLabel>
                </Stat>
                <BarChart />
              </Flex>
            </CardBody>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Academic Summary
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  {Sdata.map((row) => {
                    return (
                      <Academicsummarytablerow
                        row1={row.attendance_percentage}
                        row2={row.CGPA}
                        row3={row.total_credits}
                        row4={row.placement_eligiblity}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </SimpleGrid>
      </SimpleGrid>
    </Flex>
  );
}

export default Academicdata;
