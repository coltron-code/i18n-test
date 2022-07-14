import React from "react";
import styled from "styled-components";

const StyledGradientTitle = styled("h1")`
  display: block;
  width: fit-content;
  margin: 0 auto;
  font-weight: 800;
  text-align: center;
  font-size: 3rem;
  line-height: 1.25;
  text-align: center;
  letter-spacing: -0.01em;
  background-image: linear-gradient(330.4deg, rgb(68, 188, 240) 4.54%, rgb(114, 152, 248) 59.2%, rgb(160, 153, 255) 148.85%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  background-size: 110%;
  background-clip: text;
  text-fill-color: transparent;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
const GradientTitle = ({ title }) => {
  return (
    <StyledGradientTitle className="main-title">{title}</StyledGradientTitle>
  );
};

export default GradientTitle;
