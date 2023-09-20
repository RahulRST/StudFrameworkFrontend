/** @format */

// Chakra imports
import {
  Box,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  Heading,
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import BarChartInternship from "components/Charts/BarChartInternship2";
import BarChartCredits2 from "components/Charts/BarChartCredits2";
import BarChartPlacement from "components/Charts/BarChartPlacement2";
import LineChartAcademics from "components/Charts/LineChartAcademics2";
import BarChartAcademicSummary from "components/Charts/BarChartAcademicSummary2";
import CreditsTable2 from "components/Tables/CreditsTable/creditstable2";
export default function Dashboard() {
  return (
    <Flex direction="column" pt={{ base: "120px", md: "65px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }} gap={5}>
        <Card minH="300px">
          <CardBody>
            <Flex
              flexDirection="column"
              align="center"
              justify="center"
              w="100%"
            >
              <Stat mr="auto">
                <StatLabel
                  fontSize="sm"
                  color="gray.400"
                  fontWeight="bold"
                  pb=".1rem"
                >
                  Placement
                </StatLabel>
              </Stat>
              <Box w="100%" h={{ sm: "225px" }} ps="8px" pt={"20px"}>
                <BarChartPlacement />
              </Box>
            </Flex>
          </CardBody>
        </Card>{" "}
        <Card minH="300px">
          <CardBody>
            <Flex
              flexDirection="column"
              align="center"
              justify="center"
              w="100%"
            >
              <Stat mr="auto">
                <StatLabel
                  fontSize="sm"
                  color="gray.400"
                  fontWeight="bold"
                  pb="1.5rem"
                >
                  Internships
                </StatLabel>
              </Stat>
              <BarChartInternship />
            </Flex>
          </CardBody>
        </Card>
        <Card minH="300px">
          <CardBody>
            <Flex
              flexDirection="column"
              align="center"
              justify="center"
              w="100%"
            >
              <Stat mr="auto">
                <StatLabel
                  fontSize="sm"
                  color="gray.400"
                  fontWeight="bold"
                  pb="1.5rem"
                >
                  Credits
                </StatLabel>
              </Stat>
              <BarChartInternship />
            </Flex>
          </CardBody>
        </Card>
        <BarChartAcademicSummary />
        <LineChartAcademics />
      </SimpleGrid>
      <Card minH="300px">
        <Heading mb={4} color="gray.400">
          Credits Summary
        </Heading>
        <CreditsTable2 />
      </Card>
    </Flex>
  );
}
