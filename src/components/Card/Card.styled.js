import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 300px;
  height: 350px;
  margin-top: 10px;
  border: 1px solid #eee;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;
export const Title = styled.span`
  margin: 13px 5px;
  font-size: 18px;
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const Folder = styled.img`
  width: 100%;
  height: 300px;
`;
