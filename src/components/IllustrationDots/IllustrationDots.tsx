import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface IllustrationDotsProps {
  illustration: string;
  pos: string;
}

const IDWrap = styled("div")<{ posit: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f2f2f2;

  @media only screen and (min-width: 800px) {
    position: ${(props) => props.posit};
    bottom: 0;
    left: 0;
  }
`;

const Image = styled("img")`
  width: 100px;
  padding: 30px;
`;

const Dot = styled(motion.span)`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: rgba(186, 232, 232, 1);
  display: block;
`;

export const IllustrationDots = ({
  pos,
  illustration,
}: IllustrationDotsProps) => {
  return (
    <IDWrap posit={pos}>
      <Dot />
      <Image src={illustration} alt="logo" />
      <Dot />
    </IDWrap>
  );
};
