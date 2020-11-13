import React, { useState, useEffect } from "react";
import leftSlider from "../../images/SlideLeft.svg";
import rightSlider from "../../images/Slide Right.svg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const SliderWrap = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  overflow-y: hidden;
  z-index: 100;
`;

const Slider = styled(motion.img)`
  width: ${(props) => props.width};
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: -40px;
  vertical-align: bottom;
`;

const leftVariants = {
  start: {
    y: 0,
  },
  end: {
    y: "-1500vh",
    transition: {
      delay: 3,
      ease: "easeInOut",
      duration: 3,
    },
  },
};

const rightVariants = {
  start: {
    y: 0,
  },
  end: {
    y: "1500vh",
    transition: {
      delay: 3,
      ease: "easeInOut",
      duration: 3,
    },
  },
};

export const Sliders: React.FC = () => {
  const [slideWidth, setSlideWidth] = useState<number>("50%");

  const oneSlide = useMediaQuery({
    query: "(max-width: 780px)",
  });

  useEffect(() => {
    oneSlide ? setSlideWidth("100%") : setSlideWidth("50%");
  }, [oneSlide]);

  return (
    <SliderWrap
      animate={{
        y: [0, -1000],
        transition: {
          delay: 5,
        },
      }}
    >
      <Slider
        variants={leftVariants}
        initial="start"
        animate="end"
        src={leftSlider}
        alt="website slider left"
        top="-40px"
        width={slideWidth}
      />
      {!oneSlide && (
        <Slider
          variants={rightVariants}
          initial="start"
          animate="end"
          src={rightSlider}
          alt="website slider right"
          left="50%"
          width="50%"
        />
      )}
    </SliderWrap>
  );
};
