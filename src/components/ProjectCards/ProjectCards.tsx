import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectCardsWrapper = styled("div")<{
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
}>`
  min-height: 450px;
  width: 90%;
  border-radius: 8px;
  background-color: #fafafa;
  margin-top: 40px;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  margin-bottom: ${(props) => props.marginBottom};
  position: relative;

  @media only screen and (min-width: 1400px) {
    min-height: 450px;
    width: 80%;
    margin-right: ${(props) => props.marginRight};
    margin-left: ${(props) => props.marginLeft};
  }
`;

const LogoWrap = styled("div")<{ disp: string }>`
  min-height: 80px;
  width: 80px;
  display: ${(props) => props.disp};
  flex-direction: column;
  justify-content: space-evenly;

  .logoDiv {
    position: relative;
    display: inline-block;
  }

  .logoDiv .toolTip {
    visibility: hidden;
    width: 120px;
    background-color: #2c698d;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
  }

  .logoDiv:hover .toolTip {
    visibility: visible;
  }

  img {
    height: auto;
    width: 35px;
    padding: 10px;

    @media screen and (min-width: 800px) {
      width: 40px;
    }
  }
`;

const PicDesLayout = styled("div")`
  background-color: rgba(227, 246, 245, 1);

  p {
    font-size: 0.9rem;

    @media screen and (min-width: 800px) {
      font-size: 1rem;
    }
  }

  a {
    text-decoration: none;
    display: block;
    color: #272643;
    font-weight: 600;
    margin-bottom: 14px;
    font-family: "Josefin Sans", sans-serif;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  overflow: hidden;
  cursor: pointer;
`;

type Props = {
  imageLink: string;
  description: string;
  desTitle: string;
  logos: {
    link: string;
    toolTip: string;
  }[];
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  siteLink?: string;
};

const imgVariants = {
  small: {
    height: "200px",
    transition: {
      type: "tween",
    },
  },

  large: {
    height: "450px",
    transition: {
      type: "tween",
    },
  },
};

export const ProjectCards = ({
  logos,
  desTitle,
  description,
  imageLink,
  marginRight,
  marginLeft,
  marginBottom,
  siteLink,
}: Props) => {
  const [largeImg, setLargeImg] = React.useState<boolean>(false);
  const [textDiv, setTextDiv] = React.useState("block");
  const [logoDiv, setLogoDiv] = React.useState("flex");

  React.useLayoutEffect(() => {
    if (largeImg) {
      setTextDiv("none");
      setLogoDiv("none");
    } else {
      setTimeout(() => {
        setTextDiv("block");
      }, 300);
      setLogoDiv("flex");
    }
  }, [largeImg]);

  const handleLargeImg = () => {
    return largeImg ? setLargeImg(false) : setLargeImg(true);
  };

  return (
    <ProjectCardsWrapper
      marginBottom={marginBottom}
      marginRight={marginRight}
      marginLeft={marginLeft}
    >
      {Boolean(marginLeft) && (
        <LogoWrap disp={logoDiv}>
          {logos.map((logo) => {
            return (
              <div className="logoDiv">
                <img key={logo.toolTip} src={logo.link} alt="logo" />
                <span style={{ top: "14px", left: "90%" }} className="toolTip">
                  {logo.toolTip}
                </span>
              </div>
            );
          })}
        </LogoWrap>
      )}
      <PicDesLayout>
        <Image
          variants={imgVariants}
          animate={largeImg ? "large" : "small"}
          src={imageLink}
          alt="WebSite"
          onClick={handleLargeImg}
        />

        <div
          style={{
            paddingLeft: "50px",
            paddingRight: "50px",
            textAlign: "center",
            display: `${textDiv}`,
          }}
        >
          <h2>{desTitle}</h2>
          {siteLink && <a href={siteLink}>Check Out the Site!</a>}
          <p style={{ textAlign: "justify" }}>{description}</p>
        </div>
      </PicDesLayout>
      {Boolean(marginRight) && (
        <LogoWrap disp={logoDiv}>
          {logos.map((logo) => {
            return (
              <div className="logoDiv">
                <img key={logo.toolTip} src={logo.link} alt="logo" />
                <span style={{ top: "14px", right: "90%" }} className="toolTip">
                  {logo.toolTip}
                </span>
              </div>
            );
          })}
        </LogoWrap>
      )}
    </ProjectCardsWrapper>
  );
};
