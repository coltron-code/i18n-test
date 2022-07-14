import React from "react";
import Translate from "@docusaurus/Translate";
import GradientTitle from "../../atoms/GradientTitle/GradientTitle";
import styled from "styled-components";
import { DocSearch } from "@docsearch/react";

const StyledHeroContainer = styled("div")`
  padding: 4rem 0;
  width: 32rem;
  max-width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 3rem;
    padding: 2rem 0;
  }
`;

const SearchWrapper = styled("div")`
  margin-top: 2rem;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 5%) 0px 2px 12px;
  border-width: 1px;
  height: 4.5rem;
  border-color: rgba(0, 0, 0, 0.05);
  overflow: hidden;
  font-size: 1.625rem;
  position: relative;

  button {
    border-radius: 20px !important;
    font-size: inherit !important;
    font-weight: 800;
    width: 100%;
    padding: 0px 1.5rem;
    height: 100%;
    outline: none;
    position: relative;

    .DocSearch-Button-Placeholder {
      display: block !important;
    }
  }

  svg {
    display: none;
  }

  .DocSearch-Button-Placeholder {
    font-size: inherit;
    font-weight: inherit;
    padding: 0;
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
      <SearchWrapper>
        <DocSearch
          appId="R2IYF7ETH7"
          apiKey="599cec31baffa4868cae4e79f180729b"
          indexName="docsearch"
        />
      </SearchWrapper>
    </StyledHeroContainer>
  );
}
export default Hero;
