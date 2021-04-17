import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 150px;
  background-color: rgb(33, 32, 64);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;

  h2 {
    font-size: 2rem;
    font-family: "Montserrat", sans-serif;
    font-weight: bolder;
    text-align: center;
    color: white;
    margin-bottom: 10px;
  }
`;

export const P = styled.p`
  font-size: 1rem;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: bolder;
  text-align: center;
  color: red;
`;

export const FormStyled = styled.form`
  display: flex;
  margin-top: 18px;
  width: 228px;
  justify-content: space-around;
  align-items: center;
`;
