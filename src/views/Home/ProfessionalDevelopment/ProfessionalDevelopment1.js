/** @format */

//Class Advisor Professional Development

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
  useToast,
  Box,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import StudentListProfessionalDevelopment from "components/Tables/StudentList/StudentListProfessionalDevelopment1";
import { saveAs } from "file-saver";
import { server_URL } from "controller/urls_config";

var Loader = require("react-loader");

function ProfessionalDevelopment() {
  function submit() {
    formData.delete("value");
    formData.append("value", document.getElementById("sel").value);
    axios({
      method: "post",
      url: server_URL + "bulkforpd",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((results) => {
      alert(results.data);
    });
  }

  // Toast var
  const toast = useToast();
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [Loaded, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formData = new FormData();

  let params = new URLSearchParams();
  params.append("batch", localStorage.getItem("batch"));
  params.append("dept", localStorage.getItem("dept"));

  useEffect(async () => {
    axios
      .post(server_URL + "ProfessionalDevelopmentCA", params)
      .then((items) => {
        setData(items.data);
        setLoading(true);
      });
  }, []);

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
  const textColor = useColorModeValue("gray.700", "white");
  const inputBg = useColorModeValue("white", "gray.800");
  const mainorange = useColorModeValue("orange.300", "orange.300");
  const searchIconColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Loader color="#FBD38D" height={10} width={10} loaded={Loaded} />
      <Card mb="1rem">
        <CardBody>
          <Flex flexDirection="column" align="center" justify="center" w="100%">
            <Text fontSize="xl" color={textColor} fontWeight="bold" mr="auto">
              Professional Development
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
        <Box alignSelf={"flex-end"}>
          <Popover>
            <PopoverTrigger>
              <Button
                minWidth="fit-content"
                mt="1em"
                colorScheme={"orange"}
                style={{ marginRight: "1em" }}
              >
                Templates
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Templates For Bulk Upload</PopoverHeader>
              <PopoverBody>
                <Select
                  placeholder="Select template"
                  id="tempsel"
                  onChange={() => {
                    document.getElementById("tempsel").value != ""
                      ? (document.getElementById("down").style.display =
                          "block")
                      : (document.getElementById("down").style.display =
                          "none");
                  }}
                >
                  <option value="glecture.xlsx">Guest Lecture</option>
                  <option value="sskills.xlsx">Soft Skills</option>
                  <option value="sdiscovery.xlsx">System Discovery</option>
                </Select>
                <Button
                  minWidth="fit-content"
                  mt="1em"
                  colorScheme={"orange"}
                  id="down"
                  onClick={() => {
                    var file = document.getElementById("tempsel").value;
                    saveAs(server_URL + "download_all/" + file, file);
                  }}
                  style={{ marginRight: "1em", display: "none" }}
                >
                  Download
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger>
              <Button
                minWidth="fit-content"
                mt="1em"
                colorScheme={"orange"}
                onClick={onOpen}
                style={{ marginRight: "1em" }}
              >
                Bulk Upload
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Bulk Upload</PopoverHeader>
              <PopoverBody>
                <Select
                  placeholder="Select option"
                  id="sel"
                  onChange={() => {
                    document.getElementById("file").style.display = "block";
                  }}
                >
                  <option value="pd_guest_lecture">Guest Lecture</option>
                  <option value="sskills">Soft Skills</option>
                  <option value="atraining">Aptitude Training</option>
                  <option value="pd_system_discovery">System Discovery</option>
                </Select>
                <br />
                <Input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    formData.append("file", e.target.files[0]);
                    document.getElementById("sub").style.display = "block";
                  }}
                />
                <br />
                <Button
                  colorScheme="orange"
                  mr={3}
                  onClick={() => {
                    submit();
                    onClose();
                  }}
                  id="sub"
                  style={{ display: "none" }}
                >
                  Submit
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <CSVLink data={data2}>
            <Button
              minWidth="fit-content"
              mt="1em"
              onClick={() =>
                toast({
                  title: "Report Downloaded Successfully",
                  status: "success",
                  duration: 9000,
                  position: "top",
                  isClosable: true,
                })
              }
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
                    <StudentListProfessionalDevelopment
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

export default ProfessionalDevelopment;
