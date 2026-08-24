import * as React from "react";
import { Center, HStack, Text, VStack } from "@chakra-ui/react";
import { Link } from "gatsby";
import { IoReturnUpBack } from "react-icons/io5";
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout hideNav>
      <Center minH="70vh">
        <VStack spacing="4" textAlign="center">
          <Text fontSize="md" fontWeight="medium" color="#1a1a1a">
            404
          </Text>
          <Link to="/" style={{ textDecoration: "none" }}>
            <HStack
              bg="#f4f4f5"
              px="3"
              py="1.5"
              borderRadius="lg"
              spacing="2"
              color="#6b6b6b"
              transition="all 0.2s ease-in-out"
              _hover={{ bg: "#ebebec", color: "#1a1a1a" }}
              cursor="pointer"
            >
              <IoReturnUpBack size="18" />
              <Text fontSize="sm" fontWeight="medium">Home</Text>
            </HStack>
          </Link>
        </VStack>
      </Center>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => (
  <>
    <title>404 | Alf S.</title>
  </>
);
