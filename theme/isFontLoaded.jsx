import React from "react";
import { useFonts } from "expo-font";

const isFontLoaded = () => {
  const [fontsLoaded] = useFonts({
    "ProximaNova-Regular": require("../assets/fonts/ProximaNova-Regular.otf"),
  });

  return fontsLoaded;
};

export default isFontLoaded;
