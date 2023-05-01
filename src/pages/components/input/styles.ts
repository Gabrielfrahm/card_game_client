import { styled } from "@stitches/react";
import borderImg2 from "../../../assets/border2.png";
import borderImg from "../../../assets/border.png";

import { Warning } from "phosphor-react";

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
  backgroundColor: "$backgroundCard",
});

export const TextInput = styled("input", {
  height: "1.5rem",
  width: "10.5rem",
  color: "$title",
  fontFamily: "monospace",
  backgroundColor: "$backgroundCard",
  border: "2px solid transparent",
  position: "relative",
  borderImage: `url(${borderImg.src})  16 fill / 8px  `,

  padding: "5px",

  "&:focus": {
    boxShadow: "0 0 10px 5px rgba(170, 164, 148, 1)",
    backgroundColor: "$backgroundCard",
    borderImage: `url(${borderImg2.src})  16 fill / 8px  `,
  },

  "&:hover": {
    boxShadow: "0 0 10px 5px rgba(170, 164, 148, 1)",
    backgroundColor: "$backgroundCard",
    borderImage: `url(${borderImg2.src})  16 fill / 8px  `,
  },

  variants: {
    content: {
      true: {
        height: "1.6rem",
        backgroundColor: "$backgroundCard",
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

export const TextError = styled("p", {
  fontSize: "12px",
  color: "$title",
});

export const TooltipIcon = styled(Warning, {
  color: "$title",
  position: "absolute",
});

export const TooltipContainer = styled("div", {
  width: "18.75rem",
  padding: "1.25rem",
  borderImage: `url(${borderImg2.src})  8 fill / 8px  `,
  borderRadius: "5px",
  backgroundColor: "$black",
  textAlign: "center",
});
