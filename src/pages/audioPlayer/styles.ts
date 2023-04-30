import { styled } from "@stitches/react";

export { styled } from "@stitches/react";

export const Container = styled("div", {
  position: "absolute",
  padding: "20px",
  top: "0",
});

export const Button = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "1.25rem",
  height: "1.25rem",
  opacity: 0.3,
  border: "transparent",
  borderRadius: "5px",

  "&:hover": {
    cursor: "pointer",
    opacity: 0.6,
  },
});
