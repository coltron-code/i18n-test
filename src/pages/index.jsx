import React from 'react';
import styled from 'styled-components';
import Head from '@docusaurus/Head';
import './index.css';
import Layout from '@theme/Layout';
import Hero from '../components/Hero/Hero';
import Faq from '../components/Faq/Faq';

const StyledContainer = styled('div')`
  width: 80%;
  margin: 0 auto;
  height: 60vh;
  display: grid;
  margin: auto;

  align-items: center;
`;

export default function Hojme() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://YOUR_APP_ID-dsn.algolia.net" crossOrigin />
      </Head>
      <Layout>
        <StyledContainer>

          <Hero />
          <Faq />

        </StyledContainer>
        {/* <Footer /> */}
      </Layout>
    </>
  );
}
