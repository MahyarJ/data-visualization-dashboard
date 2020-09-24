import React from 'react';
import styles from './GrowthViewer.module.sass';
import classNames from 'classnames/bind';

const GrowthViewer = ({ title, growth }) => {
  const cx = classNames.bind(styles);
  const growthStyles = cx({
    withSmallLineDivider: true,
    green: growth > 0,
    red: growth <= 0,
  });

  return (
    <section className={styles.container}>
      <h6>{title}</h6>
      <p>Jul 26, 2019 - Aug 22, 2019</p>
      <h1>47</h1>
      <p>Jul 26, 2019 - Aug 22, 2019</p>
      <h3>41</h3>
      <div className={growthStyles}>
        <h6>Growth</h6>
        <h1>{growth.toFixed(2)}%</h1>
      </div>
      <div className={styles.withLongLineDivider}>
        <h6>Basket size</h6>
        <h1>18,02€</h1>
      </div>
    </section>
  );
};

export default GrowthViewer;
