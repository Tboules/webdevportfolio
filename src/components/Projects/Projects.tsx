import React from "react";
import { Banner } from "../Banner/Banner";
import { Section } from "../Home/Home";
import styled from "styled-components";
import { motion } from "framer-motion";

//logos
import reactLogo from "../../images/logos/React-icon.svg";
import gatsbyLogo from "../../images/logos/Gatsby-Monogram.svg";
import graphLogo from "../../images/logos/graphql-icon.svg";
import nodeLogo from "../../images/logos/node-js-logo.svg";
import netlifyLogo from "../../images/logos/netlify-icon.svg";
import SassLogo from "../../images/logos/sass-1.svg";
import postGres from "../../images/logos/PostgreSQL-Logo.wine.svg";
import express from "../../images/logos/expressjs-icon.svg";
import heroku from "../../images/logos/heroku-icon.svg";
import css from "../../images/logos/css3.svg";
import firebase from "../../images/logos/firebase.svg";
import typescript from "../../images/logos/typescriptlang-icon.svg";
import github from "../../images/logos/github-logo.svg";
import styledComp from "../../images/logos/styled-components.png";

//images
import GracePhoto from "../../images/GraceHome.PNG";
import BC from "../../images/BC home.PNG";
import Face from "../../images/Facial Recognition.PNG";
import Hour from "../../images/Hour Track.PNG";
import Quiz from "../../images/TypeQuiz.PNG";
import Poke from "../../images/Pokecomp.PNG";
import { ProjectCards } from "../ProjectCards/ProjectCards";

const ProjectWrap = styled("div")`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 80px;
`;

export const Projects: React.FC = () => {
  return (
    <div>
      <Banner>
        <h1 style={{ marginBottom: "0px" }}>Featured Projects</h1>
        <h4>
          Check out the code
          <a
            style={{ display: "inline-block" }}
            href="https://github.com/Tboules"
          >
            <motion.span
              style={{
                display: "inline-block",
                textDecoration: "underline",
                paddingLeft: "4px",
                width: "100%",
                height: "100%",
              }}
              whileHover={{
                scale: 1.2,
                x: 5,
                transition: {
                  duration: 0.1,
                },
              }}
            >
              {" "}
              here!
            </motion.span>
          </a>
        </h4>
      </Banner>
      <ProjectWrap>
        <Section>
          <ProjectCards
            marginBottom="60px"
            marginLeft="60px"
            imageLink={GracePhoto}
            desTitle="Grace Social and Medical Services"
            logos={[
              { link: reactLogo, toolTip: "ReactJS" },
              { link: gatsbyLogo, toolTip: "Gatsby" },
              { link: graphLogo, toolTip: "GraphQL" },
              { link: nodeLogo, toolTip: "NodeJS" },
              { link: netlifyLogo, toolTip: "Netlify" },
              { link: SassLogo, toolTip: "Sass" },
            ]}
            description="Grace is a non-profit helping new immigrants to Southern California. I organized and uploaded all of their content into the Contentful CMS and built out their site using Gatsby, React, GraphQL, and SASS. The site is not only easily customizable through Contentful, but also responsive, working well in the browser and on the phone."
          />
        </Section>
        <Section>
          <ProjectCards
            marginBottom="60px"
            marginRight="60px"
            imageLink={Face}
            desTitle="Smart Brain Facial Recognition"
            logos={[
              { link: reactLogo, toolTip: "ReactJS" },
              { link: postGres, toolTip: "PostgreSQL" },
              { link: express, toolTip: "ExpressJS" },
              { link: nodeLogo, toolTip: "NodeJS" },
              { link: heroku, toolTip: "Heroku" },
              { link: css, toolTip: "CSS3" },
            ]}
            description="Smart Brain is a personal project leverageing Clarifai's facial recognition API. It stores users in a relational database and allows users to input photos. The app then uses the API to map a box around each face in the photo. It uses ExpressJS, Node, and PostgreSQL to store user data in a database."
          />
        </Section>
        <Section>
          <ProjectCards
            marginBottom="60px"
            marginLeft="60px"
            imageLink={BC}
            desTitle="Boules Consulting"
            logos={[
              { link: reactLogo, toolTip: "ReactJS" },
              { link: gatsbyLogo, toolTip: "Gatsby" },
              { link: graphLogo, toolTip: "GraphQL" },
              { link: netlifyLogo, toolTip: "Netlify" },
              { link: SassLogo, toolTip: "Sass" },
            ]}
            description="Boules Consulting is a grant-writing and non-profit consultancy in Southern California. I turned their Wordpress site into a headless CMS and used GraphQL to query the pages. I then used Gatsby/React.js to build out a site that is responsive, scalable,  and customizable.
            "
          />
        </Section>
        <Section>
          <ProjectCards
            marginBottom="60px"
            marginRight="60px"
            imageLink={Hour}
            desTitle="Hour Track"
            logos={[
              { link: reactLogo, toolTip: "ReactJS" },
              { link: firebase, toolTip: "Google Firebase" },
              { link: netlifyLogo, toolTip: "Netlify" },
              { link: css, toolTip: "CSS3" },
            ]}
            description="As my wife and I are both free lancers, we often find ourselves needing to track our hours for clients. Hour Track was a labor of love that uses firebase to store users and todo information in a database. Each user can store their todos and specifiy the amount of time each task took to complete."
          />
        </Section>
        <Section>
          <ProjectCards
            marginBottom="60px"
            marginLeft="60px"
            imageLink={Quiz}
            desTitle="Type Quiz"
            logos={[
              { link: reactLogo, toolTip: "ReactJS" },
              { link: typescript, toolTip: "TypeScript" },
              { link: graphLogo, toolTip: "GraphQL" },
              { link: github, toolTip: "Github Pages" },
              { link: styledComp, toolTip: "Styled Components" },
            ]}
            description="When is trivia not fun? This project was an excercise in familiarizing myself with Typescript. It uses a popular trivia API to query questions. The app is styled using the popular Styled Componenets which allowed me to pass props to certain my styles."
          />
        </Section>
        <Section>
          <ProjectCards
            marginBottom="60px"
            marginRight="60px"
            imageLink={Poke}
            desTitle="PokeComp!!"
            logos={[
              { link: reactLogo, toolTip: "ReactJS" },
              { link: css, toolTip: "CSS3" },
              { link: github, toolTip: "Github Pages" },
            ]}
            description="One of my earliest projects, PokeComp was all about learning to pass props in React and make simple API calls. It leverages the popular, but notorius, Pokemon API and passes the data into pokemon cards. Pokemon information is compared by pulling up the cards and placing them on either the red or blue sides. "
          />
        </Section>
      </ProjectWrap>
    </div>
  );
};
