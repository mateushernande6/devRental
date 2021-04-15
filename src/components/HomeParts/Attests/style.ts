import styled from "styled-components";

export const UpperContainer = styled.div`
  
  height: 10rem;

  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  margin-bottom: 3rem;

  h2{
    font-size: 4rem;
    font-variant: all-small-caps;
  };

  p{
    font-size: 1.6rem;

    margin-top: 1rem;
  };
`;
export const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding-bottom: 4rem;
  
  @media (min-width: 769px){
      flex-direction: row;
    };
  
`;

export const Card = styled.div`
  width: 20rem;
  height: auto;
  
  margin: 4rem 0;
  border-radius: 6px;
  
  background: #272748;

  img{
    width: 12rem;
    
    margin-left: -3rem;
    margin-top: -3rem;
    
    border-radius: 50%;
  };
  
  p{
    padding: 2rem;
    font-size: 1.5rem;
    line-height: 1.8rem;
  };
  
  @media (min-width: 769px){
    width: 25rem;
  }
  
`;