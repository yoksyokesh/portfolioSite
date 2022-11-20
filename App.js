import { Center, NativeBaseProvider, Text } from "native-base";
import { useWindowDimensions } from "react-native";
import { Home } from "./screens";
import isFontLoaded from "./theme/isFontLoaded";
import Theme from "./theme";
import { useFonts } from "expo-font";

export default function App() {
  const { height } = useWindowDimensions();
  const fontLoad = isFontLoaded();

  if (!fontLoad) return <></>;

  return (
    <NativeBaseProvider>
      <Text fontFamily={"ProximaNova-Regular"}>checking...</Text>
      {/* <Home /> */}
    </NativeBaseProvider>
  );
}
