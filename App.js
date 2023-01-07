import { NativeBaseProvider } from "native-base";
import { Home, About, Contact } from "./screens";
import { isFontLoaded, Theme } from "./theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  if (!isFontLoaded()) return null;

  return (
    <NativeBaseProvider theme={Theme()}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Yokesh" }}
          ></Stack.Screen>
          <Stack.Screen
            name="About"
            component={About}
            options={{ title: "About Me" }}
          ></Stack.Screen>
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{ title: "Contact Me" }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
