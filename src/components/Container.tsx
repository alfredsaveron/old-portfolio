import React, { PropsWithChildren } from "react";

import { Container as ChakraContainer } from "@chakra-ui/react";

const Container = ({ children }: PropsWithChildren<unknown>) => (
  <ChakraContainer
    maxW="1200px"
    minH="100vh"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    py={{ base: "6", md: "8" }}
  >
    {children}
  </ChakraContainer>
);

export default Container;
