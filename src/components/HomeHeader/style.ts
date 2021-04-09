import styled from "styled-components";

export const Container = styled.div`
  font-size: 2rem;
  color: #fff;
  
  margin: 1rem auto;
  
  width: 100%;
  height: 100%;
  
  background: #191932;
`;

export const UpperContainer = styled.div`
    height: 30rem;
  
    display: flex;
    justify-content: space-evenly;
    //align-items: center;
    
  img{
    width: 40%;
    height: 50%; 
  };
  div{
    width: 34rem;
    display: flex;
    justify-content: space-around;
    margin-top: 5rem;
    
  };
    
`;
export const LowerContainer = styled.div`
    display: flex;
    
  justify-content: space-around;
  
    img{
      width: 40rem;
    };
    p{
      width: 40rem;
      display: block;
      font-size: 3.5rem;
      font-variant: all-small-caps;
    };
    
`;