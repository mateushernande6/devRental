import styled from "styled-components";

interface IPhoto {
  tst?: any;
}

export const Container = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const PrincipalBlock = styled.div`
  height: 406px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;

  @media (max-width: 850px) {
    margin-top: 0;
    height: 153px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 90%;
  }
`;

export const DivLogo = styled.div`
  @media (max-width: 850px) {
    width: 100%;
    border-bottom: 1px solid rgb(66 68 114 / 43%);
    margin-top: 28px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 260px;
  height: 75px;
  margin-top: 15px;
  margin-left: 25px;

  @media (max-width: 915px) {
    width: 214px;
    margin-left: 17px;
  }

  @media (max-width: 850px) {
    width: 260px;

    margin: 12px 0 0 0;
  }

  @media (max-width: 350px) {
    width: 193px;
  }
`;

export const ContainerUsuario = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 170px;
  /* margin-top: 30px; */

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
    font-family: "Montserrat", sans-serif;
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
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  margin-bottom: 10px;
`;

export const ContainerLogOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  padding: 5px;

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
    /* margin-left: 12px; */
  }

  .Sair {
    font-size: 30px;
    color: white;
    /* margin-left: 20px; */
  }
`;

export const ButtonDiv = styled.div`
  width: 19rem;
  height: 4.7rem;
  background-color: rgb(66, 68, 114, 0.43);
  font-weight: 300;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: Roboto, sans-serif;
  font-size: 2rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 53px;

  @media (max-width: 850px) {
    margin-top: 0;
  }

  @media (max-width: 420px) {
    width: 5rem;

    p {
      display: none;
    }
  }
`;

export const PhotoProfile = styled.div<IPhoto>`
  width: 80px;
  height: 80px;

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

export const Icon = styled.div`
  background-color: #424472;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  cursor: pointer;
`;
