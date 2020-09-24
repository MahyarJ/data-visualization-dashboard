import React from 'react';
import './App.sass';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import GrowthViewer from './components/GrowthViewer';
import data from './datasets/dataset1.json';

function App() {
  return (
    <div className="container">
      <section className="wideContainer">
        <h6 style={{ textAlign: 'left' }}>Customer Base</h6>
      </section>
      <section className="wideContainer">
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
            <Line
              type="linear"
              dataKey="new_customers"
              stroke="#0060a9"
              strokeWidth={2}
            />

            <Line
              type="linear"
              dataKey="returning_customers"
              stroke="#009400"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </section>
      <GrowthViewer title="New customers" growth={15.0} />
      <GrowthViewer title="Returning customers" growth={-24.0} />
      <section className="narrowContainer">
        <h6>Re-order percentage</h6>
      </section>
      <section className="narrowContainer">
        <h6>Wolt rating</h6>
      </section>
    </div>
  );
}

export default App;
