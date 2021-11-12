import React from "react";
import { Link } from "react-router-dom";
import {
  Header,
  Description,
  WorkContainer,
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
      <Header className="slide-in-header">{"Recent Works"}</Header>
      <Description className="slide-in-header">
        {
          "Here is a collection of my recent projects including Web Applications, UI Designs, and UX Case Studies."
        }
      </Description>
      <AppContainer className="app-container">
        <AppContent className="app-content">

          <Container className="container">
            <div className="container-img">
              <img src={SchoolFinderProject} alt=""></img>
            </div>
            <div className="container-text">
              <p>School Finder React App</p>

              <a
                href="https://github.com/lindaerin/school-finder"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn">View Project</button>
              </a>
            </div>
          </Container>

          <Container className="container">
            <div className="container-img">
              <img src={WebPortfolioProject} alt=""></img>
            </div>
            <div className="container-text">
              <p>Web Portfolio React App</p>
              <a
                href="https://github.com/lindaerin/web-portfolio"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn">View Project</button>
              </a>
            </div>
          </Container>

          <Container className="container">
            <div className="container-img">
              <img src={TeamProject} alt=""></img>
            </div>
            <div className="container-text">
              <p>Teaming System Flask App</p>

              <a
                href="https://github.com/lindaerin/teaming-app"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn">View Project</button>
              </a>
            </div>
          </Container>
        </AppContent>

        <AppContent className="app-content">
          <Container className="container">
            <div className="container-img">
              <img src={BookDesign} alt=""></img>
            </div>
            <div className="container-text">
              <p>Daily UI Design</p>
              <Link to="design">
                <button className="btn">View Projects</button>
              </Link>
            </div>
          </Container>
        </AppContent>
      </AppContainer>
    </WorkContainer>
  );
};

export default Work;
