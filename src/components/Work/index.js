import React from "react";
import {
  Header,
  Description,
  WorkContainer,
  AppContainer,
  AppContent,
} from "./work.styles.js";
import { Container } from "react-bootstrap";
import "../../styles/container.css";
import "../../styles/card.css";
import projects from "./data";

const Work = () => {
  return (
    <WorkContainer>
      <Header className="slide-in-header">{"Recent Works"}</Header>
      <Description className="slide-in-header">
        {
          "Here is a collection of my recent projects including Web Applications."
        }
      </Description>
      <AppContainer className="app-container">
        <AppContent className="app-content">
          {projects.map((project) => (
            <Container className="container">
              <div className="container-img">
                <img src={project.img} alt="" />
              </div>
              <div className="container-text">
                <p>{project.title}</p>

                <a href={project.link} target="_blank" rel="noreferrer">
                  <button className="btn">View Project</button>
                </a>
              </div>
            </Container>
          ))}
        </AppContent>
      </AppContainer>
    </WorkContainer>
  );
};

export default Work;
