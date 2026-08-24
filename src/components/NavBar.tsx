import { Box, Flex, Heading, HStack, Img, Link } from "@chakra-ui/react";
import React from "react";
type Props = {
  location?: string;
};
const NavBar = ({ location }: Props) => (
  <Box
    w="full"
    py="0"
    mb="0"
  >
    <Flex justify="space-between" align="center">
      <Link href="/" _hover={{ textDecoration: "none" }}>
        <HStack align="center" spacing="4">
          <Img src="/alf.jpg" w="10" h="10" borderRadius="lg" objectFit="cover" />
          <Heading size="lg">Alf S.</Heading>
        </HStack>
      </Link>
    </Flex>
  </Box>
);
export default NavBar;