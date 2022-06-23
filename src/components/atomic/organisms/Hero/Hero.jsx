import React from "react";
import Translate from "@docusaurus/Translate";
import GradientTitle from "../../atoms/GradientTitle/GradientTitle";

function Hero() {
  return (
    <div>
      <GradientTitle title="ENS Learn Docs" />
      <h3>
        <Translate description="Landing page main text">
          Learn about your web3 identity.
        </Translate>
      </h3>
    </div>
  );
}
export default Hero;
