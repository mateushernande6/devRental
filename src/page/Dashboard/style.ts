import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
`;

export const DivSection = styled.div`
  width: 97%;
  height: 96vh;
  background-color: rgb(20, 20, 43, 0.64);
  border-radius: 16px;
`;

export const Logo = styled.img`
  width: 217px;
`;

export const ContainerCard = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1rem;
  overflow-y: auto;
`;

export const DivMenu = styled.div`
  width: 100%;
  height: 10vh;
  border-bottom: 1px solid #424472;
  border-radius: 16px 16px 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivMain = styled.div`
  width: 75%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivAside = styled.div`
  width: 25%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;
