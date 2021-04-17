import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivText = styled.div`
  width: 500px;

  @media (max-width: 506px) {
    width: 318px;
  }

  @media (max-width: 400px) {
    width: 254px;
  }
`;

export const DivImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-right: 1px solid #212040;
  align-items: center;
  justify-content: center;

  @media (max-width: 918px) {
    height: 55%;
  }
`;

export const DivCardIcon = styled.div`
  background-color: rgb(66, 68, 114, 0.38);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const ContainerDiv = styled.div`
  width: 900px;
  height: 460px;

  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #14142b;

  @media (max-width: 918px) {
    margin: 0 auto;
    flex-direction: column;
    width: 97%;
    height: 91%;
  }
`;

export const Img = styled.img`
  width: 368px;
  height: auto;
  margin-left: 20px;

  @media (max-width: 918px) {
    width: 313px;
    margin-top: 10px;
  }

  @media (max-width: 450px) {
    width: 226px;
  }
`;

export const DivItens = styled.div`
  height: 452px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    font-size: 3.6rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    text-align: center;
    color: white;
  }

  @media (max-width: 910px) {
    h1 {
      font-size: 3rem;
      text-align: center;
    }
  }

  @media (max-width: 450px) {
    font-size: 2.5rem;
  }

  @media (max-width: 425px) {
    margin: 0 auto;
  }
`;

export const DivCards = styled.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 470px) {
    width: 250px;
  }
`;

export const Card = styled.div`
  width: 150px;
  height: 160px;
  font-size: 7rem;
  color: white;
  background-color: rgb(66, 68, 114, 0.43);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 7px;
  transition-property: transform;
  transition-duration: 0.5s;

  @media (max-width: 470px) {
    width: 119px;
    height: 171px;
    font-size: 5rem;
  }

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
    box-shadow: 0 3px 6px rgb(0 0 0 / 12%), 0 3px 6px rgb(0 0 0 / 24%);
  }

  h2 {
    font-size: 2rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    text-align: center;
    color: white;
  }
`;
