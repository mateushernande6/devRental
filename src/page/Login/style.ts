import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to right bottom, #212040, #21203e);
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
  justify-content: space-around;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  h2 {
    font-size: 4rem;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 400;
    text-align: center;
    margin-bottom: 6rem;
  }
  Input {
    margin-bottom: 3rem;
  }
`;
