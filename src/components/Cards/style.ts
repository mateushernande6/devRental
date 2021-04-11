import styled from "styled-components";

export const Container = styled.div`
  width: 30rem;
  height: 35rem;
  margin-top: 2rem;
  border-radius: 5px;
  background-color: rgba(66, 68, 114, 0.43);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem 0.5rem;
  section {
    width: 85%;
    max-height: 75px;
    margin-top: 1rem;
    font-family: "Roboto";
    font-size: 1.5rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    color: white;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

export const ImgCard = styled.img`
  border-radius: 50%;
  width: 180;
  height: 180;
`;
