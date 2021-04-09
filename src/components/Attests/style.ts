import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;

  width: 90vw;
  height: 100%;

  background: #191932;
`;

export const UpperContainer = styled.div`
  height: 20rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
  justify-content: space-around;

`;

export const Card = styled.div`
  width: 20rem;
  height: 30rem;
  
  border-radius: 6px;
  
  background: #272748;

  img{
    width: 12rem;
    
    margin-left: -3rem;
    margin-top: -3rem;
    
    border-radius: 50%;
  };
  
  p{
    padding: 1rem;
    font-size: 1.5rem;
  };
`;