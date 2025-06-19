// src/config/theme.ts
export interface Theme {
  background: string;
  text: string;
  primary: string;
  card: string;
  textcard: string;
  subtext: string;
  progressBg: string;
  progressFill: string;
  icon: string;
  border: string;
}

export const lightTheme: Theme = {
  background: "#FFFFFF",
  text: "#1E1E1E",
  primary: "#7B61FF", // tím
  card: "#f2f2f2",
  textcard: "#FFFFFF",
  subtext: "#5e5e5e",
  progressBg: "#E0E0E0",
  progressFill: "#7B61FF",
  icon: "#333333",
  border: "#DDDDDD",
};

export const darkTheme: Theme = {
  background: "#000000",
  text: "#FFFFFF",
  primary: "#228B22", // xanh lá đậm
  card: "#363636",
  textcard: "#FFFFFF",
  subtext: "#b8b8b8",
  progressBg: "#333333",
  progressFill: "#228B22",
  icon: "#FFFFFF",
  border: "#444444",
};
