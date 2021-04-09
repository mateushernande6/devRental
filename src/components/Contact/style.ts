import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;

  width: 100%;
  height: 100%;

  background: #191932;
  
  
`;

export const UpperContainer = styled.div` 
  display: flex;
  justify-content: space-around;
  
  font-size: 1.6rem;
  
  margin-bottom: 3rem;
  
  img{
    padding-top: 1.5rem;
    width: 100%;
  };

  h3{
    padding: 2rem 0;
    font-size: 2rem;
  }
`;

export const InfoSection = styled.div`
  width: 27%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icons = styled.div`
  width: 70%;
  
  margin-top: 1.5rem;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;



export const Footer = styled.footer`

  background: #272748;
  
  height: 5rem;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  h6{
    font-variant: all-small-caps;
  };
  
`;