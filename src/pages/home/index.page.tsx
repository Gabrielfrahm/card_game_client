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
  ButtonSearch,
  ClearButtonSearch,
} from "./styles";
import privateRoute from "@/@shared/help/private.route";

import { Card } from "../components/card";

import Button from "../components/button";

import InputHome from "./components/input";
import { useCallback, useContext, useEffect, useState } from "react";

import { CardContext, CardProvider } from "@/context/cardContext";
import { FiltersParams } from "@/@shared/interfaces";
import { CaretDown, MagnifyingGlass, Trash } from "phosphor-react";
import { useForm } from "react-hook-form";

function Component() {
  const { cards, listCards } = useContext(CardContext);
  const [isShow, setIsShow] = useState<boolean>(false);
  const { watch, register, resetField } = useForm();

  const [column, setColumn] = useState<string>("name");

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                    <p
                      onClick={() => {
                        setColumn("name");
                        setIsShow(!isShow);
                      }}
                    >
                      Name
                    </p>
                    <p
                      onClick={() => {
                        setColumn("number");
                        setIsShow(!isShow);
                      }}
                    >
                      Number
                    </p>
                    <p
                      onClick={() => {
                        setColumn("category");
                        setIsShow(!isShow);
                      }}
                    >
                      Category
                    </p>
                    <p
                      onClick={() => {
                        setColumn("description");
                        setIsShow(!isShow);
                      }}
                    >
                      Description
                    </p>
                    <p
                      onClick={() => {
                        setColumn("atk");
                        setIsShow(!isShow);
                      }}
                    >
                      Attack
                    </p>
                    <p
                      onClick={() => {
                        setColumn("effect");
                        setIsShow(!isShow);
                      }}
                    >
                      Effect
                    </p>
                  </DropMenuContent>
                </DropMenu>
                <InputHome register={register} />
                <ButtonSearch
                  onClick={async () => {
                    await listCards({
                      column: column,
                      filter: watch("filterValue"),
                    });
                  }}
                  disabled={!watch("filterValue")}
                >
                  <MagnifyingGlass color="#F1DDAB" />
                </ButtonSearch>
                <ClearButtonSearch
                  onClick={async () => {
                    resetField("filterValue");
                    await listCards();
                  }}
                  disabled={!watch("filterValue")}
                >
                  <Trash color="#F1DDAB" />
                </ClearButtonSearch>
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
