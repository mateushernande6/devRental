import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Main = styled.div`
  width: 800px;
  height: 500px;
  background-color: #14142b;
  color: white;
  padding: 3rem;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  text-align: center;

  @media (max-width: 820px) {
    flex-direction: column;
    align-items: center;

    width: 94vw;
    height: 92vh;
  }
`;
export const DivImage = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #212040;
  img {
    width: 90%;

    @media (max-width: 820px) {
      width: 65%;
      min-width: 160px;
      margin-top: 3rem;
    }
  }

  @media (max-width: 820px) {
    border: none;
  }
`;
export const DivContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
  justify-content: center;

  @media (max-width: 820px) {
    width: 100%;
  }

  @media (max-width: 317px) {
    width: 120%;
  }

  h2 {
    font-size: 4rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    margin-bottom: 6rem;

    @media (max-width: 820px) {
      margin: 3rem 0;
    }
  }
  p {
    text-align: left;
    margin-top: 1rem;
    margin-bottom: 3rem;
    font-size: 1.5rem;
    font-family: "Montserrat", sans-serif;
    color: #f99292;
  }

  form {
    input {
      width: 24rem;
      height: 2.5rem;
    }
  }

  Button {
    margin-bottom: 3rem;
    width: 26rem;
    height: 4.7rem;
  }
  .linkReg {
    font-size: 1.6rem;
    font-weight: bold;
    color: white;
    outline: none;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
  }
`;
