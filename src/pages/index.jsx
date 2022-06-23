import React from "react";
import styled from "styled-components";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import Hero from "../components/atomic/organisms/Hero/Hero";
import Faq from "../components/atomic/organisms/Faq/Faq";
// import Footer from "../components/atomic/organisms/Footer/Footer";

const StyledContainer = styled("div")`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - var(--navbar-height));
`;

export default function Hojme() {
  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://YOUR_APP_ID-dsn.algolia.net"
          crossOrigin
        />
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
