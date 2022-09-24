import { Avatar, Box, Button, Flex, Input, Link } from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <Flex>
      <Link></Link>
      <Link></Link>
      <Input variant="filled" placeholder="Filled" />
      <Link></Link>
      <Box>
        <Button></Button>
        <Button></Button>
        <Avatar name="" src="" />
      </Box>
    </Flex>
  );
}

export default Navbar;
