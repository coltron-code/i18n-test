import React from "react";
import styled from "styled-components";
import Head from "@docusaurus/Head";
import "./index.css";
import Layout from "@theme/Layout";
import Hero from "../components/Hero/Hero";
import Faq from "../components/Faq/Faq";
import Footer from "../components/atomic/organisms/Footer/Footer";

const StyledContainer = styled("div")`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 90vh;
  margin-top: -3.75rem;
  justify-content: center;
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
        <Footer />
      </Layout>
    </>
  );
}
