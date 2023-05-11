import { styled } from "@stitches/react";
import Image from "next/image";

export const Container = styled("div", {
  height: "420px",
  width: "230px",
  backgroundColor: "#89826F",
  borderRadius: "20px",
  border: "4px solid #D3C39A",
  position: "relative",
  margin: "10px",
  "&:hover": {
    boxShadow: "0 0 10px 5px rgba(170, 164, 148, 1)",
    cursor: "pointer",
  },
});

export const ContainerBorderImage = styled("div", {
  position: "absolute",
  zIndex: 1,
  width: "30px",
  height: "60px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Atk = styled("h1", {
  color: "$text",
  fontSize: "$lg",
});

export const BorderImg = styled(Image, {
  position: "absolute",
  top: "-7px",
  left: "-18px",
  zIndex: -1,
});

export const Content = styled("div", {});

export const MainImage = styled(Image, {
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
});

export const CategoryImageMage = styled(Image, {
  position: "absolute",
  width: "50px",
  height: "50px",
  top: "100px",
  left: "5px",
});

export const CategoryImageRange = styled(Image, {
  position: "absolute",
  width: "75px",
  height: "55px",
  top: "100px",
  left: "-2px",
});

export const EffectImage = styled(Image, {
  position: "absolute",
  width: "47px",
  height: "47px",
  top: "172px",
  left: "5px",
});

export const ContentDescription = styled("div", {
  position: "absolute",
  bottom: "-1px",
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
});

export const Title = styled("h2", {
  fontSize: "$ssm",
  color: "$title",
});

export const Description = styled("p", {
  fontSize: "$ssm",
  maxWidth: "200px",
  fontFamily: "monospace",
  color: "$text",
  textAlign: "center",
});
