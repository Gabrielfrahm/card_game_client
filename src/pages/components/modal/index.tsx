import {
  ButtonNo,
  ButtonYes,
  Close,
  Container,
  Content,
  Title,
  WrapperButton,
} from "./styles";

type ModalProps = {
  isShow: boolean;
  functionYes: (id?: string) => Promise<void>;
  functionNo: () => Promise<void>;
};

export default function Modal({ isShow, functionYes, functionNo }: ModalProps) {
  return (
    <Container isShow={isShow}>
      <Content>
        <Close onClick={() => functionNo()}>x</Close>
        <Title>Are you sure ?</Title>
        <WrapperButton>
          <ButtonYes onClick={async () => functionYes()}>Yes</ButtonYes>
          <ButtonNo onClick={() => functionNo()}>No</ButtonNo>
        </WrapperButton>
      </Content>
    </Container>
  );
}
