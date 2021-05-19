import React from "react";
import {
  Container,
  Right,
  Left,
  Title,
  Description,
  Price,
  Pages,
  Cover,
} from "./ComicsDetails.styled";

const ComicsDetails = ({ data }) => {
  const { path, extension } = data.thumbnail;
  const src = `${path}.${extension}`;
  return (
    <Container>
      <Left>
        <Cover src={src} />
      </Left>
      <Right>
        <Title>
          <span className="title">Título:</span> {data.title}
        </Title>
        <Description>
          <span className="title">Descrição: </span>
          {data.description ? data.description : "Informação Indisponível"}
        </Description>
        <Pages>
          <span className="title">Número de Páginas: </span>
          {data.pageCount > 0 ? data.pageCount : "Informação Indisponível"}
        </Pages>
        <Price>
          <span className="title">Preço: </span>{" "}
          {data.prices[0].price > 0
            ? "$ " + data.prices[0].price
            : "Informação Indisponível"}
        </Price>
      </Right>
    </Container>
  );
};

export default ComicsDetails;
