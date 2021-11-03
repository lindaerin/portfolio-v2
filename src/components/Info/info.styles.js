import styled from "styled-components";

export const InfoContainer = styled.div`
  position: relative;
  z-index: 1;
  padding: 0 90px;
  max-width: 1430px;
  margin: 0 auto;

  @media screen and (max-width: 700px) {
    padding: 0 60px;
  }
`;

export const InfoContent = styled.div`
  position: relative;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
