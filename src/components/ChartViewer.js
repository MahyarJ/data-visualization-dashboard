import React, { useState } from 'react';
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
import { uniq } from 'lodash';

const dataSets = [
  {
    id: 'new_customers',
    title: 'New customers',
    color: '#0060a9',
  },
  {
    id: 'returning_customers',
    title: 'Returning customers',
    color: '#009400',
  },
];

const ChartViewer = ({ data }) => {
  const [visibles, setVisibles] = useState(dataSets.map((set) => set.id));

  const handleSelectVisibles = (id) => {
    if (visibles.includes(id)) {
      setVisibles(visibles.filter((set) => set !== id));
    } else {
      setVisibles(uniq(visibles.concat(id)));
    }
  };

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
          {dataSets
            .filter((set) => visibles.includes(set.id))
            .map((set) => {
              return (
                <Line type="linear" dataKey={set.id} stroke={set.color} strokeWidth={2} />
              );
            })}
        </LineChart>
      </ResponsiveContainer>
      <div className={styles.checkboxContainer}>
        {dataSets.map((set) => {
          return (
            <div
              className={styles.checkbox}
              style={{
                backgroundColor: visibles.includes(set.id) ? set.color : 'transparent',
                color: visibles.includes(set.id) ? 'white' : set.color,
                borderColor: set.color,
              }}
              onClick={() => handleSelectVisibles(set.id)}
            >
              {set.title}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ChartViewer;
