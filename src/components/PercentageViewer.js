import React from 'react';
import styles from './PercentageViewer.module.sass';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#00b600', '#b8ffca'];

const PercentageViewer = ({
  title,
  baseTitle,
  baseValue,
  percentageTitle,
  percentageValue,
  max,
  showSign,
  showPercent,
  description,
}) => {
  const data = [
    { name: 'on', value: percentageValue },
    { name: 'off', value: max - percentageValue },
  ];

  return (
    <section className={styles.container}>
      <h6>{title}</h6>
      <div className={styles.base}>
        <p>{baseTitle}</p>
        <p style={{ color: 'black' }}>{baseValue}</p>
      </div>
      <ResponsiveContainer height={200} width="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={70}
            outerRadius={80}
            paddingAngle={1}
            startAngle={-270}
            endAngle={-630}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className={styles.label}>
        <p>{percentageTitle}</p>
        <h1>
          {(showSign && percentageValue > 0 && '+') || (percentageValue < 0 && '-')}
          {showPercent
            ? `${Math.round(Math.abs(percentageValue)).toFixed(2)}%`
            : `${Math.abs(percentageValue).toFixed(2)}`}
        </h1>
      </div>
      <p className={styles.description}>{description}</p>
    </section>
  );
};

export default PercentageViewer;
