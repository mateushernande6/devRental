import styled from "styled-components";

interface Props {
  width: number;
  height: number;
}

export const InputStyled = styled.input<Props>`
  width: ${(props) => `${props.width}rem`};
  height: ${(props) => `${props.height}rem`};
`;
