import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-router-dom";

export const Nav = styled.nav`
  background: none;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 10px;
  max-width: 2000px;

  @media screen and (max-width: 500px) {
    padding: 0 20px;
    max-width: 3000px;
  }
`;

export const NavLogo = styled(LinkRouter)`
  color: #e5e5e5;
  justify-content: start;
  white-space: pre-wrap;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-left: 24px;
  text-decoration: none;

`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100, 60%);
    font-size: 1.6rem;
    cursor: pointer;
    color: #e5e5e5;
    padding: 1.7rem;
  }

  @media screen and (max-width: 500px) {
   margin-left: 100px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 50px;
  

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
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

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 30px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.div`
  border-radius: 50px;
  white-space: nowrap;
  padding: 8px 20px;
  background: #fff;
  color: #484242;
  font-size: 16px;
  outline: none;
  border-color: #87accf;
  border: solid 1.5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #e5e5e5;
    background: #484242;  
  }
`;

