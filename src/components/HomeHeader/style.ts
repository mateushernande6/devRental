import styled from "styled-components";

export const Container = styled.section`
  font-size: 2rem;
  color: #fff;
  
  
  margin: 0 auto;
  //padding: 2rem 2rem ;
  
  width: 100%;
  max-width: 1125px;
  
  background: #191932;
`;

export const UpperContainer = styled.div`
    height: 30rem;
  
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
  img{
    width: 100%;
    height: 15%; 
  };
  div{
    height: 10rem;
    width: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
  };
  
  @media (min-width: 769px){
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    
    height: 17rem;
    
    img{
      width: 40%;
      height: 60%;
    }
    
    div{
      margin-top: 2rem;
      width: 33rem;
      flex-direction: row;
    }
  }
  
  
  
    
`;
export const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
    img{
      width: 20rem;
      margin-bottom: 1rem;
    };
    p{
      text-align: center;
      width: 30rem;
      //display: block;
      //font-size: 3.5rem;
      //font-variant: all-small-caps;
    };

  @media (min-width: 769px){
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    
    img{
      width: 40rem;
    }
    p{
      height: 23rem;
      font-size: 2.5rem;
      width: 40rem;
    }
  }
    
`;