import React from "react";
import { Link } from "react-router-dom";
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
              <p>Applications</p>

              <Link to="work">
                <button className="btn">View Projects</button>
              </Link>
            </div>
          </Container>
          <Container className="container">
            <div className="container-img">
              <img src={Design} alt="ß"></img>
            </div>
            <div className="container-text">
              <p>User Interface Designs</p>
              <Link to="design">
                <button className="btn">View Projects</button>
              </Link>
            </div>
          </Container>
        </InfoContent>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
