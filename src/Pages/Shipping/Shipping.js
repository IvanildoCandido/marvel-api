import React, { useState } from "react";
import { Link } from "react-router-dom";
import Maps from "../../components/Maps/Maps";
import { Container, InfoArea, Message } from "./Shipping.style";
const Shipping = ({ location }) => {
  const [address, setAddress] = useState("");
  const [finish, setFinish] = useState(false);
  return (
    <Container>
      <InfoArea>
        {!finish ? (
          <>
            <h1>Selecione no mapa o endereço de envio!</h1>
            <h2>Altere o endereço caso necessário:</h2>
            <input
              type="text"
              value={address}
              onChange={({ target }) => setAddress(target.value)}
            />
            <button type="button" onClick={() => setFinish(true)}>
              Solicitar Envio
            </button>
          </>
        ) : (
          <Message>
            <h2>Informações de Envio:</h2>
            <h3>
              Quadrinho: <span>{location.state.data.title}</span>
            </h3>
            <h3>
              Endereço de Envio: <span>{address}</span>
            </h3>
            <Link to="/">
              <button type="button">Voltar para Home</button>
            </Link>
          </Message>
        )}
      </InfoArea>
      <Maps setStreet={setAddress} />
    </Container>
  );
};

export default Shipping;
