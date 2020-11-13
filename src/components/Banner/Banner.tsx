import React from "react";
import styled from "styled-components";

const BannerWrap = styled.div`
  height: 200px;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;

  @media only screen and (min-width: 800px) {
    font-size: 1.4rem;
  }
`;

export const Banner: React.FC = ({ children }) => {
  return <BannerWrap>{children}</BannerWrap>;
};
