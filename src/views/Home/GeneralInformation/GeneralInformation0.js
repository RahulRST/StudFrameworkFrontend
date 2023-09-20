/** @format */

// Student Dashboard/General

import React, { useState, useEffect } from "react";
import axios from "axios";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Tr,
  useColorModeValue,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TableRow2 from "components/Tables/TableRow/TableRow2";
import { server_URL } from "controller/urls_config";
import SignIn from "../../Pages/SignIn";

var Loader = require("react-loader");
var GData = TableRow2;

function GeneralInformationdata({ location }) {
  const [data, setData] = useState([]);
  const [Loaded, setLoading] = useState(false);

  // Toast var
  const toast = useToast();

  let auth_token = localStorage.getItem("auth_token");
  
  useEffect(async () => {
    let params = new URLSearchParams();
    params.append("RollNumber", localStorage.getItem("StudentRoll"));  
    axios.post(server_URL + "GeneralData", params).then((items) => {
      setData(items.data);
      setLoading(true);
    });
  },[])


  const textColor = useColorModeValue("gray.700", "white");
  if (auth_token != -1) {
    return (
      <Flex direction="column" pt={{ base: "120px", md: "65px" }}>
        <Loader color="#FBD38D" height={10} width={10} loaded={Loaded} />
        <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
          <Card>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                General Particulars
              </Text>
            </CardHeader>

            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  <Tr>
                    {data.map((item) => {
                      return <GData data={item.sname} field="Student Name" />;
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return <GData data={item.roll_no} field="Roll No." />;
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return <GData data={item.reg_no} field="Register No." />;
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return <GData data={item.gender} field="Sex" />;
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return <GData data={item.dob} field="Date Of Birth" />;
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData data={item.nationality} field="Nationality" />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return <GData data={item.religion} field="Religion" />;
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.if_catholic_parish}
                          field="If Catholic, Parish?"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.dalit_catholic_yn}
                          field="Dalit Catholic"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return <GData data={item.community} field="Community" />;
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData data={item.blood_group} field="Blood Group" />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.mother_tongue}
                          field="Mother Tongue"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData data={item.contact_no} field="Contact Number" />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return <GData data={item.aadhar_no} field="Aadhar No." />;
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.licet_email}
                          field="Official Email ID"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData data={item.email} field="personal Email ID" />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.present_address}
                          field="Present Address"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.permanent_address}
                          field="Permanent Address"
                        />
                      );
                    })}
                  </Tr>
                  <Tr>
                    {data.map((item) => {
                      return (
                        <GData
                          data={item.pan}
                          field="PAN Number"
                        />
                      );
                    })}
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>
          <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }} gap={4}>
            <Card>
              <CardHeader p="6px 0px 22px 0px">
                <Text fontSize="xl" color={textColor} fontWeight="bold">
                  Higher Secondary Details
                </Text>
              </CardHeader>
              <CardBody overflowX={{ sm: "scroll" }}>
                <Table variant="simple" color={textColor}>
                  <Tbody>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.hse_school_name}
                            field="Name of the school"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return <GData data={item.hse_board} field="Board" />;
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.hse_medium}
                            field="Medium of Instruction"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.hse_sec_lang}
                            field="Second Language"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return <GData data={item.hse_group} field="Group" />;
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData data={item.hse_marks} field="Total Marks" />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.hse_percentage}
                            field="Overall Percentage"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData data={item.hse_cutoff} field="Cut-Off Marks" />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.hse_attempts}
                            field="No. of Attempts"
                          />
                        );
                      })}
                    </Tr>
                  </Tbody>
                </Table>
              </CardBody>
            </Card>

            <Card>
              <CardHeader p="6px 0px 22px 0px">
                <Text fontSize="xl" color={textColor} fontWeight="bold">
                  10th Details
                </Text>
              </CardHeader>
              <CardBody overflowX={{ sm: "scroll" }}>
                <Table variant="simple" color={textColor}>
                  <Tbody>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.sslc_school_name}
                            field="Name of the school"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return <GData data={item.sslc_board} field="Board" />;
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.sslc_medium}
                            field="Medium of Instruction"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.sslc_sec_lang}
                            field="Second Language"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData data={item.sslc_marks} field="Total Marks" />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.sslc_percentage}
                            field="Overall Percentage"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.sslc_attempts}
                            field="No. of Attempts"
                          />
                        );
                      })}
                    </Tr>
                  </Tbody>
                </Table>
              </CardBody>
            </Card>

            <Card>
              <CardHeader p="6px 0px 22px 0px">
                <Text fontSize="xl" color={textColor} fontWeight="bold">
                  Father's Details
                </Text>
              </CardHeader>
              <CardBody overflowX={{ sm: "scroll" }}>
                <Table variant="simple" color={textColor}>
                  <Tbody>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.father_name}
                            field="Father's Name"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.father_qualification}
                            field="Father's Qualification"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.father_occupation}
                            field="Father's Occupation"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.father_office_address}
                            field="Father's Office Address"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.father_annual_income}
                            field="Father's Annual Income"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.father_mob_no}
                            field="Father's Mobile No."
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.father_email}
                            field="Father's Email ID"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.guardian_name}
                            field="Guardian Name"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.guardian_qualification}
                            field="Guardian Qualification"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.guardian_occupation}
                            field="Guardian Occupation"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.guardian_office_address}
                            field="Guardian Office Address"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.guardian_annual_income}
                            field="Guardian Annual Income"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.guardian_mob_no}
                            field="Guardian Mobile No."
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.guardian_email}
                            field="Guardian Email ID"
                          />
                        );
                      })}
                    </Tr>
                  </Tbody>
                </Table>
              </CardBody>
            </Card>

            <Card>
              <CardHeader p="6px 0px 22px 0px">
                <Text fontSize="xl" color={textColor} fontWeight="bold">
                  Mother's Details
                </Text>
              </CardHeader>
              <CardBody overflowX={{ sm: "scroll" }}>
                <Table variant="simple" color={textColor}>
                  <Tbody>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.mother_name}
                            field="Mother's Name"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.mother_qualification}
                            field="Mother's Qualification"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.mother_occupation}
                            field="Mother's Occupation"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.mother_office_address}
                            field="Mother's Office Address"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.mother_annual_income}
                            field="Mother's Annual Income"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.mother_mob_no}
                            field="Mother's Mobile No."
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.mother_email}
                            field="Mother's Email ID"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.no_of_siblings}
                            field="No. of Siblings"
                          />
                        );
                      })}
                    </Tr>
                    {/* <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.name_siblings}
                            field="Name of Siblings"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.qualification_siblings}
                            field="Qualification Of Siblings"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.occupation_siblings}
                            field="Occupation"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.alumni_licet_loyola_yn}
                            field="Alumni of LICET or LOYOLA"
                          />
                        );
                      })}
                    </Tr> */}
                  </Tbody>
                </Table>
              </CardBody>
            </Card>

            <Card>
              <CardHeader p="6px 0px 22px 0px">
                <Text fontSize="xl" color={textColor} fontWeight="bold">
                  Admission Details
                </Text>
              </CardHeader>
              <CardBody overflowX={{ sm: "scroll" }}>
                <Table variant="simple" color={textColor}>
                  <Tbody>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.application_no}
                            field="Application No."
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.date_of_ad}
                            field="Date Of Admission"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return <GData data={item.quota} field="Quota" />;
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.regular_lateral_rl}
                            field="Regular / Lateral Entry"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.dayschl_hosteller_dh}
                            field="Day Scholar / Hosteller"
                          />
                        );
                      })}
                    </Tr>
                  </Tbody>
                </Table>
              </CardBody>
            </Card>

            <Card>
              <CardHeader p="6px 0px 22px 0px">
                <Text fontSize="xl" color={textColor} fontWeight="bold">
                  Scholarship Details
                </Text>
              </CardHeader>
              <CardBody overflowX={{ sm: "scroll" }}>
                <Table variant="simple" color={textColor}>
                  <Tbody>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.scholarship_name}
                            field="Scholarship Name"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.scholarship_amount}
                            field="Scholarship Amount"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.first_graduate_yn}
                            field="First Graduate"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.eco_backward_yn}
                            field="Economically Backward ( Annual Income of Parents Less than 1LPA )"
                          />
                        );
                      })}
                    </Tr>
                  </Tbody>
                </Table>
              </CardBody>
            </Card>

            <Card>
              <CardHeader p="6px 0px 22px 0px">
                <Text fontSize="xl" color={textColor} fontWeight="bold">
                  Technical and Non-Technical Skills
                </Text>
              </CardHeader>
              <CardBody overflowX={{ sm: "scroll" }}>
                <Table variant="simple" color={textColor}>
                  <Tbody>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.programming_languages}
                            field="Programming Languages"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.software_proficiency}
                            field="Software Proficieny"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.dept_rel_proficiency}
                            field="Department Related Skills"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.certifications}
                            field="Certifications"
                          />
                        );
                      })}
                    </Tr>

                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.other_skills}
                            field="Other Technical Skills"
                          />
                        );
                      })}
                    </Tr>

                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.aptitude_analytical_skills}
                            field="Aptitude / Analytical Skills"
                          />
                        );
                      })}
                    </Tr>

                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.communication_skills}
                            field="Communication Skills"
                          />
                        );
                      })}
                    </Tr>

                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.social_media_exposure}
                            field="Social Media Exposure"
                          />
                        );
                      })}
                    </Tr>

                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.leadership_skills}
                            field="Leadership Skills"
                          />
                        );
                      })}
                    </Tr>

                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.other_interpersonal_skills}
                            field="Other Interpersonal Skills"
                          />
                        );
                      })}
                    </Tr>
                  </Tbody>
                </Table>
              </CardBody>
            </Card>

            <Card>
              <CardHeader p="6px 0px 22px 0px">
                <Text fontSize="xl" color={textColor} fontWeight="bold">
                  Goals and Professional Membership
                </Text>
              </CardHeader>
              <CardBody overflowX={{ sm: "scroll" }}>
                <Table variant="simple" color={textColor}>
                  <Tbody>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.short_term_goal}
                            field="Short Term Goals"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.long_term_goal}
                            field="Long Term Goals"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.membership_name}
                            field="Membership Name"
                          />
                        );
                      })}
                    </Tr>
                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.membership_no}
                            field="Membership No."
                          />
                        );
                      })}
                    </Tr>

                    <Tr>
                      {data.map((item) => {
                        return (
                          <GData
                            data={item.membership_duration}
                            field="Membership Duration"
                          />
                        );
                      })}
                    </Tr>
                  </Tbody>
                </Table>
              </CardBody>
            </Card>
          </SimpleGrid>
        </SimpleGrid>
      </Flex>
    );
  } else {
    return <SignIn></SignIn>;
  }
}

export default GeneralInformationdata;
