import react from "react";
import { Box } from "native-base";
import { useWindowDimensions } from "react-native";
import { Header } from "./components";

const Home = () => {
  const { height } = useWindowDimensions();

  return (
    <Box height={height} bgColor='#0A192F'>
      <Header />
    </Box>
  );
};

export default Home;
