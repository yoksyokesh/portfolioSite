import React from "react";
import { useFonts } from "expo-font";

const isFontLoaded = () => {
  const [fontsLoaded] = useFonts({
    "ProximaNova-Regular": require("../assets/fonts/ProximaNova-Regular.otf"),
    // "ProximaNova-Bold": require("../assets/fonts/Proxima Nova Bold.otf"),
  });
  return fontsLoaded;
};

export default isFontLoaded;
