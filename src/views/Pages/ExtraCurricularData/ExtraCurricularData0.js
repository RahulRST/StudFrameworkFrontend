/** @format */

//Student ExtraCurricularData

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
  FormControl,
  Select,
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TableRow6 from "components/Tables/TableRow/TableRow6";
import TableRow5 from "components/Tables/TableRow/TableRow5";
import { server_URL } from "controller/urls_config";
import { useToast } from '@chakra-ui/react'

function ExtraCurricularData() {

  const toast = useToast()
  const toastIdRef = React.useRef()
  const Null_message = "";

  const [Cdata, setCdata] = useState([]);
  const [Odata, setOdata] = useState([]);
  const [Sdata, setSdata] = useState([]);
  const [Fdata, setFdata] = useState([]);

  var [drop1, setDrop1] = useState(false);
  var [drop2, setDrop2] = useState(false);
  var [drop3, setDrop3] = useState(false);
  var [drop4, setDrop4] = useState(false);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const handleToggle1 = () => setShow(!show);
  const handleToggle2 = () => setShow2(!show2);
  const handleToggle3 = () => setShow3(!show3);
  const handleToggle4 = () => setShow4(!show4);

  const textColor = useColorModeValue("gray.700", "white");

  let params = new URLSearchParams();
  params.append("StudentDetails", localStorage.getItem("StudentRoll"));
  useEffect(async () => {
    axios
      .all([
        axios.post(server_URL + "ExtraClubStudentDisplay", params),
        axios.post(server_URL + "ExtraOutreachStudentDisplay", params),
        axios.post(server_URL + "ExtraSportsStudentDisplay", params),
        axios.post(server_URL + "ExtraCulturalStudentDisplay", params),
      ])
      .then(
        axios.spread((data1, data2, data3, data4) => {
          setCdata(data1.data);
          setOdata(data2.data);
          setSdata(data3.data);
          setFdata(data4.data);
        })
      );
  }, []);

  function substudextraclub() {
    if (document.getElementById("CLUBNID").value == '' || document.getElementById("CLUBAID").value == '' || 
    document.getElementById("EDYEARID").value == '' || document.getElementById("OUTCOMID").value == ''
    ) {
      toastIdRef.current = toast({ description: "Enter all the fields!", status: 'warning',isClosable: true })
    } else {
      let params = new URLSearchParams();
      params.append("Clubname", document.getElementById("CLUBNID").value);
      params.append("ClubactivityID", document.getElementById("CLUBAID").value);
      params.append("Clubdateyear", document.getElementById("EDYEARID").value);
      params.append("Clubnoutcome", document.getElementById("OUTCOMID").value);
      params.append("StudentDetails", localStorage.getItem("StudentRoll"));
      params.append("status", "Pending");
      axios.post(server_URL + "insertstudextraclub", params).then(() => {
        toastIdRef.current = toast({ description: "Sucessfully Added", status: 'success',isClosable: true })
        Cdata.push({ 
          'club_name' : document.getElementById("CLUBNID").value,
          'date' : document.getElementById("EDYEARID").value,
          'activity_name' : document.getElementById("CLUBAID").value, 
          'outcome' : document.getElementById("OUTCOMID").value,
          'verified' : "Pending"   
        })
        setShow(false)
      }).catch(()=>{
        toastIdRef.current = toast({ description: "Error Occurred! Verify entered details", status: 'error',isClosable: true })
      });
    }
  }

  function substudextraoutreach() {
    if (document.getElementById("OUTREACTID").value == '' || document.getElementById("OUTREADAYID").value == '' || 
    document.getElementById("OUTREAOUTCOMID").value == '' ) {
      toastIdRef.current = toast({ description: "Enter all the fields!", status: 'warning',isClosable: true })
    } else {
      let params = new URLSearchParams();
      params.append("outreachname", document.getElementById("OUTREACTID").value);
      params.append("outreachdateyear", document.getElementById("OUTREADAYID").value);
      params.append("outreachoutcome", document.getElementById("OUTREAOUTCOMID").value);
      params.append("StudentDetails", localStorage.getItem("StudentRoll"));
      params.append("status", "Pending");
      axios.post(server_URL + "insertstudextraoutreach", params).then(() => {
        toastIdRef.current = toast({ description: "Sucessfully Added", status: 'success',isClosable: true })
        Odata.push({ 
          'activity_name' : document.getElementById("OUTREACTID").value,
          'date' : document.getElementById("OUTREADAYID").value,
          'outcome' : document.getElementById("OUTREAOUTCOMID").value, 
          'verified' : "Pending"   
        })
        setShow2(false)
      }).catch(()=>{
        toastIdRef.current = toast({ description: "Error Occurred! Verify entered details", status: 'error',isClosable: true })
      });
    }
  }
  
  function substudextrasport() {
    if (document.getElementById("SSID").value == '' || document.getElementById("SRID").value == '' || 
    document.getElementById("SDID").value == '' || document.getElementById("SPID").value == '' ) {
      toastIdRef.current = toast({ description: "Enter all the fields!", status: 'warning',isClosable: true })
    } else {
      let params = new URLSearchParams();
      params.append("sportname", document.getElementById("SSID").value);
      params.append("representation", document.getElementById("SRID").value);
      params.append("dateyear", document.getElementById("SDID").value);
      params.append("position", document.getElementById("SPID").value);
      params.append("StudentDetails", localStorage.getItem("StudentRoll"));
      params.append("status", "Pending");
      axios.post(server_URL + "insertstudextrasports", params).then(() => {
        toastIdRef.current = toast({ description: "Sucessfully Added", status: 'success',isClosable: true })
        Sdata.push({ 
          'sport_name' : document.getElementById("SSID").value,
          'representation' : document.getElementById("SRID").value,
          'date' : document.getElementById("SDID").value,
          'position_secures' : document.getElementById("SPID").value,  
          'verified' : "Pending"   
        })
        setShow3(false)
      }).catch(()=>{
        toastIdRef.current = toast({ description: "Error Occurred! Verify entered details", status: 'error',isClosable: true })
      });
    }
  }

  function substudextracultural() {
    if (document.getElementById("ENID").value == '' || document.getElementById("EDAYID").value == '' || 
    document.getElementById("EPSID").value == '') {
      toastIdRef.current = toast({ description: "Enter all the fields!", status: 'warning',isClosable: true })
    } else {
      let params = new URLSearchParams();
      params.append("eventname", document.getElementById("ENID").value);
      params.append("eventdate", document.getElementById("EDAYID").value);
      params.append("eventposition", document.getElementById("EPSID").value);
      params.append("StudentDetails", localStorage.getItem("StudentRoll"));
      params.append("status", "Pending");
      axios.post(server_URL + "insertstudextracultural", params).then(() => {
        toastIdRef.current = toast({ description: "Sucessfully Added", status: 'success',isClosable: true })
        Fdata.push({ 
          'event_name' : document.getElementById("ENID").value,
          'date' : document.getElementById("EPSID").value,
          'position_secures' : document.getElementById("EPSID").value,  
          'verified' : "Pending"   
        })
        setShow4(false)
      }).catch(()=>{
        toastIdRef.current = toast({ description: "Error Occurred! Verify entered details", status: 'error',isClosable: true })
      });
    }
  }

  return (
    <Flex direction="column" pt={{ base: "120px", md: "65px" }}>
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Flex direction="column" align="flex-end">
          <box>
            <Button
              ms="auto"
              me="1em"
              bg="orange.400"
              width="6em"
              height="2em"
              onClick={() => {
                setDrop1(true), setDrop2(true), setDrop3(true), setDrop4(true);
              }}
            >
              Show All
            </Button>

            <Button
              ms="auto"
              me="1em"
              bg="orange.400"
              width="6em"
              height="2em"
              onClick={() => {
                setDrop1(false),
                setDrop2(false),
                setDrop3(false),
                setDrop4(false);
              }}
            >
              Hide All
            </Button>
          </box>
        </Flex>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Clubs
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop1(!drop1)}
            >
              {drop1 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop1}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Name Of The Club</Th>
                    <Th color="gray.400">Date</Th>
                    <Th color="gray.400">Activity</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Cdata.map((item1) => {
                    return (
                      <TableRow6
                        row1={item1.club_name || Null_message}
                        row2={item1.date || Null_message}
                        row3={item1.activity_name || Null_message}
                        row4={item1.outcome || Null_message}
                        row5={item1.credits==null ? "Pending" : item1.credits}
                        row6={item1.verified || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show && drop1}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr>
                    <Th color="gray.400">Name Of The Club</Th>
                    <Th color="gray.400">Date</Th>
                    <Th color="gray.400">Activity</Th>
                    <Th color="gray.400">Outcome</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Enter Club Name"
                          id="CLUBNID"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
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
                          id="EDYEARID"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Enter Club Activity"
                          id="CLUBAID"
                        />
                      </Flex>
                    </Td>

                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Enter Outcome"
                          id="OUTCOMID"
                        />
                      </Flex>
                    </Td>
                    <Td>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <SlideFade in={show}>
                          <Button
                            onClick={substudextraclub}
                            bg="orange.300"
                            width="fit-content"
                          >
                            Submit
                          </Button>
                        </SlideFade>
                      </Flex>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Collapse>
        <Collapse in={drop1}>
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
              onClick={handleToggle1}
            >
              <AddIcon w={4} h={4} me="3" />
              {show ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Outreach Activity
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop2(!drop2)}
            >
              {drop2 ? "Hide" : "Show"}
            </Button>
          </CardHeader>

          <Collapse in={drop2}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Activity</Th>
                    <Th color="gray.400">Date</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Odata.map((item) => {
                    return (
                      <TableRow5
                        row1={item.activity_name || Null_message}
                        row2={item.date || Null_message}
                        row3={item.outcome || Null_message}
                        row4={item.credits==null ? "Pending" : item.credits}
                        row5={item.verified || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show2 && drop2}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Activity</Th>
                    <Th color="gray.400">Date</Th>
                    <Th color="gray.400">Outcome</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td minWidth={{ sm: "19em" }}>
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
                          placeholder="Enter Outreach Activity"
                          id="OUTREACTID"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "19em" }}>
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
                          id="OUTREADAYID"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "19em" }}>
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
                          placeholder="Enter Outcome"
                          id="OUTREAOUTCOMID"
                        />
                      </Flex>
                    </Td>
                    <Td>
                      <SlideFade in={show2}>
                        <Button
                          onClick={substudextraoutreach}
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

        <Collapse in={drop2}>
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
              onClick={handleToggle2}
            >
              <AddIcon w={4} h={4} me="3" />
              {show2 ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Sports Achievements
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop3(!drop3)}
            >
              {drop3 ? "Hide" : "Show"}
            </Button>
          </CardHeader>

          <Collapse in={drop3}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Name Of The Sport</Th>

                    <Th color="gray.400">Date</Th>
                    <Th color="gray.400">Representation</Th>
                    <Th color="gray.400">Position Secured</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Sdata.map((item) => {
                    return (
                      <TableRow6
                        row1={item.sport_name || Null_message}
                        row2={item.date || Null_message}
                        row3={item.representation || Null_message}
                        row4={item.position_secures || Null_message}
                        row5={item.credits==null ? "Pending" : item.credits}
                        row6={item.verified || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show3 && drop3}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Name Of The Sport</Th>
                    <Th color="gray.400">Date</Th>
                    <Th color="gray.400">Representation</Th>
                    <Th color="gray.400">Position Secured</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Enter Sport Name"
                          id="SSID"
                        />
                      </Flex>
                    </Td>

                    <Td minWidth={{ sm: "14em" }}>
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
                          id="SDID"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
                      <Flex
                        align="center"
                        py=".8rem"
                        minWidth="100%"
                        flexWrap="nowrap"
                      >
                        <FormControl isRequired>
                          <Select
                            borderRadius="5px"
                            fontSize="sm"
                            id="SRID"
                            placeholder="Select Representation"
                            isRequired
                          >
                            <option value="ZONE">ZONE</option>
                            <option value="DISTRICT">DISTRICT</option>
                            <option value="STATE">STATE</option>
                            <option value="NATIONAL">NATIONAL</option>
                            <option value="INTERNATIONAL">INTERNATIONAL</option>
                          </Select>
                        </FormControl>
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "14em" }}>
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
                          placeholder="Enter Position Secured"
                          id="SPID"
                        />
                      </Flex>
                    </Td>
                    <Td>
                      <SlideFade in={show3}>
                        <Button
                          onClick={substudextrasport}
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

        <Collapse in={drop3}>
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
              onClick={handleToggle3}
            >
              <AddIcon w={4} h={4} me="3" />
              {show3 ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Culturals
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop4(!drop4)}
            >
              {drop4 ? "Hide" : "Show"}
            </Button>
          </CardHeader>

          <Collapse in={drop4}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Name Of The Event</Th>
                    <Th color="gray.400">Date</Th>
                    <Th color="gray.400">Position Secured</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Fdata.map((row) => {
                    return (
                      <TableRow5
                        row1={row.event_name || Null_message}
                        row2={row.date || Null_message}
                        row3={row.position_secures || Null_message}
                        row4={row.credits==null ? "Pending" : row.credits}
                        row5={row.verified || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show4 && drop4}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Name Of The Event Participated</Th>
                    <Th color="gray.400">Date</Th>
                    <Th color="gray.400">Position Secured</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td minWidth={{ sm: "19em" }}>
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
                          placeholder="Enter Event Name"
                          id="ENID"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "19em" }}>
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
                          id="EDAYID"
                        />
                      </Flex>
                    </Td>
                    <Td minWidth={{ sm: "19em" }}>
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
                          placeholder="Enter Position Secured"
                          id="EPSID"
                        />
                      </Flex>
                    </Td>
                    <Td>
                      {" "}
                      <SlideFade in={show4}>
                        <Button
                          onClick={substudextracultural}
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

        <Collapse in={drop4}>
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
              onClick={handleToggle4}
            >
              <AddIcon w={4} h={4} me="3" />
              {show4 ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>
      </SimpleGrid>
    </Flex>
  );
}

export default ExtraCurricularData;
