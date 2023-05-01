import { styled } from "@stitches/react";
import borderImg2 from "../../../assets/border2.png";
import borderImg from "../../../assets/border.png";
export const Container = styled("div", {});

export const Text = styled("p", {
  fontSize: "$sm",
  fontFamily: "monospace",
  color: "$text",
  margin: "12px 0 8px 0",
});

export const ContainerTextInput = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "15rem",
  height: "1.5rem",
  backgroundColor: "$inputColor",
});

export const TextInput = styled("input", {
  height: "1.5rem",
  width: "10.5rem",
  color: "$title",
  fontFamily: "monospace",
  backgroundColor: "$inputColor",
  border: "2px solid transparent",
  position: "relative",
  borderImage: `url(${borderImg.src})  16 fill / 8px  `,

  padding: "5px",

  "&:focus": {
    boxShadow: "0 0 10px 5px rgba(170, 164, 148, 1)",
    backgroundColor: "$inputColor",
    borderImage: `url(${borderImg2.src})  16 fill / 8px  `,
  },

  "&:hover": {
    boxShadow: "0 0 10px 5px rgba(170, 164, 148, 1)",
    backgroundColor: "$inputColor",
    borderImage: `url(${borderImg2.src})  16 fill / 8px  `,
  },

  variants: {
    content: {
      true: {
        height: "1.6rem",
        backgroundColor: "$inputColor",
        borderImage: `url(${borderImg2.src})  16 fill / 8px  `,
      },
    },
  },
});

export const WrapperPassword = styled("div", {
  width: "100%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
