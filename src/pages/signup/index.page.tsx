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
    .email({ message: "E-mail need be valid." })
    .transform((email) => email.toLocaleLowerCase()),
  nick: z
    .string()
    .trim()
    .min(3, { message: "nickname must be at least 3 characters long." })
    .max(40, { message: "nickname can be a maximum of 40 characters." }),
  password: z
    .string()
    .trim()
    .min(6, { message: "The password must have at least 6 characters." }),
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
              labelName="Password"
              register={register}
              name="password"
              context={!!watch("password")}
              errors={errors.password?.message}
            />
            <ButtonContainer>
              <Button name="Confirm" disabled={isSubmitting} />
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
