import React from "react";
import Translate from "@docusaurus/Translate";
import GradientTitle from "../../atoms/GradientTitle/GradientTitle";
import styled from "styled-components";

const StyledHeroContainer = styled("div")`
  padding: 4rem 0;

  @media (max-width: 768px) {
    font-size: 3rem;
    padding: 2rem 0;
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
      </h3>

      <style jsx>{`
        h3 {
          padding-top: 0;
        }
      `}</style>
    </StyledHeroContainer>
  );
}
export default Hero;
