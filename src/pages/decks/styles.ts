import { styled } from "@stitches/react";

import borderImg from "../../assets/panel/border.png";
import Image from "next/image";
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
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export const Title = styled("h1", {
  fontSize: "$2xl",
  fontWeight: "lighter",
  color: "$title",

  "@media(max-width: 768px)": {
    fontSize: "$lg",
  },
});

export const Panel = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "0.9375rem",

  div: {
    margin: "5px",
  },

  "@media(max-width: 768px)": {
    flexDirection: "column",
  },
});

export const PanelLeft = styled("div", {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  minWidth: "16.56rem",
  minHeight: "34.37rem",
  backgroundColor: "#1D1B18",
  borderImage: `url(${borderImg.src})  20 / 4px  `,

  "@media(max-width: 1750px)": {
    minWidth: "13rem",
    minHeight: "30rem",
  },

  "@media(max-width: 1440px)": {
    minWidth: "11rem",
    minHeight: "24rem",
  },

  "@media(max-width: 1024px)": {
    minWidth: "11rem",
    minHeight: "24rem",
  },

  "@media(max-width: 768px)": {
    minWidth: "40rem",
    minHeight: "10rem",
  },

  "@media(max-width: 650px)": {
    minWidth: "30rem",
    minHeight: "10rem",
  },

  "@media(max-width: 400px)": {
    minWidth: "20rem",
  },
});

export const DeckContainer = styled("div", {
  maxHeight: "28rem",
  overflowY: "scroll",
});

export const PanelCenter = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "stretch",
  alignItems: "center",
  minWidth: "75rem",
  minHeight: "34.37rem",
  backgroundColor: "#1D1B18",
  borderImage: `url(${borderImg.src})  20 / 4px  `,

  "@media(max-width: 1750px)": {
    minWidth: "55rem",
    minHeight: "30rem",
  },

  "@media(max-width: 1440px)": {
    minWidth: "55rem",
    minHeight: "24rem",
  },

  "@media(max-width: 1024px)": {
    minWidth: "35rem",
    minHeight: "24rem",
  },

  "@media(max-width: 768px)": {
    minWidth: "40rem",
  },

  "@media(max-width: 650px)": {
    minWidth: "30rem",
  },

  "@media(max-width: 400px)": {
    minWidth: "20rem",
  },
});

export const SearchContainer = styled("div", {
  height: "4.375rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const CardContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  height: "100%",
  width: "90%",
});

export const CardWrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  maxWidth: "90%",
  minWidth: "90%",
  maxHeight: "450px",
  overflowY: "scroll",

  p: {
    color: "$title",
  },

  "@media(max-width: 1750px)": {
    maxWidth: "90%",
    maxHeight: "285px",
  },
});

export const DropMenu = styled("div", {
  position: "relative",
  display: "inline-block",
});

export const ButtonDropMenu = styled("button", {
  border: "transparent",
  borderRadius: "5px",
  width: "50px",
  height: "30px",
  textAlign: "center",
  backgroundColor: "#3D3A2E",

  "&:hover": {
    cursor: "pointer",
    filter: "brightness(2)",
  },
});

export const DropMenuContent = styled("div", {
  display: "none",
  position: "absolute",
  backgroundColor: "#f9f9f9",
  left: "-25px",
  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
  zIndex: "2",

  p: {
    color: "$title",
    padding: "5px",
    textAlign: "center",
    backgroundColor: "$background",
    fontSize: "$ssm",

    "&:hover": {
      cursor: "pointer",
      filter: "brightness(2)",
    },
  },

  variants: {
    isShow: {
      true: {
        display: "block",
      },
    },
  },
});

export const ButtonSearch = styled("button", {
  border: "transparent",
  borderRadius: "5px",
  width: "50px",
  height: "30px",
  textAlign: "center",
  backgroundColor: "#3D3A2E",

  "&:hover": {
    cursor: "pointer",
    filter: "brightness(2)",
  },

  variants: {
    disabled: {
      true: {
        "&:hover": {
          cursor: "not-allowed",
          filter: "brightness(1)",
        },
      },
    },
  },
});

export const ClearButtonSearch = styled("button", {
  border: "transparent",
  borderRadius: "5px",
  width: "50px",
  height: "30px",
  textAlign: "center",
  backgroundColor: "#3D3A2E",
  margin: "5px",

  "&:hover": {
    cursor: "pointer",
    filter: "brightness(2)",
  },

  variants: {
    disabled: {
      true: {
        "&:hover": {
          cursor: "not-allowed",
          filter: "brightness(1)",
        },
      },
    },
  },
});

export const TitleCard = styled("h1", {
  fontSize: "$lg",
  fontWeight: "lighter",
  color: "$title",
  textAlign: "center",
  margin: "10px",
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
      blood: {
        border: "2px solid #320000",
        backgroundColor: "#320000",
        "&:hover": {
          cursor: "pointer",
          filter: "brightness(1.3)",
          border: "2px solid $details",
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

export const SumPower = styled("p", {
  color: "$title",
  fontSize: "$ssm",
});

export const Back = styled(CaretLeft, {
  color: "#89826F",

  "&:hover": {
    cursor: "pointer",
  },
});

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
