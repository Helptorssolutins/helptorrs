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
        <Link>Sell on Helptors</Link>
      </Box>
      <Box>
        <Button>Register</Button>
      </Box>
      <Box w="476px">
        <InputGroup>
          <InputLeftElement children={<SearchIcon cursor="pointer" />} />
          <Input
            variant="filled"
            placeholder="useless items on white background"
          />
          <InputRightElement
            children={<CloseIcon cursor="pointer" color="#2979FF" />}
          />
        </InputGroup>
      </Box>
      <Box>
        {" "}
        <Link>Consumer Electronics</Link>
      </Box>

      <Box>
        <Button>Sign in</Button>
      </Box>
      <Box>
        <Button>My Cart</Button>
      </Box>
      <Box>
        <Avatar name="" src="" />
      </Box>
    </Flex>
  );
}

export default Navbar;
