/** @format */

//Professional Development Data Student

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
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

// import { IndustrialVist } from "variables/general";
import TableRow4 from "components/Tables/TableRow/TableRow4";
import TableRow5 from "components/Tables/TableRow/TableRow5";
import TableRow6 from "components/Tables/TableRow/TableRow6";
import TableRow7 from "components/Tables/TableRow/TableRow7";
import { URL, server_URL } from "controller/urls_config";
import { useToast } from '@chakra-ui/react'

function ProfessionalDevelopmentData0() {

  const textColor = useColorModeValue("gray.700", "white");
  const toast = useToast()
  const toastIdRef = React.useRef()
  const Null_message = "";

  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);
  const [drop4, setDrop4] = useState(false);
  const [drop5, setDrop5] = useState(false);
  const [drop6, setDrop6] = useState(false);
  const [drop7, setDrop7] = useState(false);
  const [drop8, setDrop8] = useState(false);
  const [drop9, setDrop9] = useState(false);
  const [drop10, setDrop10] = useState(false);
  const [drop11, setDrop11] = useState(false);
  const [drop12, setDrop12] = useState(false);
  const [drop13, setDrop13] = useState(false);
  const [drop14, setDrop14] = useState(false);
  const [drop15, setDrop15] = useState(false);
  const [drop16, setDrop16] = useState(false);
  const [drop17, setDrop17] = useState(false);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);
  const [show11, setShow11] = useState(false);
  const [show12, setShow12] = useState(false);
  const [show13, setShow13] = useState(false);

  const handleToggle = () => setShow(!show);
  const handleToggle2 = () => setShow2(!show2);
  const handleToggle3 = () => setShow3(!show3);
  const handleToggle4 = () => setShow4(!show4);
  const handleToggle5 = () => setShow5(!show5);
  const handleToggle6 = () => setShow6(!show6);
  const handleToggle7 = () => setShow7(!show7);
  const handleToggle8 = () => setShow8(!show8);
  const handleToggle9 = () => setShow9(!show9);
  const handleToggle10 = () => setShow10(!show10);
  const handleToggle11 = () => setShow11(!show11);
  const handleToggle12 = () => setShow12(!show12);
  const handleToggle13 = () => setShow13(!show13);

  const [p1data, setp1data] = useState([]);
  const [p2data, setp2data] = useState([]);
  const [p3data, setp3data] = useState([]);
  const [p4data, setp4data] = useState([]);
  const [p5data, setp5data] = useState([]);
  const [p6data, setp6data] = useState([]);
  const [p7data, setp7data] = useState([]);
  const [p8data, setp8data] = useState([]);
  const [p9data, setp9data] = useState([]);
  const [p10data, setp10data] = useState([]);
  const [p11data, setp11data] = useState([]);
  const [p12data, setp12data] = useState([]);
  const [p13data, setp13data] = useState([]);
  const [p14data, setp14data] = useState([]);
  const [p15data, setp15data] = useState([]);
  const [p16data, setp16data] = useState([]);
  const [p17data, setp17data] = useState([]);

  function insertindustry() {
    if (document.getElementById("Industry1").value == '' || document.getElementById("DY1").value == '' || 
    document.getElementById("O1").value == '') {
      toastIdRef.current = toast({ description: "Enter all the fields!", status: 'warning',isClosable: true })
    } else {
      let params = new URLSearchParams();
      params.append("StudentDetails", localStorage.getItem("StudentRoll"));
      params.append("Industry", document.getElementById("Industry1").value);
      params.append("DateYear", document.getElementById("DY1").value);
      params.append("Outcome", document.getElementById("O1").value);
      axios.post(server_URL + "Industrialv_insert", params).then(() => {
        toastIdRef.current = toast({ description: "Sucessfully Added", status: 'success',isClosable: true })
        p1data.push({ 
          'industry_name' : document.getElementById("Industry1").value,
          'date' : document.getElementById("DY1").value,
          'outcome' : document.getElementById("O1").value, 
        })
        setShow(false)
      }).catch(()=>{
        toastIdRef.current = toast({ description: "Error Occurred! Verify entered details", status: 'error',isClosable: true })
      });
    }
  }

  function insertinplant() {
    if (document.getElementById("Industry2").value == '' || document.getElementById("DY2").value == '' || 
    document.getElementById("O2").value == '') {
      toastIdRef.current = toast({ description: "Enter all the fields!", status: 'warning',isClosable: true })
    } else {
      let params = new URLSearchParams();
      params.append("StudentDetails", localStorage.getItem("StudentRoll"));
      params.append("Industry", document.getElementById("Industry2").value);
      params.append("DateYear", document.getElementById("DY2").value);
      params.append("Outcome", document.getElementById("O2").value);
      params.append("status", "Pending");
      axios.post(server_URL + "Inplant_insert", params).then(() => {
        toastIdRef.current = toast({ description: "Sucessfully Added", status: 'success',isClosable: true })
        p2data.push({ 
          'industry' : document.getElementById("Industry2").value,
          'date' : document.getElementById("DY2").value,
          'outcome' : document.getElementById("O2").value, 
        })
        setShow2(false)
      }).catch(()=>{
        toastIdRef.current = toast({ description: "Error Occurred! Verify entered details", status: 'error',isClosable: true })
      });
    }
  }

  function insertlecture() {
    if (document.getElementById("Topic").value == '' || document.getElementById("Resource").value == '' || 
    document.getElementById("O3").value == '') {
      toastIdRef.current = toast({ description: "Enter all the fields!", status: 'warning',isClosable: true })
    } else {
      let params = new URLSearchParams();
      params.append("StudentDetails", localStorage.getItem("StudentRoll"));
      params.append("Topic", document.getElementById("Topic").value);
      params.append("Resource", document.getElementById("Resource").value);
      params.append("Outcome", document.getElementById("O3").value);
      params.append("status", "Pending");
      axios.post(server_URL + "guest_stud_insert", params).then(() => {
        toastIdRef.current = toast({ description: "Sucessfully Added", status: 'success',isClosable: true })
        p3data.push({ 
          'topic' : document.getElementById("Topic").value,
          'resource_person' : document.getElementById("Resource").value,
          'outcome' : document.getElementById("O3").value, 
        })
        setShow3(false)
      }).catch(()=>{
        toastIdRef.current = toast({ description: "Error Occurred! Verify entered details", status: 'error',isClosable: true })
      });
    }
  }

  function insertmotivation() {
    if (document.getElementById("Topic4").value == '' || document.getElementById("DY4").value == '' || 
    document.getElementById("Resource4").value == '' || document.getElementById("O4").value == '') {
      toastIdRef.current = toast({ description: "Enter all the fields!", status: 'warning',isClosable: true })
    } else {
      let params = new URLSearchParams();
      params.append("StudentDetails", localStorage.getItem("StudentRoll"));
      params.append("Topic", document.getElementById("Topic4").value);
      params.append("DateYear", document.getElementById("DY4").value);
      params.append("Resource", document.getElementById("Resource4").value);
      params.append("Outcome", document.getElementById("O4").value);
      params.append("status", "Pending");
      axios.post(server_URL + "Motivational_insert", params).then(() => {
        toastIdRef.current = toast({ description: "Sucessfully Added", status: 'success',isClosable: true })
        p4data.push({ 
          'topic' : document.getElementById("Topic4").value,
          'date' : document.getElementById("DY4").value,
          'resource_person' : document.getElementById("Resource4").value,
          'outcome' : document.getElementById("O4").value, 
        })
        setShow4(false)
      }).catch(()=>{
        toastIdRef.current = toast({ description: "Error Occurred! Verify entered details", status: 'error',isClosable: true })
      });
    }
  }

  function insertintern() {
    if (document.getElementById("Company5").value == '' || document.getElementById("DY5").value == '' || 
    document.getElementById("Duration5").value == '' || document.getElementById("Reference5").value == '') {
      toastIdRef.current = toast({ description: "Enter all the fields!", status: 'warning',isClosable: true })
    } else {
      let params = new URLSearchParams();
      params.append("StudentDetails", localStorage.getItem("StudentRoll"));
      params.append("Company", document.getElementById("Company5").value);
      params.append("DateYear", document.getElementById("DY5").value);
      params.append("Duration", document.getElementById("Duration5").value);
      params.append("Reference", document.getElementById("Reference5").value);
      params.append("status", "Pending");
      axios.post(server_URL + "intern_insert", params).then(() => {
        toastIdRef.current = toast({ description: "Sucessfully Added", status: 'success',isClosable: true })
        p5data.push({ 
          'company_name' : document.getElementById("Company5").value,
          'duration' : document.getElementById("Duration5").value,
          'date' : document.getElementById("DY5").value,
          'reference' : document.getElementById("Reference5").value, 
          "verified" : "Pending"
        })
        setShow5(false)
      }).catch(()=>{
        toastIdRef.current = toast({ description: "Error Occurred! Verify entered details", status: 'error',isClosable: true })
      });
    }
  }

  function insertvalue() {
    if (document.getElementById("Course6").value == '' || document.getElementById("DY6").value == '' || 
    document.getElementById("O6").value == '') {
      toastIdRef.current = toast({ description: "Enter all the fields!", status: 'warning',isClosable: true })
    } else {
      let params = new URLSearchParams();
      params.append("StudentDetails", localStorage.getItem("StudentRoll"));
      params.append("Course", document.getElementById("Course6").value);
      params.append("DateYear", document.getElementById("DY6").value);
      params.append("Outcome", document.getElementById("O6").value);
      params.append("status", "Pending");
      axios.post(server_URL + "Cour_Stud_insert", params).then(() => {
        toastIdRef.current = toast({ description: "Sucessfully Added", status: 'success',isClosable: true })
        p6data.push({ 
          'course_name' : document.getElementById("Course6").value,
          'date' : document.getElementById("DY6").value,
          'outcome' : document.getElementById("O6").value,
          "verified" : "Pending"
        })
        setShow6(false)
      }).catch(()=>{
        toastIdRef.current = toast({ description: "Error Occurred! Verify entered details", status: 'error',isClosable: true })
      });
    }
  }

  function insertworkshop() {
    if (document.getElementById("Topic7").value == '' || document.getElementById("DY7").value == '' || 
    document.getElementById("Resource7").value == '' || document.getElementById("O7").value == '') {
      toastIdRef.current = toast({ description: "Enter all the fields!", status: 'warning',isClosable: true })
    } else {
      let params = new URLSearchParams();
      params.append("StudentDetails", localStorage.getItem("StudentRoll"));
      params.append("Topic", document.getElementById("Topic7").value);
      params.append("DateYear", document.getElementById("DY7").value);
      params.append("Resource", document.getElementById("Resource7").value);
      params.append("Outcome", document.getElementById("O7").value);
      params.append("status", "Pending");
      axios.post(server_URL + "workshop_stuinsert", params).then(() => {
        toastIdRef.current = toast({ description: "Sucessfully Added", status: 'success',isClosable: true })
        p7data.push({ 
          'topic' : document.getElementById("Topic7").value,
          'date' : document.getElementById("DY7").value,
          'resource_person' : document.getElementById("Resource7").value,
          'outcome' : document.getElementById("O7").value,
          "verified" : "Pending"
        })
        setShow7(false)
      }).catch(()=>{
        toastIdRef.current = toast({ description: "Error Occurred! Verify entered details", status: 'error',isClosable: true })
      });
    }
  }

  function insertwebinar() {
    if (document.getElementById("Topic8").value == '' || document.getElementById("DY8").value == '' || 
    document.getElementById("Resource8").value == '' || document.getElementById("O8").value == '') {
      toastIdRef.current = toast({ description: "Enter all the fields!", status: 'warning',isClosable: true })
    } else {
      let params = new URLSearchParams();
      params.append("StudentDetails", localStorage.getItem("StudentRoll"));
      params.append("Topic", document.getElementById("Topic8").value);
      params.append("DateYear", document.getElementById("DY8").value);
      params.append("Resource", document.getElementById("Resource8").value);
      params.append("Outcome", document.getElementById("O8").value);
      params.append("status", "Pending");
      axios.post(server_URL + "webinar_insert", params).then(() => {
        toastIdRef.current = toast({ description: "Sucessfully Added", status: 'success',isClosable: true })
        p8data.push({ 
          'topic' : document.getElementById("Topic8").value,
          'date' : document.getElementById("DY8").value,
          'resource_person' : document.getElementById("Resource8").value,
          'outcome' : document.getElementById("O8").value,
          "verified" : "Pending"
        })
        setShow8(false)
      }).catch(()=>{
        toastIdRef.current = toast({ description: "Error Occurred! Verify entered details", status: 'error',isClosable: true })
      });
    }
  }

  function insertcompetition() {
    if (document.getElementById("Name9").value == '' || document.getElementById("Competition9").value == '' || 
    document.getElementById("DY9").value == '' || document.getElementById("Position9").value == '') {
      toastIdRef.current = toast({ description: "Enter all the fields!", status: 'warning',isClosable: true })
    } else {
      let params = new URLSearchParams();
      params.append("StudentDetails", localStorage.getItem("StudentRoll"));
      params.append("Name", document.getElementById("Name9").value);
      params.append("Competition", document.getElementById("Competition9").value);
      params.append("DateYear", document.getElementById("DY9").value);
      params.append("Position", document.getElementById("Position9").value);
      params.append("status", "Pending");
      axios.post(server_URL + "comp_Stud_insert", params).then(() => {
        toastIdRef.current = toast({ description: "Sucessfully Added", status: 'success',isClosable: true })
        p9data.push({ 
          'comp_name' : document.getElementById("Name9").value,
          'date' : document.getElementById("DY9").value,
          'comp_type' : document.getElementById("Competition9").value,
          'position_secured' : document.getElementById("Position9").value,
          "verified" : "Pending"
        })
        setShow9(false)
      }).catch(()=>{
        toastIdRef.current = toast({ description: "Error Occurred! Verify entered details", status: 'error',isClosable: true })
      });
    }
  }

  // function insertplacement() {
  //   let params = new URLSearchParams();
  //   params.append("StudentDetails", localStorage.getItem("StudentRoll"));
  //   params.append("Aptitude", document.getElementById("Aptitude10").value);
  //   params.append("Soft", document.getElementById("Soft10").value);
  //   params.append("Reasoning", document.getElementById("Reasoning10").value);
  //   params.append("Technical", document.getElementById("Technical10").value);
  //   params.append("status", "Pending");
  //   axios.post(server_URL + "placement_insert", params).then((items) => {
  //     if (items.data == "Inserted") {
  //       resul = "Sucessfully Added!!";
  //       onOpen(resul);
  //     } else if (items.data == "NotInserted") {
  //       resul = "Error Occured!!";
  //       onOpen(resul);
  //     }
  //   });
  // }

  function insertmini() {
    if (document.getElementById("Title11").value == '' || document.getElementById("Objective11").value == '' || 
    document.getElementById("O11").value == '') {
      toastIdRef.current = toast({ description: "Enter all the fields!", status: 'warning',isClosable: true })
    } else {
      let params = new URLSearchParams();
      params.append("StudentDetails", localStorage.getItem("StudentRoll"));
      params.append("Title", document.getElementById("Title11").value);
      params.append("Objective", document.getElementById("Objective11").value);
      params.append("Outcome", document.getElementById("O11").value);
      params.append("status", "Pending");
      axios.post(server_URL + "Miniproj_insert", params).then(() => {
        toastIdRef.current = toast({ description: "Sucessfully Added", status: 'success',isClosable: true })
        p11data.push({ 
          'project_title' : document.getElementById("Title11").value,
          'objective' : document.getElementById("Objective11").value,
          'outcome' : document.getElementById("O11").value,
          "verified" : "Pending"
        })
        setShow11(false)
      }).catch(()=>{
        toastIdRef.current = toast({ description: "Error Occurred! Verify entered details", status: 'error',isClosable: true })
      });
    }
  }

  function finalproject() {
    if (document.getElementById("TID12").value == '' || document.getElementById("OBID12").value == '' || 
    document.getElementById("OID12").value == '') {
      toastIdRef.current = toast({ description: "Enter all the fields!", status: 'warning',isClosable: true })
    } else {
      let params = new URLSearchParams();
      params.append("StudentDetails", localStorage.getItem("StudentRoll"));
      params.append("Title", document.getElementById("TID12").value);
      params.append("Objective", document.getElementById("OBID12").value);
      params.append("Outcome", document.getElementById("OID12").value);
      params.append("status", "Pending");
      axios.post(server_URL + "final_stud_insert", params).then(() => {
        toastIdRef.current = toast({ description: "Sucessfully Added", status: 'success',isClosable: true })
        p12data.push({ 
          'project_title' : document.getElementById("TID12").value,
          'objective' : document.getElementById("OBID12").value,
          'outcome' : document.getElementById("OID12").value,
          "verified" : "Pending"
        })
        setShow12(false)
      }).catch(()=>{
        toastIdRef.current = toast({ description: "Error Occurred! Verify entered details", status: 'error',isClosable: true })
      });
    }
  }

  function publications() {
    if (document.getElementById("CONID13").value == '' || document.getElementById("NAMEID13").value == '' || 
    document.getElementById("TID13").value == '' || document.getElementById("IMPID13").value == ''
    || document.getElementById("INID13").value == '' ) {
      toastIdRef.current = toast({ description: "Enter all the fields!", status: 'warning',isClosable: true })
    } else {
      let params = new URLSearchParams();
      params.append("StudentDetails", localStorage.getItem("StudentRoll"));
      params.append("Conference", document.getElementById("CONID13").value);
      params.append("Name", document.getElementById("NAMEID13").value);
      params.append("Title", document.getElementById("TID13").value);
      params.append("Impact", document.getElementById("IMPID13").value);
      params.append("Index", document.getElementById("INID13").value);
      params.append("status", "Pending");
      axios.post(server_URL + "publication_insert", params).then(() => {
        toastIdRef.current = toast({ description: "Sucessfully Added", status: 'success',isClosable: true })
        p13data.push({ 
          'conf_or_journal' : document.getElementById("CONID13").value,
          'name' : document.getElementById("NAMEID13").value,
          'title' : document.getElementById("TID13").value,
          'impact_factor' : document.getElementById("IMPID13").value,
          'indexed_in' : document.getElementById("INID13").value,
          "verified" : "Pending"
        })
        setShow13(false)
      }).catch(()=>{
        toastIdRef.current = toast({ description: "Error Occurred! Verify entered details", status: 'error',isClosable: true })
      });
    }
  }

  let params = new URLSearchParams();
  params.append("StudentDetails", localStorage.getItem("StudentRoll"));
  params.append("RollNumber", localStorage.getItem("StudentRoll"));
  useEffect(async () => {
    axios
      .all([
        axios.post(server_URL + "Industrialv_display", params),
        axios.post(server_URL + "Inplant_display", params),
        axios.post(server_URL + "guest_stud_display", params),
        axios.post(server_URL + "Motivational_display", params),
        axios.post(server_URL + "intern_stud_display", params),
        axios.post(server_URL + "cour_Stud_display", params),
        axios.post(server_URL + "workshop_studisplay", params),
        axios.post(server_URL + "webinar_display", params),
        axios.post(server_URL + "comp_stud_display", params),
        axios.post(server_URL + "placement_display", params),
        axios.post(server_URL + "Miniproj_display", params),
        axios.post(server_URL + "finpro_Stud_display", params),
        axios.post(server_URL + "publication_display", params),
        axios.post(server_URL + "sdiscovery_cadisplay", params),
        axios.post(server_URL + "aptitude_cadisplay", params),
        axios.post(server_URL + "sskills_cadisplay", params),
        axios.post(server_URL + "empskills_cadisplay", params),
      ])
      .then(
        axios.spread(
          (
            data1,
            data2,
            data3,
            data4,
            data5,
            data6,
            data7,
            data8,
            data9,
            data10,
            data11,
            data12,
            data13,
            data14,
            data15,
            data16,
            data17
          ) => {
            setp1data(data1.data);
            setp2data(data2.data);
            setp3data(data3.data);
            setp4data(data4.data);
            setp5data(data5.data);
            setp6data(data6.data);
            setp7data(data7.data);
            setp8data(data8.data);
            setp9data(data9.data);
            setp10data(data10.data);
            setp11data(data11.data);
            setp12data(data12.data);
            setp13data(data13.data);
            setp14data(data14.data);
            setp15data(data15.data);
            setp16data(data16.data);
            setp17data(data17.data);
          }
        )
      );
  }, []);

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
                setDrop1(true),
                  setDrop2(true),
                  setDrop3(true),
                  setDrop4(true),
                  setDrop5(true),
                  setDrop6(true),
                  setDrop7(true),
                  setDrop8(true),
                  setDrop9(true),
                  setDrop10(true),
                  setDrop11(true),
                  setDrop12(true),
                  setDrop13(true),
                  setDrop14(true),
                  setDrop15(true),
                  setDrop16(true),
                  setDrop17(true);
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
                  setDrop4(false),
                  setDrop5(false),
                  setDrop6(false),
                  setDrop7(false),
                  setDrop8(false),
                  setDrop9(false),
                  setDrop10(false),
                  setDrop11(false),
                  setDrop12(false),
                  setDrop13(false),
                  setDrop14(false),
                  setDrop15(false),
                  setDrop16(false),
                  setDrop17(false);
              }}
            >
              Hide All
            </Button>
          </box>
        </Flex>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Industrial Visit
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
                    <Th color="gray.400">Industry</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p1data.map((item1) => {
                    return (
                      <TableRow5
                        row1={item1.industry_name || Null_message}
                        row2={item1.date || Null_message}
                        row3={item1.outcome || Null_message}
                        row4={item1.credits==null ? "Pending" : item1.credits}
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
                    <Th color="gray.400">Industry</Th>
                    <Th color="gray.400">Date and Year</Th>
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
                          placeholder="Enter Industry"
                          id="Industry1"
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
                          placeholder="Enter Date and Year"
                          id="DY1"
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
                          placeholder="Outcome"
                          id="O1"
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
                            onClick={insertindustry}
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
              onClick={handleToggle}
            >
              <AddIcon w={4} h={4} me="3" />
              {show ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Inplant Training
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
                    <Th color="gray.400">Industry</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p2data.map((item2) => {
                    return (
                      <TableRow5
                        row1={item2.industry || Null_message}
                        row2={item2.date || Null_message}
                        row3={item2.outcome || Null_message}
                        row4={item2.credits==null ? "Pending" : item2.credits}
                        row5={item2.verified || Null_message}
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
                    <Th color="gray.400">Industry</Th>
                    <Th color="gray.400">Date and Year</Th>
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
                          placeholder="Enter Industry"
                          id="Industry2"
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
                          placeholder="Enter Date and Year"
                          id="DY2"
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
                          placeholder="Outcome"
                          id="O2"
                        />
                      </Flex>
                    </Td>
                    <Td>
                      <SlideFade in={show2}>
                        <SlideFade in={show2}>
                          <Button
                            onClick={insertinplant}
                            bg="orange.300"
                            width="fit-content"
                          >
                            Submit
                          </Button>
                        </SlideFade>
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
              Guest Lecture
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
          <Collapse mt="1em" in={drop3}>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Resource Person</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p3data.map((item3) => {
                    return (
                      <TableRow5
                        row1={item3.topic || Null_message}
                        row2={item3.resource_person || Null_message}
                        row3={item3.outcome || Null_message}
                        row4={item3.credits==null ? "Pending" : item3.credits}
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
                  <Tr>
                    <Th color="gray.400">Topic</Th>

                    <Th color="gray.400">Resource Person</Th>
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
                          placeholder="Topic"
                          id="Topic"
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
                          placeholder="Resource Person"
                          id="Resource"
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
                          placeholder="Outcome"
                          id="O3"
                        />
                      </Flex>
                    </Td>
                    <Td>
                      <SlideFade in={show3}>
                        <Button
                          onClick={insertlecture}
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
              Motivational Talks
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
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Resource Person</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p4data.map((item4) => {
                    return (
                      <TableRow6
                        row1={item4.topic || Null_message}
                        row2={item4.date || Null_message}
                        row3={item4.resource_person || Null_message}
                        row4={item4.outcome || Null_message}
                        row5={item4.credits==null ? "Pending" : item4.credits}
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
                  <Tr>
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Resource Person</Th>
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
                          placeholder="Topic"
                          id="Topic4"
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
                          placeholder="Enter Date and Year"
                          id="DY4"
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
                          placeholder="Resource Person"
                          id="Resource4"
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
                          placeholder="Outcome"
                          id="O4"
                        />
                      </Flex>
                    </Td>
                    <Td>
                      <SlideFade in={show4}>
                        <Button
                          onClick={insertmotivation}
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

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Internships
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop5(!drop5)}
            >
              {drop5 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop5}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Company</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Duration in months</Th>
                    <Th color="gray.400">Reference</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p5data.map((item5) => {
                    return (
                      <TableRow6
                        row1={item5.company_name || Null_message}
                        row2={item5.date || Null_message}
                        row3={item5.duration || Null_message}
                        row4={item5.reference || Null_message}
                        row5={item5.credits==null ? "Pending" : item5.credits}
                        row6={item5.verified || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show5 && drop5}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr>
                    <Th color="gray.400">Company</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">duration in months</Th>
                    <Th color="gray.400">Reference</Th>
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
                          placeholder="Enter company"
                          id="Company5"
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
                          placeholder="Date and Year"
                          id="DY5"
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
                          placeholder="Duration in months"
                          id="Duration5"
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
                          placeholder="Reference"
                          id="Reference5"
                        />
                      </Flex>
                    </Td>

                    <Td>
                      <SlideFade in={show5}>
                        <Button
                          onClick={insertintern}
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
        <Collapse in={drop5}>
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
              onClick={handleToggle5}
            >
              <AddIcon w={4} h={4} me="3" />
              {show5 ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Value Added Course
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop6(!drop6)}
            >
              {drop6 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop6}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Course Name</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p6data.map((item6) => {
                    return (
                      <TableRow5
                        row1={item6.course_name || Null_message}
                        row2={item6.date || Null_message}
                        row3={item6.outcome || Null_message}
                        row4={item6.credits==null ? "Pending" : item6.credits}
                        row5={item6.verified || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show6 && drop6}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr>
                    <Th color="gray.400">Course Name</Th>
                    <Th color="gray.400">Date and Year</Th>
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
                          placeholder="Enter Course Name"
                          id="Course6"
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
                          placeholder="Date and Year"
                          id="DY6"
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
                          id="O6"
                        />
                      </Flex>
                    </Td>

                    <Td>
                      <SlideFade in={show6}>
                        <Button
                          onClick={insertvalue}
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

        <Collapse in={drop6}>
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
              onClick={handleToggle6}
            >
              <AddIcon w={4} h={4} me="3" />
              {show6 ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Workshop
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop7(!drop7)}
            >
              {drop7 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop7}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Resource Person</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p7data.map((item7) => {
                    return (
                      <TableRow6
                        row1={item7.topic || Null_message}
                        row2={item7.date || Null_message}
                        row3={item7.resource_person || Null_message}
                        row4={item7.outcome || Null_message}
                        row5={item7.credits==null ? "Pending" : item7.credits}
                        row6={item7.verified || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show7 && drop7}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr>
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Resource Person</Th>
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
                          placeholder="Topic"
                          id="Topic7"
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
                          placeholder="Enter Date and Year"
                          id="DY7"
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
                          placeholder="Resource Person"
                          id="Resource7"
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
                          placeholder="Outcome"
                          id="O7"
                        />
                      </Flex>
                    </Td>

                    <Td>
                      <SlideFade in={show7}>
                        <Button
                          onClick={insertworkshop}
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
        <Collapse in={drop7}>
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
              onClick={handleToggle7}
            >
              <AddIcon w={4} h={4} me="3" />
              {show7 ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Webinar
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop8(!drop8)}
            >
              {drop8 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop8}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Resource Person</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p8data.map((item8) => {
                    return (
                      <TableRow6
                        row1={item8.topic || Null_message}
                        row2={item8.date || Null_message}
                        row3={item8.resource_person || Null_message}
                        row4={item8.outcome || Null_message}
                        row5={item8.credits==null ? "Pending" : item8.credits}
                        row6={item8.verified || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show8 && drop8}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr>
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Resource Person</Th>
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
                          placeholder="Topic"
                          id="Topic8"
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
                          placeholder="Enter Date and Year"
                          id="DY8"
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
                          placeholder="Resource Person"
                          id="Resource8"
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
                          placeholder="Outcome"
                          id="O8"
                        />
                      </Flex>
                    </Td>
                    <Td>
                      <SlideFade in={show8}>
                        <Button
                          onClick={insertwebinar}
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
        <Collapse in={drop8}>
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
              onClick={handleToggle8}
            >
              <AddIcon w={4} h={4} me="3" />
              {show8 ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Competition
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop9(!drop9)}
            >
              {drop9 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop9}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Name</Th>
                    <Th color="gray.400">
                      Type of Competion (Coding / Project)
                    </Th>
                    <Th color="gray.400">Date and year</Th>
                    <Th color="gray.400">Position Secured</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p9data.map((item9) => {
                    return (
                      <TableRow6
                        row1={item9.comp_name || Null_message}
                        row2={item9.comp_type || Null_message}
                        row3={item9.date || Null_message}
                        row4={item9.position_secured || Null_message}
                        row5={item9.credits==null ? "Pending" : item9.credits}
                        row6={item9.verified || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show9 && drop9}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr>
                    <Th color="gray.400">Name</Th>
                    <Th color="gray.400">
                      Type of Competion (Coding / Project)
                    </Th>
                    <Th color="gray.400">Date and year</Th>
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
                          placeholder="Enter Name"
                          id="Name9"
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
                          placeholder="Enter Type Of Competition"
                          id="Competition9"
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
                          placeholder="Enter Date"
                          id="DY9"
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
                          placeholder="Enter Position"
                          id="Position9"
                        />
                      </Flex>
                    </Td>

                    <Td>
                      <SlideFade in={show9}>
                        <Button
                          onClick={insertcompetition}
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
        <Collapse in={drop9}>
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
              onClick={handleToggle9}
            >
              <AddIcon w={4} h={4} me="3" />
              {show9 ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Mini Project
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop11(!drop11)}
            >
              {drop11 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop11}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Title</Th>
                    <Th color="gray.400">Objective</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p11data.map((item11) => {
                    return (
                      <TableRow5
                        row1={item11.project_title || Null_message}
                        row2={item11.objective || Null_message}
                        row3={item11.outcome || Null_message}
                        row4={item11.credits==null ? "Pending" : item11.credits}
                        row5={item11.verified || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show11 && drop11}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr>
                    <Th color="gray.400">Title</Th>
                    <Th color="gray.400">Objective</Th>
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
                          placeholder="Title"
                          id="Title11"
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
                          placeholder="Objective"
                          id="Objective11"
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
                          placeholder="Outcome"
                          id="O11"
                        />
                      </Flex>
                    </Td>

                    <Td>
                      <SlideFade in={show11}>
                        <Button
                          onClick={insertmini}
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
        <Collapse in={drop11}>
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
              onClick={handleToggle11}
            >
              <AddIcon w={4} h={4} me="3" />
              {show11 ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Final Project
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop12(!drop12)}
            >
              {drop12 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop12}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Title</Th>
                    <Th color="gray.400">Objective</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p12data.map((item12) => {
                    return (
                      <TableRow5
                        row1={item12.project_title || Null_message}
                        row2={item12.objective || Null_message}
                        row3={item12.outcome || Null_message}
                        row4={item12.credits==null ? "Pending" : item12.credits}
                        row5={item12.verified || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show12 && drop12}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr>
                    <Th color="gray.400">Title</Th>
                    <Th color="gray.400">Objective</Th>
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
                          placeholder="Title"
                          id="TID12"
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
                          placeholder="Objective"
                          id="OBID12"
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
                          placeholder="Outcome"
                          id="OID12"
                        />
                      </Flex>
                    </Td>

                    <Td>
                      <SlideFade in={show12}>
                        <Button
                          onClick={finalproject}
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
        <Collapse in={drop12}>
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
              onClick={handleToggle12}
            >
              <AddIcon w={4} h={4} me="3" />
              {show12 ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Publications
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop13(!drop13)}
            >
              {drop13 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop13}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Conference / Journal</Th>
                    <Th color="gray.400">Name of Conference / Journal</Th>
                    <Th color="gray.400">Title Of the Article</Th>
                    <Th color="gray.400">Impact Factor</Th>
                    <Th color="gray.400">Indexed In</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p13data.map((item13) => {
                    return (
                      <TableRow7
                        row1={item13.conf_or_journal || Null_message}
                        row2={item13.name || Null_message}
                        row3={item13.title || Null_message}
                        row4={item13.impact_factor || Null_message}
                        row5={item13.indexed_in || Null_message}
                        row6={item13.credits==null ? "Pending" : item13.credits}
                        row7={item13.verified || Null_message}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Collapse in={show13 && drop13}>
          <Card>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr>
                    <Th color="gray.400">Conference / Journal</Th>
                    <Th color="gray.400">Name of Conference / Journal</Th>
                    <Th color="gray.400">Title Of the Article</Th>
                    <Th color="gray.400">Impact Factor</Th>
                    <Th color="gray.400">Indexed In</Th>
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
                          placeholder="Conference / Journal"
                          id="CONID13"
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
                          placeholder="Name of Conference / Journal"
                          id="NAMEID13"
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
                          placeholder="Title Of The Article"
                          id="TID13"
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
                          placeholder="Impact Factor"
                          id="IMPID13"
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
                          placeholder="Indexed In"
                          id="INID13"
                        />
                      </Flex>
                    </Td>

                    <Td>
                      <SlideFade in={show13}>
                        <Button
                          onClick={publications}
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
        <Collapse in={drop13}>
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
              onClick={handleToggle13}
            >
              <AddIcon w={4} h={4} me="3" />
              {show13 ? "Cancel" : "Add"}
            </Button>
          </SimpleGrid>
        </Collapse>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Placement Training
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop10(!drop10)}
            >
              {drop10 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop10}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Aptitude</Th>
                    <Th color="gray.400">Skill Rack</Th>
                    <Th color="gray.400">Soft Skills</Th>
                    <Th color="gray.400">Employability Skill</Th>
                    <Th color="gray.400">Credits</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p10data.map((item10) => {
                    return (
                      <TableRow5
                        row1={item10.aptitude || Null_message}
                        row2={item10.skillrack || Null_message}
                        row3={item10.soft_skills || Null_message}
                        row4={item10.employability_skills || Null_message}
                        row5={item10.credits==null ? "Pending" : item10.credits}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Aptitude
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop14(!drop14)}
            >
              {drop14 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop14}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Assessment</Th>
                    <Th color="gray.400">Date</Th>
                    <Th color="gray.400">Remarks</Th>
                    <Th color="gray.400">Credits</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p15data.map((item15) => {
                    return (
                      <TableRow4
                        row1={item15.assessment || Null_message}
                        row2={item15.date || Null_message}
                        row3={item15.remarks || Null_message}
                        row4={item15.credits==null ? "Pending" : item15.credits}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Soft Skills
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop15(!drop15)}
            >
              {drop15 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop15}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Skill</Th>
                    <Th color="gray.400">Trainer</Th>
                    <Th color="gray.400">Date</Th>
                    <Th color="gray.400">Remarks</Th>
                    <Th color="gray.400">Credits</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p16data.map((item16) => {
                    return (
                      <TableRow5
                        row1={item16.skill || Null_message}
                        row2={item16.trainer || Null_message}
                        row3={item16.date || Null_message}
                        row4={item16.remarks || Null_message}
                        row5={item16.credits==null ? "Pending" : item16.credits}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              System Discovery
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop16(!drop16)}
            >
              {drop16 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop16}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Components</Th>
                    <Th color="gray.400">Date</Th>
                    <Th color="gray.400">Remarks</Th>
                    <Th color="gray.400">Credits</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p14data.map((item14) => {
                    return (
                      <TableRow4
                        row1={item14.components || Null_message}
                        row2={item14.date || Null_message}
                        row3={item14.remarks || Null_message}
                        row4={item14.credits==null ? "Pending" : item14.credits}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Employability Skills
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop17(!drop17)}
            >
              {drop17 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop17}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Technical Skill</Th>
                    <Th color="gray.400">Trainer</Th>
                    <Th color="gray.400">Date</Th>
                    <Th color="gray.400">Remarks</Th>
                    <Th color="gray.400">Credits</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p17data.map((item17) => {
                    return (
                      <TableRow5
                        row1={item17.tech_skill || Null_message}
                        row2={item17.trainer || Null_message}
                        row3={item17.date || Null_message}
                        row4={item17.remarks || Null_message}
                        row5={item17.credits==null ? "Pending" : item17.credits}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>
      </SimpleGrid>
    </Flex>
  );
}

export default ProfessionalDevelopmentData0;
