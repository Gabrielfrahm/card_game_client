import { styled } from "@stitches/react";
import borderImg from "../../assets/panel/border.png";
export const Container = styled("div", {
  width: "100vw",
  height: "calc(100vh - 5rem)",
  marginTop: "5rem",
  backgroundColor: "$background",
  padding: "30px",
});

export const Content = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export const Title = styled("h1", {
  fontSize: "$2xl",
  fontWeight: "lighter",
  color: "$title",
});

export const Panel = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "0.9375rem",

  div: {
    margin: "5px",
  },
});

export const PanelLeft = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "16.56rem",
  minHeight: "34.37rem",
  backgroundColor: "#1D1B18",
  borderImage: `url(${borderImg.src})  20 / 4px  `,
});

export const PanelCenter = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "75rem",
  minHeight: "34.37rem",
  backgroundColor: "#1D1B18",

  borderImage: `url(${borderImg.src})  20 / 4px  `,
});

export const PanelRight = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "16.56rem",
  minHeight: "34.37rem",
  backgroundColor: "#1D1B18",
  borderImage: `url(${borderImg.src})  20 / 4px  `,
});
