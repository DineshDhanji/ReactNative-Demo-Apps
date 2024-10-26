/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
  colors: {
    dull: {
      100: "#6A5750",
      200: "#6A5750",
      300: "#6A5750",
    },
    espresso: {
      100: "#855642",
      200: "#855642",
      300: "#855642",
    },
    latte: {
      100: "#E4CCB0",
      200: "#E4CCB0",
      300: "#E4CCB0",
    },
    dark_coffee: {
      100: "#200A00",
      200: "#200A00",
      300: "#433028",
    },
  },
};
