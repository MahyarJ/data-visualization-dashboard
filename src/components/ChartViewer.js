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
import Checkbox from './Checkbox';
import Loading from './Loading';
import { uniq } from 'lodash';

const ChartViewer = ({ data, dataSets = [], title, loading = false }) => {
  const [visibles, setVisibles] = useState(dataSets.map((set) => set.id));

  const handleSelectVisibles = (id) => {
    if (visibles.includes(id)) {
      setVisibles(visibles.filter((set) => set !== id));
    } else {
      setVisibles(uniq(visibles.concat(id)));
    }
  };

  return (
    <section data-testid="chartContainer" className={styles.container}>
      <h6>{title}</h6>

      <ResponsiveContainer height={300} width="100%">
        {loading ? (
          <Loading />
        ) : (
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
            <XAxis dataKey="label" />
            <YAxis axisLine={false} />
            <Tooltip />
            {dataSets
              .filter((set) => visibles.includes(set.id))
              .map((set, index) => {
                return (
                  <Line
                    key={`line-${set.id}`}
                    id={`line-${index}`}
                    type="linear"
                    dataKey={set.id}
                    stroke={set.color}
                    strokeWidth={2}
                  />
                );
              })}
          </LineChart>
        )}
      </ResponsiveContainer>
      <div data-testid="checkboxContainer" className={styles.checkboxContainer}>
        {dataSets.map((set, index) => {
          return (
            <Checkbox
              key={`checkbox-${set.id}`}
              dataTestid={`checkbox-${index}`}
              label={set.title}
              color={set.color}
              isChecked={visibles.includes(set.id)}
              onSelect={() => handleSelectVisibles(set.id)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ChartViewer;
