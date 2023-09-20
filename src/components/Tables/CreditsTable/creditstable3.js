import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { server_URL } from "controller/urls_config";
export default function CreditsTable3() {
  let params = new URLSearchParams();
  let [data, setdata] = useState([]);
  params.append("dept", localStorage.getItem("dept"));
  useEffect(async () => {
    axios.post(server_URL + "getCreditsOfficials", params).then((items) => {
      // setdata(items.data);
      setdata(items.data);
      // console.log(items);
    });
  }, []);

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Department</Th>
            <Th>Students Graded</Th>
            <Th>Students Not Graded</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row) => {
            return (
              <Tr>
                <Td>{row.dept}</Td>
                <Td>{row.verified}</Td>
                <Td>{row.pending}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
