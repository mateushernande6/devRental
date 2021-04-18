import styled from "styled-components";
import { FiChevronLeft } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

interface IPhoto {
  tst?: any;
}

export const FiPlusStyled = styled(FiPlus)`
  &:hover {
    animation: rotationIcon 1s;

    @keyframes rotationIcon {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(100deg);
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 850px) {
    height: 30vh;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
  }
`;

export const Logo = styled.img`
  width: 260px;
  margin-top: 15px;
  margin-left: 25px;

  &:hover {
    transform: scale(1.01);
  }

  @media (max-width: 915px) {
    width: 214px;
    margin-left: 17px;
  }

  @media (max-width: 850px) {
    width: 260px;
    margin: 0;
  }

  @media (max-width: 350px) {
    width: 193px;
  }
`;

export const ContainerUsuario = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 212px;

  margin: 39px 15px;

  @media (max-width: 850px) {
    width: 50vw;
    padding: 0 45px;
    margin: 0;
  }

  div {
    font-size: 60px;
    color: white;
  }
`;

export const PhotoProfile = styled.div<IPhoto>`
  width: 90px;
  height: 90px;
  border-radius: 100%;
  background-color: rgb(66, 68, 114, 0.43);
  background-image: url(${(props) => props.tst});

  @media (max-width: 850px) {
    width: 78px;
    height: 78px;
  }

  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    width: 90px;
    height: 90px;
    overflow: hidden;
    border-radius: 50%;
    cursor: pointer;
    text-align: center;
    .iconUpload {
      font-size: 4rem;
      margin-top: 21px;
      color: whitesmoke;
      opacity: 0;
    }
    &:hover {
      .iconUpload {
        opacity: 0.9;
      }
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;

export const DivUsuarioInfo = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 50px;
  margin-top: 5px;

  h2 {
    font-size: 3rem;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    text-align: center;
    color: white;
    padding-bottom: 10px;
  }
  h3 {
    font-size: 1.5rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    text-align: center;
    color: white;
  }
`;

export const BlockTecs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 850px) {
    height: 17vh;
  }
`;

export const InfoTecs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  width: 170px;
  margin-bottom: 10px;

  @media (max-width: 850px) {
    display: none;
  }

  h2 {
    font-size: 2.3rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    text-align: center;
    color: white;
  }
`;

export const DivPlus = styled.div`
  background-color: #424472;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  display: flex;
  padding: 2px;
  transition-property: background;
  transition-duration: 0.5s;

  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 100px;
  background: #424472;
  margin: 0px 10px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const DivButtons = styled.div`
  height: 20px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin-top: 7px;
`;

export const Btn = styled.button`
  font-size: 15px;
  color: white;
  margin-right: 10px;
  background: #fc923f;
  border: none;
  border-radius: 10px;
  display: flex;
  padding: 5px;

  &:hover {
    cursor: pointer;
    border: solid 2px white;
  }
`;

export const ContainerTecs = styled.div`
  width: 230px;
  height: 31vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow-y: auto;
  margin-top: 10px;

  @media (max-width: 850px) {
    height: 82vh;
    display: flex;
    width: 50vw;
    overflow-y: none;
    width: 31vw;
    overflow-x: auto;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;

    border-radius: 0 8px 8px 0;
  }
  ::-webkit-scrollbar {
    width: 6px;
    border-radius: 0 8px 8px 0;
  }
  ::-webkit-scrollbar-thumb {
    background: #3a3864;
    border-radius: 5px;
  }
`;

export const Tecs = styled.div`
  width: 210px;
  height: 50px;
  border-radius: 5px;
  background: #424472;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  margin-bottom: 10px;
  padding: 10px;

  &:hover {
    transform: scale(1.01);
  }

  @media (max-width: 952px) {
    width: 190px;
  }

  @media (max-width: 360px) {
    width: 84px;
  }

  div {
    font-size: 25px;
    color: #fc923f;
  }

  div.divButton {
    @media (max-width: 850px) {
      display: none;
    }
  }
`;

export const ContainerLogOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  width: 100%;
  padding: 5px;
  margin: 59px 0;

  @media (max-width: 850px) {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }

  h2 {
    font-size: 2rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    text-align: center;
    color: white;
  }

  .Sair {
    font-size: 30px;
    color: white;
  }
`;

export const FiChevronLeftStyle = styled(FiChevronLeft)``;

export const DivLogo = styled.div`
  @media (max-width: 850px) {
    width: 100vw;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid rgb(66 68 114 / 43%);
    align-items: center;
  }
`;

export const DivMobile = styled.div`
  width: auto;
  height: auto;
  @media (max-width: 850px) {
    width: 100vw;
    display: flex;
    justify-content: space-around;
  }
`;
