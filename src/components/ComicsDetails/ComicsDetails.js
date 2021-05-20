import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import {
  Container,
  Right,
  Left,
  Title,
  Description,
  Price,
  Pages,
  Cover,
  GetMagazine,
} from "./ComicsDetails.styled";

const ComicsDetails = ({ data }) => {
  const { path, extension } = data.thumbnail;
  const [redirect, setRedirect] = useState(false);
  const src = `${path}.${extension}`;
  return (
    <Container className="mobile">
      <Left>
        <Cover src={src} />
      </Left>
      <Right>
        <Title>
          <span className="title">Título:</span> <strong>{data.title}</strong>
        </Title>
        <Description>
          <span className="title">Descrição: </span>
          <strong>
            {data.description ? data.description : "Informação Indisponível"}
          </strong>
        </Description>
        <Pages>
          <span className="title">Número de Páginas: </span>
          <strong>
            {data.pageCount > 0 ? data.pageCount : "Informação Indisponível"}
          </strong>
        </Pages>
        <Price>
          <span className="title">Preço: </span>{" "}
          <strong>
            {data.prices[0].price > 0
              ? "$ " + data.prices[0].price
              : "Informação Indisponível"}
          </strong>
        </Price>

        <GetMagazine onClick={() => setRedirect(true)}>
          Solicitar Exemplar
        </GetMagazine>
        {redirect && (
          <Redirect
            to={{
              pathname: "/maps",
              state: { data },
            }}
          />
        )}
      </Right>
    </Container>
  );
};

export default ComicsDetails;
