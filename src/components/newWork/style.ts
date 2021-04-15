import styled from 'styled-components'

export const Container = styled.div`
  width: 30rem;
  
  height: 100%;
  
  
  @media(min-width: 769px){
    width: 50rem;
    height: auto;
  }
  
  margin-top: 1rem;
  background-color: #212040;
  
  border-radius: 5px;
  
  padding: 2rem;
  
form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  
  input{
    width: 100%;
    
    margin-bottom: 1rem;
    
    border: none;
    outline: none;

    padding: 1.2rem;
    border-radius: 5px;
    background-color: #424472;
    font-size: 1.5rem;
    color: white;
    ::-webkit-input-placeholder {
      color: white;
    }
  }
  
  button {
    border: none;
    outline: none;

    border-radius: 5px;

    width: 40%;
    height: 3rem;

    margin-bottom: 1rem;
  }
  
  ul{
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    
    height: auto;
  }
  h4{
    color: #fff;
    font-size: 1.8rem;
    
    margin-bottom: 0.5rem;
  }
}
`;

export const TextArea = styled.textarea`
  background: #424472;
  
  height: 6rem;
  
  border: none;
  border-radius: 6px;
  
  width: 100%;
  
  padding: 1.2rem;
  margin-bottom: 1rem;
  
  resize: none;
  outline: none;
  
  ::-webkit-input-placeholder {
    color: #fff;
  }
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 1.5rem;
`;

export const TechsList = styled.li`
  margin: 1rem 1rem;
  
  font-size: 1.4rem;
  
  text-align: left;
  
  color: #fff;
`;
