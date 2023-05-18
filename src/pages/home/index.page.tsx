import { GetServerSideProps } from "next";

import Header from "../components/header";
import {
  ButtonDropMenu,
  CardContainer,
  CardWrapper,
  Container,
  Content,
  DeckContainer,
  DropMenu,
  DropMenuContent,
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

import Button from "../components/button";

import InputHome from "./components/input";
import { useCallback, useContext, useEffect, useState } from "react";

import { CardContext, CardProvider } from "@/context/cardContext";
import { FiltersParams } from "@/@shared/interfaces";
import { CaretDown } from "phosphor-react";

function Component() {
  const { cards, listCards } = useContext(CardContext);
  const [isShow, setIsShow] = useState<boolean>(false);

  const list = useCallback(
    async (filters?: FiltersParams) => {
      await listCards(filters);
    },
    [listCards]
  );

  useEffect(() => {
    (async () => {
      await list();
    })();
  }, [list]);

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
                <DropMenu>
                  <ButtonDropMenu
                    onClick={() => {
                      setIsShow(!isShow);
                    }}
                  >
                    <CaretDown size={18} color="#F1DDAB" />
                  </ButtonDropMenu>
                  <DropMenuContent isShow={isShow}>
                    <p onClick={() => setIsShow(!isShow)}>Name</p>
                    <p onClick={() => setIsShow(!isShow)}>Number</p>
                    <p onClick={() => setIsShow(!isShow)}>Category</p>
                    <p onClick={() => setIsShow(!isShow)}>Description</p>
                    <p onClick={() => setIsShow(!isShow)}>Attack</p>
                    <p onClick={() => setIsShow(!isShow)}>Effect</p>
                    <p onClick={() => setIsShow(!isShow)}>Main Card</p>
                  </DropMenuContent>
                </DropMenu>
                <InputHome />
              </SearchContainer>
              <CardContainer>
                <CardWrapper>
                  {cards?.data?.data.map((card) => (
                    <Card
                      key={card.id}
                      id={card.id}
                      atk={card.atk}
                      category={card.category}
                      description={card.description}
                      effect={card.effect}
                      title={card.name}
                      main={card.main_card}
                      image={card.image_url}
                    />
                  ))}
                </CardWrapper>
              </CardContainer>
            </PanelCenter>
          </Panel>
        </Content>
      </Container>
    </>
  );
}

export default function Home() {
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
