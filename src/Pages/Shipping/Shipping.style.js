import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const InfoArea = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  input {
    width: 90%;
    height: 30px;
    padding: 5px;
    font-size: 15px;
  }
  button {
    width: 80%;
    outline: none;
    background-color: black;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px;
    padding: 5px;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
`;
export const Message = styled.div`
  background-color: lightblue;
  padding: 15px;
  span {
      color: blue;
      font-size: 25px;
  }
  h3 {
    margin: 5px 0;
  }
  button {
    margin-top: 10px;
  }
`;
