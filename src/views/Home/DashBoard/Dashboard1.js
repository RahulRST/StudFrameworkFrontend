/** @format */

// Chakra imports
import { Box, Flex, SimpleGrid, Stat, StatLabel } from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import BarChartPlacement from "components/Charts/BarChart1";
import BarChart from "components/Charts/BarChart";

import LineChart from "components/Charts/LineChart";

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
                  pb="1.5rem"
                >
                  Academic Results
                </StatLabel>
              </Stat>
              <BarChart />
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
                  pb=".1rem"
                >
                  Placement Statistics
                </StatLabel>
              </Stat>
              <Box w="100%" h={{ sm: "225px" }} ps="8px">
                <LineChart />
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
                  pb=".1rem"
                >
                  Fee Statistics
                </StatLabel>
              </Stat>
              <Box w="100%" h={{ sm: "250px" }} ps="8px">
                <LineChart />
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
              <BarChartPlacement />
            </Flex>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Flex>
  );
}
