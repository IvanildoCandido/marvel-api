import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import { getComics } from "./utils/marvelAPI";
import styled from "styled-components";
import "./global.css";
import Modal from "./components/Modal/Modal";
import ComicsDetails from "./components/ComicsDetails/ComicsDetails";
import Maps from "./components/Maps/Maps";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

function App() {
  const [comics, setComics] = useState([]);
  const [comic, setComic] = useState({});
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(false);

  const showModal = (id) => {
    const comic = comics.find((comic) => comic.id === id);
    setComic(comic);
    setStatus(true);
  };

  useEffect(() => {
    getComics().then((response) => {
      setComics(response);
      setLoading(false);
    });
  }, []);
  console.log(comics);

  return (
    <div>
      <Maps />
      {status && (
        <Modal status={status} setStatus={setStatus}>
          <ComicsDetails data={comic} />
        </Modal>
      )}
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        <Container>
          {comics.map((comic) => (
            <Card
              id={comic.id}
              showModal={showModal}
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
