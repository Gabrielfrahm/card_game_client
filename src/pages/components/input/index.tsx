import { EyeClosed, Eye, Warning } from "phosphor-react";
import { InputHTMLAttributes, useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import {
  Container,
  ContainerTextInput,
  Text,
  TextError,
  TextInput,
  TooltipContainer,
  TooltipIcon,
  WrapperPassword,
} from "./styles";
import TooltipCustom from "./tooltip";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelName: string;
  context: boolean;
  name: string;
  register: any;
  errors?: string;
}

export default function Input({
  labelName,
  context,
  name,
  register,
  errors,
  ...rest
}: InputProps) {
  const [showPassword, setShowPassword] = useState<boolean>();

  const show = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <label>
        <Text>
          {labelName}:{errors && <TooltipCustom error={errors} />}
        </Text>

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
            <>
              <TextInput
                type="text"
                {...register(name)}
                {...rest}
                content={context}
              />
            </>
          )}
        </ContainerTextInput>
      </label>
    </Container>
  );
}
