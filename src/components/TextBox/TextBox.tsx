import React from "react";
import styled from "styled-components";

const TextBoxWrap = styled("div")`
  min-height: 400px;
  width: 90%;
  border-radius: 8px;
  line-height: 25px;
  letter-spacing: 2px;
  margin-top: 40px;
  padding: 40px;
  box-sizing: border-box;
  text-align: justify;

  @media only screen and (min-width: 800px) {
    width: 80%;
    min-height: 400px;
    margin-left: 80px;
  }
`;

export const TextBox: React.FC = ({ children }) => {
  return <TextBoxWrap>{children}</TextBoxWrap>;
};
