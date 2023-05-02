import { styled } from "@stitches/react";
import Image from "next/image";

export const Container = styled("nav", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "5rem",
  borderTop: "4px solid $details",
  borderBottom: "4px solid $details",
  position: "absolute",
  top: 0,
  backgroundColor: "rgba(219, 192, 126, 0.12)",
});

export const Content = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const LeftPart = styled("div", {
  width: "50vw",
  height: "4.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
});

export const WrapperLeftIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  height: "4.5rem",
});

export const RightPart = styled("div", {
  width: "50vw",
  height: "4.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
});

export const WrapperRightIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  height: "4.5rem",
});

export const IconMenu = styled(Image, {
  marginRight: "1.25rem",
  "&:hover": {
    cursor: "pointer",
    filter: "brightness(2)",
  },
});
