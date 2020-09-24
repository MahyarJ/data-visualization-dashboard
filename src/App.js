import React, { useState, useEffect } from 'react';
import styles from './App.module.sass';
import PeriodPicker from './components/PeriodPicker';
import ChartViewer from './components/ChartViewer';
import GrowthViewer from './components/GrowthViewer';
import PercentageViewer from './components/PercentageViewer';

const filters = ['By day', 'By week'];

const App = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    fetch(filter === 0 ? '/datasets/ds1.json' : '/datasets/ds4.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [filter]);

  return (
    <div className={styles.container}>
      <PeriodPicker
        title="Customer Base"
        filters={filters}
        selected={filter}
        onSelect={setFilter}
      />
      <ChartViewer data={data} />
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
};

export default App;
