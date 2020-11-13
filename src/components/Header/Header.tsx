import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import TN from "../../images/Thumbnail PNG.png";
import { AnimatedTitle } from "../AnimatedTitle/AnimatedTitle";
import { Hamburger } from "../Hamburger/Hamburger";
import { useMediaQuery } from "react-responsive";

const Nav = styled("nav")`
  height: 120px;
  width: 100%;
  background-color: rgba(44, 105, 141, 1);

  padding-left: 10%;
  padding-right: 10%;
  box-sizing: border-box;
  display: flex;

  @media only screen and (max-width: 800px) {
    padding-right: 5%;
    padding-left: 5%;
  }
`;

const LogoWrap = styled("div")`
  flex: 1;

  a {
    height: 100%;
    display: flex;
    text-decoration: none;
    img {
      height: 160px;
      width: 160px;
      z-index: 1000;
      margin-top: 10px;

      @media only screen and (max-width: 800px) {
        height: 100px;
        width: 100px;
      }
    }

    div {
      @media only screen and (max-width: 600px) {
        transform: translateY(7px);
      }
    }

    h1 {
      color: rgba(244, 244, 249, 1);
      font-size: 2.3rem;
      align-self: center;
      @media only screen and (max-width: 800px) {
        font-size: 1.4rem;
      }
    }
  }
`;

const LinkList = styled(motion.ul)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 25%;
  margin-right: 3%;

  @media only screen and (max-width: 1200px) {
    width: 35%;
  }

  @media only screen and (max-width: 1000px) {
    height: 100%;
    width: 50%;
    background-color: #f2f2f2;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    margin-right: 0px;
    margin-top: 0px;
    overflow: hidden;
    display: block;
    box-sizing: border-box;
    padding-top: 150px;
    box-shadow: -1px 0px 2px 0px rgba(0, 0, 0, 0.1);
  }

  a {
    text-decoration: none;
    color: ghostwhite;
    font-size: 1.25rem;
    position: relative;

    @media only screen and (max-width: 1000px) {
      color: rgba(44, 105, 141, 1);
      margin-left: 35%;
      line-height: 20vh;
    }
    @media only screen and (max-width: 450px) {
      margin-left: 15%;
    }
  }
  a:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: -10%;
    z-index: 0;
    height: 3px;
    border-radius: 12px;
    width: 120%;
    background-color: ghostwhite;
    transform: scale(0);
    transition: transform 0.2s ease, background-color 0.4s ease-in-out;
  }

  a:hover {
    color: #5299d3;
    &:after {
      background-color: #5299d3;
      transform: scale(1);
    }
  }
`;

const drawerVariants = {
  big: {
    clipPath: "circle(100% at calc(100% - 80px) 60px)",
  },
  closed: {
    clipPath: "circle(30px at calc(100% - 80px) 60px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    clipPath: "circle(300% at calc(100% - 80px) 60px)",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
};

interface Props {
  init: boolean;
}

export const Header = ({ init }: Props) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const bigScreen = useMediaQuery({ query: "(max-width: 1000px" });
  const mobileScreen = useMediaQuery({ query: "(max-device-width: 1224px)" });
  const height: number = window.innerHeight / 2 - 80;
  //prettier-ignore
  const width: number = (window.innerWidth / 2) - 90 - (0.1 * window.innerWidth);
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  React.useLayoutEffect(() => {
    if (bigScreen) {
      closeDrawer();
    }
  }, [bigScreen]);

  console.log(mobileScreen);

  return (
    <div>
      <Nav>
        <LogoWrap>
          <Link to="/">
            {init ? (
              <motion.img
                animate={{
                  y: [height, height + 250, 0],
                  x: [width, width - 150, width + 350, 0],
                  scale: [1.5, 1],
                  transition: {
                    delay: 3,
                    ease: "easeInOut",
                    duration: 1,
                  },
                }}
                src={TN}
                alt=""
              />
            ) : (
              <img src={TN} alt="" />
            )}
            <AnimatedTitle mediaQ="column" title="Anthony Boules" />
          </Link>
        </LogoWrap>
        <Hamburger
          click={() =>
            drawerOpen ? setDrawerOpen(false) : setDrawerOpen(true)
          }
        />
        <LinkList
          variants={drawerVariants}
          animate={
            !bigScreen && !mobileScreen
              ? "big"
              : bigScreen && !drawerOpen
              ? "closed"
              : "open"
          }
        >
          <li>
            <Link onClick={() => closeDrawer()} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => closeDrawer()} to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link onClick={() => closeDrawer()} to="/contact">
              Contact
            </Link>
          </li>
        </LinkList>
      </Nav>
    </div>
  );
};
