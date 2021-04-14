import styled from "styled-components";

export const Container = styled.div`
  width: 25%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 850px) {
    display: none;
  }
`;

export const PrincipalBlock = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
`;

export const Logo = styled.img`
  width: 320px;
  height: 75px;
  margin-bottom: 30px;
`;

export const ContainerUsuario = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 170px;

  div {
    font-size: 60px;
    color: white;
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
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: bold;
    text-align: center;
    color: white;
    padding-bottom: 10px;
  }
  h3 {
    font-size: 1rem;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: bolder;
    text-align: center;
    color: white;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoTecs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 170px;
  margin-bottom: 10px;

  h2 {
    font-size: 2rem;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: bolder;
    text-align: center;
    color: white;
  }
`;

export const DivPlus = styled.div`
  border: solid 2px white;
  border-radius: 50%;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Tecs = styled.div`
  width: 150px;
  height: 30px;
  border-radius: 15px;
  background: #575a9e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: bolder;
  margin-bottom: 10px;
`;

export const ContainerLogOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  padding: 5px;

  &:hover {
    cursor: pointer;
  }

  h2 {
    font-size: 2rem;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: bolder;
    text-align: center;
    color: white;
  }

  .Sair {
    font-size: 30px;
    color: white;
  }
`;
