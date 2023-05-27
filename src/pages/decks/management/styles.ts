import { styled } from "@stitches/react";

import borderImg from "../../../assets/panel/border.png";
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

export const NewDeckContainer = styled("div", {
  padding: "10px",
});

export const DeckContainer = styled("div", {
  maxHeight: "28rem",
  overflowY: "scroll",
});

export const Decks = styled("div", {
  position: "relative",
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
  width: "14rem",
  height: "1.5rem",
  borderBottom: "1px solid $details",
  "&:hover": {
    cursor: "pointer",
    filter: "brightness(2)",
  },

  p: {
    color: "$title",
    paddingRight: "12px",
  },
});

export const PanelCenter = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "stretch",
  position: "relative",
  alignItems: "center",
  maxWidth: "75rem",
  minWidth: "75rem",
  maxHeight: "34.37rem",
  backgroundColor: "#1D1B18",
  borderImage: `url(${borderImg.src})  20 / 4px  `,

  "@media(max-width: 1750px)": {
    maxWidth: "55rem",
    minWidth: "55rem",
    minHeight: "30rem",
  },

  "@media(max-width: 1440px)": {
    maxWidth: "55rem",
    minWidth: "55rem",
    minHeight: "24rem",
  },

  "@media(max-width: 1024px)": {
    maxWidth: "35rem",
    minWidth: "35rem",
    minHeight: "24rem",
  },

  "@media(max-width: 768px)": {
    maxWidth: "40rem",
    minWidth: "40rem",
  },

  "@media(max-width: 650px)": {
    maxWidth: "30rem",
    minWidth: "30rem",
  },

  "@media(max-width: 400px)": {
    maxWidth: "20rem",
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

export const Back = styled(CaretLeft, {
  color: "#89826F",

  "&:hover": {
    cursor: "pointer",
    filter: "brightness(2)",
  },
});
