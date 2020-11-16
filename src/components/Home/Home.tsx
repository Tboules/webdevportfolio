import React from "react";
import styled from "styled-components";
import GracePhoto from "../../images/GraceHome.PNG";
import { motion } from "framer-motion";

//components
import { Banner } from "../Banner/Banner";
import { ProjectCards } from "../ProjectCards/ProjectCards";
import { TextBox } from "../TextBox/TextBox";
import { AnimatedTitle } from "../AnimatedTitle/AnimatedTitle";
import { PageButton } from "../PageButton/PageButton";

//logos
import reactLogo from "../../images/logos/React-icon.svg";
import gatsbyLogo from "../../images/logos/Gatsby-Monogram.svg";
import graphLogo from "../../images/logos/graphql-icon.svg";
import nodeLogo from "../../images/logos/node-js-logo.svg";
import netlifyLogo from "../../images/logos/netlify-icon.svg";
import SassLogo from "../../images/logos/sass-1.svg";

const HomeLayout = styled("div")`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

export const Section = styled("div")`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 1000px) {
    width: 50%;
  }
`;

export const Home = () => {
  return (
    <motion.div>
      <Banner>
        <h1>Full Stack Web Developer</h1>
        <h4 style={{ marginTop: "0px" }}>
          Caring for you is how I build sites that will help you grow
        </h4>
      </Banner>
      <HomeLayout>
        <Section>
          <TextBox>
            <h1 style={{ textAlign: "left" }}>Hi, I'm Anthony!</h1>
            <p>
              I am a full stack developer with my Master's in Education living
              in Orange, California. In the 21st centery, your site is likely
              going to be your first impression with customers and interested
              parties. It really matters, which is why I care deeply about
              making your site amazing.
            </p>
            <p>
              Prior to learning web development, I worked as an English Language
              Arts teacher for three years...
            </p>
          </TextBox>
          <PageButton path="/about">
            <AnimatedTitle mediaQ="row" title="< More About Me" />
          </PageButton>
        </Section>
        <Section>
          <ProjectCards
            marginRight={"80px"}
            imageLink={GracePhoto}
            desTitle={"Grace Social and Medical Services"}
            description="Grace is a non-profit helping new immigrants to Southern California. I organized and uploaded all of their content into the Contentful CMS and built out their site using Gatsby, React, GraphQL, and SASS. The site is not only easily customizable through Contentful, but also responsive, working well in the browser and on the phone. "
            logos={[
              { link: reactLogo, toolTip: "ReactJS" },
              { link: gatsbyLogo, toolTip: "Gatsby" },
              { link: graphLogo, toolTip: "GraphQL" },
              { link: nodeLogo, toolTip: "NodeJS" },
              { link: netlifyLogo, toolTip: "Netlify" },
              { link: SassLogo, toolTip: "Sass" },
            ]}
          />
          <PageButton path="/projects">
            <AnimatedTitle mediaQ="row" title="See More Projects >" />
          </PageButton>
        </Section>
      </HomeLayout>
    </motion.div>
  );
};
