import React from "react";
import { InfoContainer, InfoContent } from "./info.styles";
import { Container } from "react-bootstrap";
import "../../styles/container.css";

import Code from "../../assets/images/code.png";
import Design from "../../assets/images/steam-home.png";

const InfoSection = () => {
  return (
    <>
      <InfoContainer className="InfoContainer">
        <InfoContent className="slideInBox">
          <Container className="container">
            <div className="container-img">
              <img src={Code} alt=""></img>
            </div>
            <div className="container-text">
              <p>Web Application</p>
              <button className="btn">
                <a href="/work">View Projects</a>
              </button>
            </div>
          </Container>
          <Container className="container">
            <div className="container-img">
              <img src={Design} alt=""></img>
            </div>
            <div className="container-text">
              <p>User Interface Designs</p>
              <button className="btn">
                <a href="/design">View Projects</a>
              </button>
            </div>
          </Container>
        </InfoContent>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
