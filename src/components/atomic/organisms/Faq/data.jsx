import React from "react";
import Translate from "@docusaurus/Translate";
import IconMultiple from "../../../../assets/icon-multiple.png";
import IconPrimaryName from "../../../../assets/icon-primaryname.png";


export const articles = [
  {
    icon: {IconPrimaryName},
    title: (
      <Translate description="Landing Page Card Title">
        Setting a Primary Name
      </Translate>
    ),
    description: (
      <Translate description="Landing Page Card Subtitle">
        Learn to set your primary name
      </Translate>
    ),
    url: "docs/getting-started/Community",
    // url: "/docs/getting-started/Using%20Your%20ENS%20Name",
  },
  {
    icon: {IconMultiple},
    title: (
      <Translate description="Landing Page Card Title">
       Adding Crypto Addresses
      </Translate>
    ),
    description: (
      <Translate description="Landing Page Card Subtitle">
        Add other cryptocurrency addresses
      </Translate>
    ),
    url: "docs/getting-started/Registering%20Names",
  },
  {
    icon: "../../../../assets/icon-primaryname.svg",
    title: (
      <Translate description="Landing Page Card Title">
        Setting your Profile Avatar
      </Translate>
    ),
    description: (
      <Translate description="Landing Page Card Subtitle">
       Set an avatar for you name.
      </Translate>
    ),
    url: "docs/getting-started/Setting%20Avatar",
  },
];
