/** @format */

import React from "react";

// Chakra imports
import {
  Text,
  SimpleGrid,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";

function Error404() {
  const textColor = useColorModeValue("gray.400", "white");
  return (
    <SimpleGrid>
      <Container>
        <Text
          mt="7em"
          align="center"
          fontSize="5xl"
          color={textColor}
          fontWeight="bold"
        >
          Error 404 !
        </Text>
      </Container>
      <Container>
        <Text
          m="2"
          align="center"
          fontSize="xl"
          color={textColor}
          fontWeight="bold"
        >
          The portal is under construction, try again later
        </Text>
      </Container>
    </SimpleGrid>
  );
}

export default Error404;
