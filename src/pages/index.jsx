import React from 'react';
import styled from 'styled-components';
import Head from '@docusaurus/Head';
import './index.css';
import Layout from '@theme/Layout';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Faq from '../components/Faq/Faq';

const StyledContainer = styled('div')`
  width: 80%;
  margin: 0 auto;
  height: 80vh;
  display: grid;
  grid-template-rows: auto;
  align-items: center;
`;

export default function Hojme() {
  // const { siteConfig } = useDocusaurusContext();
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
        <main />
        <Footer />
      </Layout>
    </>
  );
}
