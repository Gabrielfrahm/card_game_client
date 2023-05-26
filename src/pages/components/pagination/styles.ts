import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  bottom: "10px",
  zIndex: 999,
  width: "15rem",
  height: "30px",
  backgroundColor: "#3D3A2E",
  border: "2px solid $details",
  borderRadius: "5px",
});

export const Content = styled("div", {
  display: "flex",
  justifyContent: "center",
  justifyItems: "center",
});
