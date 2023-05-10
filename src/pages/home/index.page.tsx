import { GetServerSideProps } from "next";

import Header from "../components/header";
import { Container, Content } from "./styles";
import privateRoute from "@/@shared/help/private.route";

import { Card } from "../components/card";
export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Card
            atk="15"
            category="sword"
            description="sword"
            effect="poison"
            title="some name"
            main={false}
            image="https://firebasestorage.googleapis.com/v0/b/card-game-18c32.appspot.com/o/rennala.png?alt=media&token=9a238555-d092-47d5-8832-21d5442a827a"
          />
          <Card
            atk="15"
            category="mage"
            description="some description"
            effect="blood"
            title="some name"
            main={true}
            image=""
          />
          <Card
            atk="15"
            category="range"
            description="some description"
            effect="freeze"
            title="some name"
            main={false}
            image="https://firebasestorage.googleapis.com/v0/b/card-game-18c32.appspot.com/o/malenia.png?alt=media&token=fd093cd7-b962-4ad9-9a46-f8d32d814152"
          />
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
