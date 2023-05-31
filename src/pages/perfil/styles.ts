import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: "100vw",
  height: "calc(100vh - 5rem)",
  marginTop: "5rem",
  backgroundColor: "$background",
});

export const Title = styled("p", {
  color: "$title",
  fontSize: "$2xl",
  marginBottom: "30px",
});

export const Content = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  backgroundColor: "$background",
  padding: "30px",
});

export const FormContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "30rem",
  height: "40rem",
  backgroundColor: "$backgroundCard",
  borderRadius: "5px",
});

export const Form = styled("form", {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexDirection: "column",
  border: "2px solid $details",
  width: "20rem",
  height: "30rem",
  backgroundColor: "$background",
});

export const TextInput = styled("input", {
  height: "1.5rem",
  width: "15rem",
  color: "$title",
  fontFamily: "monospace",
  backgroundColor: "#3D3A2E",
  border: "2px solid transparent",
  position: "relative",
  borderRadius: "5px",
  margin: "5px",
  padding: "5px",
});

export const LabelInput = styled("p", {
  color: "$text",
  fontSize: "$sm",
  fontFamily: "monospace",
});

export const WrapperInput = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export const TextError = styled("p", {
  color: "red",
  fontFamily: "monospace",
  fontWeight: "lighter",
  fontSize: "$sm",
  textAlign: "center",
});
