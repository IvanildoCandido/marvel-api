import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import getComics from "./utils/marvelAPI";
import styled from "styled-components";
import "./global.css";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

function App() {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getComics().then((response) => {
      setComics(response);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        <Container>
          {comics.map((comic) => (
            <Card
              key={comic.id}
              title={comic.title}
              thumbnail={comic.thumbnail}
            />
          ))}
        </Container>
      )}
    </div>
  );
}

export default App;
