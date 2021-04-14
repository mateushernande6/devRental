import styled from "styled-components";

interface IPhoto {
  tst?: any;
}

export const Container = styled.div`
  width: 25%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const PrincipalBlock = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
`;

export const Logo = styled.img`
  width: 320px;
  height: 75px;
  margin-top: 15px;
`;

export const ContainerUsuario = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 250px;

  div {
    font-size: 60px;
    color: white;
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
    background-color: indigo;
    cursor: pointer;
    text-align: center;
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

export const BlockTecs = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoTecs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
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
  height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding: 1rem;
  margin-top: 10px;

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
  /* background: #575a9e; */
  background: #424472;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 1.5rem;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: bolder;
  margin-bottom: 10px;
  padding: 10px;

  div {
    font-size: 25px;
    color: #fc923f;
  }
`;

export const ContainerLogOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  padding: 5px;
  margin-bottom: 145px;

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
