import React from "react";
import {
  Header,
  Description,
  WorkContainer,
  WorkHeader,
  AppContainer,
  AppContent,
} from "./work.styles.js";

import { Container } from "react-bootstrap";
import TeamProject from "../../assets/images/teaming-project.png";
import SchoolFinderProject from "../../assets/images/school-finder-project.png";
import WebPortfolioProject from "../../assets/images/web-portfolio-project.png";
import BookDesign from "../../assets/images/reading-design.png";

import "../../styles/container.css";
import "../../styles/card.css";

const Work = () => {
  return (
    <WorkContainer>
      <Header className="slideInHeader">{"Recent Works"}</Header>
      <Description className="slideInHeader">
        {
          "Here is a collection of my recent projects including Web Application, UI Designs, and UX Case Studies."
        }
      </Description>
      <AppContainer className="app-container">
        <WorkHeader className="slideInHeader">{"Web Applications"}</WorkHeader>
        <AppContent className="app-content">
          
              <Container className="container">
                <div className="container-img">
                  <img src={SchoolFinderProject} alt=""></img>
                </div>
                <div className="container-text">
                  <p>School Finder React App</p>
                  <button className="btn">
                    <a href="https://github.com/lindaerin/school-finder" target="_blank" rel="noreferrer">View Projects</a>
                  </button>
                </div>
              </Container>

          <Container className="container">
                <div className="container-img">
                  <img src={WebPortfolioProject} alt=""></img>
                </div>
                <div className="container-text">
                  <p>Web Portfolio React App</p>
                  <button className="btn">
                    <a href="https://github.com/lindaerin/web-portfolio" target="_blank" rel="noreferrer">View Projects</a>
                  </button>
                </div>
              </Container>
          

          <Container className="container">
                <div className="container-img">
                  <img src={TeamProject} alt=""></img>
                </div>
                <div className="container-text">
                  <p>Teaming System Flask App</p>
                  <button className="btn">
                    <a href="https://github.com/lindaerin/teaming-app" target="_blank" rel="noreferrer">View Projects</a>
                  </button>
                </div>
              </Container>
          
         
        </AppContent>
      </AppContainer>

      <AppContainer className="app-container">
        <WorkHeader className="slideInHeader">{"Design & Case Studies"}</WorkHeader>
        <AppContent className="app-content">
          <Container className="container">
            <div className="container-img">
              <img src={BookDesign} alt=""></img>
            </div>
            <div className="container-text">
              <p>User Interface Design</p>
              <button className="btn">
                <a href="/design">View Projects</a>
              </button>
            </div>
          </Container>
        </AppContent>
      </AppContainer>
    </WorkContainer>
  );
};

export default Work;
