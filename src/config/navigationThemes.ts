// src/config/navigationThemes.ts
import {
  DefaultTheme,
  DarkTheme,
  Theme as NavigationTheme,
} from "@react-navigation/native";

export const lightNavigationTheme: NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFFFFF",
    card: "#FFFFFF", // màu nền header
    text: "#1E1E1E", // màu text header
    primary: "#7B61FF",
    border: "#DDDDDD",
    notification: "#7B61FF",
  },
};

export const darkNavigationTheme: NavigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#000000",
    card: "#000000", // màu nền header
    text: "#FFFFFF", // màu text header
    primary: "#228B22",
    border: "#444444",
    notification: "#228B22",
  },
};
