import styled from "styled-components";

export const Container = styled.div`
  font-size: 2rem;
  color: #fff;
  
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
    
    margin-bottom: 5rem;
    
    h2{
    font-size: 4rem;
    font-variant: all-small-caps;
    };
    p{
    margin-top: 1rem;
    font-size: 2rem;
    };
    `;

export const LowerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    img{
    border-radius: 50%;
    width: 14rem;    
    }

`;