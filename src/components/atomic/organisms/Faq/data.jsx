import React from "react";
import Translate from "@docusaurus/Translate";

export const articles = [
  {
    title: (
      <Translate description="Landing Page Card Title">
        Using your Name
      </Translate>
    ),

    description: (
      <Translate description="Landing Page Card Subtitle">
        An ENS Name is an way to remember you cryptocurrency addresses.
      </Translate>
    ),
    url: "docs/getting-started/Using%20Your%20ENS%20Name",
  },
  {
    title: (
      <Translate description="Landing Page Card Title">
        Registering a Name
      </Translate>
    ),
    description: (
      <Translate description="Landing Page Card Subtitle">
        Go to the ENS Manager App and connect your wallet with the
        connect-button.
      </Translate>
    ),
    url: "docs/getting-started/Registering%20Names",
  },
  {
    title: (
      <Translate description="Landing Page Card Title">
        Setting your Avatar
      </Translate>
    ),
    description: (
      <Translate description="Landing Page Card Subtitle">
        If you don’t already have an ENS name, you can register an ENS name or
        import a DNS domain name you already own at app.ens.domains.ç You can
        set an NFT avatar for either kind of ENS name.
      </Translate>
    ),
    url: "docs/getting-started/Setting%20Avatar",
  },
  {
    title: (
      <Translate description="Landing Page Card Title">
        Transferring Names
      </Translate>
    ),
    description: (
      <Translate description="Landing Page Card Subtitle">
       You can easily transfer your name by changing the controller record on the manager app.
      </Translate>
    ),
    url: "docs/ens-tutorials/Name%20Transfer",
  },
];
