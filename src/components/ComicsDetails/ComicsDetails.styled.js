import styled from "styled-components";

export const Container = styled.div`
  .title {
    font-size: 16px;
    font-weight: 600;
  }
  strong {
    color: blue;
    font-size: 15px;
  }
  display: flex;
  gap: 15px;
  max-width: 600px;
  padding: 10px;
`;
export const Title = styled.span`
  font-size: 15px;
  font-weight: 600;
`;
export const Description = styled.p`
  font-size: 15px;
`;
export const Price = styled.span`
  font-size: 20px;
`;
export const Pages = styled.span`
  font-size: 15px;
`;
export const Cover = styled.img`
  width: 100%;
  height: 400px;
`;
export const Left = styled.div`
  width: 100%;
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;
export const GetMagazine = styled.button`
  margin-top: 20px;
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
`;
