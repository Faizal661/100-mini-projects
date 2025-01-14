import { ColorType } from "../types/color.type";

export const colors: ColorType = {
  primary: {
    main: "#1976d2",
    light: "#42a5f5",
    dark: "#1565c0",
  },
  secondary: {
    main: "#9c27b0",
    light: "#ba68c8",
    dark: "#7b1fa2",
  },
  text: {
    primary: "#000000",
    secondary: "#666666",
    disabled: "#999999",
  },
  background: {
    default: "#ffffff",
    paper: "#f5f5f5",
  },
  error: "#d32f2f",
  warning: "#ed6c02",
  success: "#2e7d32",
};



export const darkColors: ColorType = {
  ...colors,
  text: {
    primary: "#ffffff",
    secondary: "#b3b3b3",
    disabled: "#666666",
  },
  background: {
    default: "#121212",
    paper: "#1e1e1e",
  },
};
