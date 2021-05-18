import React, { useEffect, useState } from "react";
import getComics from "./utils/marvelAPI";

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
        <h1>
          {comics.map((comic) => (
            <div>
              <h5 key={comic.id}>{comic.title}</h5>
              <img
                src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                alt="tumbnail"
              />
            </div>
          ))}
        </h1>
      )}
    </div>
  );
}

export default App;
