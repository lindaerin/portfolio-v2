import React from "react";
import { Header, Description } from "../Work/work.styles.js";
import { UIContainer, UIContent } from "./design.styles.js";
import { Card } from "react-bootstrap";
import "../../styles/card.css";
import images from "./data";

const Design = () => {
  return (
    <UIContainer className="slide-in-header">
      <Header>{"UI Design"}</Header>
      <Description className="slide-in-header">
        {"Here is a collection of my recent project of web and mobile designs"}
      </Description>
      <UIContent className="slide-in-box">
        {images.map((image) => (
          <Card className="card">
            <Card.Img variant="top" src={image.img} className="card-img" />
          </Card>
        ))}
      </UIContent>
    </UIContainer>
  );
};

export default Design;
