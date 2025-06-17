// src/config/theme.ts

export interface Theme {
  background: string;
  text: string;
  primary: string;
  card: string;
  textcard: string;
}

export const lightTheme: Theme = {
  background: "#FFFFFF",
  text: "#1E1E1E",
  primary: "#7B61FF", // tím
  card: "#3574d4",
  textcard: "#FFFFFF",
};

export const darkTheme: Theme = {
  background: "#000000",
  text: "#FFFFFF",
  primary: "#228B22", // xanh lá đậm
  card: "#5ad44c",
  textcard: "#FFFFFF",
};
