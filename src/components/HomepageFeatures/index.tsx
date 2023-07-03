import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_website_setup.svg').default,
    description: (
      <>
          Engineered with simplicity in mind, Solun delivers an unparalleled, effortless experience right at your fingertips
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_business_chat.svg').default,
    description: (
      <>
          Let's focus on what truly matters: delivering modern solutions and prioritizing our users' needs above all else.
      </>
    ),
  },
  {
    title: 'Secure',
    Svg: require('@site/static/img/undraw_secure_server.svg').default,
    description: (
      <>
          We are committed to ensuring security and privacy, providing a safe and private environment that you can trust is our top priority.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
