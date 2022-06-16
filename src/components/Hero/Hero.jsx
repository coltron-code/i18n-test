import React from 'react';
import Translate from '@docusaurus/Translate';

function Hero() {
  return (
    <div className="heros">
      <div className="main-title">ENS Learn Docs</div>
      <div className="subtitle">
        <Translate description="Landing page main text">
          Learn about your web3 identity.
        </Translate>
      </div>
    </div>
  );
}
export default Hero;
