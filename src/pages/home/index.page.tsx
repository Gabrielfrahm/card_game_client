import { GetServerSideProps } from "next";

import Header from "../components/header";
import {
  CardContainer,
  CardWrapper,
  Container,
  Content,
  DeckContainer,
  NewDeckContainer,
  Panel,
  PanelCenter,
  PanelLeft,
  PanelRight,
  SearchContainer,
  Title,
} from "./styles";
import privateRoute from "@/@shared/help/private.route";

import { Card } from "../components/card";
import { cardServices } from "@/@shared/services";
import { ICard, IListResponse } from "@/@shared/interfaces";
import Button from "../components/button";
import Input from "../components/input";
import InputHome from "./components/input";
import { useEffect, useState } from "react";

export default function Home() {
  const [cards, setCards] = useState<IListResponse<ICard>>();
  const { list } = cardServices();

  useEffect(() => {
    (async () => {
      const dale = await list();
      setCards(dale);
    })();
  }, []);

  console.log(cards);
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Title>Library</Title>
          <Panel>
            <PanelLeft>
              <NewDeckContainer>
                <Button name="new deck" />
              </NewDeckContainer>
              <DeckContainer></DeckContainer>
            </PanelLeft>
            <PanelCenter>
              <SearchContainer>
                <InputHome />
              </SearchContainer>
              <CardContainer>
                <CardWrapper>
                  {cards?.data.data.map((card) => (
                    <>
                      <Card
                        key={card.id}
                        atk={card.atk}
                        category={card.category}
                        description={card.description}
                        effect={card.effect}
                        title={card.name}
                        main={true}
                        image={card.image_url}
                      />
                      <Card
                        key={card.id}
                        atk={card.atk}
                        category={card.category}
                        description={card.description}
                        effect={card.effect}
                        title={card.name}
                        main={true}
                        image={card.image_url}
                      />
                    </>
                  ))}
                </CardWrapper>
              </CardContainer>
            </PanelCenter>
            {/* <PanelRight>R</PanelRight> */}
          </Panel>
        </Content>
      </Container>
    </>
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
