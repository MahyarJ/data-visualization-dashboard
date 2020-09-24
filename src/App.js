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
import data from './datasets/dataset1.json';

function App() {
  return (
    <div className="container">
      <section className="wideContainer">
        <h6>Customer Base</h6>
      </section>
      <section className="wideContainer">
        <h6>New vs. returning customers</h6>
        <ResponsiveContainer height={300} width="100%">
          <LineChart
            data={data}
            margin={{
              top: 30,
              right: 30,
              left: -20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis axisLine={false} />
            <Tooltip />
            <Line type="linear" dataKey="new_customers" stroke="#0060a9" />
            <Line type="linear" dataKey="returning_customers" stroke="#009400" />
          </LineChart>
        </ResponsiveContainer>
      </section>
      <section className="narrowContainer">
        <h6>New customers</h6>
      </section>
      <section className="narrowContainer">
        <h6>Returning customers</h6>
      </section>
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
