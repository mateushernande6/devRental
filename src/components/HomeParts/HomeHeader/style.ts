import styled from "styled-components";

export const UpperContainer = styled.div`
  height: 30rem;

  padding-top: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  img {
    width: 100%;
    height: 15%;
  }
  div {
    height: 10rem;
    width: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media (max-width: 769px) {
      width: inherit;
    }
  }

  @media (min-width: 769px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;

    height: 17rem;

    img {
      width: 40%;
      height: 60%;
    }

    div {
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

  padding-bottom: 4rem;

  img {
    width: 20rem;
    margin-bottom: 3rem;
  }
  p {
    text-align: left;
    width: 30rem;

    font-variant: all-small-caps;

    padding: 0 1.5rem;

    line-height: 1.3;
    font-size: 2rem;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    img {
      width: 40rem;
    }
    p {
      height: 23rem;
      font-size: 2.5rem;
      width: 40rem;
    }
  }
`;
