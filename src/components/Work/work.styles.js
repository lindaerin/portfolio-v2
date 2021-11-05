import styled from "styled-components";
import "../../styles/card.css";

export const WorkContainer = styled.div`
  color: #fff;
  padding: 80px 80px 0;
  max-width: 1800px;
  margin: 0 auto;
`;

export const WorkHeader = styled.div`
  font-size: 30px;
`;

export const Header = styled.div`
  font-family: "Bitter", serif;
  font-size: 30px;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #8a8d90;
`;

export const CardContainer = styled.div`
  height: auto;
  max-width: 100%;
  border: none;
  background: #353434;
  border-radius: 10px;
  cursor: pointer;
  animation-name: zoom;
  animation-duration: 1s;
`;


export const AppContainer = styled.div`
  padding-top: 1.5rem;
`;

export const AppContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  padding: 1rem 0 2rem;

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const UIContainer = styled.div`
  padding-top: 2px;
`;

export const UIContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1.4rem;
  padding: 1rem 0 1rem;
  height: 50%;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
