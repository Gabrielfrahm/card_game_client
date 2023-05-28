import swordImg from "../../../assets/category/sword.png";
import mageImg from "../../../assets/category/mage.png";
import rangeImg from "../../../assets/category/range.png";

import { Container, ContainerImage, Content, TypeImage } from "./styles";
import Image from "next/image";

type TypeProps = {
  sword: number;
  mage: number;
  range: number;
};

export default function TypeCard({ mage, range, sword }: TypeProps) {
  return (
    <Container>
      <Content>
        <ContainerImage>
          <TypeImage
            src={swordImg}
            sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             33vw"
            width={50}
            quality={100}
            priority
            alt="sword"
          />
          <p>{sword}</p>
        </ContainerImage>

        <ContainerImage>
          <TypeImage
            src={mageImg}
            sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             33vw"
            width={30}
            quality={100}
            priority
            alt="mage"
          />
          <p>{mage}</p>
        </ContainerImage>
        <ContainerImage>
          <TypeImage
            src={rangeImg}
            sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             33vw"
            width={40}
            quality={100}
            priority
            alt="range"
          />
          <p>{range}</p>
        </ContainerImage>
      </Content>
    </Container>
  );
}
