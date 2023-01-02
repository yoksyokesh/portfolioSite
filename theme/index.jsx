import { extendTheme } from "native-base";

const Theme = () => {
  return extendTheme({
    breakpoints: {
      base: 0,
      sm: 360,
      md: 768,
      lg: 1280,
      xl: 1680,
      "2xl": 2560,
    },
    fontConfig: {
      "Roboto": {
        100: {
          normal: "Roboto-Thin",
          italic: "Roboto-Italic",
        },
        200: {
          normal: "Roboto-Thin",
          italic: "Roboto-Italic",
        },
        300: {
          normal: "Roboto-Thin",
          italic: "Roboto-Italic",
        },
        400: {
          normal: "Roboto-Regular",
          italic: "Roboto-Italic",
        },
        500: {
          normal: "Roboto-Medium",
          italic: "Roboto-Italic",
        },
        600: {
          normal: "Roboto-Medium",
          italic: "Roboto-Italic",
        },
        700: {
          normal: "Roboto-Bold",
          italic: "Roboto-Italic",
        },
      },
    },
    fonts: {
      // heading: "Proxima Nova",
      body: "Roboto",
      // mono: "Proxima Nova",
    },
  });
};

export { Theme };
export { default as isFontLoaded } from "./isFontLoaded";
