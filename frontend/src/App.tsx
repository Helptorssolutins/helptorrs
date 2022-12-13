import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Footer from "./components/footer/index";
import Navbar from "./components/header/navbar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <Footer />
  </ChakraProvider>
);
