import { styled } from "@stitches/react";
import { CaretLeft } from "phosphor-react";

export const Container = styled("div", {
  width: "100vw",
  height: "calc(100vh - 5rem)",
  marginTop: "5rem",
  backgroundColor: "$background",
  padding: "30px",
});

export const Content = styled("div", {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",

  "@media(max-width: 768px)": {
    flexDirection: "column",
  },
});

export const Title = styled("h1", {
  color: "$title",
  textAlign: "center",
  fontSize: "$2xl",
  fontWeight: "lighter",

  "@media(max-width: 768px)": {
    fontSize: "$lg",
  },
});

export const CardContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "28.125rem",
  minHeight: "37.5rem",
});

export const DescriptionContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "28.125rem",
  minHeight: "17rem",
  backgroundSize: "cover",
  backgroundColor: "#89826F",
  border: "4px solid #D3C39A",
  borderRadius: "5px",

  "@media(max-width: 768px)": {
    minWidth: "22rem",
    minHeight: "10rem",
  },
});

export const Description = styled("p", {
  fontSize: "$2xl",
  maxWidth: "400px",
  fontWeight: "lighter",
  fontFamily: "monospace",
  color: "$text",
  textAlign: "justify",

  "@media(max-width: 768px)": {
    fontSize: "$lg",
    maxWidth: "300px",
  },
});

export const Back = styled(CaretLeft, {
  color: "#89826F",

  "&:hover": {
    cursor: "pointer",
  },
});
