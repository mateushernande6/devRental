import styled from "styled-components";

export const Container = styled.div`
    h2{
      font-size: 2rem;
      color: #fff;
      margin-bottom: 2rem;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Card = styled.li`
    color: #fff;
    margin-bottom: 2rem;
  h3{
    margin-bottom: 0.2rem;
    span{
      color: #ccc;
      margin-right: 1rem;
    }
    margin-bottom: 0.5rem;
  }
  
  h3:first-child{
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
`;
