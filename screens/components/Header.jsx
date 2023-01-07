import {
  HStack,
  Text,
  Button,
  Icon,
  useBreakpointValue,
  Box,
  Pressable,
} from "native-base";
import React from "react";
import HeaderContent from "./HeaderContent";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const isLargeScreen = useBreakpointValue({ base: false, md: true });
  const [menuPressed, setMenuPressed] = useState(false);
  const navigation = useNavigation();

  return (
    <Box>
      <HStack
        space={{ base: 2, md: 3, lg: 4 }}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Pressable
          borderColor={"#63FBD7"}
          borderWidth={1.5}
          p={2}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text color={"#63FBD7"} fontWeight="bold">
            Y<Text color={"#B4BFDE"}>okesh</Text>
          </Text>
        </Pressable>
        {isLargeScreen ? (
          <HeaderContent setMenuPressed={setMenuPressed}/>
        ) : (
          <Box
            borderWidth={1.5}
            borderColor={menuPressed ? "#63FBD7" : "transparent"}
            alignItems="center"
          >
            <Icon
              as={Feather}
              name={"menu"}
              size={8}
              color="#63FBD7"
              onPress={() => setMenuPressed(!menuPressed)}
            />
          </Box>
        )}
      </HStack>
      {menuPressed ? <HeaderContent setMenuPressed={setMenuPressed} /> : <></>}
    </Box>
  );
};

export default Header;
