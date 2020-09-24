import React from 'react';
import '../App.sass';
import './GrowthViewer.sass';

const GrowthViewer = ({ title, growth }) => {
  const growthStatus = growth > 0 ? 'green' : 'red';
  const growthClassName = `withSmallLineDivider ${growthStatus}`;
  return (
    <section className="narrowContainer">
      <h6>{title}</h6>
      <p>Jul 26, 2019 - Aug 22, 2019</p>
      <h1>47</h1>
      <p>Jul 26, 2019 - Aug 22, 2019</p>
      <h3>41</h3>
      <div className={growthClassName}>
        <h6>Growth</h6>
        <h1>{growth.toFixed(2)}%</h1>
      </div>
      <div className="withLongLineDivider">
        <h6>Basket size</h6>
        <h1>18,02€</h1>
      </div>
    </section>
  );
};

export default GrowthViewer;
