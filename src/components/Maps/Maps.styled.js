import styled from "styled-components";

export const ContainerSearch = styled.div`
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px;
  z-index: 10;
  input {
    padding: 0.5rem;
    font-size: 1.5rem;
    width: 100%;
  }
`;
