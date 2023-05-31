import { UserContext, UserProvider } from "@/context/userContext";
import {
  Container,
  Content,
  Form,
  FormContainer,
  LabelInput,
  TextError,
  TextInput,
  Title,
  WrapperInput,
} from "./styles";
import Header from "../components/header";

import { useForm } from "react-hook-form";
import Button from "../components/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/authContext";
import { TRequestUpdate } from "@/@shared/services/userService/contracts";

const perfilFormSchema = z
  .object({
    email: z
      .string()
      .trim()
      .email({ message: "E-mail need be valid." })
      .transform((email) => email.toLocaleLowerCase()),
    nick: z
      .string()
      .trim()
      .min(3, { message: "nickname must be at least 3 characters long." })
      .max(40, { message: "nickname can be a maximum of 40 characters." })
      .optional(),
    password: z.string().trim().optional().nullable(),
    passwordConfirmation: z.string().trim().optional().nullable(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

type PerfilFormData = z.infer<typeof perfilFormSchema>;

function Component() {
  const { updateUser } = useContext(UserContext);
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<PerfilFormData>({
    resolver: zodResolver(perfilFormSchema),
  });

  const handleOnSubmit = async (data: any) => {
    await updateUser(data);
  };

  useEffect(() => {
    setValue("email", user.email);
    setValue("nick", user.name);
  }, [setValue, user]);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <FormContainer>
            <Title>Perfil</Title>
            <Form onSubmit={handleSubmit(handleOnSubmit)}>
              <WrapperInput>
                <LabelInput>email</LabelInput>
                <TextInput {...register("email")} />
                {errors.email?.message && (
                  <TextError>{errors.email?.message}</TextError>
                )}
              </WrapperInput>

              <WrapperInput>
                <LabelInput>nickname</LabelInput>
                <TextInput {...register("nick")} />
                {errors.nick?.message && (
                  <TextError>{errors.nick?.message}</TextError>
                )}
              </WrapperInput>

              <WrapperInput>
                <LabelInput>new password</LabelInput>
                <TextInput {...register("password")} />
                {errors.password?.message && (
                  <TextError>{errors.password?.message}</TextError>
                )}
              </WrapperInput>

              <WrapperInput>
                <LabelInput>confirmation password</LabelInput>
                <TextInput {...register("passwordConfirmation")} />
                {errors.passwordConfirmation?.message && (
                  <TextError>{errors.passwordConfirmation?.message}</TextError>
                )}
              </WrapperInput>
              <Button name="Confirm" />
            </Form>
          </FormContainer>
        </Content>
      </Container>
    </>
  );
}

export default function Perfil() {
  return (
    <UserProvider>
      <Component />
    </UserProvider>
  );
}
