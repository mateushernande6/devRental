import styled from "styled-components";
import { BsPeopleCircle } from "react-icons/bs";

interface IPhoto {
  tst?: any;
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const DivSection = styled.div`
  width: 93%;
  height: 96vh;
  background-color: rgb(20, 20, 43, 0.64);
  border-radius: 16px;

  @media (max-width: 850px) {
    height: 64vh;
    margin-bottom: 10px;
    /* height: 70%; */
  }
`;

export const Tecs = styled.div`
  width: 210px;
  height: 39px;
  border-radius: 5px;
  /* background: #575a9e; */
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

  div {
    font-size: 25px;
    color: #fc923f;
  }

  div.icon {
    @media (max-width: 850px) {
      display: none;
    }
  }
`;

export const DivTechsMobile = styled.div`
  display: none;

  @media (max-width: 850px) {
    display: flex;
    width: 90%;
  }
`;

export const ContainerCard = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1rem;
  overflow-y: auto;

  @media (max-width: 850px) {
    height: 95%;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;

    border-radius: 0 8px 8px 0;
  }
  ::-webkit-scrollbar {
    width: 6px;
    border-radius: 0 8px 8px 0;

    /* background-image: linear-gradient(#212040, #21203e); */
  }

  ::-webkit-scrollbar-thumb {
    background: #3a3864;
    border-radius: 5px;
  }
`;

export const DivMenu = styled.div`
  width: 100%;
  height: 14vh;
  border-bottom: 1px solid #424472;
  border-radius: 16px 16px 0 0;
  padding-left: 68px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 850px) {
    display: none;
  }
`;

export const DivMain = styled.div`
  width: 75%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 850px) {
    width: 100%;
    height: 70%;
  }
`;

export const DivAside = styled.div`
  width: 25%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 850px) {
    /* display: none; */
    width: 100%;
    flex-direction: column;
    /* background-color: aqua; */
    height: 30%;
  }
`;

export const DivIconUser = styled.div``;

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

export const ContainerTecs = styled.div`
  width: 126px;
  height: 31vh;
  display: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* padding: 1rem; */
  overflow-y: auto;
  margin-top: 10px;

  @media (max-width: 850px) {
    height: 15vh;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;

    border-radius: 0 8px 8px 0;
  }
  ::-webkit-scrollbar {
    width: 6px;
    border-radius: 0 8px 8px 0;

    /* background-image: linear-gradient(#212040, #21203e); */
  }
  ::-webkit-scrollbar-thumb {
    background: #3a3864;
    border-radius: 5px;
  }
`;

export const PhotoProfile = styled.div<IPhoto>`
  width: 90px;
  height: 90px;
  border-radius: 100%;
  background-color: green;
  background-image: url(${(props) => props.tst});
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
