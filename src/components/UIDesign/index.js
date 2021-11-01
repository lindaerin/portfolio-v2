import React from "react";
import {
  WorkContainer,
  WorkHeader,
  UIContent,
  CardContainer,
  UIContainer,
} from "../Work/work.styles.js";
import { Card } from "react-bootstrap";
import SteamDesign from "../../assets/images/steam-design.png";
import BookDesign from "../../assets/images/reading-design.png";
import GhibliDesign from "../../assets/images/ghibli-design.png";

import "../../styles/card.css";

const Design = () => {
  return (
    <WorkContainer>
      <UIContainer className="slideInBox">
        <WorkHeader>{"UI Design"}</WorkHeader>
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
          <CardContainer>
            <Card className="card">
              <Card.Img variant="top" src={GhibliDesign} className="card-img" />
            </Card>
          </CardContainer>
        </UIContent>
      </UIContainer>
    </WorkContainer>
  );
};

export default Design;
