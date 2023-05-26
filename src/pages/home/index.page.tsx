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
  SearchContainer,
  Title,
  ButtonSearch,
  ClearButtonSearch,
  Decks,
} from "./styles";
import privateRoute from "@/@shared/help/private.route";

import { Card } from "../components/card";

import Button from "../components/button";

import InputHome from "./components/input";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { CardContext, CardProvider } from "@/context/cardContext";
import { FiltersParams } from "@/@shared/interfaces";
import { Cards, CaretDown, MagnifyingGlass, Trash } from "phosphor-react";
import { useForm } from "react-hook-form";
import { DeckContext, DeckProvider } from "@/context/deckContext";
import Router from "next/router";
import Pagination from "../components/pagination";

function Component() {
  const { cards, listCards } = useContext(CardContext);
  const { listDecks, decks } = useContext(DeckContext);
  const { watch, register, resetField } = useForm();
  const [isShow, setIsShow] = useState<boolean>(false);
  const [column, setColumn] = useState<string>("name");

  const ref = useRef<HTMLDivElement>(null);

  const handleListCards = useCallback(
    async (filters?: FiltersParams) => {
      await listCards({
        ...filters,
        per_page: "9",
      });
    },
    [listCards]
  );

  const handleListDecks = useCallback(
    async (filters?: FiltersParams) => {
      await listDecks(filters);
    },
    [listDecks]
  );

  useEffect(() => {
    handleListCards();
    handleListDecks();
  }, [handleListCards, handleListDecks]);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Title>Library</Title>

          <Panel>
            <PanelLeft>
              <NewDeckContainer>
                <Button
                  name="new deck"
                  onClick={() =>
                    Router.push({
                      pathname: "/decks/management",
                      query: { show: true },
                    })
                  }
                />
              </NewDeckContainer>
              <DeckContainer>
                {decks?.data?.data.map((deck) => (
                  <Decks
                    key={deck.id}
                    onClick={() => {
                      Router.push(`decks/${deck.id}`);
                    }}
                  >
                    <p>{deck.name}</p>
                    <Cards
                      size={20}
                      style={{
                        position: "absolute",
                        right: 0,
                        marginBottom: "5px",
                      }}
                      color="#F1DDAB"
                    />
                  </Decks>
                ))}
              </DeckContainer>
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
                        resetField("filterValue");
                        setIsShow(!isShow);
                      }}
                    >
                      Name
                    </p>
                    <p
                      onClick={() => {
                        setColumn("category");
                        resetField("filterValue");
                        setIsShow(!isShow);
                      }}
                    >
                      Category
                    </p>
                    <p
                      onClick={() => {
                        setColumn("description");
                        resetField("filterValue");
                        setIsShow(!isShow);
                      }}
                    >
                      Description
                    </p>
                    <p
                      onClick={() => {
                        setColumn("atk");
                        resetField("filterValue");
                        setIsShow(!isShow);
                      }}
                    >
                      Attack
                    </p>
                    <p
                      onClick={() => {
                        setColumn("effect");
                        resetField("filterValue");
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
                    await listCards({
                      per_page: "9",
                    });
                  }}
                  disabled={!watch("filterValue")}
                >
                  <Trash color="#F1DDAB" />
                </ClearButtonSearch>
              </SearchContainer>

              <CardContainer>
                <CardWrapper ref={ref}>
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
              <Pagination
                meta={cards?.data?.meta}
                onClick={async (page: number) => {
                  await listCards({
                    column: column,
                    filter: watch("filterValue"),
                    page: `${page + 1}`,
                    per_page: "9",
                  });
                }}
              />
            </PanelCenter>
          </Panel>
        </Content>
      </Container>
    </>
  );
}

export default function Home() {
  return (
    <DeckProvider>
      <CardProvider>
        <Component />
      </CardProvider>
    </DeckProvider>
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
