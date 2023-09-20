/** @format */

// Chakra imports
import { Box, Flex, SimpleGrid, Stat, StatLabel } from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import BarChartInternship from "components/Charts/BarChartInternship3";
import BarChartPlacement from "components/Charts/BarChartPlacement3";

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
                  Placement Statistics
                </StatLabel>
              </Stat>
              <Box w="100%" h={{ sm: "225px" }} ps="8px" pt={"20px"}>
                <BarChartPlacement />
              </Box>
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
                  Internships
                </StatLabel>
              </Stat>
              <Box w="100%" h={{ sm: "225px" }} ps="8px">
                <BarChartInternship />
              </Box>
            </Flex>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Flex>
  );
}
