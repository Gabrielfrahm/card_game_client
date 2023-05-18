import { InputHTMLAttributes } from "react";
import { Container, TextInput } from "./styles";
import { MagnifyingGlass } from "phosphor-react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: any;
}

export default function InputHome({ register }: InputProps) {
  return (
    <Container>
      <TextInput {...register("filterValue")} />
    </Container>
  );
}
