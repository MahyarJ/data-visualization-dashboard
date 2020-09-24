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
      <div className={styles.chartContainer}>
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
            {percentageValue}
            {showPercent ? '%' : ''}
          </h1>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </section>
  );
};

export default PercentageViewer;
