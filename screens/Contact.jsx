import React from "react";
import { HomeWrapper } from "./components";
import { Text, VStack, HStack, Divider, Box, Icon, Link } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { Linking } from "react-native";

const Contact = () => {
  return (
    <HomeWrapper>
      <VStack
        px={{ md: 6, lg: 24 }}
        // flex={1}
        justifyContent="center"
        space={{ base: 6 }}
      >
        <HStack alignItems={"center"} space={4}>
          <Box alignItems={"center"}>
            <Text
              color={"#CCD6F6"}
              fontWeight="bold"
              fontSize={{ base: 26, md: 32 }}
            >
              Contact Me
            </Text>
          </Box>
          <Box flex={1}>
            <Divider orientation="horizontal" bgColor="#CCD6F6" />
          </Box>
        </HStack>
        <VStack space={{ base: 4 }}>
          <HStack alignItems={"center"} space={2}>
            <Icon
              as={FontAwesome}
              name="envelope-square"
              size={10}
              color="#63FBD7"
            ></Icon>
            <Link
              _text={{ color: "#63FBD7", fontSize: { base: 18, md: 20 } }}
              isUnderlined={false}
              _hover={{ _text: { underline: true } }}
              onPress={() => {
                Linking.openURL(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=yoksyokesh@gmail.com"
                );
              }}
            >
              Mail
            </Link>
          </HStack>
          <HStack alignItems={"center"} space={2}>
            <Icon
              as={FontAwesome}
              name="linkedin-square"
              size={10}
              color="#63FBD7"
            ></Icon>
            <Link
              _text={{ color: "#63FBD7", fontSize: { base: 18, md: 20 } }}
              isUnderlined={false}
              _hover={{ _text: { underline: true } }}
              onPress={() => {
                Linking.openURL("https://www.linkedin.com/in/yoksyokesh/");
              }}
            >
              LinkedIn
            </Link>
          </HStack>
          <HStack alignItems={"center"} space={2}>
            <Icon
              as={FontAwesome}
              name="github-square"
              size={10}
              color="#63FBD7"
            ></Icon>
            <Link
              _text={{ color: "#63FBD7", fontSize: { base: 18, md: 20 } }}
              isUnderlined={false}
              _hover={{ _text: { underline: true } }}
              onPress={() => {
                Linking.openURL("https://github.com/yoksyokesh");
              }}
            >
              GitHub
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </HomeWrapper>
  );
};

export default Contact;
