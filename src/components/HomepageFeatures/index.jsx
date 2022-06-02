import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'User Documentation',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: <>Learn about how to use your Web3 Username.</>,
  },
  {
    title: 'DAO Governance',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The ENS DAO governs the revenue generated from all ENS Name sales. Read
        about the Governance processes that our DAO uses.
      </>
    ),
  },
  {
    title: 'Develop with ENS',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Integrating ENS Names into your dApp is made easy with simple technical
        documentation allowing any developer to integrate Web3 names.
      </>
    ),
  },
];

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" />
      </div>
    </section>
  );
}
