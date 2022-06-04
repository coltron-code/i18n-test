import React from 'react';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styled from 'styled-components';
import Card from '../components/Card/Card';
import './index.css';
import Navigation from '../components/NavigationV2/Navigationv2';
import Layout from '@theme/Layout';
import discordGrey from '../assets/discordGrey.svg';
import discussGrey from '../assets/discussGrey.svg';
import twitterGrey from '../assets/twitterGrey.svg';

const StyledFaqCardGrid = styled('div')`
  display: grid;
  /* grid-template-rows: minmax(220px, 1fr ); */
  /* grid-template-columns: minmax(0, 3fr) minmax(0, 3fr) minmax(0, 3fr); */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  align-items: center;
  gap: 24px;
  justify-items: center;
  align-items: center;
`;
const StyledContainer = styled('div')`
  width: 80%;
  margin: 0 auto;
  height:82vh;
  display: grid; 
  /* background: red; */
  align-items: center;  
`;
const Footer = styled('div')`
flex-shrink: 0;
display: flex;
align-items: center;
justify-content: flex-end;
padding: 20px 20px 20px 0;

& > a {
  margin-right: 10px;
}
`;

export default function Hojme() {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <Layout />
      {/* <Navigation /> */}

      <StyledContainer>
        <div className="main">
          <div className="heros">
            <div className="main-title">
              ENS Learn Docs
            </div>
            <div className="subtitle">
              Learn about your web3 identity.
            </div>
          </div>
          <div className="faq-bar">
            <div>Frequently Asked Questions</div>
            <input placeholder="Algolia Docsearch Will be here" type="text" />
          </div>
          <br />

          <StyledFaqCardGrid>
            <Card title="Set your Primary Name" description="Associate an ENS name with your Ethereum wallet." />
            <Card title="Set your Primary Name" description="Associate an ENS name with your Ethereum wallet." />
            <Card title="Set your Primary Name" description="Associate an ENS name with your Ethereum wallet." />
          </StyledFaqCardGrid>
        </div>
      </StyledContainer>
      <main />
      <Footer>
        <a href="https://twitter.com/ensdomains">
          <img
            src={twitterGrey}
            width="34"
            css={{ marginTop: '2px' }}
            alt="Twitter"
          />
        </a>
        <a href="https://discuss.ens.domains/">
          <img src={discussGrey} width="33" alt="Discuss" />
        </a>
        <a href="https://chat.ens.domains/">
          <img
            src={discordGrey}
            width="30"
            css={{ marginLeft: '4px' }}
            alt="Discord"
          />
        </a>
      </Footer>

    </>
  );
}
