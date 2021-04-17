import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0 3px 6px rgb(0 0 0 / 12%), 0 3px 6px rgb(0 0 0 / 24%);
  width: 23rem;
  position: relative;
  height: 28.1rem;
  margin-top: 2rem;
  border-radius: 5px;
  background-color: rgba(66, 68, 114, 0.43);
  display: flex;
  margin-left: 10px;
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

    p {
      font-family: Roboto, sans-serif;
      font-weight: 300;
      font-size: 2rem;
      margin: 10px 0 0 0;
    }
  }
`;

export const ImgCard = styled.img`
  border-radius: 50%;
  width: 160px;
  height: 160px;
`;

export const DivUser = styled.div`
  background: rgba(66, 68, 114, 1);
  width: 54px;
  height: 38px;
  border-radius: 10%;
  position: absolute;
  top: 23px;
  right: 33px;
  color: rgb(255 255 255);
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.4rem;
  font-weight: 400;
`;

export const DivBack = styled.div`
  border-radius: 50%;
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgba(66, 68, 114, 0.43);
`;
