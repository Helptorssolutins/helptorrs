import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Link,
} from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <Flex justifyContent="space-between" pos="sticky" mt="20px">
      <Box>
        <Heading>Helptors</Heading>
      </Box>
      <Box>
        <Link>Sell on Helptors</Link>
      </Box>
      <Box>
        <Button>Register</Button>
      </Box>
      <Box w="476px">
        <Input
          variant="filled"
          placeholder="useless items on white background"
        />
      </Box>
      <Box>
        {" "}
        <Link>Consumer Electronics</Link>
      </Box>

      <Button>Sign in</Button>
      <Button>My Cart</Button>
      <Avatar name="" src="" />
    </Flex>
  );
}

export default Navbar;
