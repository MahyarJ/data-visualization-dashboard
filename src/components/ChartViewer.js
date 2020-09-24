import React from 'react';
import styles from './ChartViewer.module.sass';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const ChartViewer = ({ data }) => {
  return (
    <section className={styles.container}>
      <h6>New vs. returning customers</h6>
      <ResponsiveContainer height={300} width="100%">
        <LineChart
          data={data}
          margin={{
            top: 30,
            right: 20,
            left: -30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis axisLine={false} />
          <Tooltip />
          <Line type="linear" dataKey="new_customers" stroke="#0060a9" strokeWidth={2} />

          <Line
            type="linear"
            dataKey="returning_customers"
            stroke="#009400"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default ChartViewer;
