import { Center, NativeBaseProvider, Text } from "native-base";
import { useWindowDimensions } from "react-native";
import { Home } from "./screens";

export default function App() {
  const { height } = useWindowDimensions();
  return (
    <NativeBaseProvider>
      <Home/>
    </NativeBaseProvider>
  );
}
