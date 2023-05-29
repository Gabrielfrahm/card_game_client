import { useCallback, useContext, useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Header from "../components/header";

import { Card as ComponentCard } from "./components/card";

import privateRoute from "@/@shared/help/private.route";
import { CardProvider } from "@/context/cardContext";
import { CardContext } from "@/context/cardContext";
import { ICard } from "@/@shared/interfaces";

import {
  Back,
  CardContainer,
  Container,
  Content,
  Description,
  DescriptionContainer,
  Title,
  WrapperDetails,
  WrapperTitle,
} from "./styles";

function Component() {
  const router = useRouter();
  const [card, setCard] = useState<ICard | undefined>({} as ICard);
  const { getCard } = useContext(CardContext);

  const { cardId } = router.query;

  const get = useCallback(
    async (id: string) => {
      setCard(await getCard(id));
    },
    [getCard]
  );

  useEffect(() => {
    (async () => {
      await get(cardId as string);
    })();
  }, [get, cardId]);

  return (
    <>
      <Header />
      <Container>
        <Back size={35} onClick={() => router.back()} />
        <Title>Details the Card</Title>
        <Content>
          <CardContainer>
            {card && (
              <ComponentCard
                id={card.id}
                atk={card.atk}
                category={card.category}
                description={card.description}
                effect={card.effect}
                title={card.name}
                main={card.main_card}
                image={card.image_url}
              />
            )}
          </CardContainer>
          <WrapperDetails>
            <WrapperTitle>Category : {card?.category}</WrapperTitle>
            {card?.effect !== " " && (
              <WrapperTitle>Effect : {card?.effect}</WrapperTitle>
            )}
            <DescriptionContainer>
              <Description>{card?.description}</Description>
            </DescriptionContainer>
          </WrapperDetails>
        </Content>
      </Container>
    </>
  );
}

export default function Card() {
  return (
    <CardProvider>
      <Component />
    </CardProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const checkAuth = privateRoute(ctx, true);
  if (checkAuth) {
    return checkAuth;
  }

  return {
    props: {},
  };
};
