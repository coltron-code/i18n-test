import React from "react";
import Translate from "@docusaurus/Translate";
import GradientTitle from "../../atoms/GradientTitle/GradientTitle";
import styled from "styled-components";

const StyledHeroContainer = styled("div")`
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;
function Hero() {
  return (
    <StyledHeroContainer>
      <GradientTitle title="ENS Learn Docs" />
      <h3>
        <Translate description="Landing page - hero subtitle">
          Learn about your new web3 identity.
        </Translate>
      </h3>crow
    </StyledHeroContainer>
  );
}
export default Hero;
