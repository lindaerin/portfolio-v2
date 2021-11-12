import styled from "styled-components";

export const UIContainer = styled.div`
  color: #fff;
  padding: 80px 080px 0;
  max-width: 1800px;
  margin: 0 auto;
`;

export const UIContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 3rem;
  padding: 1rem 0 0;
  height: 50%;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
