//Class Advisor AcademicSummaryTableRow

import {
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function Academicsummarytablerow(props) {
  const { row1, row2, row3, row4 } = props;

  return (
    <div>
      {" "}
      <Tr>
        <Td minWidth={{ sm: "225px" }}>
          <Text>Attendance Percentage : {row1}</Text>
        </Td>
      </Tr>
      <Tr>
        <Td minWidth={{ sm: "225px" }}>
          <Text>CGPA : {row2}</Text>
        </Td>
      </Tr>
      <Tr>
        <Td minWidth={{ sm: "225px" }}>
          <Text>Total Credits : {row3}</Text>
        </Td>
      </Tr>
      <Tr>
        <Td minWidth={{ sm: "225px" }}>
          <Text>Placement Eligibility : {row4}</Text>
        </Td>
      </Tr>
    </div>
  );
}

export default Academicsummarytablerow;
