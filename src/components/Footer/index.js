import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterH1,
  FooterP,
  FooterMenu,
  FooterLinks
} from "./footer.styles.js";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterContent>
          <FooterH1>Let's Connect</FooterH1>
          <FooterP>
            Always looking for new opportunities and experiences. Feel free to leave a message.
          </FooterP>
          <FooterMenu>  
            <FooterLinks>
              <a href="https://www.linkedin.com/in/lindaerin/" target="_blank" rel="noreferrer">Linkedin</a>
            </FooterLinks>

            <FooterLinks>
            <a href="https://github.com/lindaerin" target="_blank" rel="noreferrer">Github</a>
            </FooterLinks>

            <FooterLinks>
              Resume
            </FooterLinks>

          </FooterMenu> 
        </FooterContent>
      </FooterContainer>
    </>
  );
};

export default Footer;
