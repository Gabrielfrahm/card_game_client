import Image from "next/image";
import logoImage from "../../assets/logo.png";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../components/input";
import Button from "../components/button";
import {
  Container,
  ContainerImage,
  Content,
  FormContainer,
  Form,
  Hr,
  WrapperHeader,
  ButtonContainer,
} from "./styles";

import { useContext } from "react";
import { GetServerSideProps } from "next";
import privateRoute from "@/@shared/help/private.route";
import { UserContext, UserProvider } from "@/context/userContext";

const signUpFormSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "Precisa ser um e-mail valido." })
    .transform((email) => email.toLocaleLowerCase()),
  nick: z
    .string()
    .trim()
    .min(3, { message: "o nick  precisa ter pelo menos 3 caracteres." })
    .max(40, { message: "o nick pode ter no máximo 40 caracteres." }),
  password: z
    .string()
    .trim()
    .min(6, { message: "a senha precisa ter pelo menos 6 caracteres." }),
});

type SignUpFormData = z.infer<typeof signUpFormSchema>;

const Component = () => {
  const router = useRouter();
  const { createUser } = useContext(UserContext);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({ resolver: zodResolver(signUpFormSchema) });

  const onSubmit = async (data: SignUpFormData) => {
    await createUser({
      name: data.nick,
      ...data,
    });
  };

  return (
    <Container>
      <ContainerImage>
        <Image
          src={logoImage}
          sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          width={150}
          height={150}
          quality={100}
          priority
          alt="logo"
          onClick={() => router.push("/")}
        />
      </ContainerImage>
      <Content>
        <WrapperHeader>
          <h1>Sign Up</h1>
          <Hr />
        </WrapperHeader>
        <FormContainer>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              labelName="Email"
              register={register}
              name="email"
              context={!!watch("email")}
              errors={errors.email?.message}
            />
            <Input
              labelName="Nick Name"
              register={register}
              name="nick"
              context={!!watch("nick")}
              errors={errors.nick?.message}
            />
            <Input
              labelName="Senha"
              register={register}
              name="password"
              context={!!watch("password")}
              errors={errors.password?.message}
            />
            <ButtonContainer>
              <Button name="Confirmar" disabled={isSubmitting} />
            </ButtonContainer>
          </Form>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default function SignUp() {
  return (
    <UserProvider>
      <Component />
    </UserProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const checkAuth = privateRoute(ctx, false);
  if (checkAuth) {
    return checkAuth;
  }

  return {
    props: {},
  };
};
