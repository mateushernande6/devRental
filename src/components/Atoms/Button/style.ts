import styled from "styled-components";

interface ButtonProps {
    height: string;
    width: string;
    background: string;
    color: string;
    text: string;
}

export const ButtonStyled = styled.button<ButtonProps>`
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1.6rem;
  
  :hover{
    cursor: pointer;
    opacity: 0.8;
  };
  
  height: ${(props) => `${props.height}rem`};
  color: ${(props => props.color)};
  width: ${(props) => `${props.width}rem`};
  background: ${(props => props.background)};
`;
