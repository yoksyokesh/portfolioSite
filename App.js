import { Center, NativeBaseProvider, Text } from "native-base";
import { useWindowDimensions } from "react-native";
import { Home } from "./screens";
import { isFontLoaded } from "./theme";
import Theme from "./theme";
import { useFonts } from "expo-font";

export default function App() {
  const { height } = useWindowDimensions();
  // const fontLoad = isFontLoaded();

  // if (!fontLoad) return null;

  const [fontsLoaded] = useFonts({
    "ProximaNova-Regular": require('./assets/fonts/ProximaNova-Regular.otf'),
    // "ProximaNova-Bold": require("../assets/fonts/Proxima Nova Bold.otf"),
  });
console.log(fontsLoaded)
if(!fontsLoaded) return null;
  return (
    <NativeBaseProvider theme={Theme}>
      <Text fontFamily={'ProximaNova-Regular'}>checking...</Text>
      {/* <Home /> */}
    </NativeBaseProvider>
  );
}
