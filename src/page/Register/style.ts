import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 90vw;
  height: 50rem;
  
  background: #14142b;

`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 50rem;

  h2{
    font-size: 4rem;
    font-family: "Montserrat Alternates", sans-serif;
    color: #fff;
    margin-bottom: 2rem;
  };
  Input{
    margin-bottom: 2rem;
  };
  Button{
    margin-bottom: 1rem;
  };
  //width: 50%;

`;

export const SvgContainer = styled.div`
  
    width: 40rem;
  
  img{
    width: 100%;
  };
    
`;