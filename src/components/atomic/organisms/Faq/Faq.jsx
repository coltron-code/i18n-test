import React from "react";
import Translate from "@docusaurus/Translate";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
import Card from "../../molecules/Card/Card";
import { articles } from "./data";

const maxWidth = '50rem'

const StyledFaqCardGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  width: ${maxWidth};
  max-width: 100%;
  margin: 0 auto;
  justify-items: end;
  justify-items: center;

  &:hover {
    a {
      text-decoration: none;
      color: inherit;
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;
const StyledFaqBar = styled("div")`
  display: flex;
  max-width: 100%;
  width: ${maxWidth};
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  font-size: 1.2rem;
  font-weight: 650;
  color: rgba(0, 0, 0, 0.6);

`;

function Faq() {
  const { url } = useRouteMatch();
  return (
    <>
      <StyledFaqBar>
        <Translate description="FAQ">Frequently Asked Questions</Translate>
      </StyledFaqBar>
      <StyledFaqCardGrid>
        {articles.map((item, i) => {
          const localeUrl = url;
          const transformedUrl = `${localeUrl}${item.url}`;
          return (
            <Link key={item.title + i} to={transformedUrl}>
              <Card title={item.title} description={item.description} />
            </Link>
          );
        })}
      </StyledFaqCardGrid>
    </>
  );
}
export default Faq;
