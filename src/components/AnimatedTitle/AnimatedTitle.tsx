import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface AnimatedTitleProps {
  title: string;
  mediaQ: string;
}

const TitleWrap = styled("div")<{ flexDirection?: string }>`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;

  @media only screen and (max-width: 600px) {
    flex-direction: ${(props) => props.flexDirection};
  }
`;

const WordWrap = styled("div")`
  display: flex;
  padding-left: 10px;
`;

const Letters = styled(motion.h1)`
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const AnimatedTitle: React.FC = ({
  title,
  mediaQ,
}: AnimatedTitleProps) => {
  return (
    <TitleWrap flexDirection={mediaQ}>
      {title.split(" ").map((word) => {
        return (
          <WordWrap key={word}>
            {word.split("").map((letter, index) => {
              return (
                <Letters
                  whileHover={{
                    y: -15,
                    transition: {
                      ease: "easeInOut",
                      duration: 0.1,
                    },
                  }}
                  style={{ padding: "2px" }}
                  key={index}
                >
                  {letter}
                </Letters>
              );
            })}
          </WordWrap>
        );
      })}
    </TitleWrap>
  );
};
