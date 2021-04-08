import styled from "styled-components";

interface Props {
  width: number;
  height: number;
}

export const InputStyled = styled.input<Props>`
  width: ${(props) => `${props.width}rem`};
  height: ${(props) => `${props.height}rem`};
  border: none;
  outline: none;
  line-height: ${(props) => `${props.height}rem`};
  padding: 1.2rem;
  border-radius: 5px;
  background-color: #424472;
  font-size: 1.5rem;
  color: white;
  ::-webkit-input-placeholder {
    color: white;
  }
`;
