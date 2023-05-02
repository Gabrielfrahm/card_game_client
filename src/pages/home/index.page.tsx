import { GetServerSideProps } from "next";

import Header from "../components/header";
import { Container, Content } from "./styles";
import privateRoute from "@/@shared/help/private.route";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>dale</h1>
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
