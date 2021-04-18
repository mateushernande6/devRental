import styled from "styled-components";
import { FiCrosshair } from "react-icons/fi";

export const FiCrosshairStyled = styled(FiCrosshair)`
  animation: rotationIcon 2s linear infinite;

  @keyframes rotationIcon {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 13px;

  width: 800px;
  height: 500px;

  background: #14142b;

  @media (max-width: 817px) {
    width: 94vw;
    height: 92vh;
    flex-direction: column-reverse;
  }
`;

export const Title = styled.h2`
  font-size: 4rem;
  margin: 2rem 0;

  @media (max-width: 817px) {
    font-size: 3.4rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #212040;
  width: 41rem;
  height: 100%;

  p {
    text-align: left;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-family: "Montserrat", sans-serif;
    color: #f99292;
  }

  @media (max-width: 817px) {
    border: none;
  }

  @media (max-width: 417px) {
    width: 29rem;
  }

  h2 {
    font-size: 4rem;
    font-family: "Montserrat", sans-serif;
    color: #fff;
    margin-bottom: 2rem;
  }
  Input {
    margin-bottom: 1rem;
  }

  Input:first-child {
    margin-top: 1.5rem;
  }
  Button {
    margin: 1rem 0 1rem 0;
  }
`;

export const SvgContainer = styled.div`
  width: 40rem;
  padding: 0 26px 0 26px;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  img {
    width: 100%;
  }

  @media (max-width: 817px) {
    img {
      width: 68%;
    }
    width: 40rem;
  }

  @media (max-width: 417px) {
    img {
      width: 58%;
    }
  }

  @media (max-width: 400px) {
    width: 30rem;

    img {
      width: 83%;
    }
  }
`;
