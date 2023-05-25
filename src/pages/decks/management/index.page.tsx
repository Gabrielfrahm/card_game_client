import { DeckContext, DeckProvider } from "@/context/deckContext";

import { CardContext, CardProvider } from "@/context/cardContext";
import Header from "@/pages/components/header";
import Button from "@/pages/components/button";
import { useCallback, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiltersParams, ICard } from "@/@shared/interfaces";
import { CaretDown, MagnifyingGlass, Trash } from "phosphor-react";
import InputHome from "@/pages/home/components/input";
import { Card } from "@/pages/components/card";
import DeckModal from "../components/modal";
import Router, { useRouter } from "next/router";
import { Back, TitleCard } from "../styles";
import { toastNotification } from "@/pages/components/toast";
import TooltipCustom from "./components/tooltip/tooltip";
import { GetServerSideProps } from "next";
import privateRoute from "@/@shared/help/private.route";
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
} from "./styles";

function Component() {
  const { cards, listCards } = useContext(CardContext);
  const { createDeck, deck, updateDeck, getDeck } = useContext(DeckContext);
  const [column, setColumn] = useState<string>("name");
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [cardsSelected, setCardsSelected] = useState<ICard[]>([] as ICard[]);

  const { watch, register, resetField } = useForm();
  const { query } = useRouter();

  const handleGetDeck = useCallback(
    async (id: string) => {
      const deck = await getDeck(id)
      setCardsSelected(deck?.cards as ICard[])
    }, [getDeck]
  )

  const handleListCards = useCallback(
    async (filters?: FiltersParams) => {
      await listCards(filters);
    },
    [listCards]
  );

  const handleSelectedCard = async (card: ICard) => {
    const checkCard = cardsSelected.find((item) => item.id === card.id);
    if (!checkCard) {
      setCardsSelected([...cardsSelected, card]);
    }

    if (checkCard) {
      toastNotification({ type: "info", message: "card already selected" });
    }
  };

  const handleRemoveSelectedCard = async (card: ICard) => {
    const findCard = cardsSelected.filter((item) => item.id !== card.id);
    setCardsSelected(findCard);
  };

  const handleUpdateDeck = async () => {
    await updateDeck({
      id: deck.id,
      cards: cardsSelected.map((item) => item.id),
    });
  };



  useEffect(() => {
    handleListCards();
    setIsShowModal(query.show === "true");
    if(query.id){
      handleGetDeck(`${query.id}`)
    }
  }, [handleListCards, handleGetDeck ,query.show, query.id ]);

  return (
    <>
      <DeckModal createDeck={createDeck} isShow={isShowModal} />
      <Header />
      <Container>
        <Back size={35} onClick={() => Router.back()} />
        <Content>
          <Title>Library</Title>
          <Panel>
            <PanelLeft>
              <TitleCard>{deck.name}</TitleCard>
              <DeckContainer>
                {cardsSelected?.map((card: ICard) => (
                  <TooltipCustom
                    onClick={() => handleRemoveSelectedCard(card)}
                    cardProps={card}
                    key={card.id}
                  />
                ))}
              </DeckContainer>
              <Button onClick={() => handleUpdateDeck()} name="Save" />
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
                    <div key={card.id} onClick={() => handleSelectedCard(card)}>
                      <Card
                        id={card.id}
                        atk={card.atk}
                        category={card.category}
                        description={card.description}
                        effect={card.effect}
                        title={card.name}
                        main={card.main_card}
                        image={card.image_url}
                        hiddenTooltip={true}
                      />
                    </div>
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const checkAuth = privateRoute(ctx, true);
  if (checkAuth) {
    return checkAuth;
  }

  return {
    props: {},
  };
};
