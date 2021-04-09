import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;

  width: 100%;
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
  
  img{
    width: 40rem
  };
  
  p{
    background: #272748;
    width: 40rem;
    
    padding: 2rem;
    
    border-radius: 10px;
  };
`;