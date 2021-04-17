import styled from "styled-components";

export const Container = styled.div`
  color: rgb(255 255 255);
  font-size: 2rem;
  padding: 10px;
  margin-right: 15px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  border-bottom: 1px solid #fc923f;

  &:hover {
    transform: scale(1.01);
    border-bottom: 2px solid #ff6a17;
  }
`;
