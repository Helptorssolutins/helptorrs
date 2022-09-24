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
        <Input
          variant="filled"
          placeholder="useless items on white background"
        />
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
