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
import { useState } from "react";

const Header = () => {
  const isLargeScreen = useBreakpointValue({ base: false, md: true });
  const [menuPressed, setMenuPressed] = useState(false);

  return (
    <Box>
      <HStack
        space={{ base: 2, md: 3, lg: 4 }}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Box borderColor={"#63FBD7"} borderWidth={1.5} p={2}>
          <Text color={"#63FBD7"} fontWeight="bold">
            Y<Text color={"#B4BFDE"}>okesh</Text>
          </Text>
        </Box>
        {isLargeScreen ? (
          <HeaderContent />
        ) : (
          <Icon
            as={Feather}
            name={"menu"}
            size={8}
            color="#63FBD7"
            onPress={() => setMenuPressed(!menuPressed)}
          />
        )}
      </HStack>
      {menuPressed ? <HeaderContent /> : <></>}
    </Box>
  );
};

export default Header;
