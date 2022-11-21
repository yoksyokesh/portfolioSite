import { Center, NativeBaseProvider, Text } from "native-base";
import { useWindowDimensions } from "react-native";
import { Home } from "./screens";
import { isFontLoaded, Theme } from "./theme";

export default function App() {
  const { height } = useWindowDimensions();

  if (!isFontLoaded()) return null;

  return (
    <NativeBaseProvider theme={Theme()}>
      <Home />
    </NativeBaseProvider>
  );
}
