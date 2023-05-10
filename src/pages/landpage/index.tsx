import Image from "next/image";
import { Container, ContainerLink, Content, ImageContainer } from "./styles";
import logoImage from "../../assets/logo.png";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { GetServerSideProps } from "next";
import privateRoute from "@/@shared/help/private.route";

export default function LandPage() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    function attTamanho() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    attTamanho();
  }, []);

  return (
    <Container>
      <Content>
        <ImageContainer>
          <Image
            src={logoImage}
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            width={size.width > 650 ? 550 : 300}
            quality={100}
            priority
            alt=""
          />
        </ImageContainer>
        <ContainerLink>
          <Link href={"/login"} placeholder="LOGIN">
            LOGIN
          </Link>
        </ContainerLink>
        <ContainerLink>
          <Link href={"/signup"} placeholder="LOGIN">
            SIGN UP
          </Link>
        </ContainerLink>
      </Content>
    </Container>
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
