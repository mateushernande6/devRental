import styled from "styled-components";

export const OuterContainer = styled.div`
  width: 100vw;

  background: #191932;
  
  padding-top: 1rem;
`;

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
  
  padding-top: 1rem;
  
  img{
    width: 70%;
  }
  
  li{
    line-height: 2.5rem;
  }
  //@media(min-width: 769px){
  //  li{
  //    text-align: left;
  //  }
  //}
  
`;

export const Icons = styled.div`
  width: 67%;
  
  margin-top: 2.5rem;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;



export const Footer = styled.footer`
  width: 100%;
  
  color: #fff;
  
  background: #272748;
  
  height: 5rem;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  h6{
    font-variant: all-small-caps;
    font-size: 2rem;
  };
  
`;