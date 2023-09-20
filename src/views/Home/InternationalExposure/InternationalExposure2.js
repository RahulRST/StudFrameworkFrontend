//Hod International Exposure

import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";
var data2 = [];
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
// Custom components
import { SearchIcon } from "@chakra-ui/icons";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import StudentListInternational from "components/Tables/StudentList/StudentListInternational2";

import { server_URL } from "controller/urls_config";

function InternationalExposure() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm1, setSearchTerm1] = useState("");

  let params = new URLSearchParams();
  params.append("dept", localStorage.getItem("dept"));

  useEffect(async () => {
    axios.post(server_URL + "InternationalExpoHOD", params).then((items) => {
      setData(items.data);
      console.log(items.data);
    });
  }, []);

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
  console.log(data2);

  const textColor = useColorModeValue("gray.700", "white");
  const inputBg = useColorModeValue("white", "gray.800");
  const mainorange = useColorModeValue("orange.300", "orange.300");
  const searchIconColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card mb="1rem">
        <CardBody>
          <Flex flexDirection="column" align="center" justify="center" w="100%">
            <Text fontSize="xl" color={textColor} fontWeight="bold" mr="auto">
              International Exposure
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
              alignSelf="flex-end"
              variant="solid"
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
                  } else if (searchTerm1 !== "" && searchTerm == "") {
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
                    <StudentListInternational
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
}

export default InternationalExposure;
