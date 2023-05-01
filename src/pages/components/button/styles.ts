import { styled } from "@stitches/react";

export const ButtonCustom = styled("button", {
  width: "15rem",
  height: "1.5rem",
  backgroundColor: "$black",
  border: "1px solid white",
  color: "$text",
  fontSize: "$sm",
  padding: "4px",
  textAlign: "center",

  "&:hover": {
    cursor: "pointer",
    boxShadow: "0 0 10px 5px rgba(170, 164, 148, 1)",
  },
});
