import { styled } from "@stitches/react";
import Image from "next/image";

export const TooltipContainer = styled("div", {
  display: "flex",
  backgroundColor: "transparent",
  zIndex: "999",
  border: "2px solid $details",
  borderRadius: "20px",
});

export const ToolTipImage = styled(Image, {
  width: "200px",
  height: "350px",

  "@media(max-width: 1440px)": {
    width: "150px",
    height: "250px",
  },
});

export const MiniCard = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "15rem",
  height: "2rem",
  borderRadius: "3px",

  zIndex: 1,

  position: "relative",

  variants: {
    effect: {
      poison: {
        backgroundColor: "#AC4346",
        border: "2px solid #AC4346",

        "&:hover": {
          cursor: "pointer",
          filter: "brightness(1.3)",
          border: "2px solid $details",
        },
      },

      freeze: {
        border: "2px solid #0E1D29",
        backgroundColor: "#0E1D29",
        "&:hover": {
          cursor: "pointer",
          filter: "brightness(1.3)",
          border: "2px solid $details",
        },
      },
      " ": {
        border: "2px solid $backgroundCard",
        backgroundColor: "$backgroundCard",
        "&:hover": {
          cursor: "pointer",
          filter: "brightness(1.3)",
        },
      },
    },
  },
});

export const MiniCardImage = styled(Image, {
  position: "absolute",
  zIndex: -1,
});

export const MiniCardPower = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "2rem",
  minHeight: "1.8rem",
  zIndex: 1,

  p: {
    color: "$title",
    margin: "0 5px",
    fontSize: "$md",
    fontWeight: "bold",
  },
});

export const MiniCardName = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "11rem",
  minHeight: "1.8rem",
  zIndex: 1,

  p: {
    color: "$text",
    fontWeight: "bold",
    maxWidth: "11rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});
