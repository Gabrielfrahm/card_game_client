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

const loginFormSchema = z.object({
  email: z
    .string()
    .email({ message: "Precisa ser um e-mail valido." })
    .transform((email) => email.toLocaleLowerCase()),
  password: z
    .string()
    .min(6, { message: "a senha precisa ter pelo menos 6 caracteres." }),
});

type LoginFormData = z.infer<typeof loginFormSchema>;

export default function Login() {
  const router = useRouter();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginFormSchema) });

  const onSubmit = (data: any) => {
    console.log(data);
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
          onClick={() => router.back()}
        />
      </ContainerImage>
      <Content>
        <WrapperHeader>
          <h1>Login</h1>
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
}
