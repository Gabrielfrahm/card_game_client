import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "none",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  zIndex: 999,
  width: "100vw",
  height: "100%",
  transition: "display 1s",
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
  fontSize: "18px",
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

export const WrapperButton = styled("div", {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "flex-end",
  width: "30rem",
  height: "10rem",
});

export const ButtonYes = styled("button", {
  width: "4rem",
  height: "3rem",
  borderRadius: "5px",
  transition: "borderRadius 2s",
  border: "transparent",
  fontSize: "$lg",
  fontWeight: "bold",
  backgroundColor: "$details",
  color: "$text",

  "&:hover": {
    cursor: "pointer",
    filter: "brightness(1.2)",
    borderRadius: "0px",
  },
});

export const ButtonNo = styled("button", {
  width: "4rem",
  height: "3rem",
  borderRadius: "5px",
  border: "transparent",
  fontSize: "$lg",
  fontWeight: "bold",
  "&:hover": {
    cursor: "pointer",
    filter: "brightness(1.5)",
  },
});
