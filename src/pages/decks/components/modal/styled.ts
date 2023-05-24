import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "none",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  zIndex: 999,
  width: "100vw",
  height: "100%",

  backgroundColor: "rgba(0,0,0,0.6)",

  variants: {
    isShow: {
      true: {
        display: "flex",
      },
    },
  },
});

export const Close = styled("span", {
  position: "absolute",
  right: 10,
  top: 5,
  color: "$details",
  float: "right",
  fontSize: "28px",
  fontWeight: "bold",

  "&:hover": {
    cursor: "pointer",
    filter: "brightness(2)",
    textDecoration: "none",
  },
});

export const Content = styled("div", {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "37.5rem",
  height: "20rem",
  border: "4px solid $details",
  backgroundColor: "$backgroundCard",

  "@media(max-width: 425px)": {
    maxWidth: "90%",
    maxHeight: "285px",
  },
});

export const Title = styled("h1", {
  color: "$title",
  fontSize: "$lg",
  fontWeight: "lighter",
  position: "absolute",
  top: 30,

  "@media(max-width: 425px)": {
    fontSize: "$md",
  },
});

export const Form = styled("form", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "30rem",
  height: "10rem",
  backgroundColor: "$background",

  p: {
    color: "$title",
    fontSize: "$ssm",
    margin: "4px 0",
  },

  button: {
    marginTop: "10px",
  },

  "@media(max-width: 425px)": {
    width: "80%",
  },
});

export const ContainerInput = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "5px",
  width: "15rem",
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
