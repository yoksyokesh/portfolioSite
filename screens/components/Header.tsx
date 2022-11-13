import {
  HStack,
  Text,
  Button,
  Icon,
  useBreakpointValue,
  Box,
} from "native-base";
import React from "react";
import HeaderContent from "./HeaderContent";
import { Feather } from "@expo/vector-icons";

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
      {isLargeScreen ? (
        <HeaderContent />
      ) : (
        <Icon as={Feather} name={"menu"} size={8} color="#63FBD7" />
      )}
    </HStack>
  );
};

export default Header;
