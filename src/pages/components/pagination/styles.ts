import { styled } from "@stitches/react";
import { CaretLeft, CaretRight } from "phosphor-react";

export const Container = styled("div", {
  position: "absolute",
  bottom: "10px",
  zIndex: 999,
  width: "15rem",
  height: "35px",
  // backgroundColor: "rgba(0,0,0, 0.9)",
  // border: "2px solid $details",
  // borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const ButtonPage = styled("button", {
  width: "30px",
  height: "25px",
  border: "none",
  borderRadius: "5px",
  margin: "0 5px",
  color: "$title",
  backgroundColor: "$background",

  "&:hover": {
    cursor: "pointer",
    filter: "brightness(2)",
  },

  variants: {
    selected: {
      true: {
        border: "2px solid $details",
      },
    },
  },
});

export const Left = styled(CaretLeft, {
  color: "$details",
  "&:hover": {
    cursor: "pointer",
    filter: "brightness(2)",
  },
});

export const Right = styled(CaretRight, {
  color: "$details",
  "&:hover": {
    cursor: "pointer",
    filter: "brightness(2)",
  },
});
