import styled from "styled-components";

interface ButtonProps {
    height: string;
    width: string;
    color: string;
    text: string;
}

export const ButtonStyled = styled.button<ButtonProps>`
  height: ${(props => props.height)};
  color: ${(props => props.color)};
  width: ${(props => props.width)};
`;
