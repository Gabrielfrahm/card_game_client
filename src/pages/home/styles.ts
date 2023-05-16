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
  justifyContent: "space-between",
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
export const DeckContainer = styled("div", {});

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
    minWidth: "35rem",
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

  "@media(max-width: 1750px)": {
    maxWidth: "90%",
    maxHeight: "285px",
  },
});

export const PanelRight = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
    display: "none",
  },
});
