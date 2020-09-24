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
import PercentageViewer from './components/PercentageViewer';
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
      <PercentageViewer
        title="Re-order percentage"
        baseTitle="Re-order"
        baseValue={144}
        percentageTitle="Re-order percentage"
        percentageValue="+75.00%"
        description="The re-order percentage shows you the percentage of your current orders by
        customers that have ordered before."
      />
      <PercentageViewer
        title="Wolt rating"
        baseTitle="Reviews"
        baseValue={31}
        percentageTitle="Rating"
        percentageValue="4.77"
        description="Wolt rating shows you how satisfied your customers are with their order experience."
      />
    </div>
  );
}

export default App;
