import { Container, Content } from "./styles";

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

  console.log(pages);

  return (
    <Container>
      <Content>
        {pages.map((page, index) => {
          return (
            <button key={index} onClick={() => onClick(index)}>
              {page}
            </button>
          );
        })}
      </Content>
    </Container>
  );
}
