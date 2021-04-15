import styled from "styled-components";

export const UpperContainer = styled.div`
  height: 20rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h2{
    text-align: center;
    font-size: 3rem;
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
  
  padding-bottom: 6rem;
  
  font-size: 1.5rem;
  img{
    width: 28rem;
    margin-bottom: 2rem;
  }
  p{
    width: 30rem;
    background: #272748;
    
    text-align: center;
    
    line-height: 2rem;
    margin-top: 2rem;
    
    padding: 2rem 2rem;
    border-radius: 6px;
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

      text-align: left;
      
      line-height: 2.9rem;

      border-radius: 10px;
    };
  }
`;