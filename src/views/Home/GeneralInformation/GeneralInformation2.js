/** @format */

//HoD Dashboard/General

import React, { useState, useEffect } from "react";

import axios from "axios";
import { CSVLink } from "react-csv";

// loader and global vars
var Loader = require("react-loader");
var data2 = [];

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
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import GeneralParticularstablerow from "components/Tables/StudentList/StudentListGI2";

import { server_URL } from "controller/urls_config";

function GeneralInformationHOD() {
  const [Loaded, setLoading] = useState(false),
    [data, setData] = useState([]),
    [searchTerm, setSearchTerm] = useState(""),
    [searchTerm1, setSearchTerm1] = useState("");

  // Toast var
  const toast = useToast();

  let params = new URLSearchParams();
  let auth_token = localStorage.getItem("auth_token");

  params.append("department", localStorage.getItem("dept"));

  useEffect(async () => {
    axios.post(server_URL + "GeneralHOD", params).then((items) => {
      setData(items.data);
      setLoading(true);
    });
  }, []);

  // Filter Download Updates
  data2 = data.filter((item) => {
    if (searchTerm == "" && searchTerm1 == "") {
      return item;
    } else if (searchTerm1 !== "" && searchTerm == "") {
      if (item.batch.toLowerCase().includes(searchTerm1.toLocaleLowerCase())) {
        return item;
      }
    } else {
      if (item.batch.toLowerCase().includes(searchTerm1.toLocaleLowerCase())) {
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

  // Styles
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
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
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
                  <Th color="gray.400">Batch</Th>
                  <Th color="gray.400">Email</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data
                  .filter((item) => {
                    if (searchTerm == "" && searchTerm1 == "") {
                      return item;
                    } else if (searchTerm1 != "" && searchTerm == "") {
                      if (
                        item.batch
                          .toLowerCase()
                          .includes(searchTerm1.toLocaleLowerCase())
                      ) {
                        return item;
                      }
                    } else {
                      if (
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

export default GeneralInformationHOD;
