/** @format */

//Official Dashboard/General

import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";

var data2 = [];

var Loader = require("react-loader");
import SignIn from "../../Pages/SignIn";

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
  useToast,
  Select,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import GeneralParticularstablerow from "components/Tables/StudentList/StudentListGI4";

import { server_URL } from "controller/urls_config";

// Loading var
var is_loading = true;

function GeneralInformation3() {
  const [data, setData] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [Loaded, setLoading] = useState(false);

  let params = new URLSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm1, setSearchTerm1] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");

  // Toast var
  const toast = useToast();

  params.append("department", localStorage.getItem("dept"));
  let auth_token = localStorage.getItem("auth_token");

  // useEffect(async () => {
  //   axios.post(server_URL + "GeneralOfficial", params).then((items) => {
  //     setData(items.data);
  //     setLoading(true);
  //   });

  // });

  // useEffect(async () => {
  // axios.post(server_URL + "GeneralOfficialDepartment",params).then((items) => {
  //   setData3(items.data3);
  //   });
  // });

  useEffect(async () => {
    axios
      .all([
        axios.post(server_URL + "GeneralOfficial", params),
        axios.post(server_URL + "GeneralOfficialDepartment", params),
        axios.post(server_URL + "GeneralOfficialBatch", params),
      ])
      .then(
        axios.spread((data, data3, data4) => {
          setData(data.data);
          setData3(data3.data);
          setData4(data4.data);
          setLoading(true);
        })
      );
  }, []);

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

  const textColor = useColorModeValue("gray.700", "white");
  const inputBg = useColorModeValue("white", "gray.800");
  const mainorange = useColorModeValue("orange.300", "orange.300");
  const searchIconColor = useColorModeValue("gray.700", "gray.200");

  if (auth_token != -1) {
    return (
      <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
        <Loader color="#FBD38D" height={10} width={10} loaded={Loaded} />
        <Card mb="1rem">
          <CardBody>
            <Flex
              flexDirection="column"
              align="center"
              justify="center"
              w="100%"
            >
              <Text fontSize="xl" color={textColor} fontWeight="bold" mr="auto">
                General Information
              </Text>
            </Flex>
          </CardBody>
          <SimpleGrid columns={{ sm: 1, md: 3, xl: 3 }} gap={5}>
            <Box>
              <CardHeader mt="1em">
                <Text fontSize="lg" color={textColor} fontWeight="semi">
                  Select Department
                </Text>
              </CardHeader>

              {/* <InputGroup
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
                  onChange={(event) => setSearchTerm2(event.target.value)}
                  fontSize="xs"
                  py="11px"
                  placeholder="Type department"
                  borderRadius="inherit"
                  value={searchTerm2}
                />
              </InputGroup> */}

              <Select
                mt="1em"
                bg={inputBg}
                borderRadius={15}
                placeholder="Department"
                id="dept"
                onChange={(e) => setSearchTerm2(e.target.value)}
              >
                {data3.map((data) => {
                  return <option value={data.dept}>{data.dept}</option>;
                })}
              </Select>
            </Box>

            <Box>
              <CardHeader mt="1em">
                <Text fontSize="lg" color={textColor} fontWeight="semi">
                  Select Batch
                </Text>
              </CardHeader>

              {/* <InputGroup
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
              </InputGroup> */}
              <Select
                mt="1em"
                bg={inputBg}
                borderRadius={15}
                placeholder="Batch"
                id="batch"
                onChange={(e) => setSearchTerm1(e.target.value)}
              >
                {data4.map((data) => {
                  return <option value={data.batch}>{data.batch}</option>;
                })}
              </Select>
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
                colorScheme="orange"
                alignSelf="flex-end"
                variant="solid"
                onClick={() =>
                  toast({
                    title: "Report Downloaded Successfully",
                    status: "success",
                    duration: 9000,
                    position: "top",
                    isClosable: true,
                  })
                }
              >
                Download Report
              </Button>
            </CSVLink>
          </Box>
        </Card>
        <Card overflowX={{ sm: "scroll", md: "scroll", xl: "scroll" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Students List
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th color="gray.400">Roll No.</Th>
                  <Th color="gray.400">Name</Th>
                  <Th color="gray.400">Register No</Th>
                  <Th color="gray.400">Department</Th>
                  <Th color="gray.400">Batch</Th>
                  <Th color="gray.400">Email</Th>
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
                      <GeneralParticularstablerow
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
  } else {
    return <SignIn></SignIn>;
  }
}

export default GeneralInformation3;
