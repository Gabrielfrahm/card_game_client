import { GetServerSideProps } from "next";

import Header from "../components/header";
import {
  Container,
  Content,
  Panel,
  PanelCenter,
  PanelLeft,
  PanelRight,
  Title,
} from "./styles";
import privateRoute from "@/@shared/help/private.route";

import { Card } from "../components/card";
import { cardServices } from "@/@shared/services";
import { useEffect, useState } from "react";
import { ICard, IListResponse } from "@/@shared/interfaces";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Title>Library</Title>
          <Panel>
            <PanelLeft>L</PanelLeft>
            <PanelCenter>C</PanelCenter>
            <PanelRight>R</PanelRight>
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
