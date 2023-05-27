import { CaretLeft, CaretRight } from "phosphor-react";
import { ButtonPage, Container, Left, Right } from "./styles";

type PaginationProps = {
  meta: {
    current_page: number;
    per_page: number;
    last_page: number;
    total: number;
  };
  onClick: (numb: number) => void;
};

export default function Pagination({ meta, onClick }: PaginationProps) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(meta?.total / meta?.per_page); i++) {
    pages.push(i);
  }

  return (
    <Container>
      <Left
        onClick={() => {
          onClick(
            meta?.current_page !== 1
              ? meta?.current_page - 1
              : meta?.current_page
          );
        }}
        size={30}
      />
      {pages.map((page, index) => {
        return (
          <ButtonPage
            selected={index + 1 === meta?.current_page}
            key={index}
            onClick={() => onClick(index + 1)}
          >
            {page}
          </ButtonPage>
        );
      })}
      <Right
        onClick={() => {
          onClick(
            meta?.current_page < meta?.last_page
              ? meta?.current_page + 1
              : meta?.current_page
          );
        }}
        size={30}
      />
    </Container>
  );
}
