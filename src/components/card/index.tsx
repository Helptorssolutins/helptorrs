import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

const IMAGE =
  "https://i0.wp.com/tvguru.co.ke/wp-content/uploads/2022/07/Samsung-55bu8000.webp?fit=600%2C600&ssl=1";

function ProductSimple() {
  return (
    <Box
      role={"group"}
      p={6}
      maxW={"330px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"lg"}
      pos={"relative"}
      zIndex={1}
      ml="250px"
      mb="px"
    >
      <Box
        rounded={"lg"}
        pos={"relative"}
        height={"230px"}
        _after={{
          transition: "all .3s ease",
          content: '""',
          w: "full",
          h: "full",
          pos: "absolute",
          top: 5,
          left: 0,
          backgroundImage: `url(${IMAGE})`,
          filter: "blur(15px)",
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: "blur(20px)",
          },
        }}
      >
        <Image
          rounded={"lg"}
          height={230}
          width={282}
          objectFit={"cover"}
          src={IMAGE}
        />
      </Box>
      <Stack pt={10} align={"center"}>
        <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
          Televisions
        </Text>
        <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
          Samsung 55″ BU8000 Crystal
        </Heading>
        <Stack direction={"row"} align={"center"}>
          <Text fontWeight={800} fontSize={"xl"}>
            KSh79,990
          </Text>
          <Text textDecoration={"line-through"} color={"gray.600"}>
            KSh86,999
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}
export default ProductSimple;
