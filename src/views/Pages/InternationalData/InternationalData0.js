/** @format */

//Student International Exposure Data

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
  Td,
  Input,
  useColorModeValue,
  Button,
  SimpleGrid,
  Collapse,
  SlideFade,
  Box,
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TableRow8 from "components/Tables/TableRow/TableRow8";
import { server_URL } from "controller/urls_config";
import { useToast } from '@chakra-ui/react'

function InternationalData() {

  const toast = useToast()
  const toastIdRef = React.useRef()
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const textColor = useColorModeValue("gray.700", "white");
  const [data, setData] = useState([]);
  const Null_message = "";

  let params = new URLSearchParams();
  params.append("StudentDetails", localStorage.getItem("StudentRoll"));
  useEffect(async () => {
    axios
      .post(server_URL + "InternationalExposureStudent", params)
      .then((items) => {
        setData(items.data);
      });
  },[]);

  function substudinter() {
    if (document.getElementById("CampusID").value == '' || document.getElementById("DYID").value == '' || 
    document.getElementById("ProjectID").value == '' || document.getElementById("OutcomeID").value == '' ||
    document.getElementById("PDID").value == '' || document.getElementById("FLCCID").value == ''
    ) {
      toastIdRef.current = toast({ description: "Enter all the fields!", status: 'warning',isClosable: true })
    } else {
      let params = new URLSearchParams();
    params.append("Campus", document.getElementById("CampusID").value);
    params.append("DateYear", document.getElementById("DYID").value);
    params.append("Project", document.getElementById("ProjectID").value);
    params.append("Outcome", document.getElementById("OutcomeID").value);
    params.append("PersD", document.getElementById("PDID").value);
    params.append("ForLCC", document.getElementById("FLCCID").value);
    params.append("StudentDetails", localStorage.getItem("StudentRoll"));
    params.append("status", "Pending");
    axios.post(server_URL + "insertstudinter", params).then(() => {
        toastIdRef.current = toast({ description: "Sucessfully Added", status: 'success',isClosable: true })
        data.push({ 
          'foreign_campus' : document.getElementById("CampusID").value,
          'date' : document.getElementById("DYID").value,
          'project' : document.getElementById("ProjectID").value, 
          'outcome' : document.getElementById("OutcomeID").value,
          'personal_development' : document.getElementById("PDID").value,   
          'foreign_language_courses' : document.getElementById("FLCCID").value,
          'verified' : "Pending"   
        })
        setShow(false)
    }).catch(()=>{
      toastIdRef.current = toast({ description: "Error Occurred! Verify entered details", status: 'error',isClosable: true })
    });
    }
  }

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
                    <TableRow8
                      id={item.s_no || Null_message}
                      row1={item.foreign_campus || Null_message}
                      row2={item.date || Null_message}
                      row3={item.project || Null_message}
                      row4={item.outcome || Null_message}
                      row5={item.personal_development || Null_message}
                      row6={item.foreign_language_courses || Null_message}
                      row7={item.credits==null ? "Pending" : item.credits}
                      row8={item.verified || Null_message}
                    />
                  );
                })}
              </Tbody>
            </Table>
          </CardBody>
        </Card>
        <Collapse in={show} animateOpacity>
          <Card overflowX={{ sm: "scroll" }}>
            <CardBody>
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
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td minWidth="16em">
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder="Enter Campus"
                          id="CampusID"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth="16em">
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="date"
                          id="DYID"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth="16em">
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder="Project"
                          id="ProjectID"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth="16em">
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder="Outcome"
                          id="OutcomeID"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth="16em">
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder="Personal Development"
                          id="PDID"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth="16em">
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder="Foreign Language Courses Completed or Pursuing"
                          id="FLCCID"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth="10em">
                      <SlideFade in={show}>
                        <Button
                          onClick={substudinter}
                          bg="orange.300"
                          width="fit-content"
                        >
                          Submit
                        </Button>
                      </SlideFade>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Collapse>

        <SimpleGrid
          marginLeft="auto"
          width="13em"
          me="2.5rem"
          columns={{ sm: 2, md: 2, xl: 2 }}
          gap={5}
        >
          <div></div>
          <Button
            ms="5"
            bg="orange.300"
            width="fit-content"
            onClick={handleToggle}
          >
            <AddIcon w={4} h={4} me="3" />
            Add
          </Button>
        </SimpleGrid>
      </SimpleGrid>
    </Flex>
  );
}

export default InternationalData;
