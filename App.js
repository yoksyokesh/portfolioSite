import { Center, NativeBaseProvider, Text } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Center bgColor="#000000">
        <Text color={"#ffffff"}>Test text</Text>
      </Center>
    </NativeBaseProvider>
  );
}
