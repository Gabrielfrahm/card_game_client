import { styled } from "@stitches/react";
import Image from "next/image";
import borderImg from "../../../assets/panel/border.png";

export const Container = styled("div", {
  height: "420px",
  width: "230px",
  backgroundColor: "#89826F",
  borderRadius: "25px",
  border: "4px solid #D3C39A",
  position: "relative",
  margin: "5px",

  span: {
    position: "absolute",
    visibility: "hidden",
    backgroundColor: "#000",
    color: "#FFF",
    padding: " 20px 20px",
    width: "200px",
    height:'250px',
    fontFamily: "monospace",
    fontSize: "$md",
    overflowY: 'scroll',
    border: '4px solid $details',
    opacity: '0',
    transition: 'opacity 1s',

    "@media(max-width: 768px)": {
      width: "150px",
    },
  },

  "&:hover": {
    boxShadow: "0 0 10px 5px rgba(170, 164, 148, 1)",
    cursor: "pointer",

    span: {
      visibility: "visible",
      opacity: "1",
      bottom: '0',
      left: "100px",
      zIndex: 999,

      "@media(max-width: 768px)": {
        left: "25px",
      },
    },
  },

  "@media(max-width: 1750px)": {
    height: "350px",
    width: "200px",
  },

  "@media(max-width: 1440px)": {
    height: "280px",
    width: "180px",
  },
});

export const ContainerBorderImage = styled("div", {
  position: "absolute",
  zIndex: 1,
  width: "20px",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "@media(max-width: 1750px)": {
    width: "15px",
    height: "45px",
  },

  "@media(max-width: 1440px)": {
    width: "5px",
    height: "35px",
  },
});

export const Atk = styled("h1", {
  color: "$text",
  fontSize: "$lg",

  "@media(max-width: 1750px)": {
    fontSize: "$md",
  },

  "@media(max-width: 1440px)": {
    fontSize: "$sm",
  },
});

export const BorderImg = styled(Image, {
  position: "absolute",
  top: "-14px",
  left: "-25px",
  zIndex: -1,

  "@media(max-width: 1440px)": {
    width: "100px",
    height: "100px",
  },
});

export const Content = styled("div", {});

export const MainImage = styled(Image, {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  zIndex: 0,
});

export const CategoryImageSword = styled(Image, {
  position: "absolute",
  width: "80px",
  height: "50px",
  top: "100px",
  left: "-12px",
  zIndex: 1,

  "@media(max-width: 1440px)": {
    display: "none",
  },
});

export const CategoryImageMage = styled(Image, {
  position: "absolute",
  width: "50px",
  height: "50px",
  top: "100px",
  left: "5px",
  zIndex: 1,

  "@media(max-width: 1440px)": {
    display: "none",
  },
});

export const CategoryImageRange = styled(Image, {
  position: "absolute",
  width: "75px",
  height: "55px",
  top: "100px",
  left: "-2px",
  zIndex: 1,

  "@media(max-width: 1440px)": {
    display: "none",
  },
});

export const EffectImage = styled(Image, {
  position: "absolute",
  width: "47px",
  height: "47px",
  top: "172px",
  left: "5px",
  zIndex: 1,

  "@media(max-width: 1440px)": {
    display: "none",
  },
});

export const ContentDescription = styled("div", {
  position: "absolute",
  bottom: "-5px",
  left: "-5px",
  width: "222px",
  height: "66px",
  backgroundColor: "#89826F",
  borderTop: "4px solid #D3C39A",
  borderBottomRightRadius: "20px",
  borderBottomLeftRadius: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  "@media(max-width: 1750px)": {
    width: "193px",
  },

  "@media(max-width: 1440px)": {
    width: "173px",
  },
});

export const Title = styled("h2", {
  fontSize: "$ssm",
  color: "$title",

  "@media(max-width: 1750px)": {
    maxWidth: "100px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

export const Description = styled("p", {
  fontSize: "$ssm",
  maxWidth: "200px",

  fontFamily: "monospace",
  color: "$text",
  textAlign: "center",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",

  "@media(max-width: 1750px)": {
    maxWidth: "150px",
    whiteSpace: "break-spaces",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

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
