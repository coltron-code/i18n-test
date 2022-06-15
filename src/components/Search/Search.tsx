import React from "react";
import { DocSearch } from "@docsearch/react";

type Props = {};

export const Search = (props: Props) => {
  return (
    <DocSearch
      appId="R2IYF7ETH7"
      apiKey="599cec31baffa4868cae4e79f180729b"
      indexName="docsearch"
    />
  );
};
