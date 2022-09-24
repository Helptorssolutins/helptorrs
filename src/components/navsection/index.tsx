import React from "react";

import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
} from "@chakra-ui/react";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";

function Navbar() {
  return (
    <Flex
      justifyContent="space-evenly"
      pos="sticky"
      mt="20px"
      alignItems="center"
    >
      <Box>
        <Heading
          fontSize="36px"
          fontWeight={500}
          h="46px"
          fontFamily="Red Hat Display"
        >
          Helptors
        </Heading>
      </Box>
      <Box>
        <Link color="#2264D1" _hover={{ textDecor: "none" }}>
          Sell on Helptors
        </Link>
      </Box>
      <Box>
        <Button color="#2264D1">Register</Button>
      </Box>
      <Box w="476px">
        <InputGroup>
          <InputLeftElement children={<SearchIcon cursor="pointer" />} />
          <Input
            variant="filled"
            placeholder="useless items on white background"
            bg="#EDEDF0"
          />
          <InputRightElement
            children={<CloseIcon cursor="pointer" color="#2979FF" />}
          />
        </InputGroup>
      </Box>
      <Box>
        {" "}
        <Link color="#2264D1" _hover={{ textDecor: "none" }}>
          Consumer Electronics
        </Link>
      </Box>

      <Box>
        <Button color="#2264D1">Sign in</Button>
      </Box>
      <Box>
        <Button color="#2264D1">My Cart</Button>
      </Box>
      <Box>
        <Avatar name="" src="" />
      </Box>
    </Flex>
  );
}

export default Navbar;
