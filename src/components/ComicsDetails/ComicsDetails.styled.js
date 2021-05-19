import styled from "styled-components";

export const Container = styled.div`
  .title {
    font-size: 18px;
    font-weight: 600;
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
  width: 50%;
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50%;
`;
