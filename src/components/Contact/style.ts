import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;

  width: 100%;
  max-width: 1125px;

  background: #191932;
  
  color: #fff;
  
`;

export const UpperContainer = styled.div` 
  display: flex;
  flex-direction: column;
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

  @media (min-width: 769px){
    flex-direction: row;
  }
`;

export const InfoSection = styled.div`
  text-align: center;
  //width: 27%;
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
  
  height: 3rem;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  h6{
    font-variant: all-small-caps;
  };
  
`;