import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      text: "#fff",
      black: "#000",
      title: "#E0CD9D",

      details: "#AAA494",

      background: "#1A1A15",
      backgroundCard: "#12120D",

      inputColor: "#191813",
      inputError: "#800808",
    },

    fontSizes: {
      sm: "1rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
  },
});
