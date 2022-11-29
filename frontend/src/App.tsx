import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import SidebarWithNavbar from "./components/navsection";
import ProductCard from "./components/card";

export const App = () => (
  <ChakraProvider theme={theme}>
    <SidebarWithNavbar children={undefined} />
    <ProductCard />
  </ChakraProvider>
);
