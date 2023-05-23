import privateRoute from "@/@shared/help/private.route";
import { ICard } from "@/@shared/interfaces";
import { CardProvider } from "@/context/cardContext";
import { DeckContext, DeckProvider } from "@/context/deckContext";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Header from "../components/header";

import { CaretDown, MagnifyingGlass, Trash } from "phosphor-react";
import InputHome from "../home/components/input";
import { Card } from "../components/card";
import { getAPIClient } from "@/@shared/lib/http";
import { urls } from "@/@shared/constants/api";
import Battle from "../../assets/battle.png";

import {
  ButtonDropMenu,
  CardContainer,
  CardWrapper,
  Container,
  Content,
  DeckContainer,
  DropMenu,
  DropMenuContent,
  Panel,
  PanelCenter,
  PanelLeft,
  SearchContainer,
  Title,
  ButtonSearch,
  ClearButtonSearch,
  MiniCard,
  TitleCard,
  MiniCardPower,
  MiniCardName,
  MiniCardImage,
  SumPower,
  Back,
} from "./styles";
import TooltipCustom from "./tooltip";

function Component(props: any) {
  const router = useRouter();

  const { deckId } = router.query;

  const { deck, getDeck } = useContext(DeckContext);

  const [isShow, setIsShow] = useState<boolean>(false);
  const { watch, register, resetField } = useForm();

  const [column, setColumn] = useState<string>("name");
  const [cards, setCards] = useState<ICard[]>(props.props.deck.cards);
  const [sumPower, setSumPower] = useState<number>(0);

  const handleFilterCards = async (column: string, value: string) => {
    if (value) {
      const cardsFiltered = deck.cards.filter((card) =>
        //@ts-ignore
        String(card[column]).toUpperCase().includes(value.toUpperCase())
      );
      setCards(cardsFiltered);
    }
  };

  const handleSumPowerDeck = useCallback(async () => {
    let sum = 0;
    cards.forEach((card) => {
      sum += Number(card.atk);
    });
    setSumPower(sum);
  }, [cards]);

  const handleGetDeck = useCallback(
    async (id: string) => {
      await getDeck(id);
    },
    [getDeck]
  );

  useEffect(() => {
    handleGetDeck(`${deckId}`);
    handleSumPowerDeck();
  }, [handleGetDeck, deckId, handleSumPowerDeck]);

  return (
    <>
      <Header />
      <Container>
        <Back size={35} onClick={() => router.back()} />
        <Content>
          <Title>{deck.name}</Title>
          <Panel>
            <PanelLeft>
              <TitleCard>Cards</TitleCard>
              <SumPower>power {sumPower}</SumPower>
              <DeckContainer>
                {props.props.deck.cards.map((card: ICard) => (
                  <TooltipCustom {...card} key={card.id} />
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
                    handleFilterCards(column, watch("filterValue"));
                  }}
                  disabled={!watch("filterValue")}
                >
                  <MagnifyingGlass color="#F1DDAB" />
                </ButtonSearch>
                <ClearButtonSearch
                  onClick={async () => {
                    resetField("filterValue");
                    setCards(props.props.deck.cards);
                  }}
                  disabled={!watch("filterValue")}
                >
                  <Trash color="#F1DDAB" />
                </ClearButtonSearch>
              </SearchContainer>
              <CardContainer>
                <CardWrapper>
                  {cards ? (
                    cards.map((card) => (
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
                    ))
                  ) : (
                    <p>sem cards</p>
                  )}
                </CardWrapper>
              </CardContainer>
            </PanelCenter>
          </Panel>
        </Content>
      </Container>
    </>
  );
}

export default function Deck(props: any) {
  return (
    <DeckProvider>
      <CardProvider>
        <Component props={props} />
      </CardProvider>
    </DeckProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const checkAuth = privateRoute(ctx, true);
  if (checkAuth) {
    return checkAuth;
  }

  const deck = await getAPIClient(ctx).get(
    urls.deck.get(ctx.params?.deckId as string)
  );

  return {
    props: {
      deck: deck.data,
    },
  };
};
