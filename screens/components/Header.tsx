import {
  HStack,
  Text,
  Button,
  Icon,
  useBreakpointValue,
  Box,
} from "native-base";
import React from "react";

const Header = () => {
  const isLargeScreen = useBreakpointValue({ base: false, md: true });
  console.log(isLargeScreen);

  return (
    <HStack
      space={{ base: 2, md: 3, lg: 4 }}
      justifyContent="space-between"
      alignItems={"center"}
      p={{ base: 5 }}
    >
      <Box borderColor={"#63FBD7"} borderWidth={1.5} p={2}>
        <Text color={"#63FBD7"} fontWeight="bold">
          Y<Text color={"#B4BFDE"}>okesh</Text>
        </Text>
      </Box>
      <HStack space={{ base: 2, md: 3, lg: 4 }} alignItems="center">
        <Text color={"#B4BFDE"}>About</Text>
        <Text color={"#B4BFDE"}>Projects</Text>
        <Text color={"#B4BFDE"}>Contact me</Text>
        <Button
          _text={{ color: "#63FBD7" }}
          bgColor="#0A192F"
          borderColor={"#63FBD7"}
          borderWidth={1.5}
        >
          Resume
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
