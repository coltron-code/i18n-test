import React from "react";
import Translate from "@docusaurus/Translate";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
import { Search } from "../Search/Search";
import Card from "../atomic/molecules/Card/Card";
import { articles } from "./data";

const StyledFaqCardGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  gap: 24px;
  justify-items: end;
  justify-items: center;
`;
function Faq() {
  const { url } = useRouteMatch();
  return (
    <>
      <div className="faq-bar">
        <Translate description="FAQ">Frequently Asked Questions</Translate>
        <DocSearch
          appId="R2IYF7ETH7"
          apiKey="599cec31baffa4868cae4e79f180729b"
          indexName="docsearch"
        />
      </div>
      <StyledFaqCardGrid>
        {articles.map((item) => {
          const localeUrl = url;
          const transformedUrl = `${localeUrl}${item.url}`;
          return (
            <Link to={transformedUrl}>
              <Card title={item.title} description={item.description} />
            </Link>
          );
        })}
      </StyledFaqCardGrid>
    </>
  );
}
export default Faq;
