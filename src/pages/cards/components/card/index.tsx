import {
  Container,
  BorderImg,
  ContainerBorderImage,
  Atk,
  Content,
  ContentDescription,
  MainImage,
  Title,
  Description,
  EffectImage,
  CategoryImageMage,
  CategoryImageSword,
  CategoryImageRange,
} from "./styles";
import borderMainImg from "../../../../assets/border-card-main-detail.png";
import borderImg from "../../../../assets/border-card.png";

import effectPoisonImg from "../../../../assets/effect/effect.png";
import effectFreezeImg from "../../../../assets/effect/freeze.png";
import effectBloodImg from "../../../../assets/effect/blood.png";

import sword from "../../../../assets/category/sword.png";
import mage from "../../../../assets/category/mage.png";
import range from "../../../../assets/category/range.png";

export type typeProps = {
  id: string;
  atk: string;
  category: string;
  effect: string;
  image: string;
  title: string;
  description: string;
  main: boolean;
};

export function Card({
  id,
  atk,
  category,
  effect,
  image,
  title,
  main,
}: typeProps) {
  return (
    <>
      <Container>
        <ContainerBorderImage>
          <Atk>{atk}</Atk>
          {main ? (
            <BorderImg
              src={borderMainImg}
              sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             33vw"
              width={160}
              quality={100}
              priority
              alt="border"
            />
          ) : (
            <BorderImg
              src={borderImg}
              sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
              width={90}
              quality={100}
              priority
              alt="border"
            />
          )}
        </ContainerBorderImage>
        <Content>
          {effect === "poison" && (
            <EffectImage
              src={effectPoisonImg}
              sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
              width={110}
              quality={100}
              priority
              alt="effect"
            />
          )}
          {effect === "freeze" && (
            <EffectImage
              src={effectFreezeImg}
              sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
              width={110}
              quality={100}
              priority
              alt="effect"
            />
          )}
          {effect === "blood" && (
            <EffectImage
              src={effectBloodImg}
              sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
              width={110}
              quality={100}
              priority
              alt="effect"
            />
          )}

          {category === "sword" && (
            <CategoryImageSword
              src={sword}
              sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
              width={110}
              quality={100}
              priority
              alt="sword"
            />
          )}

          {category === "mage" && (
            <CategoryImageMage
              src={mage}
              sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
              width={110}
              quality={100}
              priority
              alt="mage"
            />
          )}

          {category === "range" && (
            <CategoryImageRange
              src={range}
              sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
              width={110}
              quality={100}
              priority
              alt="mage"
            />
          )}

          <MainImage
            src={image}
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            width={120}
            height={120}
            quality={100}
            priority
            alt="border"
          />
          <ContentDescription>
            <Title>{title}</Title>
          </ContentDescription>
        </Content>
      </Container>
    </>
  );
}
