import { DeckContext, DeckProvider } from "@/context/deckContext";

import { CardContext, CardProvider } from "@/context/cardContext";
import Header from "@/pages/components/header";
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
import Button from "@/pages/components/button";
import { useCallback, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiltersParams } from "@/@shared/interfaces";
import { CaretDown, MagnifyingGlass, Trash } from "phosphor-react";
import InputHome from "@/pages/home/components/input";
import { Card } from "@/pages/components/card";

function Component() {
  const { cards, listCards } = useContext(CardContext);
  const { listDecks, decks } = useContext(DeckContext);
  const [isShow, setIsShow] = useState<boolean>(false);
  const { watch, register, resetField } = useForm();

  const [column, setColumn] = useState<string>("name");

  const handleListCards = useCallback(
    async (filters?: FiltersParams) => {
      await listCards(filters);
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

export default function CreateDeck() {
  return (
    <DeckProvider>
      <CardProvider>
        <Component />
      </CardProvider>
    </DeckProvider>
  );
}
