import React, { PropsWithChildren } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./NavBar";
import theme from "../theme";
import Container from "./Container";
import "../style/defaults.css";

type Props = {
  location?: string;
  hideNav?: boolean;
};

const Layout = ({ children, location, hideNav }: PropsWithChildren<Props>) => (
  <ChakraProvider theme={theme}>
    <Container>
      {!hideNav && <NavBar location={location} />}
      {children}
    </Container>
  </ChakraProvider>
);

export default Layout;
