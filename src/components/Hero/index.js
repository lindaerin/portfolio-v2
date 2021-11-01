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
          <HeroH1 className="slideInHeader">
            <HighlightedTextString
              styledDiv={HeroH1}
              highlightedWords={[" ", "Developer"]}
              highlightColor={`${BRAND_BLUE}`}
            >
              {"UI Designer & \nDeveloper based in Atlanta"}
            </HighlightedTextString>
          </HeroH1>

          <HeroDescription className="slideInText">
            I'm a front end developer who is passionate about learning new
            technologies with a keen eye for creating engaging and innovated UI
            design.
          </HeroDescription>
          <HeroBtnWrapper className="slideInBtn">
            <LearnMoreButton to="/about" onMouseEnter={onHover} onMouseLeave={onHover}>
              Learn More {hover ? <ArrowForward /> : <ArrowRight />}
            </LearnMoreButton>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;
