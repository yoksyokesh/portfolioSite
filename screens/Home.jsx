import react from "react";
import { VStack, Text } from "native-base";
import { HomeWrapper } from "./components";
import { Linking } from "react-native";

const Home = () => {
  return (
    <HomeWrapper>
      <VStack
        flex={1}
        alignSelf={"center"}
        space={{ base: 6, lg: 8 }}
        px={{ md: 6, lg: 24 }}
        justifyContent="center"
      >
        <Text color={"#63FBD7"} fontSize={16}>
          Hello, I am
        </Text>
        <Text
          color={"#CCD6F6"}
          fontSize={{ base: 40, md: 64, lg: 80 }}
          fontWeight={"bold"}
          lineHeight={{ sm: 40, md: 64, lg: 72 }}
        >
          Yokesh.
        </Text>
        <Text
          color={"#8892B0"}
          fontWeight={"semibold"}
          fontSize={{ base: 40, md: 64, lg: 80 }}
          lineHeight={{ sm: 40, md: 64, lg: 72 }}
        >
          I build cross-platform applications.
        </Text>
        <Text color={"#8892B0"} fontSize={{ base: 18, lg: 20 }}>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at{" "}
          <Text
            color={"#63FBD7"}
            fontSize={{ base: 18, lg: 20 }}
            onPress={() => Linking.openURL("https://www.pluralsight.com/")}
          >
            Pluralsight.
          </Text>
        </Text>
      </VStack>
    </HomeWrapper>
  );
};

export default Home;
