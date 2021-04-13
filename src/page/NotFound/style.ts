import styled from "styled-components";

export const Container = styled.div`
  font-size: 5rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;

  @media (max-width: 930px) {
    justify-content: center;
  }

  @media (max-width: 530px) {
    justify-content: space-around;
    height: 70vh;
  }
`;

export const Image = styled.img`
  width: 600px;
  height: auto;

  @media (max-width: 930px) {
    width: 80%;
  }
`;
