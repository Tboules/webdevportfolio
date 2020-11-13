import React from "react";
import styled from "styled-components";
import { Banner } from "../Banner/Banner";
import { IllustrationDots } from "../IllustrationDots/IllustrationDots";

//illustration
import coding from "../../images/Illustrations/Working People/coding.svg";

const Paragraph = styled("p")`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
  line-height: 24px;
  padding-bottom: 20px;

  @media only screen and (min-width: 800px) {
    width: 60%;
    font-size: 1.2rem;
    line-height: 28px;
  }
  @media only screen and (min-width: 1200px) {
    width: 45%;
  }
`;

const Dot = styled("span")`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: rgba(186, 232, 232, 1);
  margin-left: 14px;
  margin-right: 14px;
  display: inline-block;
`;

export const About: React.FC = () => {
  return (
    <div>
      <div style={{ paddingBottom: "20px" }}>
        <Banner>
          <h1 style={{ marginBottom: "0px" }}>About Me</h1>
          <h4>
            Communication <Dot /> Development <Dot /> Growth
          </h4>
        </Banner>
        <Paragraph>
          My name is Anthony Boules and I am a full stack developer with my
          Master's in Education living in Orange, California. In the 21st
          centery, your site is likely going to be your first impression with
          customers and interested parties. It really matters, which is why I
          care deeply about making your site amazing.
        </Paragraph>
        <Paragraph>
          Prior to learning web development, I worked as an English Language
          Arts teacher for three years in the Newport Mesa Unified School
          District. Although I will always love teaching, I was laid off due to
          COVID-related budget cuts. However, getting laid off gave me an
          opportunity to pursue something else that I have also always been
          passionate about: coding.
        </Paragraph>
        {/* <IllustrationDots illustration={teachIll} /> */}
        <Paragraph>
          Putting in countless hours, I have honed my skills in web development
          technologies across the board, especially React.JS, Gatsby, GraphQL,
          Node.js, SASS, and more. While I have worked on several personal
          projects to gain understanding and enhance my own business, I have in
          a short time also worked with two successful companies to build
          scalable, easy-to-use, and fast sites.
        </Paragraph>
        {/* <IllustrationDots illustration={conference} /> */}
        <Paragraph>
          Drawing from 10+ years of communication and customer service
          experience, I was able to effectively understand exactly what my
          clients needed to enhance their businesses and to deliver that product
          into happy hands.
        </Paragraph>
        {/* <IllustrationDots illustration={working} /> */}
        <Paragraph>
          My ultimate goal is to blend my two passions for teaching and coding
          into one career. Teaching web development would be such an amazing
          priveledge.
        </Paragraph>
      </div>
      <IllustrationDots pos="relative" illustration={coding} />
    </div>
  );
};
