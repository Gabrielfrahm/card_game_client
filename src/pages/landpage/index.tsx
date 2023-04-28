import Image from "next/image";
import { Container, ContainerLink, Content, ImageContainer } from "./styles";
import logoImage from "../../assets/logo.png";

import { useEffect, useState } from "react";
import Link from "next/link";

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
          <Link href={"#"} placeholder="LOGIN">
            LOGIN
          </Link>
        </ContainerLink>
        <ContainerLink>
          <Link href={"#"} placeholder="LOGIN">
            SIGN UP
          </Link>
        </ContainerLink>
        <audio autoPlay id="player">
          <source src="/opening.mp3" type="audio/mp3" />
        </audio>
      </Content>
    </Container>
  );
}
