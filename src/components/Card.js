import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 300px;
  height: 350px;
  margin-top: 10px;
  border: 1px solid #eee;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
`;
const Title = styled.span`
  margin: 10px 5px;
  font-size: 18px;
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const Folder = styled.img`
  width: 100%;
  height: 300px;
`;

const Card = ({ title, thumbnail }) => {
  const { path, extension } = thumbnail;
  const src = `${path}.${extension}`;
  return (
    <Container>
      <Title>{title}</Title>
      <Folder src={src} />
    </Container>
  );
};

export default Card;
