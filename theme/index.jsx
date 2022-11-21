import { extendTheme } from "native-base";

const Theme = () => {
  return extendTheme({
    fontConfig: {
      "Proxima Nova": {
        100: {
          normal: "ProximaNova-Thin",
          italic: "ProximaNova-Italic",
        },
        200: {
          normal: "ProximaNova-Thin",
          italic: "ProximaNova-Italic",
        },
        300: {
          normal: "ProximaNova-Thin",
          italic: "ProximaNova-Italic",
        },
        400: {
          normal: "ProximaNova-Regular",
          italic: "ProximaNova-Italic",
        },
        500: {
          normal: "ProximaNova-Medium",
          italic: "ProximaNova-Italic",
        },
        600: {
          normal: "ProximaNova-Semibold",
          italic: "ProximaNova-Italic",
        },
        700: {
          normal: "ProximaNova-Bold",
          italic: "ProximaNova-Italic",
        },
      },
    },
    fonts: {
      ProximaNova: "Proxima Nova",
    },
  });
};

export { Theme };
export { default as isFontLoaded } from "./isFontLoaded";
