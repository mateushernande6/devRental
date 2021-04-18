import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  color: #fff;
  height: 90%;
  display: flex;
  margin-top: 15px;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
`;

export const DivTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
  margin-bottom: 33px;

  @media (max-width: 512px) {
    width: 96%;
  }
`;

export const Title = styled.h1`
  font-family: Roboto, sans-serif;

  font-size: 3.4rem;
`;

export const SubTitle = styled.h2`
  font-family: Roboto, sans-serif;
  margin: 22px 0 25px 0;
  font-size: 2.3rem;
`;

export const Text = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 1.5rem;
  line-height: 1.5;
`;
