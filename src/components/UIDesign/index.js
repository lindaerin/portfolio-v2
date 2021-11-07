import React from "react";
import {
  Header,
  Description,
  CardContainer,
} from "../Work/work.styles.js";
import { UIContainer, UIContent } from "./design.styles.js";
import { Card } from "react-bootstrap";
import SteamDesign from "../../assets/images/steam-design.png";
import BookDesign from "../../assets/images/reading-design.png";
// import GhibliDesign from "../../assets/images/ghibli-design.png";

import "../../styles/card.css";

const Design = () => {
  return (
      <UIContainer className="slideInBox">
        <Header>{"UI Design"}</Header>
        <Description className="slide-in-header">
        {
          "Here is a collection of my recent project of web and mobile designs"
        }
      </Description>
        <UIContent>
          <CardContainer>
            <Card className="card">
              <Card.Img variant="top" src={SteamDesign} className="card-img" />
            </Card>
          </CardContainer>
          <CardContainer>
            <Card className="card">
              <Card.Img variant="top" src={BookDesign} className="card-img" />
            </Card>
          </CardContainer>
          {/* <CardContainer>
            <Card className="card">
              <Card.Img variant="top" src={GhibliDesign} className="card-img" />
            </Card>
          </CardContainer> */}
        </UIContent>
      </UIContainer>
  );
};

export default Design;
