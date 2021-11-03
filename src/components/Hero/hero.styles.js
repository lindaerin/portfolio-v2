import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: none;
  padding: 10px 160px 270px;
  height: 300px;
  position: relative;
  z-index: 1;
  max-width: 1450px;
  margin: 0 auto;

  @media screen and (max-width: 1063px) {
    padding: 10px 120px 220px;
  }

  @media screen and (max-width: 750px) {
    padding: 10px 60px 60px;
    height: 450px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 30px 0;
    height: 500px;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1300px;
  position: absolute;
  padding: 8px 5px;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.div`
  color: #e5e5e5;
  font-size: 73px;
  white-space: pre-wrap;
  font-family: "Bitter", serif;
  line-height: 86px;
  margin-bottom: -2.2rem;

  @media screen and (max-width: 1063px) {
    font-size: 60px;
    line-height: 70px;
  }

  @media screen and (max-width: 750px) {
    font-size: 50px;
    line-height: 70px;
  }

  @media screen and (max-width: 480px) {
    font-size: 44px;
    line-height: 60px;
  }
`;

export const HeroDescription = styled.p`
  color: #e5e5e5;
  font-size: 18px;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    margin-top: 24px;
    font-size: 16px;
    padding-right: 45px;
  }

  @media screen and (max-width: 480px) {
    /* margin-top: 10px; */
    font-size: 15px;
    padding-right: 20px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 2.3rem;
  display: flex;
  flex-direction: column;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const LearnMoreButton = styled(Link)`
  border-radius: 50px;
  background: #fff;
  white-space: nowrap;
  color: #484242;
  font-size: 15px;
  padding: 16px 20px;
  border-color: #87accf;
  border: solid 1.5px;
  cursor: pointer;
  display: flex;
  width: min-content;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #e5e5e5;
    background: #484242;
  }

  @media screen and (max-width: 600px) {
    padding: 10px 14px;
    font-size: 13px;
  }
`;
