import React from 'react';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Head from '@docusaurus/Head';

import Card from '../components/Card/Card';
import './index.css';
import Navigation from '../components/NavigationV2/Navigationv2';
import Layout from '@theme/Layout';
import discordGrey from '../assets/discordGrey.svg';
import discussGrey from '../assets/discussGrey.svg';
import { ReactComponent as twitterGrey } from '../assets/twitterGrey.svg';
import { Search } from '../components/Search/Search';

const StyledFaqCardGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  align-items: center;
  gap: 24px;
  justify-items: center;
  align-items: center;
`;
const StyledContainer = styled('div')`
  width: 80%;
  margin: 0 auto;
  height: 80vh;
  display: grid;
  align-items: center;
`;
const Footer = styled('div')`    
  position: fixed;
  padding: 10px 10px 0px 10px;
  bottom: 0;
  width: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 20px 20px 0;

  & > a {
    margin-right: 10px;
  }
`;

const listItems = [
  {
    title: 'What can I use an ENS name for?',
    description:
      'An ENS Name is an way to remember you cryptocurrency addresses',
    url: '/docs/getting-started/Using%20Your%20ENS%20Name',
  },
  {
    title: 'Registering a Name',
    description:
      'Go to the ENS Manager App and connect your wallet with the connect-button.',
    url: '/docs/getting-started/Registering%20Names',
  },
  {
    title: 'Setting your Profile Avatar',
    description:
      'If you don’t already have an ENS name, you can register an ENS name or import a DNS domain name you already own at app.ens.domains. You can set an NFT avatar for either kind of ENS name.',
    url: '/docs/getting-started/Setting%20Avatar',
  },
];

export default function Hojme() {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://YOUR_APP_ID-dsn.algolia.net" crossOrigin />
      </Head>
      <Layout>
        {/* <Navigation /> */}

        <StyledContainer>
          <div className="main">
            <div className="heros">
              <div className="main-title">ENS Learn Docs</div>
              <div className="subtitle">Learn about your web3 identity.</div>
            </div>
            <div className="faq-bar">
              <div>Frequently Asked Questions</div>
              <Search />

              {/* <input placeholder="Algolia Docsearch Will be here" type="text" /> */}
            </div>
            <br />

            <StyledFaqCardGrid>
              {listItems.map((item) => (
                <Link to={item.url}>
                  <Card title={item.title} description={item.description} />
                </Link>
              ))}
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
      </Layout>
    </>
  );
}
