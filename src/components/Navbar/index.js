import React from "react";
import { FaBars } from "react-icons/fa";
import { Mailto } from "../../Global/GlobalElements";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./navbar.styles.js";

export default function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">{"Linda Li \nCode & Design"}</NavLogo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks to="work">Work</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="design">Designs</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <Mailto email="lindaerin00@gmail.com" subject=" " body=" ">
              <NavBtnLink>Contact</NavBtnLink>
            </Mailto>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  );
}
