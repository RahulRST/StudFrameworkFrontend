/** @format */

import React from "react";

// Chakra imports
import {
  Text,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

function ServerError() {
  const textColor = useColorModeValue("gray.400", "white");
  return (
    <SimpleGrid>
      <div>
        <Text
          mt="7em"
          align="center"
          fontSize="5xl"
          color={textColor}
          fontWeight="bold"
        >
          Error 404 !
        </Text>
      </div>
      <div>
        <Text
          m="2"
          align="center"
          fontSize="xl"
          color={textColor}
          fontWeight="bold"
        >
          The portal is under construction, try again later
        </Text>
      </div>
    </SimpleGrid>
  );
}

export default ServerError;
