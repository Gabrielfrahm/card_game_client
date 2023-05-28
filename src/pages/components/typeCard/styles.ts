import { styled } from "@stitches/react";
import Image from "next/image";

export const Container = styled("div", {});

export const Content = styled("div", {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "500px",
});

export const ContainerImage = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 5px",
  position: "relative",

  p: {
    position: "absolute",
    color: "$details",
    fontSize: "$md",
  },
});

export const TypeImage = styled(Image, {
  opacity: "0.2",
  "&:hover": {
    cursor: "pointer",
  },
});
