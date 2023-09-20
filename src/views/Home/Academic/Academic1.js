/** @format */

//Class Advisor Academic

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
  useDisclosure,
  Collapse,
  Box,
  useToast,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import StudentListAcademic from "components/Tables/StudentList/StudentListAcademic1";
import { server_URL } from "controller/urls_config";
import { saveAs } from "file-saver";

var data2 = [];

import { CSVLink } from "react-csv";

function Academic() {
  const [data, setData] = useState([]);
  const [file, setfile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [Loaded, setLoading] = useState(false);

  // Toast var
  const toast = useToast();

  let params = new URLSearchParams();
  params.append("batch", localStorage.getItem("batch"));
  params.append("dept", localStorage.getItem("dept"));

  useEffect(async () => {
    axios.post(server_URL + "Academic", params).then((items) => {
      setData(items.data);
      setLoading(true);
    });
  }, []);

  let onFileChange = (event) => {
    setfile(event.target.files[0]);
  };

  function onFileUpload() {
    const formData = new FormData();
    formData.append("excel", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(server_URL + "bulkupload", formData, config);
  }

  const textColor = useColorModeValue("gray.700", "white");
  const inputBg = useColorModeValue("white", "gray.800");
  const mainorange = useColorModeValue("orange.300", "orange.300");
  const searchIconColor = useColorModeValue("gray.700", "gray.200");
  const { isOpen, onToggle } = useDisclosure();

  data2 = data.filter((item) => {
    if (searchTerm == "") {
      return item;
    } else if (
      item.sname.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      item.roll_no.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      item.batch.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      item.reg_no.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    ) {
      return item;
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

        <CardHeader mt="1em">
          <Text fontSize="lg" color={textColor} fontWeight="semi">
            Search Student
          </Text>
        </CardHeader>
        <InputGroup
          bg={inputBg}
          mt="1rem"
          mb="1rem"
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
                icon={<SearchIcon color={searchIconColor} w="15px" h="15px" />}
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

        <SimpleGrid
          alignSelf={{ sm: "center", md: "flex-end" }}
          columns={{ sm: 1, md: 2, xl: 2 }}
        >
          <Box>
            <Button
              minWidth={{ sm: "75vw", md: "fit-content" }}
              onClick={onToggle}
              colorScheme="orange"
              variant="solid"
              mb={{ sm: "1em", md: "0em" }}
            >
              Bulk Upload
            </Button>
          </Box>
          <Box>
            <CSVLink data={data2}>
              <Button
                minWidth={{ sm: "75vw", md: "fit-content" }}
                colorScheme="orange"
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
        </SimpleGrid>
      </Card>
      <Collapse in={isOpen} animateOpacity>
        <Card color="white" mb="4" bg="orange.300" rounded="md" shadow="md">
          <Input width="50%" type="file" onChange={onFileChange} />
          <Flex>
            {" "}
            <Button
              onClick={() => {
                onFileUpload();
                onToggle();
                toast({
                  title: "Uploaded Successfully",
                  status: "success",
                  duration: 9000,
                  position: "top",
                  isClosable: true,
                });
              }}
              ms="4"
              marginTop="2"
              bg="gray.700"
              width="fit-content"
            >
              Confirm
            </Button>
            <Button
              onClick={() => {
                saveAs(server_URL + "download_template", "template.xlsx");
              }}
              ms="4"
              marginTop="2"
              bg="gray.700"
              width="fit-content"
            >
              Download Template
            </Button>
          </Flex>
        </Card>
      </Collapse>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Students List
          </Text>
        </CardHeader>
        <CardBody>
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
                  if (searchTerm == "") {
                    return item;
                  } else if (
                    item.sname
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase()) ||
                    item.roll_no
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase()) ||
                    item.batch
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase()) ||
                    item.reg_no
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
                  ) {
                    return item;
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
