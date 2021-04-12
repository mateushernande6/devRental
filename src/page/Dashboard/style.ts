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
