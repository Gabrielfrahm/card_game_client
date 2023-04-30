import { EyeClosed, Eye } from "phosphor-react";
import {
  Container,
  ContainerTextInput,
  Text,
  TextInput,
  WrapperPassword,
} from "./styles";
import { InputHTMLAttributes, useRef, useState } from "react";
import { useForm } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelName: string;
  context: boolean;
  name: string;
  register: any;
}

export default function Input({
  labelName,
  context,
  name,
  register,
  ...rest
}: InputProps) {
  const [showPassword, setShowPassword] = useState<boolean>();

  const show = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <label>
        <Text>{labelName}:</Text>
        <ContainerTextInput>
          {name === "password" ? (
            <WrapperPassword>
              <TextInput
                type={
                  name === "password" && !showPassword ? "password" : "text"
                }
                {...register(name)}
                {...rest}
                content={context}
              />
              {showPassword ? (
                <Eye
                  style={{
                    position: "absolute",
                    right: 10,
                  }}
                  onClick={show}
                  color={"#FFF"}
                  size={20}
                />
              ) : (
                <EyeClosed
                  style={{
                    position: "absolute",
                    right: 10,
                  }}
                  onClick={show}
                  color={"#FFF"}
                  size={20}
                />
              )}
            </WrapperPassword>
          ) : (
            <TextInput
              type="text"
              {...register(name)}
              {...rest}
              content={context}
            />
          )}
        </ContainerTextInput>
      </label>
    </Container>
  );
}
