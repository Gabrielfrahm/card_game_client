import { styled } from "@stitches/react";

export const Container = styled("div", {
  minHeight: "100vh",
  minWidth: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: "$background",
});

export const Content = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "25rem",
  width: "56.25rem",
  backgroundColor: "$backgroundCard",
  borderTop: "2px solid $details",
  borderBottom: "2px solid $details",
  position: "relative",

  "@media(max-width: 1000px)": {
    width: "80vw",
    height: "25rem",
  },
});

export const ContainerImage = styled("div", {
  marginBottom: "1.25rem",
});

export const FormContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$background",
  width: "31.25rem",
  height: "13.97rem",

  "@media(max-width: 1000px)": {
    width: "28rem",
    height: "13.97rem",
  },

  "@media(max-width: 600px)": {
    width: "18rem",
    height: "13.97rem",
  },
});

export const Form = styled("form", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

export const WrapperHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  position: "absolute",
  top: "8%",

  ["h1"]: {
    color: "$title",
    marginBottom: "2px",
    fontSize: "$lg",
  },
});

export const Hr = styled("hr", {
  width: "31.25rem",
  border: "1px solid ",
  filter: "blur(1px)",
  borderColor: "$details",

  "@media(max-width: 1000px)": {
    width: "28rem",
  },

  "@media(max-width: 600px)": {
    width: "18rem",
  },
});

export const ButtonContainer = styled("div", {
  marginTop: "2rem",
});
