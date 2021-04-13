import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerDiv = styled.div`
  height: 550px;
  width: 1098px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #14142b;

  @media (max-width: 910px) {
    margin: 0 auto;
    flex-direction: column;
  }
  @media (max-width: 425px) {
    width: 465px;
    flex-direction: column;
    height: 600px;
  }

  @media (max-width: 375px) {
    margin-top: 70px;
  }
`;

export const Img = styled.img`
  width: 445px;
  height: 310px;
  margin-left: 20px;

  @media (max-width: 910px) {
    width: 222px;
    height: 215px;
    margin-top: 10px;
  }
`;

export const DivItens = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    font-size: 4rem;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 400;
    text-align: center;
    color: white;
  }

  @media (max-width: 910px) {
    h1 {
      font-size: 3rem;
      text-align: center;
    }
  }
  @media (max-width: 425px) {
    margin: 0 auto;
  }

  @media (max-width: 375px) {
    margin-left: 10px;
  }
`;

export const DivCards = styled.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 20px;

  @media (max-width: 425px) {
    margin: 0 auto;
  }

  @media (max-width: 375px) {
    margin-left: 23px;
  }
`;

export const Card = styled.div`
  width: 150px;
  height: 200px;
  font-size: 7rem;
  color: white;
  background-color: #424472;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
  transition-property: transform;
  transition-duration: 0.5s;

  @media (max-width: 425px) {
    width: 100px;
    height: 120px;
    font-size: 5rem;
  }

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    border: solid 3px white;
  }

  h2 {
    font-size: 2rem;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 400;
    text-align: center;
    color: white;
  }
`;
