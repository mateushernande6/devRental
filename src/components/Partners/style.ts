import styled from "styled-components";

export const OuterContainer = styled.div`
  width: 100vw;
  background: #201f3e;
  
  height: 40rem;
`;

export const Container = styled.section`
  font-size: 2rem;
  color: #fff;
  
  margin: 0 auto;

  width: 100%;
  max-width: 1125px;
  
  
`;

export const UpperContainer = styled.div`
    height: 15rem;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
  text-align: center;
    
    //margin-bottom: 5rem;
    
    h2{
    font-size: 3rem;
    };
    p{
    margin-top: 1rem;
    font-size: 1.5rem;
    };
    `;

export const LowerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

  padding-bottom: 2rem;
`;

export const CompanyCard = styled.div`
  text-align: center;
  
  width: 10rem;
  
  
  img{
    border-radius: 50%;
    width: 8rem;
  }
  h4{
    font-size: 1.4rem;
  }

`;