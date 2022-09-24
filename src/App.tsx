import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Navbar from "./components/navsection";
import ProductCard from "./components/card";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <ProductCard />
  </ChakraProvider>
);
