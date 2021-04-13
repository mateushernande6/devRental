import styled from "styled-components";
import Button from "../Atoms/Button";

export const Container = styled.div`
  width: 300px;
  height: 150px;
  background: #5a5c91;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;

  h2 {
    font-size: 2rem;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: bolder;
    text-align: center;
    color: white;
    margin-bottom: 10px;
  }
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

export const OrangeButton = styled(Button)`
  margin-left: 50px;
  margin-top: 10px;
`;

export const P = styled.p`
  font-size: 1rem;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: bolder;
  text-align: center;
  color: red;
`;
