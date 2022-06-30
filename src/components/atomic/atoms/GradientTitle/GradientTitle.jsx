import React from "react";
import styled from "styled-components";

const StyledGradientTitle = styled("div")`
  font-weight: 830;
  font-size: 50px;
  line-height: 68px;
  text-align: center;
  letter-spacing: -0.01em;
  background: linear-gradient(30.31deg, #de82ff -15.56%, #7f6aff 108.43%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`;
const GradientTitle = ({ title }) => {
  return (
    <StyledGradientTitle className="main-title">{title}</StyledGradientTitle>
  );
};

export default GradientTitle;
