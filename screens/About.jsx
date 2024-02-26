import React from "react";
import { HomeWrapper } from "./components";
import { Text, VStack, HStack, Divider, Box, Icon, Link } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { Linking } from "react-native";

const About = () => {
  return (
    <HomeWrapper>
      <VStack
        px={{ md: 6, lg: 24 }}
        // flex={1}
        justifyContent="center"
      >
        <HStack alignItems={"center"} space={4}>
          <Box alignItems={"center"}>
            <Text
              color={"#CCD6F6"}
              fontWeight="bold"
              fontSize={{ base: 26, md: 32 }}
            >
              About Me
            </Text>
          </Box>
          <Box flex={1}>
            <Divider orientation="horizontal" bgColor="#CCD6F6" />
          </Box>
        </HStack>
        <Text color={"#8892B0"} fontSize={{ base: 18, md: 20 }}>
          {`\n`}Hello! I am Yokesh, an Engineering graduate from
          <Text
            color={"#63FBD7"}
          >{` College of Engineering, Guindy (CEG). `}</Text>
          I enjoy creating things that live on the internet. My interest in
          software development started back in my college days when I decided to
          try build some cross-platform applications in Flutter which then led
          to creation of some desktop applications using Tkinter GUI toolkit.
          {`\n\n`}Fast-forward to today, I'm currently working as
          <Text color={"#63FBD7"}>{` Software Development Engineer `}</Text>
          at Pluralsight, an EdTech company focussed on building a platform to help people upskill themselves. My main focus these
          days is building accessible, inclusive products and digital
          experiences for
          <Text color={"#63FBD7"}>{` web, android & iOS.\n\n`}</Text>I also have
          immense inquisitiveness towards solving Algorithmic problems. Check
          out my
          <Link
            color={"#63FBD7"}
            fontSize={{ base: 18, md: 20 }}
            isUnderlined={false}
            _hover={{ _text: { underline: true } }}
            onPress={() => {
              Linking.openURL("https://leetcode.com/yoksyokesh/");
            }}
          >{` LeetCode `}</Link>
          profile.{`\n\n`}Here are a few technologies I’ve been working with
          recently:{`\n\n`}
        </Text>
        <VStack space={3}>
          <HStack flexWrap={"wrap"} space={{ base: 5, md: 8 }}>
            <HStack space={1} alignItems="center">
              <Icon
                as={Entypo}
                name="triangle-right"
                size={5}
                color="#63FBD7"
              />
              <Text fontSize={{ base: 18, md: 20 }} color="#8892B0">
                {`JavaScript   `}
              </Text>
            </HStack>
            <HStack space={1} alignItems="center">
              <Icon
                as={Entypo}
                name="triangle-right"
                size={5}
                color="#63FBD7"
              />
              <Text fontSize={{ base: 18, md: 20 }} color="#8892B0">
                TypeScript
              </Text>
            </HStack>
          </HStack>
          <HStack flexWrap={"wrap"} space={{ base: 5, md: 8 }}>
            <HStack space={1} alignItems="center">
              <Icon
                as={Entypo}
                name="triangle-right"
                size={5}
                color="#63FBD7"
              />
              <Text
                fontSize={{ base: 18, md: 20 }}
                color="#8892B0"
              >{`React Native`}</Text>
            </HStack>
            <HStack space={1} alignItems="center">
              <Icon
                as={Entypo}
                name="triangle-right"
                size={5}
                color="#63FBD7"
              />
              <Text fontSize={{ base: 18, md: 20 }} color="#8892B0">
                Python
              </Text>
            </HStack>
          </HStack>
          <HStack space={1} alignItems="center">
            <Icon as={Entypo} name="triangle-right" size={5} color="#63FBD7" />
            <Text fontSize={{ base: 18, md: 20 }} color="#8892B0">
              AWS - S3, Lambda, DynamoDB, SES, SNS, Cognito
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </HomeWrapper>
  );
};

export default About;
