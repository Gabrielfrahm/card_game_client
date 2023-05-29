import { styled } from "@stitches/react";
import Image from "next/image";
import borderImg from "../../../../assets/panel/border.png";

export const Container = styled("div", {
  minWidth: "25rem",
  minHeight: "40rem",
  backgroundColor: "#D3C39A",
  borderRadius: "25px",
  border: "4px solid #D3C39A",
  position: "relative",
  margin: "5px",

  "&:hover": {
    boxShadow: "0 0 10px 5px rgba(170, 164, 148, 1)",
    cursor: "pointer",
  },

  "@media(max-width: 1440px)": {
    minWidth: "18rem",
    minHeight: "30rem",
  },
});

export const ContainerBorderImage = styled("div", {
  position: "absolute",
  zIndex: 1,
  width: "40px",
  height: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "@media(max-width: 1750px)": {
    width: "15px",
    height: "45px",
  },

  "@media(max-width: 1440px)": {
    width: "20px",
    height: "55px",
  },
});

export const Atk = styled("h1", {
  color: "$text",
  fontSize: "$2xl",

  "@media(max-width: 1440px)": {
    fontSize: "$lg",
  },
});

export const BorderMainImg = styled(Image, {
  position: "absolute",
  top: "-8px",
  left: "-25px",
  zIndex: -1,

  "@media(max-width: 1440px)": {
    width: "120px",
    height: "120px",
    top: "-8px",
    left: "-22px",
  },
});

export const BorderImg = styled(Image, {
  position: "absolute",
  top: "-8px",
  left: "-25px",
  zIndex: -1,

  "@media(max-width: 1440px)": {
    width: "70px",
    height: "70px",
    top: "-8px",
    left: "-22px",
  },
});

export const Content = styled("div", {});

export const MainImage = styled(Image, {
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: 0,
});

export const CategoryImageSword = styled(Image, {
  position: "absolute",
  width: "140px",
  height: "80px",
  top: "100px",
  left: "-20px",
  zIndex: 1,

  "@media(max-width: 1440px)": {
    width: "100px",
    height: "60px",
    left: "-15px",
  },
});

export const CategoryImageMage = styled(Image, {
  position: "absolute",
  width: "80px",
  height: "80px",
  top: "100px",
  left: "12px",
  zIndex: 1,

  "@media(max-width: 1440px)": {
    width: "60px",
    height: "60px",
  },
});

export const CategoryImageRange = styled(Image, {
  position: "absolute",
  width: "130px",
  height: "85px",
  top: "100px",
  zIndex: 1,

  "@media(max-width: 1440px)": {
    width: "90px",
    height: "65px",
  },
});

export const EffectImage = styled(Image, {
  position: "absolute",
  width: "80px",
  height: "80px",
  top: "200px",
  left: "10px",
  zIndex: 1,

  "@media(max-width: 1440px)": {
    width: "60px",
    height: "60px",
  },
});

export const ContentDescription = styled("div", {
  position: "absolute",
  bottom: "0px",
  left: "-1px",
  minWidth: "24.60rem",
  height: "100px",
  backgroundColor: "#89826F",
  borderTop: "4px solid #D3C39A",
  borderBottomRightRadius: "20px",
  borderBottomLeftRadius: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  "@media(max-width: 1440px)": {
    minWidth: "17.60rem",
  },
});

export const Title = styled("h2", {
  fontSize: "$lg",
  textAlign: "center",
  color: "$title",
});

export const Description = styled("p", {
  fontSize: "$ssm",
  maxWidth: "200px",
  fontFamily: "monospace",
  color: "$text",
  textAlign: "center",

  "@media(max-width: 1440px)": {
    maxWidth: "150px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

export const TooltipContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "$ssm",
  zIndex: 999,
});
