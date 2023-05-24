import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "5px",
  width: "17rem",
  height: "2rem",
  backgroundColor: "#3D3A2E",
  borderRadius: "5px",
});

export const TextInput = styled("input", {
  height: "1.5rem",
  width: "15rem",
  color: "$title",
  fontFamily: "monospace",
  backgroundColor: "#3D3A2E",
  border: "2px solid transparent",
  position: "relative",
  borderRadius: "5px",
  margin: "5px",
  padding: "5px",

  variants: {
    content: {
      true: {
        height: "1.6rem",
        backgroundColor: "$backgroundCard",
      },
    },
  },
});
