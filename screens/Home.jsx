import react from "react";
import { Box, VStack, Text } from "native-base";
import { useWindowDimensions } from "react-native";
import { Header } from "./components";
import { useFonts } from "expo-font"; 
import { processFontFamily } from 'expo-font';

const Home = () => {
  const { height } = useWindowDimensions();
  const proximaNovaFont = processFontFamily('Proxima Nova') || '';
  // const [fontsLoaded] = useFonts({
  //   'ProximaNova-Regular': require('../assets/fonts/ProximaNova-Regular.otf'),
  // });

  // if(!fontsLoaded) return null;

  return (
    <Box
      height={height}
      bgColor="#0A192F"
      p={{ base: 5 }}
    >
      <VStack space={2}>
        <Header />
        <VStack alignSelf={"center"} space={{ base: 2, md: 3, lg: 4 }}>
          <Text color={"#63FBD7"}>Hi, my name is</Text>
          <Text color={"#CCD6F6"}>Yokesh.</Text>
          <Text color={"#8892B0"}>I build things for web, android, iOS.</Text>
          <Text color={"#65708C"} fontFamily='Proxima Nova' fontWeight={700}>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products.
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Home;
