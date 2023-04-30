import { styled } from "@stitches/react";

export const Container = styled("div", {
  minHeight: "100vh",
  minWidth: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Content = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export const ImageContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "@media(max-width: 650px)": {
    width: "50vw",
    height: "50vh",
  },
});

export const ContainerLink = styled("div", {
  textAlign: "center",
  width: "100px",
  marginBottom: "8px",
  a: {
    color: "$title",
    textDecoration: "none",
    fontSize: "$md",
    textAlign: "center",
  },

  "&:hover": {
    filter: "blur(1px)",
  },
});
