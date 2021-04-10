import styled from "styled-components";

export const Container = styled.div`
  font-size: 2rem;
  color: #fff;

  width: 100%;
  max-width: 1125px;
  
  //margin: 0 auto;

  background: #191932;
`;

export const UpperContainer = styled.div`
  height: 20rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h2{
    text-align: center;
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
  
  padding-bottom: 2rem;
  
  font-size: 1.5rem;
  img{
    width: 30rem;
  }
  p{
    width: 30rem;
    
    text-align: center;
    
    margin-top: 2rem;
  }

  @media (min-width: 769px){
    flex-direction: row;
    
    font-size: 2rem;

    img{
      width: 40rem
    };

    p{
      background: #272748;
      width: 40rem;

      padding: 2rem;

      border-radius: 10px;
    };
  }
`;