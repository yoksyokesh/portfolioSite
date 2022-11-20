import React from "react";
import { useFonts } from "expo-font";

const isFontLoaded = () => {
    console.log('here')
  const [fontsLoaded] = useFonts({
    "ProximaNova-Regular": require("../assets/fonts/ProximaNova-Regular.otf"),
    "ProximaNova-Bold": require("../assets/fonts/Proxima Nova Bold.otf"),
  });
console.log(fontsLoaded)
  return fontsLoaded;
};

export default isFontLoaded;
