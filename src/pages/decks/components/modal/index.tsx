import { useContext, useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Close,
  Container,
  Content,
  Form,
  ContainerInput,
  TextInput,
  Title,
} from "./styled";
import Button from "@/pages/components/button";
import { DeckContext, DeckProvider } from "@/context/deckContext";
import { IDeck } from "@/@shared/interfaces";
import Router from "next/router";
type ModalProps = {
  isShow: boolean;
  createDeck: (name: string) => Promise<IDeck | undefined>;
};

const deckFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "name must be at least 3 characters long." })
    .max(15, { message: "name can be a maximum of 15 characters." }),
});

type DeckFormData = z.infer<typeof deckFormSchema>;

function Component(props: any) {
  const [visible, setVisible] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeckFormData>({ resolver: zodResolver(deckFormSchema) });

  const onSubmit = async (data: DeckFormData) => {
    await props.createDeck(data.name);
    setVisible(!visible);
  };

  useEffect(() => {
    setVisible(props.isShow);
  }, [props.isShow]);

  return (
    <Container isShow={visible}>
      <Content>
        <Close
          onClick={() => {
            Router.replace("/home");
          }}
        >
          x
        </Close>
        <Title>Deck register</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <p>Name of Deck</p>
          <ContainerInput>
            <TextInput {...register("name")} />
          </ContainerInput>
          {errors && <p>{errors.name?.message}</p>}
          <Button name="Register" />
        </Form>
      </Content>
    </Container>
  );
}

export default function DeckModal({ isShow, createDeck }: ModalProps) {
  return (
    <DeckProvider>
      <Component isShow={isShow} createDeck={createDeck} />
    </DeckProvider>
  );
}
