import styled from "styled-components";

export const FooterContainer = styled.div`
  background: none;
  height: 200px;
  padding: 100px 380px;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 1160px) {
    padding: 100px 200px;
  }

  @media screen and (max-width: 820px) {
    padding: 100px 70px;
  }

  @media screen and (max-width: 400px) {
    padding: 100px 50px;
  }
`;

export const FooterContent = styled.div`
  z-index: 3;
  max-width: auto;
  padding: 8px 24px;
`;

export const FooterH1 = styled.div`
  color: #94BCE2;
  font-size: 55px;
  font-family: "Bitter", serif;
  line-height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 400px) {
    font-size: 35px;
  }
`;

export const FooterP = styled.p`
  text-align: center;
  justify-content: center;
  font-size: 17px;
  color: #e5e5e5;
  margin-top: 24px;
`;


export const FooterBtnLink = styled.div`
  border-radius: 50px;
  background: none;
  white-space: nowrap;
  padding: 16px 21px;

  color: #e5e5e5;
  font-size: 16px;
  outline: none;
  border: 1px solid;
  cursor: pointer;
  width: min-content;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: black;
  }
`;


export const FooterMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 50px;
  height: 80px;
  
`;

export const FooterLinks = styled.p`
  color: #e5e5e5;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover{
    text-decoration: underline;
  }
`;