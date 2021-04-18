import styled from "styled-components";

export const Container = styled.div`
  font-size: 4rem;
  text-align: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    color: #fff;
  }

  img {
    margin-top: 91px;
    max-width: 545px;

    @media (max-width: 930px) {
      width: 51%;
    }
  }
`;

export const Div = styled.div``;
