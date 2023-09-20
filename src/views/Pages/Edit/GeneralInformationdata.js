/** @format */

//Student create page

import React, {useState} from "react";
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
  FormLabel,
  Select,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { Tooltip } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { server_URL, URL } from "controller/urls_config";
import { useToast } from '@chakra-ui/react'

function GeneralInformationdata() {
  const toast = useToast()
  const toastIdRef = React.useRef()
  const history = useHistory();

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ Message, setMessage] = useState(null);
  function logout() {
    window.location.href = URL + "Student#/auth/SignIn";
  }

  function funinsert() {
    let params = new URLSearchParams();
    if (document.getElementById("RID") == 0) {
      alert("ERROR");
    } else {
    }

    params.append("rollno", document.getElementById("RID").value);
    params.append("registerno", document.getElementById("REID").value);
    params.append("name", document.getElementById("NID").value);
    params.append("aadhar", document.getElementById("AADHARID").value);
    params.append("peremail", document.getElementById("PEREMID").value);
    params.append("offemail", document.getElementById("OFFEMID").value);
    params.append("batch", document.getElementById("BATCH").value);
    params.append("department", document.getElementById("DEPT").value);
    params.append("quo", document.getElementById("QUO").value);
    params.append("sex", document.getElementById("SID").value);
    params.append("dateofbirth", document.getElementById("DOBID").value);
    params.append("nationality", document.getElementById("NATIONID").value);
    params.append("contact", document.getElementById("CONTACTID").value);

    params.append("religion", document.getElementById("RELIGIONID").value);
    params.append("parish", document.getElementById("PARISHID").value);
    params.append("dalit", document.getElementById("DALITID").value);
    params.append("community", document.getElementById("COMMUNITYID").value);
    params.append("bloodgroup", document.getElementById("BLOODID").value);
    params.append("mothertongue", document.getElementById("MOTHERID").value);

    params.append("preaddr", document.getElementById("PREADDRID").value);
    params.append("peraddr", document.getElementById("PERADDRID").value);
    params.append("langknown", document.getElementById("LANKNO").value);
    params.append("pan", document.getElementById("PAN").value);

    params.append("hsenos", document.getElementById("NOS1").value);
    params.append("hsebod", document.getElementById("BOARD1").value);
    params.append("hsemoi", document.getElementById("MOI1").value);
    params.append("hsesl", document.getElementById("SL1").value);
    params.append("hsegro", document.getElementById("GROUP1").value);
    params.append("hsetm", document.getElementById("TM1").value);
    params.append("hseop", document.getElementById("OP1").value + "%");
    params.append("hsecom", document.getElementById("COM1").value);
    params.append("hsenoa", document.getElementById("NOA1").value);

    params.append("sslcnos", document.getElementById("NOS2").value);
    params.append("sslcbod", document.getElementById("BOARD2").value);
    params.append("sslcmoi", document.getElementById("MOI2").value);
    params.append("sslcsl", document.getElementById("SL2").value);
    params.append("sslctm", document.getElementById("TM2").value);
    params.append("sslcop", document.getElementById("OP2").value + "%");
    params.append("sslcnoa", document.getElementById("NOA2").value);

    params.append("fanam", document.getElementById("FN").value);
    params.append("faqul", document.getElementById("FQ").value);
    params.append("faocc", document.getElementById("FO").value);
    params.append("faoffadd", document.getElementById("FOA").value);
    params.append("faanu", document.getElementById("FAI").value);
    params.append("famob", document.getElementById("FMN").value);
    params.append("faemail", document.getElementById("FEI").value);
    params.append("gunam", document.getElementById("GN").value);
    params.append("guqul", document.getElementById("GQ").value);
    params.append("guocc", document.getElementById("GO").value);
    params.append("guoffadd", document.getElementById("GOA").value);
    params.append("guanu", document.getElementById("GAI").value);
    params.append("gumob", document.getElementById("GMN").value);
    params.append("guemail", document.getElementById("GEI").value);

    params.append("manam", document.getElementById("MN").value);
    params.append("maqul", document.getElementById("MQ").value);
    params.append("maocc", document.getElementById("MO").value);
    params.append("maoffadd", document.getElementById("MOA").value);
    params.append("maanu", document.getElementById("MAI").value);
    params.append("mamob", document.getElementById("MMN").value);
    params.append("maemail", document.getElementById("MEI").value);
    params.append("sibnos", document.getElementById("NOS").value);
    // params.append("sibnam", document.getElementById("NAS").value);
    // params.append("sibqul", document.getElementById("QOS").value);
    // params.append("sibocc", document.getElementById("SO").value);
    // params.append("sibalum", document.getElementById("AOL").value);

    params.append("appno", document.getElementById("AN").value);
    params.append("doa", document.getElementById("DOA").value);

    params.append("reglat", document.getElementById("RL").value);
    params.append("dayhos", document.getElementById("DH").value);

    params.append("schlnam", document.getElementById("SN").value);
    params.append("schlamt", document.getElementById("SA").value);
    params.append("firgra", document.getElementById("FG").value);
    params.append("ecoback", document.getElementById("EB").value);

    params.append("prolan", document.getElementById("PL").value);
    params.append("softpro", document.getElementById("SP").value);
    params.append("deptrelpro", document.getElementById("DRP").value);
    params.append("cert", document.getElementById("CER").value);
    params.append("others", document.getElementById("OS").value);

    params.append("anaapt", document.getElementById("AAS").value);
    params.append("commu", document.getElementById("CS").value);
    params.append("social", document.getElementById("SME").value);
    params.append("lead", document.getElementById("LS").value);
    params.append("otherins", document.getElementById("OIS").value);

    params.append("stg", document.getElementById("STG").value);
    params.append("ltg", document.getElementById("LTG").value);

    params.append("promemnam", document.getElementById("PMNO").value);
    params.append("promemno", document.getElementById("PMNA").value);
    params.append("promemdur", document.getElementById("DUR").value);

    let columns_to_be_filled = [
      "RID",
      "NID",
      "REID",
      "SID",
      "DEPT",
      "BATCH",
      "NATIONID",
      "RELIGIONID",
      "DALITID",
      "COMMUNITYID",
      "BLOODID",
      "MOTHERID",
      "CONTACTID",
      "AADHARID",
      "PEREMID",
      "OFFEMID",
      "PEREMID",
      "PREADDRID",
      "LANKNO",
      "NOS1",
      "BOARD1",
      "MOI1",
      "SL1",
      "GROUP1",
      "TM1",
      "OP1",
      "COM1",
      "NOA1",
      "NOS2",
      "BOARD2",
      "MOI2",
      "SL2",
      "TM2",
      "OP2",
      "NOA2",
      "FN",
      "FMN",
      "MN",
      "MMN",
      "NOS",
      "DOA",
      "RL",
      "DH",
    ];

    let mapping_columns = {
      RID: "roll number",
      NID: "name",
      REID: "register number",
      SID: "sex",
      DEPT: "department",
      BATCH: "batch",
      NATIONID: "nationality",
      RELIGIONID: "religion",
      DALITID: "IS DALIT",
      COMMUNITYID: "community",
      BLOODID: "blood group",
      MOTHERID: "mother tongue",
      CONTACTID: "contact no",
      AADHARID: "aadhar id",
      PEREMID: "personal email id",
      OFFEMAID: "official email id",
      PREADDRID: "address",
      LANKNO: "Languages Known",
      FN: "Father's Name",
      FMN: "Father's Mobile No",
      MN: "Mother's Name",
      MMN: "Mother's Mobile No",
      DOA: "Date of Application",
      RL: "Regular/Lateral Entry",
      DH: "Day Scholar/Hosteler",
      NOS1: "HS School Name",
      NOS2: "10th School Name",
      BOARD1: "Board HS",
      BOARD2: "10th HS",
      MOI1: "HS Medium of Instruction",
      MOI2: "10th Medium of Instruction",
      SL1: "Second Language in HS",
      SL2: "Second Language in 10th",
      GROUP1: "Group in HS",
      GROUP2: "Group in 10th",
      TM1: "Total Marks in HS",
      TM2: "Total Marks in 10th",
      OP1: "Overall Percentage in HS",
      OP2: "Overall Percentage in 10th",
      COM1: "Cut off Marks in HS",
      NOA1: "No of Attempts in HS",
      NOA2: "No of Attempts in 10th",
    };

    let not_filled_msg = "";
    let inx = 0;

    for (var inx1 = 0; inx1 < columns_to_be_filled.length; inx1++) {
      try {
        if (document.getElementById(columns_to_be_filled[inx1]).value == "") {
          inx += 1;
          not_filled_msg +=
            inx + ". " + mapping_columns[columns_to_be_filled[inx1]] + "\n";
        }
      } catch {
        alert(columns_to_be_filled[inx1]);
      }
    }

    if (inx == 0) {
      if (document.getElementById("CONTACTID").value.length!=12) {
        toastIdRef.current = toast({ description: "Invalid Contact Number! ( Format : 919876543210 )", status: 'warning',isClosable: true, position:"top" })
      } else if(document.getElementById("FMN").value.length!=12){
        toastIdRef.current = toast({ description: "Invalid Father's Number! ( Format : 919876543210 )", status: 'warning',isClosable: true, position:"top" })
      } else if(document.getElementById("MMN").value.length!=12){
        toastIdRef.current = toast({ description: "Invalid Mother's Number! ( Format : 919876543210 )", status: 'warning',isClosable: true, position:"top" })
      } else if(document.getElementById("GMN").value.length!=12){
        toastIdRef.current = toast({ description: "Invalid Gaurdian's Number! ( Format : 919876543210 )", status: 'warning',isClosable: true, position:"top" })
      } else{
        document.getElementById("last").disabled = true;
        axios.post(server_URL + "studentinsert", params).then((results)=>{
          toastIdRef.current = toast({ description: results.data+" Redirecting...", status: 'success',isClosable: true, position:"top" })
          setTimeout(() => {
            history.push('/auth/SignIn')
          }, 2000)
        }).catch(()=>{
          toastIdRef.current = toast({ description: "Unable to submit. Verify your details...", status: 'error',isClosable: true, position:"top" })
        });
      }
      // window.location.href = URL + "Student#/auth/signin";
    } else {
      setMessage(not_filled_msg)
      onOpen()
      // alert(not_filled_msg);
    }
  }
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" p="0rem 2rem 0rem 2rem">
      <Button
        onClick={logout}
        marginBottom="1rem"
        marginTop="1rem"
        marginRight="1rem"
        colorScheme="orange"
        variant="solid"
        alignSelf="flex-end"
      >
        log out
      </Button>
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={4}>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Fields Not Filled</ModalHeader>
            <ModalCloseButton />
            <ModalBody>            
               <pre>{Message}</pre>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              General Particulars
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
                            Student Name
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
                            placeholder="name"
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
                        <FormControl isRequired>
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
                        <FormControl isRequired>
                          <FormLabel
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Register Number
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
                          <Tooltip label="Ex: 311119104010" placement="right">
                            <Input
                              minWidth="30em"
                              id="REID"
                              borderRadius="5px"
                              fontSize="sm"
                              type="number"
                              placeholder="register no"
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
                        <FormControl isRequired>
                          <FormLabel
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Gender
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
                            placeholder="Select Gender"
                            isRequired
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
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
                            Date Of Birth
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
                            id="DOBID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="date"
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
                        <FormControl isRequired>
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
                              id="DEPT"
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
                        <FormControl isRequired>
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
                              id="BATCH"
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
                            Nationality
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
                        <Tooltip label="Ex: Indian" placement="right">
                          <Input
                            minWidth="30em"
                            id="NATIONID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="nationality"
                          /></Tooltip>
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
                            Religion
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
                            id="RELIGIONID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="religion"
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
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          If Catholic, Parish ?
                        </Text>
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
                            id="PARISHID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="Enter Parish"
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
                        <FormControl isRequired>
                          <FormLabel
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Dalit Catholic
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
                          <Select
                            minWidth="26em"
                            id="DALITID"
                            placeholder="Select Option"
                            isRequired
                          >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
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
                            Community
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
                          <Tooltip label="ALL CAPS" placement="right">
                            <Input
                              minWidth="30em"
                              id="COMMUNITYID"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="community"
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
                        <FormControl isRequired>
                          <FormLabel
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Blood Group
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
                          <Tooltip label="Ex: AB+ve" placement="right">
                            <Input
                              minWidth="30em"
                              id="BLOODID"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="blood group"
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
                        <FormControl isRequired>
                          <FormLabel
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Mother Tongue
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
                            id="MOTHERID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="mother tounge"
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
                        <FormControl isRequired>
                          <FormLabel
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Contact Number
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
                        <Tooltip label="Include 91 before number EX: 919876543210" placement="right">
                          <Input
                            minWidth="30em"
                            id="CONTACTID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="number"
                            placeholder="contact no."
                          /></Tooltip>
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
                            Aadhar Number
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
                            id="AADHARID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="number"
                            placeholder="aadhar no."
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
                        <FormControl isRequired>
                          <FormLabel
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Official Email ID
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
                            id="OFFEMID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            disabled={true}
                            value={localStorage.getItem("useremail")}
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
                        <FormControl isRequired>
                          <FormLabel
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Personal Email ID
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
                            id="PEREMID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="personal email"
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
                        <FormControl isRequired>
                          <FormLabel
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Present Address
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
                            id="PREADDRID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="present address"
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
                        <FormControl isRequired>
                          <FormLabel
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Permanent Address
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
                            id="PERADDRID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="Permanent address"
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
                        <FormControl isRequired>
                          <FormLabel
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Languages Known
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
                        <Tooltip label="EX: Tamil, English, Hindi" placement="right">
                          <Input
                            minWidth="30em"
                            id="LANKNO"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="languages known"
                          /></Tooltip>
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
                            PAN
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
                            id="PAN"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder="PAN Number"
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </CardBody>
        </Card>

        <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }} gap={4}>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Higher Secondary Details
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
                              Name Of School
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
                              minWidth="20em"
                              id="NOS1"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="School name"
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
                          <FormControl isRequired>
                            <FormLabel
                              fontSize="md"
                              color={textColor}
                              fontWeight="bold"
                              minWidth="100%"
                            >
                              Board
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
                            <Tooltip label="Ex: STATE/CBSE" placement="right">
                              <Input
                                minWidth="20em"
                                id="BOARD1"
                                borderRadius="5px"
                                fontSize="sm"
                                type="text"
                                placeholder="Board"
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
                          <FormControl isRequired>
                            <FormLabel
                              fontSize="md"
                              color={textColor}
                              fontWeight="bold"
                              minWidth="100%"
                            >
                              Medium Of Instruction
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
                              id="MOI1"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Medium Of Instruction"
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
                          <FormControl isRequired>
                            <FormLabel
                              fontSize="md"
                              color={textColor}
                              fontWeight="bold"
                              minWidth="100%"
                            >
                              Second Language
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
                              id="SL1"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Second Language"
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
                          <FormControl isRequired>
                            <FormLabel
                              fontSize="md"
                              color={textColor}
                              fontWeight="bold"
                              minWidth="100%"
                            >
                              Group
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
                            <Tooltip label="Ex: BIO MATHS" placement="right">
                              <Input
                                id="GROUP1"
                                borderRadius="5px"
                                fontSize="sm"
                                type="text"
                                placeholder="group"
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
                          <FormControl isRequired>
                            <FormLabel
                              fontSize="md"
                              color={textColor}
                              fontWeight="bold"
                              minWidth="100%"
                            >
                              Total Marks
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
                              id="TM1"
                              borderRadius="5px"
                              fontSize="sm"
                              type="number"
                              placeholder="total marks"
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
                          <FormControl isRequired>
                            <FormLabel
                              fontSize="md"
                              color={textColor}
                              fontWeight="bold"
                              minWidth="100%"
                            >
                              Overall Percentage
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
                            <Tooltip label="Ex: 90.25" placement="right">
                              <Input
                                id="OP1"
                                borderRadius="5px"
                                fontSize="sm"
                                type="number"
                                placeholder="Overall Percentage"
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
                          <FormControl isRequired>
                            <FormLabel
                              fontSize="md"
                              color={textColor}
                              fontWeight="bold"
                              minWidth="100%"
                            >
                              Cut-Off Marks
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
                            <Tooltip label="Ex: 170.25" placement="right">
                              <Input
                                id="COM1"
                                borderRadius="5px"
                                fontSize="sm"
                                type="number"
                                placeholder="Cut-Off Marks"
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
                          <FormControl isRequired>
                            <FormLabel
                              fontSize="md"
                              color={textColor}
                              fontWeight="bold"
                              minWidth="100%"
                            >
                              Number Of Attempts
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
                            <Tooltip label="Ex: 1" placement="right">
                              <Input
                                id="NOA1"
                                borderRadius="5px"
                                fontSize="sm"
                                type="number"
                                placeholder="No. Of Attempts"
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

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                10th Details
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
                              Name Of School
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
                              id="NOS2"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="School name"
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
                          <FormControl isRequired>
                            <FormLabel
                              fontSize="md"
                              color={textColor}
                              fontWeight="bold"
                              minWidth="100%"
                            >
                              Board
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
                            <Tooltip label="Ex: STATE/CBSE" placement="right">
                              <Input
                                id="BOARD2"
                                borderRadius="5px"
                                fontSize="sm"
                                type="text"
                                placeholder="Board"
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
                          <FormControl isRequired>
                            <FormLabel
                              fontSize="md"
                              color={textColor}
                              fontWeight="bold"
                              minWidth="100%"
                            >
                              Medium Of Instruction
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
                              id="MOI2"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Medium Of Instruction"
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
                          <FormControl isRequired>
                            <FormLabel
                              fontSize="md"
                              color={textColor}
                              fontWeight="bold"
                              minWidth="100%"
                            >
                              Second Language
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
                              id="SL2"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Second Language"
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
                          <FormControl isRequired>
                            <FormLabel
                              fontSize="md"
                              color={textColor}
                              fontWeight="bold"
                              minWidth="100%"
                            >
                              Total Marks
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
                              id="TM2"
                              borderRadius="5px"
                              fontSize="sm"
                              type="number"
                              placeholder="total marks"
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
                          <FormControl isRequired>
                            <FormLabel
                              fontSize="md"
                              color={textColor}
                              fontWeight="bold"
                              minWidth="100%"
                            >
                              Overall Percentage
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
                            <Tooltip label="Ex: 90.25" placement="right">
                              <Input
                                id="OP2"
                                borderRadius="5px"
                                fontSize="sm"
                                type="number"
                                placeholder="Overall Percentage"
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
                          <FormControl isRequired>
                            <FormLabel
                              fontSize="md"
                              color={textColor}
                              fontWeight="bold"
                              minWidth="100%"
                            >
                              Number Of Attempts
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
                            <Tooltip label="Ex: 1" placement="right">
                              <Input
                                id="NOA2"
                                borderRadius="5px"
                                fontSize="sm"
                                type="number"
                                placeholder="No. Of Attempts"
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

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Father's Details
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
                              Father's Name
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
                              id="FN"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Father's Name"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Father's Qualification
                          </Text>
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
                              id="FQ"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Father's Qualification"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Fathers Occupation
                          </Text>
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
                              id="FO"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Fathers Occupation"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Father's Office Address
                          </Text>
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
                              id="FOA"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Father's Office Address"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Father's Annual Income
                          </Text>
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
                              id="FAI"
                              borderRadius="5px"
                              fontSize="sm"
                              type="number"
                              placeholder="Enter Father's Annual Income"
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
                          <FormControl isRequired>
                            <FormLabel
                              fontSize="md"
                              color={textColor}
                              fontWeight="bold"
                              minWidth="100%"
                            >
                              Father's Mobile Number
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
                          <Tooltip label="Include 91 before number EX: 919876543210" placement="right">
                            <Input
                              id="FMN"
                              borderRadius="5px"
                              fontSize="sm"
                              type="number"
                              placeholder="Enter Father's Mobile No."
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Father's Email ID
                          </Text>
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
                              id="FEI"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Father's Email ID"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Guardian's Name
                          </Text>
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
                              id="GN"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Guardian Name"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Guardian's Qualification
                          </Text>
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
                              id="GQ"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Guardian Qualification"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Guardian's Occupation
                          </Text>
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
                              id="GO"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Fathers Occupation"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Guardian's Office Address
                          </Text>
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
                              id="GOA"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Guardian Office Address"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Guardian's Annual Income
                          </Text>
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
                              id="GAI"
                              borderRadius="5px"
                              fontSize="sm"
                              type="number"
                              placeholder="Enter Guardian Annual Income"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Guardian's Mobile No.
                          </Text>
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
                          <Tooltip label="Include 91 before number EX: 919876543210" placement="right">
                            <Input
                              id="GMN"
                              borderRadius="5px"
                              fontSize="sm"
                              type="number"
                              placeholder="Enter Guardian Mobile No."
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Guardian's Email ID
                          </Text>
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
                              id="GEI"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Guardian Email ID"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Mother's and Sibling Details
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
                              Mother's Name
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
                              id="MN"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Mother's Name"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Mother's Qualification
                          </Text>
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
                              id="MQ"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Mother's Qualification"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Mother's Occupation
                          </Text>
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
                              id="MO"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Mother's Occupation"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Mother's Office Address
                          </Text>
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
                              id="MOA"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Mother's Office Address"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Mother's Annual Income
                          </Text>
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
                              id="MAI"
                              borderRadius="5px"
                              fontSize="sm"
                              type="number"
                              placeholder="Enter Mother's Annual Income"
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
                          <FormControl isRequired>
                            <FormLabel
                              fontSize="md"
                              color={textColor}
                              fontWeight="bold"
                              minWidth="100%"
                            >
                              Mother's Mobile Number
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
                          <Tooltip label="Include 91 before number EX: 919876543210" placement="right">
                            <Input
                              id="MMN"
                              borderRadius="5px"
                              fontSize="sm"
                              type="number"
                              placeholder="Enter Mother's Mobile No."
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Mother's Email ID
                          </Text>
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
                              id="MEI"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Mother's Email ID"
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
                          <FormControl isRequired>
                            <FormLabel
                              fontSize="md"
                              color={textColor}
                              fontWeight="bold"
                              minWidth="100%"
                            >
                              Number Of Siblings
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
                            <Tooltip label="Ex: 1" placement="right">
                              <Input
                                id="NOS"
                                borderRadius="5px"
                                fontSize="sm"
                                type="number"
                                placeholder="Enter No. Of Siblings"
                              />
                            </Tooltip>
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
                  </Tr>
                  {/* <Tr>
                    <Td minWidth={{ sm: "17rem" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <Flex direction="column">
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Name Of Siblings
                          </Text>
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
                              id="NAS"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Name Of Siblings"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Qualification Of Siblings
                          </Text>
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
                              id="QOS"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Qualification Of Siblings"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Sibling's Occupation
                          </Text>
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
                              id="SO"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter Sibling's Occupation"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Alumni Of LICET Or LOYOLA
                          </Text>
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
                            <Select
                              id="AOL"
                              placeholder="Select Option"
                              isRequired
                            >
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </Select>
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
                  </Tr> */}
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Admission Details
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
                              Application Number
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
                              id="AN"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Application No."
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
                          <FormControl isRequired>
                            <FormLabel
                              fontSize="md"
                              color={textColor}
                              fontWeight="bold"
                              minWidth="100%"
                            >
                              Date Of Admission
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
                              id="DOA"
                              borderRadius="5px"
                              fontSize="sm"
                              type="date"
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
                          <FormControl isRequired>
                            <FormLabel
                              fontSize="md"
                              color={textColor}
                              fontWeight="bold"
                              minWidth="100%"
                            >
                              Quota
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
                            <Select
                              id="QUO"
                              placeholder="Select Option"
                              isRequired
                            >
                              <option value="Government Quota">
                                Government Quota
                              </option>
                              <option value="Management Quota">
                                Management Quota
                              </option>
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
                              Regular/Lateral Entry
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
                            <Select id="RL" placeholder="Select Option">
                              <option value="Regular">Regular</option>
                              <option value="Lateral">Lateral</option>
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
                              Day Scholar/Hosteller
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
                            <Select
                              id="DH"
                              placeholder="Select Option"
                              isRequired
                            >
                              <option value="Day Scholar">Day Scholar</option>
                              <option value="Hosteller">Hosteller</option>
                            </Select>
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Scholarship Details
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Scholarship Name
                          </Text>
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
                              id="SN"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Scholarship Name"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Scholarship Amount
                          </Text>
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
                              id="SA"
                              borderRadius="5px"
                              fontSize="sm"
                              type="number"
                              placeholder="Scholarship Amount"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            First Graduate
                          </Text>
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
                              id="FG"
                              placeholder="Select Option"
                              isRequired
                            >
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Economically Backward (Annual Income Of Parents Less
                            than 1LPA)
                          </Text>
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
                            <Select
                              id="EB"
                              placeholder="Select Option"
                              isRequired
                            >
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </Select>
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Technical Skills
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Programming Languages
                          </Text>
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
                          <Tooltip label="Ex: Python, Java" placement="right">
                            <Input
                              id="PL"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter if any"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Software Proficiency
                          </Text>
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
                              id="SP"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter if any"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Department Related Proficiency
                          </Text>
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
                              id="DRP"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter if any"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Certifications
                          </Text>
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
                              id="CER"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter if any"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Other Skills
                          </Text>
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
                              id="OS"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter if any"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Non - Technical Skills
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Aptitude / Analytical Skills
                          </Text>
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
                              id="AAS"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter if any"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Communication Skills
                          </Text>
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
                              id="CS"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter if any"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Social Media Exposure
                          </Text>
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
                              id="SME"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter if any"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Leadership Skills
                          </Text>
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
                              id="LS"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter if any"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Other Interpersonal Skills
                          </Text>
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
                              id="OIS"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Enter if any"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Goals
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Short Term Goals
                          </Text>
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
                              id="STG"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Short Term Goals"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Long Term Goals
                          </Text>
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
                              id="LTG"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Long Term Goals"
                            />
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Professional Membership
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Name
                          </Text>
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
                            <Tooltip label="Ex: SAE" placement="right">
                              <Input
                                id="PMNA"
                                borderRadius="5px"
                                fontSize="sm"
                                type="text"
                                placeholder="Professional Membership Name"
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Membership No.
                          </Text>
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
                              id="PMNO"
                              borderRadius="5px"
                              fontSize="sm"
                              type="text"
                              placeholder="Membership No."
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
                          <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                          >
                            Duration
                          </Text>
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
                            <Tooltip label="Ex: 2 MONTHS" placement="right">
                              <Input
                                id="DUR"
                                borderRadius="5px"
                                fontSize="sm"
                                type="text"
                                placeholder="Membership Duration"
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
      </SimpleGrid>
      <Button
        onClick={funinsert}
        alignSelf="center"
        marginBottom="1rem"
        marginTop="1rem"
        marginRight="1rem"
        width="30%"
        colorScheme="orange"
        variant="solid"
        id="last"
      >
        Submit
      </Button>
    </Flex>
  );
}

export default GeneralInformationdata;
