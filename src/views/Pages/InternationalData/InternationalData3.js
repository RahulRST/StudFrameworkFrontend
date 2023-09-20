/** @format */

//Official International Exposure Data

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
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import InternationalTableRow from "components/Tables/InternationalTableRow/InternationalTableRow2";
import { server_URL } from "controller/urls_config";

function InternationalData() {
  const textColor = useColorModeValue("gray.700", "white");
  const [data, setData] = useState([]);

  const Null_message = "NULL";

  let params = new URLSearchParams();
  params.append("Internexroll", localStorage.getItem("International"));
  useEffect(async () => {
    axios.post(server_URL + "InternationalExposure", params).then((items) => {
      setData(items.data);
    });
  }, []);
  return (
    <Flex direction="column" pt={{ base: "120px", md: "65px" }}>
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Card>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Summer Program Details
            </Text>
          </CardHeader>
          <CardBody overflowX={{ sm: "scroll" }}>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th color="gray.400">Campus</Th>
                  <Th color="gray.400">Date and Year</Th>
                  <Th color="gray.400">Project</Th>
                  <Th color="gray.400">Outcome</Th>
                  <Th color="gray.400">Personal Development</Th>
                  <Th color="gray.400">
                    Foreign Language Courses Completed or Pursuing
                  </Th>
                  <Th color="gray.400">Credits</Th>
                  <Th color="gray.400">Verify Status</Th>
                </Tr>
              </Thead>

              <Tbody>
                {data.map((item) => {
                  return (
                    <InternationalTableRow
                      id={item.s_no || Null_message}
                      row1={item.foreign_campus || Null_message}
                      row2={item.duration || Null_message}
                      row3={item.project || Null_message}
                      row4={item.outcome || Null_message}
                      row5={item.personal_development || Null_message}
                      row6={item.foreign_language_courses || Null_message}
                      row7={item.credits || Null_message}
                      row8={item.verify || Null_message}
                    />
                  );
                })}
              </Tbody>
            </Table>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Flex>
  );
}

export default InternationalData;
