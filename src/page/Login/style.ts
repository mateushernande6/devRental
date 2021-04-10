import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Main = styled.div`
  width: 90vw;
  height: 50rem;
  background-color: #14142b;
  color: white;
  padding: 3rem;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  text-align: center;
`;
export const DivImage = styled.div`
  width: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
`;
export const DivContent = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
  justify-content: center;

  h2 {
    font-size: 4rem;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 400;
    margin-bottom: 6rem;
  }
  p {
    margin-top: 1rem;
    margin-bottom: 3rem;
    font-size: 1.5rem;
    font-family: "Montserrat Alternates", sans-serif;
    color: #f99292;
  }
  Button {
    margin-bottom: 3rem;
  }
  .linkReg {
    font-size: 2.5rem;
    color: white;
    outline: none;
    text-decoration: none;
    font-family: "Montserrat Alternates", sans-serif;
  }
`;
