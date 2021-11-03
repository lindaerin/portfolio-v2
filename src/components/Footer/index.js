import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterH1,
  FooterP,
  FooterMenu,
  FooterLinks
} from "./footer.styles.js";
import Resume from "../../assets/Resume/Li_Linda_Resume.pdf";

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
              <a href={Resume} target="_blank" rel="noreferrer" download="Linda Li's Resume">Resume</a>
            </FooterLinks>

          </FooterMenu> 
        </FooterContent>
      </FooterContainer>
    </>
  );
};

export default Footer;
