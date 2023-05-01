import { ButtonHTMLAttributes } from "react";
import { ButtonCustom } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

export default function Button({ name, ...rest }: ButtonProps) {
  return <ButtonCustom {...rest}>{name}</ButtonCustom>;
}
