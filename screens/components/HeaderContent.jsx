import React from "react";
import { HStack, Text, Button, Stack } from "native-base";
import { Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HeaderContent = (props) => {
  const navigation = useNavigation();
  const { setMenuPressed } = props;
  const navigateAndCloseMenu = (screen) => {
    navigation.navigate(screen);
    setMenuPressed(false);
  };

  return (
    <Stack
      space={4}
      alignItems="center"
      direction={{ base: "column", md: "row" }}
    >
      <Text
        color={"#B4BFDE"}
        onPress={() => {
          navigateAndCloseMenu("About");
        }}
      >
        About
      </Text>
      {/* <Text color={"#B4BFDE"}>Projects</Text> */}
      <Text
        color={"#B4BFDE"}
        onPress={() => {
          navigateAndCloseMenu("Contact");
        }}
      >
        Contact
      </Text>
      <Button
        _text={{ color: "#63FBD7" }}
        bgColor="#0A192F"
        borderColor={"#63FBD7"}
        borderWidth={1.5}
        height={{ base: 8, md: 10 }}
        onPress={() => {
          Linking.openURL(
            "https://drive.google.com/file/d/1eq9Jdew0m1GZ3gdWvi0NnEJGrmaKt1bz/view?usp=sharing"
          );
        }}
      >
        Resume
      </Button>
    </Stack>
  );
};

export default HeaderContent;
