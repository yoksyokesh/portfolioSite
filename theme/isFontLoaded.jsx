import React from "react";
import { useFonts } from "expo-font";

const isFontLoaded = () => {
  const [fontsLoaded] = useFonts({
    "ProximaNova-Regular": require("../assets/fonts/ProximaNova-Regular.otf"),
    "ProximaNova-Bold": require("../assets/fonts/ProximaNova-Bold.otf"),
    "ProximaNova-Semibold": require("../assets/fonts/ProximaNova-Semibold.otf"),
    "ProximaNova-Medium": require("../assets/fonts/ProximaNova-Medium.ttf"),
    "ProximaNova-Italic": require("../assets/fonts/ProximaNova-Italic.otf"),
    "ProximaNova-Thin": require("../assets/fonts/ProximaNova-Thin.otf"),
  });
  return fontsLoaded;
};

export default isFontLoaded;
