import React from "react";
import { Box, VStack, Center, ScrollView } from "native-base";
import { useWindowDimensions } from "react-native";
import Header from "./Header";

const HomeWrapper = (props) => {
  const { children } = props;
  const { width, height } = useWindowDimensions();

  return (
    <ScrollView>
      <Center>
        <Box
          minHeight={height}
          bgColor="#0A192F"
          p={{ base: 6 }}
          width={{ base: width, xl: 1680 }}
        >
          <VStack space={4} flex={1}>
            <Header />
            {children}
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  );
};

export default HomeWrapper;
