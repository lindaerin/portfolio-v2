import React from "react";
import AboutPic from "../../assets/images/about-img.jpeg";
import { HighlightedTextString } from "../../Global/HighlightedTextString";
import { BRAND_BLUE, BRAND_GREY } from "../../Global/GlobalElements";
import "../../styles/animation.css";
import "../../styles/about.css";

import { SiCplusplus} from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaReact, FaPython, FaJs, FaFigma } from "react-icons/fa";
import {
  DiPhotoshop,
  DiHtml5,
  DiCss3,
  DiFirebase,
} from "react-icons/di";


import {
  AboutContainer,
  AboutContent,
  AboutImg,
  AboutDescription,
  AboutHeader,
  AboutP,
  SkillIcons,
  ExpContent,
  ExpHeader,
  ExpInfo,
  ExpItem,
  Name,
  Description,
} from "./about.styles.js";

const About = () => {
  return (
    <>
      <AboutContainer id="AboutContainer">
        <AboutContent id="AboutContent">
          <AboutImg className="slideInHeader">
            <img src={AboutPic} alt="" className="about-img" />
          </AboutImg>

          <AboutDescription className="about-description">
            <AboutHeader className="slideInHeader">
              <HighlightedTextString
                styledDiv={AboutHeader}
                highlightedWords={[" ", "Linda"]}
                highlightColor={`${BRAND_BLUE}`}
              >
                Hi There! I'm Linda
              </HighlightedTextString>
            </AboutHeader>

            <AboutP className="slideInText">
              Let me introduce myself. I recently obtained my degree
              in Computer Science at The City College of New York. In the recent
              years I discovered my enjoyment for creating intuitive, visual
              design solutions and being able to develop those design components to
              build various interesting projects. I'm always eager to learn new
              technolgies or incorporate different design aspects while
              collaborating with people from different fields to build impactful
              projects.
              <AboutP>
                Here are some of my skills and expertise:
                <SkillIcons>
                  <FaReact className="icons" />
                  <FaPython className="icons" />
                  <FaJs className="icons" />
                  <DiHtml5 className="icons" />
                  <DiCss3 className="icons" />
                  <SiCplusplus className="icons" />
                  <AiOutlineConsoleSql className="icons" /> 
                  <DiFirebase className="icons" />
                  <FaFigma className="icons" />
                  <DiPhotoshop className="icons" />
                </SkillIcons>
              </AboutP>
            </AboutP>
          </AboutDescription>

        </AboutContent>

        <ExpContent className="slideInBox">
          <ExpHeader>{"Journey & \nExperiences So Far"}</ExpHeader>
          <ExpInfo>
            <ExpItem>
              <HighlightedTextString
                styledDiv={Name}
                highlightedWords={[" ", "Receptive Tours Group"]}
                highlightColor={`${BRAND_GREY}`}
              >
                {"Web Developer & Graphic Designer \nReceptive Tours Group"}
              </HighlightedTextString>
              <Description>
                Successfully update React Native mobile application to enhance
                UI functionality. Debugged existing ReactJS web application
                allowing users to add adminstrative functionalites to React
                Native mobile application. Designed logos and graphics using
                Adobe Photoshop to assist in company’s marketing strategies.
              </Description>
            </ExpItem>

            <ExpItem>
              <HighlightedTextString
                styledDiv={Name}
                highlightedWords={[" ", "Waave"]}
                highlightColor={`${BRAND_GREY}`}
              >
                {"Softare Engineering Intern\nWaave "}
              </HighlightedTextString>
              <Description>
                Designed web and corresponding mobile components using Figma to
                create high fidelity wireframes and early-stage prototypes and
                presented to senior developers and manager. Developed the
                following frontend page components: landing page, dashboard, and
                form layout using React JS based on wireframe to replace old
                non-user friendly layout.
              </Description>
            </ExpItem>

            <ExpItem>
              <HighlightedTextString
                styledDiv={Name}
                highlightedWords={[" ", "CUNY Tech Prep"]}
                highlightColor={`${BRAND_GREY}`}
              >
                {"Fullstack Developer Fellowship \nCUNY Tech Prep "}
              </HighlightedTextString>
              <Description>
                Lead and designed high fidelity wireframes for the web
                application using Figma. Worked in a team of four to develop a
                web application using React, Node + Express, PostgreSQL, and
                Firebase. Responsible for creating the following features for
                applcation: home page, compare feature and user signup {"&"}{" "}
                login functionality.
              </Description>
            </ExpItem>

            <ExpItem>
              <HighlightedTextString
                styledDiv={Name}
                highlightedWords={[" ", "The Zahn Innovation Center"]}
                highlightColor={`${BRAND_GREY}`}
              >
                {"Graphic Designer\nThe Zahn Innovation Center"}
              </HighlightedTextString>
              <Description>
                Developed designs and layouts for both digital and print
                creative work used towards marketing the company’s brand and
                workshops, independently worked on projects such as social media
                graphics, logo design, and flyer graphics Assisted with social
                media marketing strategies by maintaining brand presence across
                multiple social media platforms and helped improve awareness for
                events and workshops
              </Description>
            </ExpItem>
          </ExpInfo>
        </ExpContent>
      </AboutContainer>
    </>
  );
};

export default About;
