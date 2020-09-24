import React from 'react';
import '../App.sass';
import './PercentageViewer.sass';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Rated', value: 13 },
  { name: 'NotRated', value: 13 - 10 },
];
const COLORS = ['#00b600', '#b8ffca'];

const PercentageViewer = ({
  title,
  baseTitle,
  baseValue,
  percentageTitle,
  percentageValue,
  description,
}) => {
  return (
    <section className="narrowContainer">
      <h6>{title}</h6>
      <div className="base">
        <p>{baseTitle}</p>
        <p style={{ color: 'black' }}>{baseValue}</p>
      </div>
      <div className="chartContainer">
        <ResponsiveContainer height={200} width="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={80}
              paddingAngle={1}
              startAngle={-270}
              endAngle={-270 - 360}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="label">
          <p>{percentageTitle}</p>
          <h1>{percentageValue}</h1>
        </div>
      </div>
      <p className="description">{description}</p>
    </section>
  );
};

export default PercentageViewer;
