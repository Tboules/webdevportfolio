import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const BurgerWrap = styled("div")`
  display: flex;
  flex-direction: column;
  height: 120px;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;

  position: absolute;
  top: 0;
  right: 60px;

  @media only screen and (min-width: 1000px) {
    display: none;
  }

  .line1,
  .line2,
  .line3 {
    background-color: rgba(44, 105, 141, 1);
    width: 35px;
    height: 3px;
    margin: 3px;
  }
`;

export const Hamburger: React.FC = ({ click }) => {
  return (
    <BurgerWrap onClick={click}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </BurgerWrap>
  );
};
