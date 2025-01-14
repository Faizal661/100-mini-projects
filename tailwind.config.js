/** @type {import('tailwindcss').Config} */
import {colors,darkColors } from './src/styles/colors.ts'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        primaryLightText:colors.text.primary,
        secondaryLightText:colors.text.secondary,
        primaryDarkText:darkColors.text.primary,
        secondaryDarkText:darkColors.text.secondary,
        error: colors.error,
        warning: colors.warning,
        success: colors.success,
      },
    },
  },
  plugins: [],
}

