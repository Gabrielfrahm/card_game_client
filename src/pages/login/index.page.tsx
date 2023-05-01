import Image from "next/image";
import logoImage from "../../assets/logo.png";
import Input from "../components/input";
import {
  Container,
  ContainerImage,
  Content,
  FormContainer,
  Form,
  Hr,
  WrapperHeader,
} from "./styles";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import border from "../../assets/border.png";

export default function Login() {
  const router = useRouter();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({});

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
          <Form>
            <Input
              labelName="Email"
              register={register}
              name="email"
              context={!!watch("email")}
            />
            <Input
              labelName="Senha"
              register={register}
              name="password"
              context={!!watch("password")}
            />
          </Form>
        </FormContainer>
      </Content>
    </Container>
  );
}