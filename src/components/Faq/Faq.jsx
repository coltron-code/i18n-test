import React from 'react';
import Translate from '@docusaurus/Translate';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Search } from '../Search/Search';
import Card from '../Card/Card';

const articles = [
  {
    title: <Translate description="Landing Page Card Title">What can I use an ENS name for?</Translate>,

    description:
  <Translate description="Landing Page Card Subtitle">
    An ENS Name is an way to remember you cryptocurrency addresses
  </Translate>,
    url: '/docs/getting-started/Using%20Your%20ENS%20Name',
  },
  {
    title: <Translate description="Landing Page Card Title">Registering a Name</Translate>,
    description:
  <Translate description="Landing Page Card Subtitle">
    Go to the ENS Manager App and connect your wallet with the connect-button.
  </Translate>,
    url: '/docs/getting-started/Registering%20Names',
  },
  {
    title: <Translate description="Landing Page Card Title">Setting your Profile Avatar</Translate>,
    description:
  <Translate description="Landing Page Card Subtitle">
    If you don’t already have an ENS name,
    you can register an ENS name or import a DNS domain name you already own at app.ens.domains.ç
    You can set an NFT avatar for either kind of ENS name.
  </Translate>,
    url: '/docs/getting-started/Setting%20Avatar',
  },
];

const StyledFaqCardGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  align-items: center;
  gap: 24px;
  justify-items: center;
  align-items: center;
`;
function Faq() {
  return (
    <>
      <div className="faq-bar">
        <Translate description="FAQ">
          Frequently Asked Questions
        </Translate>
        <Search />
      </div>
      <StyledFaqCardGrid>
        {articles.map((item) => (
          <Link to={item.url}>
            <Card title={item.title} description={item.description} />
          </Link>
        ))}
      </StyledFaqCardGrid>
    </>

  );
}
export default Faq;
