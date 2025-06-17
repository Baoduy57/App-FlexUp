// src/context/ThemeContext.tsx
import React, { createContext, useContext, useState } from "react";
import { lightTheme, darkTheme, Theme } from "../config/theme";

type ThemeMode = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  mode: ThemeMode;
  toggleTheme: () => void;
}>({
  theme: lightTheme,
  mode: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = mode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
