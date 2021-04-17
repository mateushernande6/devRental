import styled from "styled-components";

interface ButtonProps {
  height: number;
  width: number;
  background: string;
  color: string;
}

export const ButtonStyled = styled.button<ButtonProps>`
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.6rem;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }

  height: ${(props) => `${props.height}rem`};
  color: ${(props) => props.color};
  width: ${(props) => `${props.width}rem`};
  background: ${(props) => props.background};
`;
