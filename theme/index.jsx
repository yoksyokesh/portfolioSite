import { extendTheme } from "native-base";

const Theme = extendTheme({
    fontConfig:  {
        'Proxima Nova': {
          100: {
            normal: 'ProximaNova-Regular',
            italic: 'ProximaNova-Regular',
          },
          200: {
            normal: 'ProximaNova-Regular',
            italic: 'ProximaNova-Regular',
          },
          300: {
            normal: 'ProximaNova-Regular',
            italic: 'ProximaNova-Regular',
          },
          400: {
            normal: 'ProximaNova-Regular',
            italic: 'ProximaNova-Regular',
          },
          500: {
            normal: 'ProximaNova-Regular',
            italic: 'ProximaNova-Regular',
          },
          600: {
            normal: 'ProximaNova-Regular',
            italic: 'ProximaNova-Regular',
          },
          700: {
            normal: 'ProximaNova-Bold',
            italic: 'ProximaNova-Regular',
          },
        },
      },
});

export default Theme;
export { default as isFontLoaded } from "./isFontLoaded";
