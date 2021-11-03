import styled from "styled-components";

export const AboutContainer = styled.div`
  padding: 60px 50px 0;
  max-width: 1450px;
  margin: 0 auto;
`;

export const AboutContent = styled.div`
  display: flex;
  /* flex-direction: row; */

  @media screen and (max-width: 900px) {
    flex-direction: column;
    row-gap: 2rem;
  }
  @media screen and (max-width: 480px) {
    padding: 0 5px 0;
  }
`;

export const AboutImg = styled.div`
  background-color: none;
  max-width: 100%;
`;

export const AboutDescription = styled.div`
  color: #e5e5e5;
  width: 50%;
  max-width: 100%;
  padding: 0 2rem 0;

  @media screen and (max-width: 1200px) {
    width: 92%;
  }

  @media screen and (max-width: 480px) {
    padding: 0 1rem 0;
  }
`;

export const AboutHeader = styled.div`
  font-family: "Bitter", serif;
  margin-top: -27px;
  margin-bottom: -10px;
  font-size: 30px;
`;

export const AboutP = styled.p`
  line-height: 29px;
  font-size: 18px;
  align-items: center;

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const SkillIcons = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const ExpContent = styled.div`
  max-width: 100%;
  margin-top: 7%;
  padding: 25px 30px;
  background: #353434;
  border-radius: 1rem;
`;

export const ExpHeader = styled.div`
  font-family: "Bitter", serif;
  white-space: pre-wrap;
  margin-top: 20px;
  font-size: 30px;
  color: #e5e5e5;
`;

export const ExpInfo = styled.div`
  z-index: 3;
  max-width: 100%;
  margin-top: 10px;
  color: #e5e5e5;
`;

export const ExpItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #e5e5e5;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Name = styled.p`
  white-space: pre-wrap;
  flex: 1;
`;

export const Description = styled.p`
  flex: 3;
  margin-top: 32px;

  @media screen and (max-width: 800px) {
    margin-top: -5%;
  }
`;
