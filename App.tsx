// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigation/RootStack";
import { ThemeProvider, useTheme } from "./src/context/ThemeContext";
import {
  lightNavigationTheme,
  darkNavigationTheme,
} from "./src/config/navigationThemes";

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}

function AppInner() {
  const { mode } = useTheme();
  return (
    <NavigationContainer
      theme={mode === "light" ? lightNavigationTheme : darkNavigationTheme}
    >
      <RootStack />
    </NavigationContainer>
  );
}
