import { Center, NativeBaseProvider, Text } from "native-base";
import { useWindowDimensions } from "react-native";
import { Home } from "./screens";
import isFontLoaded from "./theme/isFontLoaded";
import Theme from "./theme";

export default function App() {
  const { height } = useWindowDimensions();

  if (!isFontLoaded()) return <></>;

  return (
    <NativeBaseProvider theme={Theme()}>
      <Text fontFamily={"ProximaNova"}>checking...</Text>
      {/* <Home /> */}
    </NativeBaseProvider>
  );
}
