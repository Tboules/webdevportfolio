import React from "react";
import { Banner } from "../Banner/Banner";
import { Section } from "../Home/Home";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ProjectCards } from "../ProjectCards/ProjectCards";

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
import socketIO from "../../images/logos/Socket-io-01.svg";
import chakra from "../../images/logos/chakra-ui.svg";
import reduxLogo from "../../images/logos/redux-seeklogo.com.svg";
import tailwind from "../../images/logos/tailwindcss-icon.svg";
import androidStudio from "../../images/logos/Android_Studio_icon.svg";
import html5 from "../../images/logos/HTML5_logo_and_wordmark.svg";
import javascriptLogo from "../../images/logos/Unofficial_JavaScript_logo_2.svg";

//images
import connect4 from "../../images/Connect_4.png";
import drowchet from "../../images/Drowchet_Home.png";
import GracePhoto from "../../images/GraceHome.PNG";
import BC from "../../images/BC home.PNG";
import Face from "../../images/Facial Recognition.PNG";
import Hour from "../../images/Hour Track.PNG";
import Quiz from "../../images/TypeQuiz.PNG";
import Poke from "../../images/Pokecomp.PNG";
import pixelPerfectEZBank from "../../images/EasyBank_FrontEnd_Mentor.PNG";
import offerUpClone from "../../images/OfferUp App/Mock Up Screen.png";

const ProjectWrap = styled("div")`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 80px;
`;

export const Projects = () => {
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
            imageLink={offerUpClone}
            desTitle="Offer Up Clone"
            logos={[
              { link: reactLogo, toolTip: "React Native" },
              { link: css, toolTip: "CSS" },
              { link: nodeLogo, toolTip: "Node.js" },
              { link: express, toolTip: "Express.js" },
              { link: androidStudio, toolTip: "Android Studio" },
            ]}
            codeLink={"https://github.com/Tboules/offer_up_clone"}
            description="The Offer Up Clone is a fully functional React Native application that allows you to post items that are for sale, contact sellers, view location information, and keep track of your sales. The idea came from another coder named Mosh Hamedani."
          />
        </Section>
        <Section>
          <ProjectCards
            marginBottom="60px"
            marginRight="60px"
            imageLink={pixelPerfectEZBank}
            desTitle="Front End Mentor Easy Bank"
            logos={[
              { link: html5, toolTip: "HTML5" },
              { link: SassLogo, toolTip: "SCSS" },
              { link: javascriptLogo, toolTip: "Javascript" },
              { link: github, toolTip: "GitHub" },
            ]}
            codeLink={"https://github.com/Tboules/EasyBank_Frontend_Mentor"}
            description="The Easy Bank project on Front End Mentor was a perfect opportunity to practice pixel perfect front end execution. Front End Mentor provided the design files and I used those to build the project using HTML, JS, and SASS."
          />
        </Section>
        <Section>
          <ProjectCards
            marginBottom="60px"
            marginLeft="60px"
            imageLink={drowchet}
            desTitle="Drowchet"
            logos={[
              { link: reactLogo, toolTip: "ReactJS" },
              { link: chakra, toolTip: "Chakra-UI" },
              { link: firebase, toolTip: "FireBase" },
              { link: tailwind, toolTip: "Tailwind CSS" },
              { link: netlifyLogo, toolTip: "Netlify" },
              { link: reduxLogo, toolTip: "Redux" },
            ]}
            siteLink={"https://drowchet.netlify.app"}
            description="Drowchet is a rustic e-commerce store designed to help a crochet hobbyist sell his most popular products. While the project was a labor of love for a friend, no expense was spared in using the most popular and powerful frameworks to put the site together. The site combines the popular chakra-ui component library with redux for state management and firebase for a database."
          />
        </Section>
        <Section>
          <ProjectCards
            marginBottom="60px"
            marginRight="60px"
            imageLink={connect4}
            desTitle="Online Multiplayer Connect Four"
            logos={[
              { link: reactLogo, toolTip: "ReactJS" },
              { link: typescript, toolTip: "Typescript" },
              { link: socketIO, toolTip: "Socket IO" },
              { link: nodeLogo, toolTip: "NodeJS" },
              { link: netlifyLogo, toolTip: "Netlify" },
              { link: styledComp, toolTip: "Styled Components" },
            ]}
            siteLink={"https://pedantic-mclean-378a63.netlify.app/"}
            description="The Connect 4 project takes a classic game and makes it accessible to players across the web. You are able to create a room for your friends where you can all play, chat, spectate, and have fun together. The app uses a MongoDB database, Socket IO, and Node JS, to make the online experience responsive and seamless."
          />
        </Section>
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
            siteLink={"https://elevatedbygrace.org/"}
            description="Grace is a non-profit organization helping new immigrants to Southern California. I organized and uploaded all of their content into the Contentful CMS and built out their site using Gatsby, React, GraphQL, and SASS. The site is not only easily customizable through Contentful, but also responsive, working well in the browser and on the phone."
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
            siteLink="https://smart-brain-tec.herokuapp.com/"
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
            siteLink="https://boulesconsulting.org/"
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
            siteLink="https://hour-track.netlify.app/"
            description="As my wife and I are both freelancers, we often find ourselves needing to track our hours for clients. Hour Track was a labor of love that uses firebase to store users and todo information in a database. Each user can store their todos and specifiy the amount of time each task took to complete."
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
            siteLink="https://tboules.github.io/type-quiz/"
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
