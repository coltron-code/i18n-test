// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ENS Learn Docs",
  tagline: "Learn about your Web3 Username",
  url: "https://learn.ens.domains",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  favicon: "./img/favicon.ico",
  /* scripts: [
    {
      src: "https://plausible.io/js/script.js",
      defer: true,
      "data-domain": "yourdomain.com",
    },
  ],
*/
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ens-dao", // Usually your GitHub org/user name.
  projectName: "i18n-test", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    localeConfigs: {
      en: {
        htmlLang: "en-GB",
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      fa: {
        direction: "rtl",
      },
    },
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        /* docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        }, */
       /* blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://www.github.com", 
        },*/
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Mock Algolia Keys: Insert Real ENS Credentials once approved by Algolia Docsearch
      algolia: {
        appId: "R2IYF7ETH7",
        apiKey: "599cec31baffa4868cae4e79f180729b",
        indexName: "docsearch",
      },
      announcementBar: {
        id: 'under construction',
        content:
          'These docs are under construction.',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "Learn Docs",
        logo: {
          alt: "My Site Logo",
          src: "/./img/ensLogov2.svg",
          target: '_self',
          href: "/index.html",
        },
        items: [
          {
            href: "https://docs.ens.domains/v/governance/",
            position: "right",
            label: "Governance Docs",
          },
          {
            href: "https://docs.ens.domains/",
            position: "right",
            label: "Developer Docs",
          },
          {
            type: "localeDropdown",
            position: "left",
          },
        ],
      },

      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
    }),
  plugins: [],
};

module.exports = config;
