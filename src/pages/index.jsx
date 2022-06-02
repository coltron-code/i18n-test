import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate from '@docusaurus/Translate';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styled from 'styled-components';
import { Button, Textarea } from '@ensdomains/thorin';
import styles from './index.module.css';
import Card from '../components/Card/Card';

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
`;

export default function Hojme() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <StyledContainer>
        <Button> Putas</Button>
        <br />
        <br />
        <br />
        <br />

        <StyledFaqCardGrid>
          <Card title="Set your Primary Name" description="Associate an ENS name with your Ethereum wallet." />
          <Card title="Set your Primary Name" description="Associate an ENS name with your Ethereum wallet." />
          <Card title="Set your Primary Name" description="Associate an ENS name with your Ethereum wallet." />
        </StyledFaqCardGrid>
      </StyledContainer>
      <Textarea />

      {/* <NavigationV2 /> */}
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
