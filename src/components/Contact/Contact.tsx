import React from "react";
import styled from "styled-components";
import { IllustrationDots } from "../IllustrationDots/IllustrationDots";
import { motion } from "framer-motion";

//illustration
import conference from "../../images/Illustrations/Working People/conference.svg";
import { Banner } from "../Banner/Banner";
import { AnimatedTitle } from "../AnimatedTitle/AnimatedTitle";

const FormWrap = styled("form")`
  background-color: rgba(186, 232, 232, 1);
  min-height: 500px;
  margin: auto;
  width: 90%;
  padding: 40px;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.1);

  button {
    width: 120px;
    border-radius: 4px;
    height: 40px;
    margin: auto;
    margin-top: 20px;
    outline: none;
    border: none;
    background-color: rgba(44, 105, 141, 1);
    color: #f2f2f2;
    font-size: 1.2rem;
    cursor: pointer;
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.1);
  }

  @media only screen and (min-width: 800px) {
    width: 70%;
  }
  @media only screen and (min-width: 1200px) {
    width: 55%;
  }
  @media only screen and (min-width: 1600px) {
    width: 40%;
  }

  .title {
    text-align: center;
  }
`;

const InputWrap = styled("div")`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;

  label {
    margin-bottom: 6px;
    margin-top: 6px;
    font-size: 1.2rem;
  }

  input {
    font-size: 1.1rem;
    height: 35px;
    outline: none;
    padding-left: 15px;
    border: none;
    border-radius: 2px;
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.1);
  }

  input:focus {
    border-bottom: 2px solid rgba(44, 105, 141, 1);
  }
  textarea:focus {
    border: 2px solid rgba(44, 105, 141, 1);
  }

  textarea {
    font-size: 1rem;
    border-radius: 2px;
    resize: vertical;
    padding-top: 10px;
    padding-left: 15px;
    border: none;
    outline: none;
    box-sizing: border-box;
    min-height: 150px;
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.1);
  }
`;

export const Contact: React.FC = () => {
  const [data, setData] = React.useState({
    email: null,
    name: null,
    message: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //cloud function
    e.target.reset();
  };

  return (
    <div>
      <Banner>
        <h1>Let's Work Togther</h1>
      </Banner>
      <FormWrap onSubmit={handleSubmit}>
        <AnimatedTitle title="Contact Me" />
        <InputWrap>
          <label htmlFor="Email">Email:</label>
          <input
            onChange={(e) => setData({ ...data, email: e.target.value })}
            type="text"
            name="Email"
          />
        </InputWrap>
        <InputWrap>
          <label htmlFor="Name">Name:</label>
          <input
            onChange={(e) => setData({ ...data, name: e.target.value })}
            type="text"
            name="Name"
          />
        </InputWrap>
        <InputWrap>
          <label htmlFor="Message">Message:</label>
          <textarea
            style={{ resize: "vertical", paddingLeft: "15px" }}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            name="Message"
          />
        </InputWrap>
        <br />
        <motion.button
          whileHover={{
            y: -10,
            scale: 1.1,
            transition: {
              duration: 0.2,
              ease: "easeInOut",
            },
          }}
        >
          Submit
        </motion.button>
      </FormWrap>
      <IllustrationDots pos="relative" illustration={conference} />
    </div>
  );
};