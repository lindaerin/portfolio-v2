import React, { useState } from "react";
import { HighlightedTextString } from "../../Global/HighlightedTextString";
import { BRAND_BLUE } from "../../Global/GlobalElements";
import {
  HeroContainer,
  HeroContent,
  HeroDescription,
  HeroH1,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  LearnMoreButton,
} from "./hero.styles.js";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer>
        <HeroContent>
          <HeroH1 className="slide-in-header">
            <HighlightedTextString
              styledDiv={HeroH1}
              highlightedWords={[" ", "Developer"]}
              highlightColor={`${BRAND_BLUE}`}
            >
              {"UI Designer & \nDeveloper based in NYC"}
            </HighlightedTextString>
          </HeroH1>

          <HeroDescription className="slide-in-text">
            <span>Git pushing the boundaries of full-stack development</span>
            <span>React in the front, Spring boot in the back</span>
          </HeroDescription>
          <HeroBtnWrapper className="slide-in-btn">
            <LearnMoreButton
              to="/work"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Recent Works {hover ? <ArrowForward /> : <ArrowRight />}
            </LearnMoreButton>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;
