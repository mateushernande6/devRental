import styled from "styled-components";

export const Image = styled.div`
  height: 100%;
  width: 200px;
  border-radius: 0 5px 5px 0;
  background-image: url("./assets/modalImg.svg");
  background-size: cover;

  @media (max-width: 700px) {
    display: none;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(#212040, #21203e);
  outline: none;
  width: 67%;
  height: 90%;
  border-radius: 8px;
  color: #fff;
  display: flex;

  @media (max-width: 700px) {
    width: 90%;
    height: 90%;
  }
`;

export const Content = styled.div`
  width: 800px;
  padding: 32px 25px 0 32px;
  overflow-y: auto;

  border-radius: 8px;
  p:last-child {
    margin-bottom: 35px;
  }

  ::-webkit-scrollbar-track {
    background-image: linear-gradient(#212040, #21203e);
    border-radius: 0 8px 8px 0;
  }
  ::-webkit-scrollbar {
    width: 6px;
    border-radius: 0 8px 8px 0;

    background-image: linear-gradient(#212040, #21203e);
  }
  ::-webkit-scrollbar-thumb {
    background: #3a3864;
    border-radius: 5px;
  }
`;

export const DivTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
  margin-bottom: 33px;

  @media (max-width: 512px) {
    width: 96%;
  }
`;

export const Line = styled.div`
  width: 180px;
  background-color: #14142b;
  height: 1px;

  @media (max-width: 1080px) {
    width: 150px;
  }

  @media (max-width: 969px) {
    width: 100px;
  }

  @media (max-width: 848px) {
    width: 70px;
  }

  @media (max-width: 781px) {
    width: 30px;
  }

  @media (max-width: 700px) {
    width: 100px;
  }

  @media (max-width: 512px) {
    width: 0;
  }
`;

export const BackIcon = styled.div`
  background-color: rgba(20, 20, 43, 0.79);
  width: 62px;
  height: 62px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: Roboto, sans-serif;

  font-size: 3.4rem;
`;

export const SubTitle = styled.h2`
  font-family: Roboto, sans-serif;
  margin: 22px 0 25px 0;
  font-size: 2.3rem;
`;

export const Text = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 1.5rem;
  line-height: 1.5;
`;

export const UlStyled = styled.ul`
  font-family: Roboto, sans-serif;
`;

export const LiStyled = styled.li`
  font-family: Roboto, sans-serif;
  line-height: 1.5;

  font-size: 1.5rem;
`;
