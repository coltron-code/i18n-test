import React from "react";
import styled from "styled-components";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import Hero from "../components/atomic/organisms/Hero/Hero";
import Faq from "../components/atomic/organisms/Faq/Faq";

const StyledContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 0;
`;

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://YOUR_APP_ID-dsn.algolia.net"
          crossOrigin
        />
        <link rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/@docsearch/css@3" 
          />
      </Head>
      <Layout>
        <StyledContainer>
          <Hero />
          <Faq />
        </StyledContainer>
        <script src="https://cdn.jsdelivr.net/npm/@docsearch/js@3"></script>
      </Layout>
    </>
  );
}
