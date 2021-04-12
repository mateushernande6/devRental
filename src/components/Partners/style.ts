import styled from "styled-components";

export const OuterContainer = styled.div`
  width: 100vw;
  background: #201f3e;

  height: 40rem;
`;

export const Container = styled.section`
  font-size: 2rem;
  color: #fff;

  margin: 0 auto;

  width: 100%;
  max-width: 1125px;
`;

export const UpperContainer = styled.div`
  height: 15rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  //margin-bottom: 5rem;

  h2 {
    font-size: 3rem;
  }
  p {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`;

export const CompanyImage = styled.img`
  border-radius: 50%;
  width: 11rem;
`;
