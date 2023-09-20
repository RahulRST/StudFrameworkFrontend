/** @format */

//HoD Academic

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
  IconButton,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import StudentListAcademic from "components/Tables/StudentList/StudentListAcademic2";
import { server_URL } from "controller/urls_config";

var data2 = [];
import { CSVLink } from "react-csv";

function Academic() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm1, setSearchTerm1] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [Loaded, setLoading] = useState(false);

  let params = new URLSearchParams();
  params.append("department", localStorage.getItem("dept"));
  params.append("StudentDetails", localStorage.getItem("StudentDetails"));

  useEffect(async () => {
    axios.post(server_URL + "AcademicsDataHOD", params).then((items) => {
      setData(items.data);
      setLoading(false);
    });
  }, []);

  const textColor = useColorModeValue("gray.700", "white");
  const inputBg = useColorModeValue("white", "gray.800");
  const mainorange = useColorModeValue("orange.300", "orange.300");
  const searchIconColor = useColorModeValue("gray.700", "gray.200");

  data2 = data.filter((item) => {
    if (searchTerm2 == "" && searchTerm == "" && searchTerm1 == "") {
      return item;
    } else if (searchTerm2 !== "" && searchTerm1 == "" && searchTerm == "") {
      if (item.dept.toLowerCase().includes(searchTerm2.toLocaleLowerCase())) {
        return item;
      }
    } else if (searchTerm2 == "" && searchTerm1 !== "" && searchTerm == "") {
      if (item.batch.toLowerCase().includes(searchTerm1.toLocaleLowerCase())) {
        return item;
      }
    } else if (searchTerm2 !== "" && searchTerm1 !== "" && searchTerm == "") {
      if (
        item.dept.toLowerCase().includes(searchTerm2.toLocaleLowerCase()) &&
        item.batch.toLowerCase().includes(searchTerm1.toLocaleLowerCase())
      ) {
        return item;
      }
    } else {
      if (
        item.dept.toLowerCase().includes(searchTerm2.toLocaleLowerCase()) &&
        item.batch.toLowerCase().includes(searchTerm1.toLocaleLowerCase())
      ) {
        if (
          item.sname.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
          item.roll_no.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
          item.reg_no.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        ) {
          return item;
        }
      }
    }
  });

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card mb="1rem">
        <CardBody>
          <Flex flexDirection="column" align="center" justify="center" w="100%">
            <Text fontSize="xl" color={textColor} fontWeight="bold" mr="auto">
              Academic Results
            </Text>
          </Flex>
        </CardBody>

        <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }} gap={5}>
          <Box>
            <CardHeader mt="1em">
              <Text fontSize="lg" color={textColor} fontWeight="semi">
                Search Batch
              </Text>
            </CardHeader>

            <InputGroup
              bg={inputBg}
              mt="1rem"
              borderRadius="15px"
              w="cover"
              _focus={{
                borderColor: { mainorange },
              }}
              _active={{
                borderColor: { mainorange },
              }}
            >
              <InputLeftElement
                children={
                  <IconButton
                    bg="inherit"
                    borderRadius="inherit"
                    _hover="none"
                    _active={{
                      bg: "inherit",
                      transform: "none",
                      borderColor: "transparent",
                    }}
                    _focus={{
                      boxShadow: "none",
                    }}
                    icon={
                      <SearchIcon color={searchIconColor} w="15px" h="15px" />
                    }
                  ></IconButton>
                }
              />

              <Input
                onChange={(event) => setSearchTerm1(event.target.value)}
                fontSize="xs"
                py="11px"
                placeholder="Type batch"
                borderRadius="inherit"
                value={searchTerm1}
              />
            </InputGroup>
          </Box>

          <Box>
            <CardHeader mt="1em">
              <Text fontSize="lg" color={textColor} fontWeight="semi">
                Search Student
              </Text>
            </CardHeader>
            <InputGroup
              bg={inputBg}
              mt="1rem"
              borderRadius="15px"
              w="cover"
              _focus={{
                borderColor: { mainorange },
              }}
              _active={{
                borderColor: { mainorange },
              }}
            >
              <InputLeftElement
                children={
                  <IconButton
                    bg="inherit"
                    borderRadius="inherit"
                    _hover="none"
                    _active={{
                      bg: "inherit",
                      transform: "none",
                      borderColor: "transparent",
                    }}
                    _focus={{
                      boxShadow: "none",
                    }}
                    icon={
                      <SearchIcon color={searchIconColor} w="15px" h="15px" />
                    }
                  ></IconButton>
                }
              />

              <Input
                onChange={(event) => setSearchTerm(event.target.value)}
                fontSize="xs"
                py="11px"
                placeholder="Type here..."
                borderRadius="inherit"
                value={searchTerm}
              />
            </InputGroup>
          </Box>
        </SimpleGrid>
        <Box alignSelf="flex-end">
          <CSVLink data={data2}>
            <Button
              minWidth="fit-content"
              mt="1em"
              onClick="m"
              colorScheme="orange"
              variant="solid"
            >
              Download Report
            </Button>
          </CSVLink>
        </Box>
      </Card>
      <Card>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Students List
          </Text>
        </CardHeader>
        <CardBody overflowX={{ sm: "scroll" }}>
          <Table variant="simple" color={textColor} id="dataTable">
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th color="gray.400">Roll No.</Th>
                <Th color="gray.400">Name</Th>
                <Th color="gray.400">Register No.</Th>
                <Th color="gray.400">batch</Th>
                <Th color="gray.400">Email</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data
                .filter((item) => {
                  if (
                    searchTerm2 == "" &&
                    searchTerm == "" &&
                    searchTerm1 == ""
                  ) {
                    return item;
                  } else if (
                    searchTerm2 !== "" &&
                    searchTerm1 == "" &&
                    searchTerm == ""
                  ) {
                    if (
                      item.dept
                        .toLowerCase()
                        .includes(searchTerm2.toLocaleLowerCase())
                    ) {
                      return item;
                    }
                  } else if (
                    searchTerm2 == "" &&
                    searchTerm1 !== "" &&
                    searchTerm == ""
                  ) {
                    if (
                      item.batch
                        .toLowerCase()
                        .includes(searchTerm1.toLocaleLowerCase())
                    ) {
                      return item;
                    }
                  } else if (
                    searchTerm2 !== "" &&
                    searchTerm1 !== "" &&
                    searchTerm == ""
                  ) {
                    if (
                      item.dept
                        .toLowerCase()
                        .includes(searchTerm2.toLocaleLowerCase()) &&
                      item.batch
                        .toLowerCase()
                        .includes(searchTerm1.toLocaleLowerCase())
                    ) {
                      return item;
                    }
                  } else {
                    if (
                      item.dept
                        .toLowerCase()
                        .includes(searchTerm2.toLocaleLowerCase()) &&
                      item.batch
                        .toLowerCase()
                        .includes(searchTerm1.toLocaleLowerCase())
                    ) {
                      if (
                        item.sname
                          .toLowerCase()
                          .includes(searchTerm.toLocaleLowerCase()) ||
                        item.roll_no
                          .toLowerCase()
                          .includes(searchTerm.toLocaleLowerCase()) ||
                        item.reg_no
                          .toLowerCase()
                          .includes(searchTerm.toLocaleLowerCase())
                      ) {
                        return item;
                      }
                    }
                  }
                })
                .map((item) => {
                  return (
                    <StudentListAcademic
                      roll={item.roll_no}
                      name={item.sname}
                      reg={item.reg_no}
                      batch={item.batch}
                      email={item.licet_email}
                      dept={item.dept}
                    />
                  );
                })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Academic;
