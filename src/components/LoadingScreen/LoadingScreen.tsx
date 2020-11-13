import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Load = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1001;
  height: 100%;
  width: 100%;
  background-color: rgba(227, 246, 245, 1);
  text-align: center;
  line-height: 100vh;
  overflow: hidden;
`;

export const LoadingScreen: React.FC = () => {
  return (
    <Load
      animate={{
        opacity: [1, 0],
        transition: {
          delay: 0.7,
        },
      }}
    >
      <h1>loading...</h1>
    </Load>
  );
};
