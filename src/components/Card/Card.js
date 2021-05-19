import React from "react";
import { Container, Title, Folder } from "./Card.styled";

const Card = ({ title, thumbnail, showModal, id }) => {
  const { path, extension } = thumbnail;
  const src = `${path}.${extension}`;
  return (
    <Container onClick={() => showModal(id)}>
      <Title>{title}</Title>
      <Folder src={src} />
    </Container>
  );
};

export default Card;
