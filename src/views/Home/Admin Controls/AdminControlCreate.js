/** @format */

//Student create page

import React from "react";
import axios from "axios";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Tr,
  Td,
  Input,
  useColorModeValue,
  Button,
  FormControl,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormLabel,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { Tooltip } from "@chakra-ui/react";

import { server_URL, URL } from "controller/urls_config";

function AdminControlCreate() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  function logout() {
    window.location.href = URL + "Student#/auth/SignIn";
  }

  function Cancel() {
    window.location.href = URL + "Admin#/admin4/AdminControl";
  }
  
  function funinsert() {
    let params = new URLSearchParams();
    params.append("rollno", document.getElementById("RID").value);
    params.append("email", document.getElementById("NID").value);
    params.append("dept", document.getElementById("DID").value);
    params.append("batch", document.getElementById("BID").value);
    params.append("user_type", document.getElementById("SID").value);
    // axios.post(server_URL + "logininsert", params);
    // axios.post(server_URL + "studentinsert", params);
    axios.post(server_URL + "admin_create_creds", params).then((results)=>{
      localStorage.setItem("displaymsg",results.data);
      onOpen()
    });
  }
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" p="0rem 2rem 0rem 2rem">
      {/* <Button
        onClick={logout}
        marginBottom="1rem"
        marginTop="1rem"
        marginRight="1rem"
        colorScheme="orange"
        variant="solid"
        alignSelf="flex-end"
      >
        log out
      </Button> */}
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={4}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Credentials Details
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Tbody>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl isRequired>
                          <FormLabel
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            User Type
                          </FormLabel>
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl isRequired>
                          <Select
                            minWidth="26em"
                            id="SID"
                            placeholder="Select User Type"
                            isRequired
                          >
                            <option value="0">Student</option>
                            <option value="1">Class Advisor</option>
                            <option value="2">HoD</option>
                            <option value="3">Official</option>
                            <option value="4">Admin</option>
                          </Select>
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl isRequired>
                          <FormLabel
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Email ID
                          </FormLabel>
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            minWidth="30em"
                            id="NID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="email"
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
               
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <FormLabel
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Roll Number
                          </FormLabel>
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Tooltip label="Ex: 19CS048" placement="right">
                            <Input
                              minWidth="30em"
                              id="RID"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="roll no"
                            />
                          </Tooltip>
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <FormLabel
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Department
                          </FormLabel>
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Tooltip label="Ex: CSE" placement="right">
                            <Input
                              minWidth="30em"
                              id="DID"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Department"
                            />
                          </Tooltip>
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <FormLabel
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Batch
                          </FormLabel>
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Tooltip label="Ex: 2019-2023" placement="right">
                            <Input
                              minWidth="30em"
                              id="BID"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Batch"
                            />
                          </Tooltip>
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </CardBody>
        </Card>
      </SimpleGrid>
      <Box align="center">
        <Button
          onClick={funinsert}
          alignSelf="center"
          marginBottom="1rem"
          marginTop="1rem"
          marginRight="1rem"
          width="30%"
          colorScheme="orange"
          variant="solid"
        >
          Create
        </Button>
        <Button
          onClick={Cancel}
          alignSelf="center"
          marginBottom="1rem"
          marginTop="1rem"
          marginRight="1rem"
          width="30%"
          colorScheme="red"
          variant="solid"
        >
          Cancel
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {localStorage.getItem("displaymsg")}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>
    </Flex>
  );
}

export default AdminControlCreate;
