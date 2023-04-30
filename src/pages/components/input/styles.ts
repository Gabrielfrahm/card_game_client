import { styled } from "@stitches/react";

export const Container = styled("div", {});

export const Text = styled("p", {
  fontSize: "$sm",
  fontFamily: "monospace",
  color: "$text",
  margin: "12px 0 8px 0",
});

export const ContainerTextInput = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "15rem",
  height: "2rem",
  backgroundColor: "$inputColor",
  borderRadius: "5px",
});

export const TextInput = styled("input", {
  width: "10.5rem",
  height: "1.50rem",
  color: "$title",
  fontFamily: "monospace",
  backgroundColor: "$inputColor",
  border: "transparent",
  borderRadius: "5px",
  padding: "5px",
  variants: {
    content: {
      true: {
        height: "2.5rem",
        backgroundColor: "transparent",
        borderRight: "2px solid $details",
        borderLeft: "2px solid $details",
      },
    },
  },
});

export const WrapperPassword = styled("div", {
  width: "100%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
